
import { Sprite } from './sprite';
const GRAVITY = 0.75

export class Player extends Sprite {

    constructor(pos, vel, facing) {

        this.posX = pos[0] // sets up position for characters
        this.posY = pos[1]

        this.velX = vel[0] // sets up velocity for characters
        this.velY = vel[1]

        this.facing = facing
        // this.type = type 
        this.width = 25
        this.height = 100 // character size


        // game collision/hit logic
        this.attackRange = { // how far the player's attack range extends
            posX: this.posX,
            posY: this.posY,
            width: 50,
            height: 75,
        }
        this.health = 100
        this.changePHB = 0
        this.attacking = true;
        // this.movingRight
    }

    shiftattackRange() {
        if (this.facing === "left") {
            this.attackRange.posX = this.posX - 50
        } 
    }
    draw(ctx) {
    
        ctx.fillStyle = "green";
        ctx.fillRect(this.posX, this.posY, this.width, this.height);

        ctx.fillStyle = "red";

        this.shiftattackRange()
        ctx.fillRect(
            this.attackRange.posX,
            this.attackRange.posY,
            this.attackRange.width,
            this.attackRange.height,
        );
    }

    wrap() {
        if (this.posX < 25) {
            this.posX = 1024 - 25
        } else if (this.posX > 1000) {
            this.posX = 15
        }
    }

    update(ctx) {
    
        if ((this.posX < 50 || this.posX > 950)) {
            this.wrap();
        }

        this.posX += this.velX
        
        this.posY += this.velY
        if (this.posY >= 430) { // ensures characters cannot sink into canvas!
            this.velY = 0
        } else {
            this.velY += GRAVITY //// mimics gravity's acceleration
        }

        this.attackRange.posX = this.posX + this.width // creates a attack range in front of character
        this.attackRange.posY = this.posY

        this.draw(ctx);
    }

    // collision checkers for both x and y direction. get combined to check for collision in game
    xAxisCollisionWith(character2) {
        return ((this.attackRange.posX + this.attackRange.width >= character2.posX) && (
            this.attackRange.posX <= character2.posX + character2.width))
    }

    yAxisCollisionWith(character2) {
        return ((this.attackRange.posY + this.attackRange.height >= character2.posY) && (
            this.attackRange.posY <= character2.posY + character2.height))
    }

    collisionWith(character2) {
        return (this.xAxisCollisionWith(character2) && this.yAxisCollisionWith(character2))
    }


    attack(character2) {
        if (this.collisionWith(character2) && this.attacking) {
            this.completeHit(character2)
            this.attacking = false
        }
        // setTimeout(() => {
        //     if (this.collisionWith(character2) && this.attacking) {
        //         this.completeHit(character2)
        //     }
        //     this.attacking = false 
        // }, 200)
        setTimeout(() => {
            this.attacking = true
        }, 300);
    }

    // oppositePlayer() {
    //     return this.type === "player1" ? "player2" : "player1"
    // }
    completeHit(character2) {
        // character2.health -= 20
        character2.changePHB = 20
    }


};
