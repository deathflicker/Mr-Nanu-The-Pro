// All variables
var eyeOpenDress='RUPAGENJInanuHeadNormal.gif'
var eyeCloseDress='RUPAGENJInanuHeadEyeClosed.gif';
var storeUserAgent = navigator.userAgent;
var nanuHeadNormal = document.getElementById('nanuHeadNormal');
var nanuTailNormal = document.getElementById('nanuTailNormal');
var glasses = document.getElementById('glassesView');
var topMenu = document.getElementById('headerMenu');
var leftMenu = document.getElementById('leftSideMenu');
var bottomMenu = document.getElementById('footerMenu');
var showMenuBtn = document.getElementById('showMenuBtn');
var copyLinkNotification = document.getElementById('notificationShw');
var eyesClosedTimer;
var eyesOpenTimer;

//to check mobile or desktop
if(storeUserAgent.includes('Windows')){
	console.log('Windows');
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
		eyeOpenDress='RUPAGENJInanuHeadNormal.gif';
		eyeCloseDress='RUPAGENJInanuHeadEyeClosed.gif';
		eyesOpen();
	}
	else if(storageShirtChosen=='Strap Bra'){
		eyeOpenDress='STRAPBRAnanuHeadNormal.gif';
		eyeCloseDress='STRAPBRAnanuHeadEyeClosed.gif';
		eyesOpen();
	}
	else if(storageShirtChosen=='T Shirt'){
		eyeOpenDress='TSHIRTnanuHeadNormal.gif';
		eyeCloseDress='TSHIRTnanuHeadEyeClosed.gif';
		eyesOpen();
	}
	else if(storageShirtChosen=='Sports Bra'){
		eyeOpenDress='SPORTSBRAnanuHeadNormal.gif';
		eyeCloseDress='SPORTSBRAnanuHeadEyeClosed.gif';
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
		nanuTailNormal.src='PANTjangiya.gif';
	}
	else if(storagePantChosen=='Joggers'){
		nanuTailNormal.src='PANTjoggers.gif';
	}
	else if (storagePantChosen=='Lungi') {
		nanuTailNormal.src='PANTlungi.gif';
	}
	else if(storagePantChosen=='Panty'){
		nanuTailNormal.src='PANTpanty.gif';
	}
}


//Choose Glasses Menu
function chooseGlasses(glassesChosen){
	var storageGlassesChosen = glassesChosen.options[glassesChosen.selectedIndex].text;
	if(storageGlassesChosen=='-Glass-' || storageGlassesChosen=='None'){
	glasses.style.display='none';			
	}
	else if(storageGlassesChosen=='Boobs Frame'){
		glasses.src='BOOBSglasses.gif';
		glasses.style.display='block';
	}
	else if(storageGlassesChosen=='Dildo Frame'){
		glasses.src='DILDOglasses.gif';
		glasses.style.display='block';
	}
	else if(storageGlassesChosen=='Pussy Frame'){
		glasses.src='PUSSYglasses.gif';
		glasses.style.display='block';
	}
	else{
		glasses.style.display='none';
	}

}

//Make Nanu Nude
function nudeButton(){
	clearInterval(eyesOpenTimer);
	clearInterval(eyesClosedTimer);
	nanuTailNormal.src='NANUlowerNude.gif';
	eyeOpenDress='NANUupperNudeNormal.gif';
	eyeCloseDress='NANUupperNudeEyeClosed.gif';
	eyesOpen();
}


//show Menu bar

function hideMenu(){
topMenu.style.display='none';
leftMenu.style.display='none';
bottomMenu.style.display='none';
showMenuBtn.style.display='block';	
}

//Hide Menu bar

function showMenu(){
	showMenuBtn.style.display='none';
	topMenu.style.display='block';
	leftMenu.style.display='block';
	bottomMenu.style.display='block';
}

//copy link notification
function copyLinkNotifierOff(){
	copyLinkNotification.style.display='none';
}

function copyLink(){
	console.log('hi');
	copyLinkNotification.style.display='flex';
	setTimeout(copyLinkNotifierOff,2000);
}