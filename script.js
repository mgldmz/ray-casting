var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var mouse = {
    x : undefined,
    y : undefined
}

window.addEventListener("mousemove", 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    }
)

var c = canvas.getContext("2d");
var l;
var wallsNumber = 5;
var walls = [new wall(0, 0, innerWidth, 0), 
             new wall(innerWidth, 0, innerWidth, innerHeight), 
             new wall(innerWidth, innerHeight, 0, innerHeight), 
             new wall(0, innerHeight,0,0)];
var r;


function setup (){


    l = new lamp(5, 50, 50);

    for (var i = 0; i< wallsNumber;i++ ){
        let w1 = Math.random()*innerWidth;
        let w2 = Math.random()*innerHeight;
        let w3 = Math.random()*innerWidth;
        let w4 = Math.random()*innerHeight;

        walls.push(new wall(w1,w2,w3,w4));
    }
    
    //r = new ray(80,300);


}


function animate(){
    requestAnimationFrame(animate);

    c.fillStyle = "black";
    c.fillRect(0,0,window.innerWidth,window.innerHeight);
    c.fillStyle = "white";

    l.x = mouse.x;
    l.y = mouse.y;
    l.draw();

    for( var i = 0; i< walls.length; i++){
        walls[i].draw();
    }
    
    for(var i = 0; i < l.rays.length; i++){
        l.rays[i].x = l.x;
        l.rays[i].y = l.y;
        //l.rays[i].draw();

        let closest = null;
        let record = Infinity;
        for(var j = 0; j<walls.length; j++){
            let pointIntersect = l.rays[i].cast(walls[j]);
            if(pointIntersect){
                const d = Math.sqrt(Math.pow((pointIntersect[0]-l.x),2)+Math.pow((pointIntersect[1]-l.y),2));
                if(d <record){
                    record = d;
                    closest = pointIntersect;
                }

                }
        }
        if(closest){
            c.beginPath();
            c.moveTo(l.x, l.y);
            c.lineTo(closest[0], closest[1]);
            c.stroke();
            c.strokeStyle = "white";
        }


    }
  

}

setup();
animate();