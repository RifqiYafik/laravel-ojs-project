// $(document).ready(function () {
//     $("#show-hide-password a").on("click", function (event) {
//         event.preventDefault();
//         if ($("#password").attr("type") == "text") {
//             $("#password").attr("type", "password");
//             $("#show-hide-password a i").addClass("fa-eye-slash");
//             $("#show-hide-password a i").removeClass("fa-eye");
//         } else if ($("#password").attr("type") == "password") {
//             $("#password").attr("type", "text");
//             $("#show-hide-password a i").removeClass("fa-eye-slash");
//             $("#show-hide-password a i").addClass("fa-eye");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Cari elemen dengan id show-hide-password
//     var showHidePassword = document.getElementById("show-hide-password");
//     // Ketika elemen tersebut di klik
//     showHidePassword.addEventListener("click", function (event) {
//         // Berhenti menjalankan default action (link tidak diikuti)
//         if (event.target.tagName === "I") {
//             // Memeriksa apakah yang diklik adalah elemen <i> (ikon mata)
//             event.preventDefault();
//             // Cari elemen password
//             var password = document.getElementById("password");
//             // Cari elemen ikon mata
//             var eyeIcon = showHidePassword.querySelector("i");
//             // Jika tipe password adalah teks
//             if (password.getAttribute("type") === "text") {
//                 // Ubah tipe password menjadi password
//                 password.setAttribute("type", "password");
//                 // Ubah ikon mata menjadi slash
//                 eyeIcon.classList.remove("fa-eye");
//                 eyeIcon.classList.add("fa-eye-slash");
//             } else {
//                 // Jika tipe password adalah password
//                 // Ubah tipe password menjadi teks
//                 password.setAttribute("type", "text");
//                 // Ubah ikon mata menjadi biasa
//                 eyeIcon.classList.remove("fa-eye-slash");
//                 eyeIcon.classList.add("fa-eye");
//             }
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    var showHidePassword = document.getElementById("show-hide-password");
    var showHideConfirmPassword = document.getElementById(
        "show-hide-confpassword"
    );

    function togglePasswordVisibility(passwordInput, eyeIcon) {
        if (passwordInput.getAttribute("type") === "text") {
            passwordInput.setAttribute("type", "password");
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            passwordInput.setAttribute("type", "text");
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
    }

    showHidePassword.addEventListener("click", function (event) {
        if (event.target.tagName === "I") {
            event.preventDefault();
            togglePasswordVisibility(
                document.getElementById("password"),
                this.querySelector("i")
            );
        }
    });

    showHideConfirmPassword.addEventListener("click", function (event) {
        if (event.target.tagName === "I") {
            event.preventDefault();
            togglePasswordVisibility(
                document.getElementById("password2"),
                this.querySelector("i")
            );
        }
    });
});

("use strict");
