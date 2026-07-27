const clips = [

    {
        id: 1,
        title: "творчество",
        author: "@sasafan",
        likes: 124,
        description: "Самый неожиданный момент со стрима 🔥"
    },

    {
        id: 2,
        title: "ирл зрителей 💀",
        author: "@clippers",
        likes: 892,
        description: "Когда зрители решили устроить настоящий хаос."
    },

    {
        id: 3,
        title: "тик ток",
        author: "@meme_lord",
        likes: 431,
        description: "Этот момент должен был попасть в TikTok 😂"
    },

    {
        id: 4,
        title: "Когда чат слишком активный",
        author: "@viewer",
        likes: 215,
        description: "Чат окончательно потерял контроль."
    },

    {
        id: 5,
        title: "Легендарная реакция",
        author: "@fan_sasa",
        likes: 1200,
        description: "Реакция, которую невозможно забыть."
    },

    {
        id: 6,
        title: "Sasavot не ожидал этого",
        author: "@clipper",
        likes: 567,
        description: "Никто не ожидал такого поворота событий."
    }

];


const urlParams = new URLSearchParams(
    window.location.search
);

const videoId = Number(
    urlParams.get("id")
);

const clip = clips.find(
    video => video.id === videoId
);


if (!clip) {

    document.getElementById("videoTitle").textContent =
        "Видео не найдено";

} else {

    document.getElementById("videoTitle").textContent =
        clip.title;

    document.getElementById("videoAuthor").textContent =
        clip.author;

    document.getElementById("authorName").textContent =
        clip.author;

    document.querySelector(".video-description").textContent =
        clip.description;


    const likeButton =
        document.getElementById("likeButton");

    const likeCount =
        document.getElementById("likeCount");


    const likeStorageKey =
        `liked_video_${clip.id}`;


    const countStorageKey =
        `likes_count_${clip.id}`;


    let liked =
        localStorage.getItem(likeStorageKey) === "true";


    let savedLikes =
        localStorage.getItem(countStorageKey);


    if (savedLikes !== null) {

        clip.likes =
            Number(savedLikes);

    }


    likeCount.textContent =
        clip.likes;


    if (liked) {

        likeButton.classList.add("liked");

    }


    likeButton.addEventListener(
        "click",
        () => {

            if (liked) {

                clip.likes--;

                liked = false;

            } else {

                clip.likes++;

                liked = true;

            }


            localStorage.setItem(
                likeStorageKey,
                liked
            );


            localStorage.setItem(
                countStorageKey,
                clip.likes
            );


            likeCount.textContent =
                clip.likes;


            likeButton.classList.toggle(
                "liked",
                liked
            );

        }
    );

}