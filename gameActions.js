// All variables
var eyeOpenDress='RUPAGENJInanuHeadNormal.png';
var eyeCloseDress='RUPAGENJInanuHeadEyeClosed.png';
var storeUserAgent = navigator.userAgent;
var nanuHeadNormal = document.getElementById('nanuHeadNormal');
var nanuTailNormal = document.getElementById('nanuTailNormal');
var glasses = document.getElementById('glassesView');
var eyesClosedTimer;
var eyesOpenTimer;

//to check mobile or desktop
if(storeUserAgent.includes('Windows')){
	alert('Windows Machine');
}

//Blinking
function eyesClosed(){
	nanuHeadNormal.src=eyeCloseDress;
	eyesClosedTimer = setTimeout(eyesOpen,200);
}
function eyesOpen(){
	nanuHeadNormal.src=eyeOpenDress;
	eyesOpenTimer = setTimeout(eyesClosed,Math.floor(Math.random()*6000));
}
eyesOpen();



//Face Punch
function unlockTheClick(){
	eyesOpen();
	console.log('Unlocked');
	nanuTailNormal.onclick=function(){facePunch()};
}

function lockTheClick()
{
	nanuTailNormal.onclick='Off';
	setTimeout(unlockTheClick,3000);
}
function faceNotPunched(){
	nanuHeadNormal.src=eyeOpenDress;
}

function facePunch(){
	console.log('clicked');
	setTimeout(lockTheClick,0);
	clearInterval(eyesOpenTimer);
	clearInterval(eyesClosedTimer);
	nanuHeadNormal.src='nanuHeadPunched.png';
	setTimeout(faceNotPunched,300);
}


//Choose Shirts Menu
function chooseShirts(shirtChosen){
	clearInterval(eyesOpenTimer);
	clearInterval(eyesClosedTimer);
	var storageShirtChosen = shirtChosen.options[shirtChosen.selectedIndex].text;
	if (storageShirtChosen=='-Shirts-' || storageShirtChosen=='Rupa Genji') {
		eyeOpenDress='RUPAGENJInanuHeadNormal.png';
		eyeCloseDress='RUPAGENJInanuHeadEyeClosed.png';
		eyesOpen();
	}
	else if(storageShirtChosen=='Strap Bra'){
		eyeOpenDress='STRAPBRAnanuHeadNormal.png';
		eyeCloseDress='STRAPBRAnanuHeadEyeClosed.png';
		eyesOpen();
	}
	else if(storageShirtChosen=='T Shirt'){
		eyeOpenDress='TSHIRTnanuHeadNormal.png';
		eyeCloseDress='TSHIRTnanuHeadEyeClosed.png';
		eyesOpen();
	}
	else if(storageShirtChosen=='Sports Bra'){
		eyeOpenDress='SPORTSBRAnanuHeadNormal.png';
		eyeCloseDress='SPORTSBRAnanuHeadEyeClosed.png';
		eyesOpen();
	}
	else{
		eyesOpen();
	}
}


//Choose Pants Menu
function choosePants(pantChosen){
	var storagePantChosen = pantChosen.options[pantChosen.selectedIndex].text;
	if (storagePantChosen=='-Pants-' || storagePantChosen=='Jangiya (Cockcon)') {
		nanuTailNormal.src='PANTjangiya.png';
	}
	else if(storagePantChosen=='Joggers'){
		nanuTailNormal.src='PANTjoggers.png';
	}
	else if (storagePantChosen=='Lungi') {
		nanuTailNormal.src='PANTlungi.png';
	}
	else if(storagePantChosen=='Panty'){
		nanuTailNormal.src='PANTpanty.png';
	}
}


//Choose Glasses Menu
function chooseGlasses(glassesChosen){
	var storageGlassesChosen = glassesChosen.options[glassesChosen.selectedIndex].text;
	if(storageGlassesChosen=='-Glass-' || storageGlassesChosen=='None'){
	glasses.style.display='none';			
	}
	else if(storageGlassesChosen=='Boobs Frame'){
		glasses.src='BOOBSglasses.png';
		glasses.style.display='block';
	}
	else{
		glasses.style.display='none';
	}

}