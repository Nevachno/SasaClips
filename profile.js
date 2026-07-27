// =========================
// ПРОВЕРКА АВТОРИЗАЦИИ
// =========================

const currentUser =
    JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );


if (!currentUser) {

    window.location.replace(
        "login.html"
    );

}


// =========================
// ДАННЫЕ ПРОФИЛЯ
// =========================

if (currentUser) {


    const profileUsername =
        document.getElementById(
            "profileUsername"
        );


    const profileEmail =
        document.getElementById(
            "profileEmail"
        );


    const profileAvatar =
        document.getElementById(
            "profileAvatar"
        );


    const profileDate =
        document.getElementById(
            "profileDate"
        );


    profileUsername.textContent =
        `@${currentUser.username}`;


    profileEmail.textContent =
        currentUser.email;


    profileAvatar.textContent =
        currentUser.username
            .charAt(0)
            .toUpperCase();


    if (currentUser.createdAt) {

        const date =
            new Date(
                currentUser.createdAt
            );


        profileDate.textContent =
            `На SasaClips с ${
                date.toLocaleDateString(
                    "ru-RU"
                )
            }`;

    }


    // =========================
    // КНОПКА ВЫХОДА
    // =========================

    const logoutButton =
        document.getElementById(
            "headerLogoutButton"
        );


    logoutButton.addEventListener(
        "click",
        function () {


            // Удаляем аккаунт из текущей сессии
            localStorage.removeItem(
                "currentUser"
            );


            // Переходим на главную
            window.location.replace(
                "index.html"
            );

        }
    );

}