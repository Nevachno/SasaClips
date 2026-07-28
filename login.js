const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");


loginForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const email =
            document.getElementById(
                "loginEmail"
            ).value.trim();


        const password =
            document.getElementById(
                "loginPassword"
            ).value;


        showMessage(
            "Входим...",
            "success"
        );


        const {
            data,
            error
        } =
            await window.supabaseClient.auth.signInWithPassword({

                email: email,

                password: password

            });


        if (error) {

            showMessage(
                error.message,
                "error"
            );

            return;

        }


        showMessage(
            "✅ Успешный вход!",
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
