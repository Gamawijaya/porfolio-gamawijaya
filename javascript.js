// let isDarkMode = false; // variabel untuk melacak status mode pada website

// function setDarkMode() {
//     if (isDarkMode) {
//         // Matikan dark mode
//         document.body.classList.remove('dark-mode');
//         isDarkMode = false;
//     } else {
//         // Mengaktifkan dark mode
//         document.body.classList.add('dark-mode');
//         isDarkMode = true;
//     }
// }


// document.addEventListener('DOMContentLoaded', function () {
//     // Cari tombol toggle di index (mendukung beberapa selector agar lebih fleksibel)
//     const toggle = document.querySelector('#dark-mode-toggle, .dark-mode-toggle, [data-dark-toggle]');

//     // Mengecek status mode yang disimpan di localStorage
//     let isDarkMode = localStorage.getItem('darkMode') === 'true';

//     // Menerapkan mode yang tersimpan saat halaman pertama kali dimuat
//     document.body.classList.toggle('dark-mode', isDarkMode);

//     // Fungsi mengubah mode dan menyimpan pilihan di localStorage
//     function setDarkMode(forceState) {
//         // jika diberi argumen boolean, paksa state tersebut; jika tidak, toggle
//         if (typeof forceState === 'boolean') {
//             isDarkMode = forceState;
//         } else {
//             isDarkMode = !isDarkMode;
//         }

//         document.body.classList.toggle('dark-mode', isDarkMode);
//         localStorage.setItem('darkMode', String(isDarkMode));

//         // Perbarui atribut tombol (jika ada) untuk aksesibilitas / tampilan
//         if (toggle) {
//             toggle.setAttribute('aria-pressed', String(isDarkMode));
//         }
//     }

//     // Pasang event listener pada tombol (jika ada) sehingga sesuai dengan index.html
//     if (toggle) {
//         // Inisialisasi atribut tombol sesuai state saat ini
//         toggle.setAttribute('aria-pressed', String(isDarkMode));
//         toggle.addEventListener('click', function () {
//             setDarkMode();
//         });
//     }

//     // Ekspor fungsi agar bisa dipanggil dari index.js atau konsol (opsional)
//     window.setDarkMode = setDarkMode;
// });