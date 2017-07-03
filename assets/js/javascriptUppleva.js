 //kod är tagen/inspirerad från föreläsning/workshop

window.addEventListener("load", prepareGui, false);

function prepareGui() {
    drawCanvas();
}

function drawCanvas(){
	//hämtar referens till canvas-elementet i DOMen och hämtar canvas api:t 2d.
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    //skapar bildobjekt
    var alg = new Image(); 
    var gran = new Image();
    
    var x = 0;
    var y = 102;
    var gradient = ctx.createLinearGradient(0,350,0,0);
    
    //lägger till src till bildobjekten
    alg.src = "assets/img/alg.png";
    gran.src = "assets/img/granmindre.png";
    
    
    
    
   

    function drawImage(){
    	//rensar canvasen för varje intervall och målar upp den igen, fast med älgen på en ny position.
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#8bdcef";
        ctx.fillRect(0,0, canvas.width, 170);
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(0,170,canvas.width, 30);

        ctx.beginPath();
            ctx.fillStyle = "lightgreen";
            ctx.arc(200,190,70, Math.PI*0,Math.PI*1,true);
            ctx.fill();
        ctx.closePath();
        
        gradient.addColorStop(0,"green");
        gradient.addColorStop(0.5,"lightgreen");
        ctx.fillStyle = gradient;
        ctx.fillRect(0,170,canvas.width,170);
        
        
        //ritar upp bilden i bildobjektet
        ctx.drawImage(gran,0,0, 120,180);
        ctx.drawImage(gran,canvas.width*0.5,10, 100,164);
        ctx.drawImage(gran,canvas.width*0.4,10, 100,164);
        ctx.drawImage(gran,canvas.width*0.46,10, 100,164);
        ctx.drawImage(gran,canvas.width*0.8,10, 100,164);
        
        ctx.drawImage(gran,canvas.width*0.34,90, 50,84);
        
        ctx.drawImage(gran,canvas.width*0.2,60, 40,74);
        ctx.drawImage(gran,canvas.width*0.15,90, 35,69);
        ctx.beginPath();
        
        ctx.moveTo(100,40);
        ctx.quadraticCurveTo(110, 30,120,40);
        ctx.moveTo(120,40);
        ctx.quadraticCurveTo(130, 30,140,40);
        
        ctx.moveTo(140,20);
        ctx.quadraticCurveTo(150, 10,160,20);
        ctx.moveTo(160,20);
        ctx.quadraticCurveTo(170, 10,180,20);
        
        ctx.moveTo(160,50);
        ctx.quadraticCurveTo(170, 40,180,50);
        ctx.moveTo(180,50);
        ctx.quadraticCurveTo(190, 40,200,50);
        
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
        
        //kontrollerar vilket värde x har och om det är mindre än 70% av bredden på canvasen körs det som är i if-satsen
        if(x<canvas.width*.7){
           ctx.drawImage(alg, x,y, 58,80);
            x = x + 3; 
        }
        //om x är mer än 70% av canvasens bredd körs else. 
        //i else stannar älgen på samma plats och funktionen pratBubbla() anropas.
        else{ 
            ctx.drawImage(alg, x,y, 58,80);
            pratBubbla();   
        }
        ctx.drawImage(gran,canvas.width*0.6,85, 80,104);
        
    	//pratBubbla() skapar en pratbubbla med text, genom att använda en ellipse och linjer
        function pratBubbla(){
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.ellipse(x-40, y-50, 80, 40,  3*Math.PI/180, 0, 2 * Math.PI);
            
            ctx.fill();
            ctx.moveTo(x,y-8);
            ctx.lineTo(x+19,y+10);
            ctx.strokeStyle = "white";
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.closePath();
            ctx.font = "15px Poppins";
            ctx.fillStyle = "black";
            ctx.fillText("Titt här va du ",x-105,y-58); 
            ctx.fillText("kan gör i Värmlan!",x-105,y-38);
            
        }
        
    }
    setInterval(drawImage,33); 
        
    
    
  
    //https://www.w3schools.com/html/html5_canvas.asp
    
    //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
    
    
    
}