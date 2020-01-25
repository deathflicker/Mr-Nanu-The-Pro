// All variables
var eyeOpenDress='RUPAGENJInanuHeadNormal.gif'
var eyeCloseDress='RUPAGENJInanuHeadEyeClosed.gif';
var storeUserAgent = navigator.userAgent;
var nanuHeadNormal = document.getElementById('nanuHeadNormal');
var nanuTailNormal = document.getElementById('nanuTailNormal');
var glasses = document.getElementById('glassesView');
var leftMenu = document.getElementById('leftSideMenu');
var bottomMenu = document.getElementById('footerMenu');
var showMenuBtn = document.getElementById('showMenuBtn');
var copyLinkNotification = document.getElementById('notificationShw');
var copyLinkShow = document.getElementById('copyLinkTxtBox');
var nanuTalk = document.getElementById('nanuTlk');
var textMessageBox = document.getElementById('textMessageBox');
var chatAreaShow = document.getElementById('chatAshow');
var whatToAnswer;
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
	else if(storageShirtChosen=='Playboy Tshirt'){
		eyeOpenDress='TSHIRTnanuHeadNormal.gif';
		eyeCloseDress='TSHIRTnanuHeadEyeClosed.gif';
		eyesOpen();
	}
	else if(storageShirtChosen=='Sports Bra'){
		eyeOpenDress='SPORTSBRAnanuHeadNormal.gif';
		eyeCloseDress='SPORTSBRAnanuHeadEyeClosed.gif';
		eyesOpen();
	}
	else if(storageShirtChosen=='Adidas Tshirt'){
		eyeOpenDress='ADIDASnanuHeadNormal.gif';
		eyeCloseDress='ADIDASnanuHeadEyeClosed.gif';
		eyesOpen();
	}
	else if(storageShirtChosen=='Puma Tshirt'){
		eyeOpenDress='PUMAnanuHeadNormal.gif';
		eyeCloseDress='PUMAnanuHeadEyeClosed.gif';
		eyesOpen();
	}
	else if(storageShirtChosen=='Mermaid Bra'){
		eyeOpenDress='MERMAIDBRAnanuHeadNormal.gif';
		eyeCloseDress='MERMAIDBRAnanuHeadEyeClosed.gif';
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
	else if(storagePantChosen=='Radio'){
		nanuTailNormal.src='PANTradio.gif';
	}
	else if(storagePantChosen=='Nikal Lavde (Nike)'){
		nanuTailNormal.src='PANTnike.gif';
	}
	else if(storagePantChosen=='Skirt'){
		nanuTailNormal.src='PANTskirt.gif';
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
	else if(storageGlassesChosen=='Birthday Special'){
		glasses.src='BIRTHDAYglasses.gif';
		glasses.style.display='block';
	}
	else if(storageGlassesChosen=='Nongrami Frame'){
		glasses.src='ANUBRATAglasses.gif';
		glasses.style.display='block';
	}
	else if(storageGlassesChosen=='Johnny Frame'){
		glasses.src='JOHNNYglasses.gif';
		glasses.style.display='block';
	}
	else if(storageGlassesChosen=='Lady Frame'){
		glasses.src='CATglasses.gif';
		glasses.style.display='block';
	}
	else{
		glasses.style.display='none';
	}

}

//Reset Everything
function resetButton(){
	clearInterval(eyesOpenTimer);
	clearInterval(eyesClosedTimer);
	eyeOpenDress='RUPAGENJInanuHeadNormal.gif';
	eyeCloseDress='RUPAGENJInanuHeadEyeClosed.gif';
	nanuTailNormal.src='PANTjangiya.gif';
	glasses.style.display='none';
	eyesOpen();

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
leftMenu.style.display='none';
bottomMenu.style.display='none';
showMenuBtn.style.display='block';	
}

//Hide Menu bar

function showMenu(){
	showMenuBtn.style.display='none';
	leftMenu.style.display='block';
	bottomMenu.style.display='block';
}

//copy link notification
function copyLinkNotifierOff(){
	copyLinkNotification.style.display='none';
	copyLinkShow.style.display='none';
}

function copyLink(){
	copyLinkShow.style.display='block';
	copyLinkShow.select();
	document.execCommand('copy');
	copyLinkNotification.style.display='flex';
	setTimeout(copyLinkNotifierOff,2000);
}

//Go to Help Page
function helpFunction(){
	window.location.href='m_help_page.html';
}


//Go to gallery Page
function galleryView(){
	window.location.href='m_gallery_view.html';
}