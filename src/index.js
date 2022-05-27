const { Character } = require("./scripts/character");

window.Character = Character
window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');

    // following code will setup a canvas with blue background
    const canvas = document.getElementById("canvasEl");
    canvas.width = 1024;
    canvas.height = 526;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let player = new Character([200, 20], [0,0])
    window.player = player;
    // player.draw(ctx);
    // console.log(player);

    let enemy = new Character([800, 20], [0,0])
    // enemy.draw(ctx);
    // console.log(enemy);

    // player.animate(ctx)
    // enemy.animate(ctx)



    const animation = () => {
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, 1024, 526);
        player.update(ctx);
        enemy.update(ctx);
        // player.draw(ctx);
        // enemy.draw(ctx);
        setTimeout(animation, 16.66);
        console.log(enemy.posX);
    }
    animation();

    
});

