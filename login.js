const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document.getElementById(
                "loginEmail"
            ).value.trim();


        const password =
            document.getElementById(
                "loginPassword"
            ).value;


        const savedUser =
            JSON.parse(
                localStorage.getItem(
                    "sasaUser"
                )
            );


        if (!savedUser) {

            showMessage(
                "Аккаунт не найден. Сначала зарегистрируйся.",
                "error"
            );

            return;

        }


        if (
            savedUser.email !== email ||
            savedUser.password !== password
        ) {

            showMessage(
                "Неверный email или пароль.",
                "error"
            );

            return;

        }


        localStorage.setItem(
            "currentUser",
            JSON.stringify(
                savedUser
            )
        );


        showMessage(
            "✅ Успешный вход! Перенаправляем...",
            "success"
        );


        setTimeout(
            function () {

                window.location.href =
                    "index.html";

            },
            1000
        );

    }
);


function showMessage(
    message,
    type
) {

    loginMessage.textContent =
        message;

    loginMessage.className =
        `auth-message ${type}`;

    loginMessage.hidden =
        false;

}