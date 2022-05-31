class lamp{
    constructor(r,x,y){
            
        this.r = r;
        this.x = x;
        this.y = y;
        this.color = "white";
        this.rays = [];
        for (var i = 0 ; i <360; i+=1){
            this.rays.push(new ray(this.x,this.y, i));
        }


    }

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        c.fill();
        c.fillStyle = this.color;
        c.closePath();

    }

}