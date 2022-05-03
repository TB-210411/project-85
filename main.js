canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


greencar_width=70;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencarX=10;
greencarY=350;

function add() {
	bg=new Image();
    bg.onload=uploadBackground;
    bg.src=background_image;

    greencar=new Image();
    greencar.onload=uploadgreencar;
    greencar.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(bg,0,0,canvas.width, canvas.height);

}



function uploadgreencar() {
	ctx.drawImage(greencar,greencarX,greencarY,greencar_width, greencar_height);

}

	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencarY>=0){
		greencarY=greencarY-10;
		uploadBackground();
	 uploadgreencar();
		
	}	//Define function to move the car upward
}

function down()
{
	if(greencarY<=500){
        greencarY=greencarY+10;
		uploadBackground();
		uploadgreencar();
        
    }//Define function to move the car downward
}

function left()
{
	if(greencarX>=0){
        greencarX=greencarX-10;
		uploadBackground();
		uploadgreencar();
        
    }//Define function to move the car left side
}

function right()
{
	if(greencarX<=700){
        greencarX=greencarX+10;
		uploadBackground();
		uploadgreencar();
        
    }//Define function to move the car right side
}
