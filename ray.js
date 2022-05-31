class ray {
    constructor(x, y, a){
        this.x = x;
        this.y = y;
        this.dirx = Math.sin(a);
        this.diry = Math.cos(a);

    }

    draw(){
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x + this.dirx, this.y + this.diry);
        c.stroke();
        c.strokeStyle = "white";
    }

    cast(wall){
        const x1 = wall.x1;
        const y1 = wall.y1;
        const x2 = wall.x2;
        const y2 = wall.y2;

        const x3 = this.x;
        const y3 = this.y;
        const x4 = this.x + this.dirx;
        const y4 = this.y + this.diry;

        const den = (x1 - x2)*(y3-y4)-(y1-y2)*(x3-x4);

        if (den == 0){
            return;
        }

        const tParcial = (x1-x3)*(y3-y4) - (y1-y3)*(x3-x4);
        const uParcial = -((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3));

        const t = tParcial/den;
        const u = uParcial/den;

        if (t>0 && t<1 && u>0){
            const ptx = x1 + t*(x2-x1);
            const pty = y1 + t*(y2-y1);

            const pt = [ptx, pty];
            return pt;

        }   else{
            return;
        }


    }

    direction(x,y){
        this.dirx = x - this.x;
        this.diry = y - this.y;

    }
}