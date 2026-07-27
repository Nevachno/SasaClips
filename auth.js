const loggedInUser =
    JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );


const loginButtons =
    document.querySelectorAll(
        ".login-button"
    );


loginButtons.forEach(
    function (button) {


        if (loggedInUser) {


            button.textContent =
                `@${loggedInUser.username}`;


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