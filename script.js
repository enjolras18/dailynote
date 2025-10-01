document.addEventListener('DOMContentLoaded', () => {
    // === DAFTAR LENGKAP 1000+ KODE AKTIVASI ===
    const validActivationCodes = new Set([
        'QDP1', '17BL', 'LNU7', 'SSHZ', 'FJVU', '4WI5', 'N2EB', 'M0J1', 'S5RV', 'Y35V', '9J6K', '68GJ', 'CTSD', 'HAJS', '0NUS', 'PI52', 'PDE3', 'FQOQ', 'ON40', 'KQER', 'JQVX', 'V06A', 'KM33', '26C0', 'UPSQ', 'DM42', '7WS8', 'WW4G', '71KK', '4LYE', 'MFNK', '97XI', 'W5T5', 'ZANZ', 'SOBC', 'O5WI', 'MKV1', 'DBPB', 'ZG8P', 'C81Y', 'WKF5', 'U4QF', 'HO1U', 'WSMG', '89NH', '3TVH', 'Y0TA', '6JQY', 'BSVY', 'FX38', 'HHHN', 'QRTI', '9QQH', '1ZYP', 'HVBU', 'ODTP', 'MD89', 'EHQZ', 'JI0C', 'I1W8', '5FQC', 'OT2P', 'X82B', 'FSJH', '8O34', '4CLV', 'TQ6Q', 'IX6J', 'N35E', 'RI90', '9R37', 'SIWW', 'XFG7', 'XYSX', 'CDSN', 'ZAHY', 'C7UC', 'UTWC', '0NUC', 'MRKB', 'FAH3', 'UTO8', '4SUN', '27V9', '8296', 'N75H', 'HOPB', 'PCFG', 'YMT3', 'KOVJ', 'NAA4', 'NYNW', 'PKE0', '3CB5', 'OJ4W', 'R13W', 'FGFO', 'XYO3', '0BEH', 'SDCM', '47JM', '0J5L', 'Y9TB', 'K70E', '823H', 'GQ2T', 'FUQA', 'SDNB', '9PK4', '9M1F', '1CC4', 'X6BP', 'FNLO', 'VNSA', '9FSH', '17LT', 'TDK1', '8X57', 'DKK6', 'D704', 'KSHN', 'AC3U', 'HYJI', 'REV0', 'ORQM', 'EXS6', '1E9L', '2VTL', 'P93G', 'A39J', 'Y3HW', 'XMGR', 'FUV5', 'C37F', 'XGC7', 'Q9OX', 'MGYS', '8DVW', 'NKNT', '1AN1', 'NTLY', 'GO5L', 'DDJW', 'OOTF', 'CF69', '9J8Z', 'SPJY', 'O5DI', '8WYS', 'EZ3W', 'ZG0W', 'PHQY', 'CIQ9', 'JJNV', 'CKAW', 'YUN8', '7VNS', 'U23C', 'EQTN', 'JH4G', '09IC', 'WWRS', 'UV9L', 'QOW6', 'A5HN', 'UUQL', 'XS7I', 'SM5G', '0NS3', '260U', 'NOCB', '4X61', '2A2L', 'LC8T', 'GWBG', 'TBG6', 'BQS1', 'LVMZ', '4IHO', 'KJYA', '70CJ', 'N6PW', 'O3IV', 'OEHJ', '6M4O', '85KM', 'GYL3', '37TU', 'QKFV', 'QJU7', 'RFC3', 'IWYY', 'QHN8', 'KV5C', '2UOK', 'V1RR', 'DXEG', 'HTB0', '8CK2', 'N8S4', 'ZUXR', 'USGW', 'Y9JO', 'M9WH', '6U7A', 'D9JP', '9SYG', 'QHB6', 'E62I', '7VDE', '905G', 'YJTR', 'GPZR', 'N5Z0', 'TK5W', 'FE95', 'T8V3', 'F8PL', 'M3G6', 'J1VU', 'DVKT', '2Y6C', 'DKVY', 'ZBJ7', 'E2DD', 'FUKJ', '42TG', 'RM0C', 'HR5S', 'L2QJ', 'I4NX', 'RNUO', 'CSPB', 'RQYP', 'VU3F', 'H6WN', 'XJKB', 'RMH7', '8ZHK', 'RU11', 'F6KV', '857H', 'MT1A', 'F32Y', 'JFH5', 'KLGV', 'F6JN', 'HM7A', '4CPV', 'H7H6', 'EKMS', '6RK3', 'ZV7X', 'JN84', 'H7AT', '472P', 'W5D0', '0FMK', 'FOGH', '3C3E', 'LIM2', 'C1NR', 'X9UF', '04K1', 'XHW2', 'WV80', '68MA', 'WE6L', 'BYEI', 'NU4F', 'YWOW', 'M3TZ', 'CMU1', 'KJES', '7JZP', 'S98I', 'PA85', 'MI6L', 'G5OF', 'QCIP', 'WVLB', '79GY', '2D6L', 'CDEJ', 'T2ZN', 'WUPB', 'UL8B', 'RDOB', 'LPGC', '38K7', 'OFZJ', 'SU6O', 'D7E4', 'I3KG', '2XKA', 'J1XB', 'QSB2', 'JN6V', 'SH3L', '7YTA', '70J0', '6UR4', 'M3MY', 'DZ8K', 'GQME', '2ZFJ', 'E12F', 'Z14P', 'ADE5', '7KBA', '86ZM', 'K7H3', 'PQSY', '3K1H', 'LC7G', 'G092', '2LTZ', 'EOBQ', 'Z6ZQ', 'LPEX', '23S4', 'EN2E', '40OX', 'ELKJ', 'AKWG', 'JRGU', 'V5VR', 'QOUY', 'DP2K', 'RBTB', 'IUH2', '07Z0', '7O7Z', 'KJKC', 'V4VG', '6ZC3', 'VLET', 'FONS', 'AUAM', 'SSZG', 'MSG7', 'S4SW', 'YN8R', '5RTM', 'O4HK', '5TL6', 'ACXX', '2926', '8L5X', 'BRVH', 'K6X5', 'ZOGX', 'GNHQ', '7ND3', 'ME6W', 'WSO8', 'WQ56', 'PQ4L', '7O07', '3RES', 'EAOC', '8M2Z', 'IWJP', 'N0LL', 'Q7RG', 'HWHH', '2VEM', '10PG', 'ERXL', 'ZFVS', 'KCQL', 'YD5H', '9YHE', 'MOA5', 'R42E', '1Y2T', 'TJDV', '6LHW', '0L7V', '68OT', 'U2F3', 'X68R', 'ZLD9', 'X442', 'HHZJ', 'AN3L', 'FA3T', 'NEGR', 'FUKI', 'J3UP', 'GVP7', 'EGYS', 'YCVS', 'WZ7L', '0GHU', 'GYS5', 'QGCH', '1NB2', '66T8', 'GLR1', '7JWH', 'GTLI', 'HQ8I', 'EQ82', '8YES', 'JK9X', '37E6', 'YXUV', 'ENCA', 'FEFB', 'DFSJ', 'B4HL', 'A7FL', 'LNJ1', 'MVBN', 'AF25', 'OKHE', 'EZB0', 'BKF7', 'FKZ6', '8ST5', 'KI4S', 'IQ21', '0MQI', 'IRZS', 'X7ZS', '4XUV', 'YJ87', 'CDMG', 'BAD3', 'K05O', 'X7BI', 'VR15', '54HG', 'W4V7', '9FKZ', 'IEPN', 'PJCM', '9LKV', 'A77G', 'IL23', 'GTUU', 'WEGI', 'UWU0', 'XEHW', '092M', 'OOYR', 'H2LL', '24Y1', '852P', 'XZ07', 'OCDS', 'RI32', '39A5', '8JM8', 'Y5QF', 'H58Y', 'GJ8R', 'W17Q', '6OO0', '44I4', 'DBA7', 'UQV3', '35JZ', 'KMWQ', 'R3I9', 'E9CU', 'KZ95', 'PT59', 'BXKC', '34VC', '6LPA', '9GV6', 'Y3BQ', 'VFHM', '29OF', '3OA4', 'KLA5', '8JN3', 'ATFE', 'L4EF', 'IBXQ', '9TKB', '61JI', '1JZX', '5T5P', 'UXR0', '2HIU', 'CES5', 'UDUT', 'PSDJ', 'DQDT', 'Y2W6', '8OY8', 'TV9R', 'TEZ2', 'EOUX', 'R9DD', 'FD4T', '5X6R', 'TM3Y', 'OJPV', 'WCRK', 'E03L', 'KZOJ', 'DGIX', 'LOPQ', 'MNFC', 'ERDR', 'Q3EI', 'DO7Z', 'UP7Y', '2XE6', '4J17', 'P79A', 'I19L', 'ETY5', '7LPS', '8SPK', '20AO', 'OBNP', '0RTU', 'M5FO', 'ISSZ', 'BAUY', 'VF8U', 'DMGY', '07V5', '3N8Q', 'LO9D', 'TED0', 'WC6R', 'FMMI', 'V8F5', 'HYVQ', 'AYAP', 'BHO9', 'JH3X', 'TWR2', 'ZVAI', 'APU3', 'ZT0S', '9BH0', 'TCH1', 'M063', 'F9YX', 'N73Y', '3YWY', 'P2RK', 'VPC9', '8LBR', 'U6SD', 'QNUP', '0FB6', 'K3T6', 'BA2G', 'POO1', 'MUWV', 'GBYQ', 'E8ST', '7JN5', '642K', 'X4E3', 'HABF', '7HFR', '57RM', '1L87', '90L9', '9OGT', 'T2GO', 'RW3A', 'CUG2', '9QAN', '1ZJ3', '20YE', 'P8JA', 'CUQH', 'ALJ5', 'AKHK', 'UASF', '09B5', '38B7', 'I9P0', '9CEH', 'ROPJ', 'MBI0', 'JYA2', 'IMLB', 'B32X', 'RZW6', '3A6E', 'OYC8', 'R0VF', 'EG0K', 'TABC', 'WXQK', 'IOSM', 'FHYP', 'S5VZ', 'GI78', 'BUN8', 'B2TX', 'M103', '1ZP3', 'GYH6', 'WEYS', 'RICM', '08L8', 'FXEQ', 'TPBA', '3XZM', 'ZZS1', 'M4N2', 'WAE4', 'MU9H', '8S33', 'EUCD', 'Z8II', 'VBZD', 'UNBW', 'SHHI', '3RXY', 'Z43A', 'ZTU2', 'RRN4', 'HPYI', 'YRP0', 'SYLQ', 'JQMX', '7J58', 'A5P1', '8XGL', 'KZ9C', 'S9NA', 'DQ2F', '2KHP', 'FZ0Y', 'QAHY', 'KOVX', 'ZWIH', 'SCOM', 'X9EJ', 'V9KU', 'Z5WX', 'FNTC', 'LLX5', 'POAU', 'NETC', 'YG3O', 'PHGU', 'FLL3', 'FVY6', 'FK5V', '90OV', '9DRY', 'UW80', '7PMF', 'N0E2', 'Y0GJ', 'T3TK', '1RR6', 'LY2U', '42H1', 'LYWR', 'UWQY', 'SI72', 'C0MT', '959Q', 'O2ZF', '89VE', 'KSZH', 'VTWZ', 'XE3O', 'WQ8E', '6YV0', 'K42U', 'M5FL', 'F8RI', 'WEDC', 'P7AP', 'YXRX', '0Z3N', '8XWE', 'UBE5', 'KMAU', 'YZUW', 'TAVX', 'IVT8', 'JGSS', 'MRDS', 'K0DH', '625B', 'X5CK', 'EG20', 'CT0W', 'J96E', 'F4BY', '4FWC', '8505', 'QKMU', 'GICQ', 'EXYH', 'PKER', 'SWS6', 'MFNR', 'GKNI', 'KUVI', '67UW', 'UPXH', '5BPV', '977R', 'THW2', '97G4', 'S2ZT', '0YA6', '2H9A', 'C7KG', '0ACY', '64YN', 'SDA9', '97XS', 'T15U', '0A4C', 'SMDQ', 'Y98Q', '17M5', 'S4T2', '1N8Z', 'ZCZV', 'FT9P', 'IO9W', '9UFS', 'BEZQ', 'XD0D', 'PN1F', '2MQ3', 'AFYJ', 'QYDL', '487I', 'ES7E', 'XZKS', 'QOYH', 'I3X3', '83ZG', 'OAR3', '2TSA', 'S81S', 'C3WJ', 'X8O9', '85XP', '6BVY', '0YQW', 'J14E', 'FDNW', 'MCXK', 'K54A', 'EU04', 'U9XX', 'S9QO', 'L8FK', 'FA38', '003Y', 'TR3P', 'QA3D', '9KN7', 'M6FO', 'GFI9', 'GCZR', 'O9I8', 'BPPE', 'T3AA', 'E72Q', '1J8D', 'NNBT', 'RK8G', 'H6GF', 'JF44', 'ECJ3', '1GD8', 'WFX8', '14FS', '3YQ2', 'DF3Q', 'ZR6I', '82O0', 'K8GI', 'VUIG', 'B1K0', 'BJ8T', 'SGJ3', 'G340', '7BO2', '68U1', '2OEG', 'XFQ1', 'M3LP', 'A8MV', 'XXU2', 'Y1U6', 'AKO6', '6EQ9', 'GEM5', 'IV7E', 'F45P', 'I2JL', '67WZ', 'NS1V', 'OXPR', '61NV', 'P4A1', 'IDBW', '0F3R', 'ZR4A', 'ZB8Y', '5J7U', 'XQC3', 'BNL0', 'JPUU', 'ISO5', 'ESH4', 'OT0B', 'TJB4', '9HPF', 'YA9W', '5ML5', 'MM4J', 'H4M9', 'G2MZ', '46MQ', 'T6ET', 'Q4WW', 'JZJM', '5YHZ', 'XZ54', '0O16', 'R5VS', 'LP7M', 'R37O', 'EF36', 'K3LD', 'OP4J', '3ZHK', 'YXWW', '653Y', 'MJ1K', 'U32A', 'G6PI', '20AB', '6ZFC', 'J2OE', '29OP', 'NORW', 'ZDUT', 'IX0J', 'AL7D', 'AGA5', 'E2KC', 'LRAX', 'FWBK', 'R3EU', 'FVRI', '5I9G', 'J6FG', '4UO9', '4H5Q', 'QZJL', 'TLHT', 'X6NX', '9HZF', 'W3VD', 'EKEN', 'IRBN', '0V2R', 'F3KH', 'ZOY7', 'ZYLK', 'R8K0', '6VJH', '2X1H', '31R5', 'LRSL', 'JTVO', 'APSR', 'PU6D', 'LS91', 'UHQB', '75LA', 'BU5A', '0WAQ', '4APU', 'KEWO', 'CMYT', 'MTRD', 'Y58P', 'D5EN', '3GW5', '6MRR', 'LA9N', 'B10K', 'VYJ3', '3KOY', 'IJJF', 'T4T7', 'SX2J', 'S3R3', 'RRYH', 'PRD1', '5XDF', 'OXA3', '027Q', '1R8U', 'JRD0', '2XOL', '0J7M', 'ZHF6', '0ONB', 'US5T', 'AHOD', 'F19R', 'UTCX', 'KN9D', 'LSGN', '5RT2', '1O9I', 'IEDG', '12LR', '75MP', 'NTXZ', 'J84S', 'HHH5', 'FFIO', 'D25S', 'ZN3P', '5XRY', 'FJ98', '0UY7', 'HRTP', 'LNQ9', 'CXII', 'K18C', 'OFO2', '2ZK1', 'LY1T', 'ZFU5', 'MTY3', 'AYEA', '8RC2', '0T79', 'F15U', 'PVCR', 'I5KB', 'BI5X', 'JSGM', 'MBDG', 'JTA3', '1OHM', 'GYIA', 'S1HN', 'X25U', 'YORI', 'PDLX', '6ZJ5', '9J2X', 'X2QU', 'HMKF', 'BCEL', 'IW63', '09E7', 'E6AH', 'WO2X', 'QPUD', 'B3O3', 'BO35', 'MUNZ', 'TO2Y', '41GP', '4LA9', '7NGL', 'SODE', 'KI93', 'NDCJ', '7T6R', 'MEUP', 'NUVV', 'O9V4', 'QR6L', 'JQ5Q', 'SWQS', 'ZA9U', '3H65', 'UG1H', 'KYG8', 'L8JX', 'JC74', '0HPB', 'ACXV', 'AIX0', 'SCW0', 'M6L3', 'M3BO'
    ]);

    const defaultSchedules = {
        cutting: { '0': ['Latihan Beban (Dada & Trisep)', 'Bench Press, Incline Dumbbell Press, Dips, Tricep Pushdown 3-4 set 8-12 repetisi'], '1': ['Latihan Beban & Kardio (Punggung & Bisep)', 'Pull-ups / Lat Pulldown, Barbell Rows, Dumbbell Curls, Hammer Curls + 20-30 menit kardio'], '2': ['Latihan Beban (Kaki & Bahu)', 'Squats, Leg Press, Lunges, Overhead Press, Lateral Raises'], '3': ['Istirahat Aktif', 'Jalan cepat atau yoga ringan 30-45 menit'], '4': ['Latihan Beban Full Body', 'Pilih 1 gerakan dari setiap kelompok otot, repetisi lebih tinggi 12-15'], '5': ['Kardio Intensitas Tinggi (HIIT)', 'Sprint 30 detik, istirahat 1 menit, ulangi 8-10 kali'], '6': ['Istirahat Penuh'] },
        sehat: { '0': ['Latihan Beban Seluruh Tubuh A', 'Goblet Squats, Push-ups, Dumbbell Rows, Overhead Press, Plank 3 set 10-15 repetisi'], '1': ['Istirahat / Aktivitas Ringan', 'Jalan santai atau peregangan ringan'], '2': ['Kardio Pilihan', 'Lari, berenang, bersepeda, atau zumba 30-45 menit'], '3': ['Istirahat / Aktivitas Ringan', 'Jalan santai, stretching, yoga ringan'], '4': ['Latihan Beban Seluruh Tubuh B', 'Deadlifts, Pull-ups / Australian Pull-ups, Lunges, Arnold Press, Leg Raises 3 set 10-15 repetisi'], '5': ['Aktif Rekreasional', 'Yoga, hiking, menari, atau olahraga permainan'], '6': ['Istirahat'] }
    };

    const authContainer = document.getElementById('auth-container');
    const appContainer = document.getElementById('app-container');
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');

    let currentUser = null;

    const getUsers = () => JSON.parse(localStorage.getItem('fitnfun_users')) || {};
    const saveUsers = (users) => localStorage.setItem('fitnfun_users', JSON.stringify(users));
    const getUsedCodes = () => JSON.parse(localStorage.getItem('fitnfun_usedCodes')) || [];
    const saveUsedCodes = (codes) => localStorage.setItem('fitnfun_usedCodes', JSON.stringify(codes));

    document.getElementById('register-btn').addEventListener('click', () => {
        const username = document.getElementById('register-username').value.trim();
        const password = document.getElementById('register-password').value;
        const program = document.getElementById('program-choice').value;
        const activationCode = document.getElementById('register-activation-code').value.trim().toUpperCase();

        if (!username || !password || !activationCode) return alert('Semua kolom harus diisi, termasuk Kode Aktivasi!');
        
        if (!validActivationCodes.has(activationCode)) {
            return alert('Kode Aktivasi tidak valid!');
        }

        const usedCodes = getUsedCodes();
        if (usedCodes.includes(activationCode)) {
            return alert('Kode Aktivasi sudah digunakan!');
        }

        const users = getUsers();
        if (users[username]) return alert('Username sudah digunakan!');

        users[username] = {
            password: password,
            schedule: defaultSchedules[program],
            progress: {},
            startDate: new Date().toISOString()
        };
        saveUsers(users);

        usedCodes.push(activationCode);
        saveUsedCodes(usedCodes);

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
        sessionStorage.setItem('fitnfun_currentUser', username);
        renderApp();
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        currentUser = null;
        sessionStorage.removeItem('fitnfun_currentUser');
        authContainer.classList.remove('hidden');
        appContainer.classList.add('hidden');
    });

    const renderApp = () => {
        authContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');
        document.getElementById('welcome-message').textContent = `Selamat datang, ${currentUser}!`;
        renderTodayTasks();
    };

    const renderTodayTasks = () => {
        const users = getUsers();
        const userData = users[currentUser];

        const startDate = new Date(userData.startDate);
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const currentDayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        document.getElementById('current-day-span').textContent = currentDayIndex + 1;

        const dayOfWeek = (today.getDay() + 6) % 7;
        const tasksToday = userData.schedule[dayOfWeek] || ['Istirahat'];
        const progressToday = userData.progress[currentDayIndex] || {};

        const container = document.getElementById('today-tasks-container');
        container.innerHTML = '';

        tasksToday.forEach(task => {
            const taskID = task.replace(/\s+/g, '-').toLowerCase();
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
                const taskID = task.replace(/\s+/g, '-').toLowerCase();
                const isChecked = e.target.checked;
                
                const currentUsers = getUsers();
                const userProgress = currentUsers[currentUser].progress;
                if (!userProgress[currentDayIndex]) {
                    userProgress[currentDayIndex] = {};
                }
                userProgress[currentDayIndex][taskID] = isChecked;
                saveUsers(currentUsers);
                renderTodayTasks();
            });
        });
    };

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
        renderTodayTasks();
        alert('Rencana berhasil disimpan!');
    });

    document.getElementById('close-modal-btn').addEventListener('click', () => modal.classList.add('hidden'));

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