//Van a ir mis Clases

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
        ctx.font = "80px Arial";
        ctx.fillText = ("Te moriste mi rey!",250,200)
    }
}


class Flappy{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.vy = 2 //gravity
        this.userPull = 0;//contra la gravedad
        this.image = new Image();
        this.image.src = "../images/flappy.png"
    }

    draw(){
        //Validar gravedad


        //dibujar el flappy
        ctx.drawImage(this.image,this.x,this.y,this.y,this.width,this.height);
    }

    collision(item){
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }

}

