document.addEventListener('DOMContentLoaded', () => {
    // === DATA AWAL (Requirement #1) ===
    const defaultSchedules = {
        cutting: {
            '0': ['Latihan Beban (Dada & Trisep)', 'Bench Press, Incline Dumbbell Press, Dips, Tricep Pushdown 3-4 set 8-12 repetisi'],
            '1': ['Latihan Beban & Kardio (Punggung & Bisep)', 'Pull-ups / Lat Pulldown, Barbell Rows, Dumbbell Curls, Hammer Curls + 20-30 menit kardio'],
            '2': ['Latihan Beban (Kaki & Bahu)', 'Squats, Leg Press, Lunges, Overhead Press, Lateral Raises'],
            '3': ['Istirahat Aktif', 'Jalan cepat atau yoga ringan 30-45 menit'],
            '4': ['Latihan Beban Full Body', 'Pilih 1 gerakan dari setiap kelompok otot, repetisi lebih tinggi 12-15'],
            '5': ['Kardio Intensitas Tinggi (HIIT)', 'Sprint 30 detik, istirahat 1 menit, ulangi 8-10 kali'],
            '6': ['Istirahat Penuh']
        },
        sehat: {
            '0': ['Latihan Beban Seluruh Tubuh A', 'Goblet Squats, Push-ups, Dumbbell Rows, Overhead Press, Plank 3 set 10-15 repetisi'],
            '1': ['Istirahat / Aktivitas Ringan', 'Jalan santai atau peregangan ringan'],
            '2': ['Kardio Pilihan', 'Lari, berenang, bersepeda, atau zumba 30-45 menit'],
            '3': ['Istirahat / Aktivitas Ringan', 'Jalan santai, stretching, yoga ringan'],
            '4': ['Latihan Beban Seluruh Tubuh B', 'Deadlifts, Pull-ups / Australian Pull-ups, Lunges, Arnold Press, Leg Raises 3 set 10-15 repetisi'],
            '5': ['Aktif Rekreasional', 'Yoga, hiking, menari, atau olahraga permainan'],
            '6': ['Istirahat']
        }
    };

    // === ELEMEN UI ===
    const authContainer = document.getElementById('auth-container');
    const appContainer = document.getElementById('app-container');
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');

    // === Variabel Status Aplikasi ===
    let currentUser = null; // Menyimpan username yang sedang login
    let selectedDayIndex = 0; // Menyimpan hari yang sedang dilihat (index 0-179)

    // === FUNGSI UTAMA UNTUK MENGAMBIL DAN MENYIMPAN DATA ===
    const getUsers = () => JSON.parse(localStorage.getItem('fitnfun_users')) || {};
    const saveUsers = (users) => localStorage.setItem('fitnfun_users', JSON.stringify(users));

    // === LOGIKA AUTENTIKASI ===
    document.getElementById('register-btn').addEventListener('click', () => {
        const username = document.getElementById('register-username').value.trim();
        const password = document.getElementById('register-password').value;
        const program = document.getElementById('program-choice').value;

        if (!username || !password) return alert('Username dan Password tidak boleh kosong!');

        const users = getUsers();
        if (users[username]) return alert('Username sudah digunakan!');

        users[username] = {
            password: password,
            schedule: defaultSchedules[program],
            progress: {},
            startDate: new Date().toISOString()
        };
        saveUsers(users);
        alert('Akun berhasil dibuat! Silakan masuk.');
        showLoginView();
    });

    document.getElementById('login-btn').addEventListener('click', () => {
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;
        
        const users = getUsers();
        if (!users[username] || users[username].password !== password) {
            return alert('Username atau Password salah!');
        }

        currentUser = username;
        sessionStorage.setItem('fitnfun_currentUser', username); // Simpan sesi login
        renderApp();
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        currentUser = null;
        sessionStorage.removeItem('fitnfun_currentUser');
        authContainer.classList.remove('hidden');
        appContainer.classList.add('hidden');
    });

    // === LOGIKA APLIKASI SETELAH LOGIN ===
    const renderApp = () => {
        authContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');
        document.getElementById('welcome-message').textContent = `Selamat datang, ${currentUser}!`;

        const users = getUsers();
        const userData = users[currentUser];
        const startDate = new Date(userData.startDate);
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        selectedDayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 

        renderTasksForSelectedDay();
    };

    const renderTasksForSelectedDay = () => {
        const users = getUsers();
        const userData = users[currentUser];

        document.getElementById('selected-day-span').textContent = selectedDayIndex + 1;
        
        const startDate = new Date(userData.startDate);
        // Buat tanggal baru berdasarkan hari yang dipilih agar tidak mengubah startDate asli
        const selectedDate = new Date(startDate.getTime());
        selectedDate.setDate(selectedDate.getDate() + selectedDayIndex);

        const dayOfWeek = (selectedDate.getDay() + 6) % 7; // Senin=0, ..., Minggu=6
        
        const tasksToday = userData.schedule[dayOfWeek] || ['Istirahat'];
        const progressToday = userData.progress[selectedDayIndex] || {};

        const container = document.getElementById('today-tasks-container');
        container.innerHTML = '';

        tasksToday.forEach(task => {
            const taskID = task.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
            const isCompleted = progressToday[taskID] || false;

            const taskEl = document.createElement('div');
            taskEl.className = `task-item ${isCompleted ? 'completed' : ''}`;
            taskEl.innerHTML = `
                <input type="checkbox" id="${taskID}" data-task="${task}" ${isCompleted ? 'checked' : ''}>
                <label for="${taskID}">${task}</label>
            `;
            container.appendChild(taskEl);
        });

        container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const task = e.target.dataset.task;
                const taskID = task.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
                const isChecked = e.target.checked;
                
                const currentUsers = getUsers();
                const userProgress = currentUsers[currentUser].progress;
                if (!userProgress[selectedDayIndex]) {
                    userProgress[selectedDayIndex] = {};
                }
                userProgress[selectedDayIndex][taskID] = isChecked;
                saveUsers(currentUsers);
                renderTasksForSelectedDay();
            });
        });
    };

    document.getElementById('prev-day-btn').addEventListener('click', () => {
        if (selectedDayIndex > 0) {
            selectedDayIndex--;
            renderTasksForSelectedDay();
        }
    });

    document.getElementById('next-day-btn').addEventListener('click', () => {
        if (selectedDayIndex < 179) { // Batas program 180 hari (index 0-179)
            selectedDayIndex++;
            renderTasksForSelectedDay();
        }
    });

    // === LOGIKA MODAL JADWAL ===
    const modal = document.getElementById('schedule-modal');
    document.getElementById('edit-schedule-btn').addEventListener('click', () => {
        const users = getUsers();
        const schedule = users[currentUser].schedule;
        const editor = document.getElementById('schedule-editor');
        editor.innerHTML = '';
        const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
        days.forEach((day, index) => {
            const tasks = schedule[index] ? schedule[index].join('\n') : '';
            editor.innerHTML += `
                <label>${day}:</label>
                <textarea id="schedule-day-${index}" rows="3">${tasks}</textarea>
            `;
        });
        modal.classList.remove('hidden');
    });

    document.getElementById('save-schedule-btn').addEventListener('click', () => {
        const users = getUsers();
        const newSchedule = {};
        for (let i = 0; i < 7; i++) {
            const tasks = document.getElementById(`schedule-day-${i}`).value.trim();
            if (tasks) {
                newSchedule[i] = tasks.split('\n').map(t => t.trim()).filter(t => t);
            }
        }
        users[currentUser].schedule = newSchedule;
        saveUsers(users);
        modal.classList.add('hidden');
        renderTasksForSelectedDay();
        alert('Rencana berhasil disimpan!');
    });

    document.getElementById('close-modal-btn').addEventListener('click', () => modal.classList.add('hidden'));

    // === NAVIGASI TAMPILAN & INISIALISASI ===
    const showLoginView = () => { registerView.classList.add('hidden'); loginView.classList.remove('hidden'); };
    const showRegisterView = () => { loginView.classList.add('hidden'); registerView.classList.remove('hidden'); };

    document.getElementById('show-register').addEventListener('click', (e) => { e.preventDefault(); showRegisterView(); });
    document.getElementById('show-login').addEventListener('click', (e) => { e.preventDefault(); showLoginView(); });

    const loggedInUser = sessionStorage.getItem('fitnfun_currentUser');
    if (loggedInUser) {
        currentUser = loggedInUser;
        renderApp();
    }
});