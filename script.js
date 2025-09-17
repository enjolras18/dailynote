document.addEventListener('DOMContentLoaded', () => {

    // DATA RENCANA LATIHAN (sesuai source code awal)
    const workoutPlans = {
        cutting: [
            { day: 'Senin', activity: 'Latihan Beban (Dada & Trisep)', details: 'Bench Press, Incline Dumbbell Press, Dips, Tricep Pushdown 3-4 set 8-12 repetisi' },
            { day: 'Selasa', activity: 'Latihan Beban & Kardio (Punggung & Bisep)', details: 'Pull-ups / Lat Pulldown, Barbell Rows, Dumbbell Curls, Hammer Curls + 20-30 menit kardio' },
            { day: 'Rabu', activity: 'Latihan Beban (Kaki & Bahu)', details: 'Squats, Leg Press, Lunges, Overhead Press, Lateral Raises' },
            { day: 'Kamis', activity: 'Istirahat Aktif', details: 'Jalan cepat atau yoga ringan 30-45 menit' },
            { day: 'Jumat', activity: 'Latihan Beban Full Body', details: 'Pilih 1 gerakan dari setiap kelompok otot, repetisi lebih tinggi 12-15' },
            { day: 'Sabtu', activity: 'Kardio Intensitas Tinggi (HIIT)', details: 'Sprint 30 detik, istirahat 1 menit, ulangi 8-10 kali' },
            { day: 'Minggu', activity: 'Istirahat Penuh', details: 'Pemulihan total' }
        ],
        sehat: [
            { day: 'Senin', activity: 'Latihan Beban Seluruh Tubuh A', details: 'Goblet Squats, Push-ups, Dumbbell Rows, Overhead Press, Plank 3 set 10-15 repetisi' },
            { day: 'Selasa', activity: 'Istirahat / Aktivitas Ringan', details: 'Jalan santai atau peregangan ringan' },
            { day: 'Rabu', activity: 'Kardio Pilihan', details: 'Lari, berenang, bersepeda, atau zumba 30-45 menit' },
            { day: 'Kamis', activity: 'Istirahat / Aktivitas Ringan', details: 'Jalan santai, stretching, yoga ringan' },
            { day: 'Jumat', activity: 'Latihan Beban Seluruh Tubuh B', details: 'Deadlifts, Pull-ups / Australian Pull-ups, Lunges, Arnold Press, Leg Raises 3 set 10-15 repetisi' },
            { day: 'Sabtu', activity: 'Aktif Rekreasional', details: 'Yoga, hiking, menari, atau olahraga permainan' },
            { day: 'Minggu', activity: 'Istirahat', details: 'Pemulihan total' }
        ]
    };

    // Mengambil elemen dari HTML
    const loginContainer = document.getElementById('login-container');
    const appContainer = document.getElementById('app-container');
    const usernameInput = document.getElementById('username-input');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const programChoice = document.getElementById('program-choice');
    const welcomeMessage = document.getElementById('welcome-message');
    const progressGrid = document.getElementById('progress-grid');
    const weekPlanContainer = document.getElementById('week-plan-container');

    let currentUser = null;
    let userData = null;

    // Fungsi untuk menampilkan aplikasi utama
    const showApp = () => {
        welcomeMessage.textContent = `Hai, ${currentUser}!`;
        renderWeekPlan(userData.routine);
        renderGrid();
        loginContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');
    };

    // Fungsi untuk login / registrasi
    const handleLogin = () => {
        const username = usernameInput.value.trim().toLowerCase();
        if (!username) return alert('Nama tidak boleh kosong!');
        
        currentUser = username;
        const storedData = localStorage.getItem(currentUser);

        if (storedData) { // Jika user sudah ada
            userData = JSON.parse(storedData);
            showApp();
        } else { // Jika user baru
            programChoice.classList.remove('hidden');
            loginBtn.classList.add('hidden');
        }
    };

    // Fungsi untuk memilih program (user baru)
    const selectProgram = (program) => {
        userData = {
            routine: program,
            progress: Array(180).fill(false) // Buat 180 hari progres kosong
        };
        localStorage.setItem(currentUser, JSON.stringify(userData));
        showApp();
    };
    
    // Fungsi untuk menampilkan tabel rencana mingguan
    const renderWeekPlan = (routine) => {
        const plan = workoutPlans[routine];
        let tableHTML = `
            <table>
                <tr>
                    <th>Hari</th>
                    <th>Aktivitas</th>
                    <th>Keterangan</th>
                </tr>
                ${plan.map(day => `
                    <tr>
                        <td>${day.day}</td>
                        <td>${day.activity}</td>
                        <td>${day.details}</td>
                    </tr>
                `).join('')}
            </table>
        `;
        weekPlanContainer.innerHTML = tableHTML;
    };

    // Fungsi untuk menampilkan grid 180 hari
    const renderGrid = () => {
        progressGrid.innerHTML = '';
        for (let i = 0; i < 180; i++) {
            const dayBox = document.createElement('div');
            dayBox.classList.add('day-box');
            dayBox.textContent = i + 1;
            dayBox.dataset.day = i;
            if (userData.progress[i]) {
                dayBox.classList.add('completed');
            }
            dayBox.addEventListener('click', () => toggleDay(i));
            progressGrid.appendChild(dayBox);
        }
    };

    // Fungsi untuk toggle progres harian
    const toggleDay = (dayIndex) => {
        userData.progress[dayIndex] = !userData.progress[dayIndex];
        localStorage.setItem(currentUser, JSON.stringify(userData));
        renderGrid(); // Render ulang untuk update tampilan
    };

    // Fungsi untuk logout
    const handleLogout = () => {
        currentUser = null;
        userData = null;
        appContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
        programChoice.classList.add('hidden');
        loginBtn.classList.remove('hidden');
        usernameInput.value = '';
    };

    // Event Listeners
    loginBtn.addEventListener('click', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);
    document.querySelectorAll('.program-btn').forEach(button => {
        button.addEventListener('click', () => selectProgram(button.dataset.program));
    });
    usernameInput.addEventListener('keypress', (e) => e.key === 'Enter' && handleLogin());
});