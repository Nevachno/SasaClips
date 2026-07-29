async function updateAuthUI() {

    const {
        data
    } =
        await window.supabaseClient.auth.getUser();


    const user =
        data.user;


    const loginButtons =
        document.querySelectorAll(
            ".login-button"
        );


    loginButtons.forEach(
        function (button) {


            if (user) {


                const username =
                    user.user_metadata.username ||
                    "user";


                button.textContent =
                    `@${username}`;


                button.href =
                    "profile.html";


            } else {


                button.textContent =
                    "Войти";


                button.href =
                    "login.html";

            }

        }
    );

}


updateAuthUI();
