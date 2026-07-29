console.log("upload.js загружен");


// =========================
// ПРОВЕРКА АВТОРИЗАЦИИ
// =========================

async function checkAuth() {


    const {
        data,
        error
    } =
    await window.supabaseClient.auth.getUser();



    console.log(
        "UPLOAD USER:",
        data,
        error
    );



    if (error || !data.user) {


        alert(
            "Сначала войди в аккаунт, чтобы загружать клипы."
        );


        window.location.href =
            "login.html";


        return false;

    }


    return true;

}



checkAuth();





// =========================
// ЭЛЕМЕНТЫ ЗАГРУЗКИ
// =========================


const videoFile =
    document.getElementById(
        "videoFile"
    );


const dropZone =
    document.getElementById(
        "dropZone"
    );


const selectedFile =
    document.getElementById(
        "selectedFile"
    );


const fileName =
    document.getElementById(
        "fileName"
    );


const fileDetails =
    document.getElementById(
        "fileDetails"
    );


const removeFile =
    document.getElementById(
        "removeFile"
    );


const previewContainer =
    document.getElementById(
        "previewContainer"
    );


const videoPreview =
    document.getElementById(
        "videoPreview"
    );





// =========================
// ВЫБОР ВИДЕО
// =========================


videoFile.addEventListener(
    "change",
    function () {


        const file =
            videoFile.files[0];



        if (!file) {

            return;

        }



        if (file.type !== "video/mp4") {


            alert(
                "Можно выбрать только MP4"
            );


            videoFile.value =
                "";


            return;

        }




        const videoURL =
            URL.createObjectURL(
                file
            );



        fileName.textContent =
            file.name;



        fileDetails.textContent =
            `${(
                file.size / 1024 / 1024
            ).toFixed(2)} MB`;



        selectedFile.hidden =
            false;



        dropZone.style.display =
            "none";



        videoPreview.src =
            videoURL;



        previewContainer.hidden =
            false;


    }
);






// =========================
// УДАЛЕНИЕ ФАЙЛА
// =========================


removeFile.addEventListener(
    "click",
    function () {



        videoFile.value =
            "";



        selectedFile.hidden =
            true;



        previewContainer.hidden =
            true;



        videoPreview.src =
            "";



        dropZone.style.display =
            "flex";



    }
);
