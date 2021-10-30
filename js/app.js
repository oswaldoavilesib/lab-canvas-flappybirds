//Van a ir mis Clases
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

class Background{
    //constructor
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src="../images/bg.png"
    }

    //métodos
    draw(){
        //para hacer que el background se mueva
        if(this.x < -canvas.width){
            this.x = 0;
        }
        this.x--

        //dibujar la imagen
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x + this.width,this.y,this.height,this.height)
    }

    gameOver(){

    }
}