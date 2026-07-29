// =========================
// ПРОВЕРКА АВТОРИЗАЦИИ
// =========================

async function loadProfile() {

    const {
        data,
        error
    } =
        await window.supabaseClient.auth.getUser();


    if (error || !data.user) {

        window.location.replace(
            "login.html"
        );

        return;

    }


    const user =
        data.user;


    // =========================
    // ДАННЫЕ ПРОФИЛЯ
    // =========================

    document.getElementById(
        "profileUsername"
    ).textContent =
        "@" +
        (
            user.user_metadata.username ||
            "user"
        );


    document.getElementById(
        "profileEmail"
    ).textContent =
        user.email;


    document.getElementById(
        "profileAvatar"
    ).textContent =
        (
            user.user_metadata.username ||
            "U"
        )
        .charAt(0)
        .toUpperCase();


    document.getElementById(
        "profileDate"
    ).textContent =
        "На SasaClips с " +
        new Date(
            user.created_at
        ).toLocaleDateString(
            "ru-RU"
        );


    // =========================
    // ВЫХОД
    // =========================

    document
        .getElementById(
            "headerLogoutButton"
        )
        .addEventListener(
            "click",
            async function () {

                await window.supabaseClient.auth.signOut();

                window.location.replace(
                    "login.html"
                );

            }
        );

}


loadProfile();
