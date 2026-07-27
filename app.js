const clips = [

    {
        id: 1,
        title: "творчество",
        author: "@sasafan",
        likes: 124,
        badge: "NEW",
        thumbnail: "thumbnail-one"
    },

    {
        id: 2,
        title: "ирл зрителей 💀",
        author: "@clippers",
        likes: 892,
        badge: "TOP",
        thumbnail: "thumbnail-two"
    },

    {
        id: 3,
        title: "тик ток",
        author: "@meme_lord",
        likes: 431,
        badge: "NEW",
        thumbnail: "thumbnail-three"
    },

    {
        id: 4,
        title: "Когда чат слишком активный",
        author: "@viewer",
        likes: 215,
        badge: "",
        thumbnail: "thumbnail-four"
    },

    {
        id: 5,
        title: "Легендарная реакция",
        author: "@fan_sasa",
        likes: 1200,
        badge: "TOP",
        thumbnail: "thumbnail-five"
    },

    {
        id: 6,
        title: "Sasavot не ожидал этого",
        author: "@clipper",
        likes: 567,
        badge: "",
        thumbnail: "thumbnail-six"
    }

];


const clipsGrid = document.getElementById("clipsGrid");

if (!clipsGrid) {
    console.error("Элемент #clipsGrid не найден");
} else {
    renderClips(clips);
}


function renderClips(clipsToRender) {

    clipsGrid.innerHTML = "";


    clipsToRender.forEach(clip => {


        const card = document.createElement("article");


        card.className = "clip-card";


        card.innerHTML = `

            <div class="thumbnail ${clip.thumbnail}">

                ${
                    clip.badge

                    ?

                    `<span class="clip-badge ${clip.badge === "TOP" ? "top" : ""}">
                        ${clip.badge}
                    </span>`

                    :

                    ""
                }


                <button class="play-small">
                    ▶
                </button>

            </div>


            <div class="clip-info">

                <h3>
                    ${clip.title}
                </h3>

                <div class="clip-meta">

                    <span>
                        ${clip.author}
                    </span>

                    <span>
                        ❤️ ${clip.likes}
                    </span>

                </div>

            </div>

        `;


        card.addEventListener("click", () => {

            window.location.href = `video.html?id=${clip.id}`;

        });


        clipsGrid.appendChild(card);

    });

}

