document.getElementById("search").addEventListener("input", function() {
    let searchQuery = this.value.toLowerCase();
    let games = document.querySelectorAll(".game-card");

    games.forEach(game => {
        let title = game.querySelector("h3").innerText.toLowerCase();
        if (title.includes(searchQuery)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});
