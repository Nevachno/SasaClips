const currentUser =
    JSON.parse(
        localStorage.getItem("currentUser")
    );


if (!currentUser) {

    alert(
        "Сначала войди в аккаунт, чтобы загружать клипы."
    );

    window.location.href =
        "login.html";

}
const videoFile = document.getElementById("videoFile");

const dropZone = document.getElementById("dropZone");

const selectedFile = document.getElementById("selectedFile");

const fileName = document.getElementById("fileName");

const fileDetails = document.getElementById("fileDetails");

const removeFile = document.getElementById("removeFile");

const previewContainer =
    document.getElementById("previewContainer");

const videoPreview =
    document.getElementById("videoPreview");


videoFile.addEventListener("change", function () {

    const file = videoFile.files[0];

    if (!file) {
        return;
    }

    if (file.type !== "video/mp4") {

        alert("Можно выбрать только MP4");

        return;

    }

    const videoURL =
        URL.createObjectURL(file);


    fileName.textContent =
        file.name;


    fileDetails.textContent =
        `${(file.size / 1024 / 1024).toFixed(2)} MB`;


    selectedFile.hidden =
        false;


    dropZone.style.display =
        "none";


    videoPreview.src =
        videoURL;


    previewContainer.hidden =
        false;

});


removeFile.addEventListener("click", function () {

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

});