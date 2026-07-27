const registerForm =
    document.getElementById("registerForm");

const registerMessage =
    document.getElementById("registerMessage");


const usernameInput =
    document.getElementById(
        "registerUsername"
    );


const emailInput =
    document.getElementById(
        "registerEmail"
    );


const passwordInput =
    document.getElementById(
        "registerPassword"
    );


const usernameHint =
    document.getElementById(
        "usernameHint"
    );


const emailHint =
    document.getElementById(
        "emailHint"
    );


const lengthHint =
    document.getElementById(
        "lengthHint"
    );


const uppercaseHint =
    document.getElementById(
        "uppercaseHint"
    );


const numberHint =
    document.getElementById(
        "numberHint"
    );


const specialHint =
    document.getElementById(
        "specialHint"
    );


usernameInput.addEventListener(
    "input",
    function () {

        const username =
            usernameInput.value.trim();


        if (username.length === 0) {

            usernameHint.textContent =
                "";

            return;

        }


        if (username.length < 3) {

            usernameHint.textContent =
                "❌ Минимум 3 символа";

            usernameHint.className =
                "field-hint error";

        } else {

            usernameHint.textContent =
                "✓ Никнейм подходит";

            usernameHint.className =
                "field-hint valid";

        }

    }
);


emailInput.addEventListener(
    "input",
    function () {

        const email =
            emailInput.value.trim();


        if (email.length === 0) {

            emailHint.textContent =
                "";

            return;

        }


        const emailIsValid =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(email);


        if (emailIsValid) {

            emailHint.textContent =
                "✓ Корректный email";

            emailHint.className =
                "field-hint valid";

        } else {

            emailHint.textContent =
                "❌ Введи корректный email";

            emailHint.className =
                "field-hint error";

        }

    }
);


passwordInput.addEventListener(
    "input",
    function () {

        const password =
            passwordInput.value;


        const hasLength =
            password.length >= 8;


        const hasUppercase =
            /[A-ZА-ЯЁ]/.test(
                password
            );


        const hasNumber =
            /[0-9]/.test(
                password
            );


        const hasSpecial =
            /[^A-Za-zА-Яа-яЁё0-9]/
                .test(password);


        updateHint(
            lengthHint,
            hasLength,
            "Минимум 8 символов"
        );


        updateHint(
            uppercaseHint,
            hasUppercase,
            "Заглавная буква"
        );


        updateHint(
            numberHint,
            hasNumber,
            "Хотя бы одна цифра"
        );


        updateHint(
            specialHint,
            hasSpecial,
            "Специальный символ"
        );

    }
);


registerForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const username =
            usernameInput.value.trim();


        const email =
            emailInput.value.trim();


        const password =
            passwordInput.value;


        const emailIsValid =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(email);


        const passwordIsValid =
            password.length >= 8 &&
            /[A-ZА-ЯЁ]/.test(password) &&
            /[0-9]/.test(password) &&
            /[^A-Za-zА-Яа-яЁё0-9]/
                .test(password);


        if (username.length < 3) {

            showMessage(
                "Никнейм должен содержать минимум 3 символа.",
                "error"
            );

            return;

        }


        if (!emailIsValid) {

            showMessage(
                "Введи корректный email.",
                "error"
            );

            return;

        }


        if (!passwordIsValid) {

            showMessage(
                "Пароль не соответствует требованиям.",
                "error"
            );

            return;

        }


        const existingUser =
            JSON.parse(
                localStorage.getItem(
                    "sasaUser"
                )
            );


        if (
            existingUser &&
            existingUser.email === email
        ) {

            showMessage(
                "Аккаунт с таким email уже существует.",
                "error"
            );

            return;

        }


        const user = {

            username: username,

            email: email,

            password: password,

            role: "user",

            createdAt:
                new Date().toISOString()

        };


        localStorage.setItem(
            "sasaUser",
            JSON.stringify(user)
        );


        showMessage(
            "✅ Аккаунт создан! Перенаправляем...",
            "success"
        );


        setTimeout(
            function () {

                window.location.href =
                    "login.html";

            },
            1200
        );

    }
);


function updateHint(
    element,
    isValid,
    text
) {

    if (isValid) {

        element.textContent =
            `✓ ${text}`;

        element.classList.add(
            "valid"
        );

        element.classList.remove(
            "error"
        );

    } else {

        element.textContent =
            `❌ ${text}`;

        element.classList.remove(
            "valid"
        );

        element.classList.add(
            "error"
        );

    }

}


function showMessage(
    message,
    type
) {

    registerMessage.textContent =
        message;


    registerMessage.className =
        `auth-message ${type}`;


    registerMessage.hidden =
        false;

}