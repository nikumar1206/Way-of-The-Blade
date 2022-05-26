const { Character } = require("./scripts/character");


window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');

    // following code will setup a canvas with blue background
    const canvas = document.getElementById("canvasEl");
    canvas.width = 1024;
    canvas.height = 526;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let player = new Character(200, 20)
    // player.draw(ctx);
    // console.log(player);

    let enemy = new Character(800, 20)
    // enemy.draw(ctx);
    // console.log(enemy);

    player.animate(ctx)
    enemy.animate(ctx)

});

