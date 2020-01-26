//All variables
var mainValue = 0;
var mainImage = document.getElementById('mainImage');
var rightButton = document.getElementById('rightBtn');
var leftButton = document.getElementById('leftBtn');
var resetButton = document.getElementById('resetBtn');




// First Gallery
function plusFunction(){
	if(mainValue<13){
		if (mainValue==0) {
			mainValue = mainValue+1;
			mainImage.src='1.jpg';
			;
		}
		else if(mainValue==1){
			mainValue = mainValue+1;
			mainImage.src='2.jpg';
		}
		else if(mainValue==2){
			mainValue = mainValue+1;
			mainImage.src='3.jpg';
		}
		else if(mainValue==3){
			mainValue = mainValue+1;
			mainImage.src='4.jpg';
		}
		else if(mainValue==4){
			mainValue = mainValue+1;
			mainImage.src='5.jpg';
		}
		else if(mainValue==5){
			mainValue = mainValue+1;
			mainImage.src='6.jpg';
		}
		else if(mainValue==6){
			mainValue = mainValue+1;
			mainImage.src='7.jpg';
		}
		else if(mainValue==7){
			mainValue = mainValue+1;
			mainImage.src='8.jpg';
		}
		else if(mainValue==8){
			mainValue = mainValue+1;
			mainImage.src='9.jpg';
		}
		else if(mainValue==9){
			mainValue = mainValue+1;
			mainImage.src='10.jpg';
		}
		else if(mainValue==10){
			mainValue = mainValue+1;
			mainImage.src='11.jpg';
		}
		else if(mainValue==11){
			mainValue = mainValue+1;
			mainImage.src='12.jpg';
		}
		else if(mainValue==12){
			mainValue = mainValue+1;
			mainImage.src='13.jpg';
		}
	}
	else{
		rightButton.style.display='none';
		leftButton.style.display='flex';
		alert('Gallery 1 finished. \n A button will appear on your left. \n Click on it to see more pictures of Mr. Nanu')
		mainValue=0;
	}
}




//Second Gallery

function minusFunction(){
	mainValue = mainValue-1;
	if (mainValue>-14) {
		if (mainValue==-1) {
			mainImage.src='-1.jpg';
		}
		else if(mainValue==-2){
			mainImage.src='-2.jpg';
		}
		else if(mainValue==-3){
			mainImage.src='-3.jpg';
		}
		else if(mainValue==-4){
			mainImage.src='-4.jpg';
		}
		else if(mainValue==-5){
			mainImage.src='-5.jpg';
		}
		else if(mainValue==-6){
			mainImage.src='-6.jpg';
		}
		else if(mainValue==-7){
			mainImage.src='-7.jpg';
		}
		else if(mainValue==-8){
			mainImage.src='-8.jpg';
		}
		else if(mainValue==-9){
			mainImage.src='-9.jpg';
		}
		else if(mainValue==-10){
			mainImage.src='-10.jpg';
		}
		else if(mainValue==-11){
			mainImage.src='-11.jpg';
		}
		else if(mainValue==-12){
			mainImage.src='-12.jpg';
		}
		else if(mainValue==-13){
			mainImage.src='-13.jpg';
		}
	}
	else{
		mainImage.style.display='none';
		leftButton.style.display='none';
		resetButton.style.display='block';
	}
}


//Reset Func

function resetFunction(){
	resetButton.style.display='none';
	mainValue = 0;
	mainImage.src='0.jpg';
	mainImage.style.display='block';
	rightButton.style.display='flex'
}


//Back Function
function backFunction(){
	window.location.href='m_talking_Nanu.html'
}