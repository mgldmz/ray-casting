class wall{
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

    }

    draw(){
        c.beginPath();
        c.moveTo(this.x1, this.y1);
        c.lineTo(this.x2, this.y2);
        c.strokeStyle = "white";
        c.stroke();
        
        
    }
}