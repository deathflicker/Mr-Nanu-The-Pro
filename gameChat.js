//All variables
var textMessageBox = document.getElementById('textMessageBox');
var chatAreaShow = document.getElementById('chatAshow');
var sendBtn = document.getElementById('sendBtn');
var nanuTalk = document.getElementById('nanuTlk');
var whatToAnswer;



//Chat with nanu close
function chatBoxClose(){
	nanuTalk.style.display='none';
	chatAreaShow.style.display='none';
	sendBtn.disabled=false;
}


//Chat with nanu
function textArea(){
	sendBtn.disabled=true;
	chatAreaShow.style.display='flex';
	var textMessageBoxValue = textMessageBox.value.toLowerCase();
	if(textMessageBoxValue == 'hi' || textMessageBoxValue == 'hello' || textMessageBoxValue == 'oi' || textMessageBoxValue == 'bhai'){
		whatToAnswer  = Math.floor(Math.random()*6);
		if(whatToAnswer==0){
			document.getElementById('chatAshow').innerHTML='kichu bolbi magi?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==1){
			document.getElementById('chatAshow').innerHTML='oshb hi fi pore hobe, aage nudes pathao!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==2){
			document.getElementById('chatAshow').innerHTML='hey bitch...'
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==3){
			document.getElementById('chatAshow').innerHTML='bol na banchod'
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==4){
			document.getElementById('chatAshow').innerHTML='Ki hoiche??'
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==5){
			document.getElementById('chatAshow').innerHTML='akhon byasto achi... pore ashis gnar ta niye..!!'
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}		
	}
	else if(textMessageBoxValue.includes('sex')){
		whatToAnswer = Math.floor(Math.random()*10);
		if(whatToAnswer>0){
			document.getElementById('chatAshow').innerHTML='sex? very much... '+whatToAnswer+' times a day...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else{
			document.getElementById('chatAshow').innerHTML='sex? very poor...no money, no sex!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
	}
	else if(textMessageBoxValue.includes('party')){
		document.getElementById('chatAshow').innerHTML='babar theke party cha giye banchod...';
		textMessageBox.value='';
		nanuTlk.style.display='block';
		setTimeout(chatBoxClose,4000);
	}
	else if(textMessageBoxValue.includes('fuck') || textMessageBoxValue.includes('chudechi') || textMessageBoxValue.includes('chude6i') || textMessageBoxValue.includes('chudbo') || textMessageBoxValue.includes('chudte') || textMessageBoxValue.includes('chude')){
		whatToAnswer = Math.floor(Math.random()*3);
		if(whatToAnswer==0){
			document.getElementById('chatAshow').innerHTML='chii chii.. nongra kotha.';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==1){
			document.getElementById('chatAshow').innerHTML='eshb kotha bolle... babake bole debo!!'
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==2){
			document.getElementById('chatAshow').innerHTML='aye aye aye...tor pod maari aye'
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
	}
	else if(textMessageBoxValue.includes('banchod') || textMessageBoxValue.includes('bnara') || textMessageBoxValue.includes('chodon') || textMessageBoxValue.includes('bara') || textMessageBoxValue.includes('bal') || textMessageBoxValue.includes('gud') || textMessageBoxValue.includes('suor') || textMessageBoxValue.includes('suar') || textMessageBoxValue.includes('khanki') || textMessageBoxValue.includes('bessa') || textMessageBoxValue.includes('bessha') || textMessageBoxValue.includes('gandu') || textMessageBoxValue.includes('bokachoda') || textMessageBoxValue.includes('rendi') || textMessageBoxValue.includes('randi') || textMessageBoxValue.includes('leora') || textMessageBoxValue.includes('laora') || textMessageBoxValue.includes('chud')){
		whatToAnswer=Math.floor(Math.random()*9);
		if(whatToAnswer==0){
			document.getElementById('chatAshow').innerHTML='chudechi toke raat beraate...fateni condom sopneo..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==1){
			document.getElementById('chatAshow').innerHTML='sala thapabo ekhane.. sperm porbe shanti-parae.';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==2){
			document.getElementById('chatAshow').innerHTML='chal chal, maa matt chuda!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==3){
			document.getElementById('chatAshow').innerHTML='baap ko chodna, aur kisaan ko khodna...matt sikhao!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==4){
			document.getElementById('chatAshow').innerHTML='chodabi kom, chudbi beshi...tobei barbe mangshopeshi.';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==5){
			document.getElementById('chatAshow').innerHTML='kabhi kabhi lagta hain...apun hi randi hain!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==6){
			document.getElementById('chatAshow').innerHTML='dom thakle lal bajar e phone kore bole dekha!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==7){
			document.getElementById('chatAshow').innerHTML='sex kar dunga...pata bhi nahi chalega';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==8){
			document.getElementById('chatAshow').innerHTML='tor mukhe gamcha bedhe ontim thapon dibo..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
	}
	else if(textMessageBoxValue.includes('birthday') || textMessageBoxValue.includes('happy') || textMessageBoxValue.includes('bad') || textMessageBoxValue.includes('jonmodin') || textMessageBoxValue.includes('poida') || textMessageBoxValue.includes('dibos')){
		whatToAnswer = Math.floor(Math.random()*11);
		if(whatToAnswer==0){
			document.getElementById('chatAshow').innerHTML='buke aye banchod';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==1){
			document.getElementById('chatAshow').innerHTML='jonmodin jonmodin.... amar jonmodin!!!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==2){
			document.getElementById('chatAshow').innerHTML='thak thak ar mukhe nite hobe na!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==3){
			document.getElementById('chatAshow').innerHTML='rimjhim dharate, chaye mon narate! tomake vasate..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==4){
			document.getElementById('chatAshow').innerHTML='arehhhhh thank you... u can now phak off!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==5){
			document.getElementById('chatAshow').innerHTML='party chaile chondon kath diye gnar fatabo!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==6){
			document.getElementById('chatAshow').innerHTML='gaan gai amar khusi.... hulo na pushe moyna pushi...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==7){
			document.getElementById('chatAshow').innerHTML='valo...tobe aro valo hote parto!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==8){
			document.getElementById('chatAshow').innerHTML="tu mera bhai hain :')";
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==9){
			document.getElementById('chatAshow').innerHTML='aj chudbo, kal chudbo...ei vabte vabtei jonmodin ta chole elo..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==10){
			document.getElementById('chatAshow').innerHTML='eshb chode...ekta cigarette de na..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
	}
	else if(textMessageBoxValue.includes('kyano') || textMessageBoxValue.includes('kobe') || textMessageBoxValue.includes('kano') || textMessageBoxValue.includes('keno') || textMessageBoxValue.includes('kotha') || textMessageBoxValue.includes('ki') || textMessageBoxValue.includes('mane')){
		whatToAnswer=Math.floor(Math.random()*4);
		if(whatToAnswer==0){
			document.getElementById('chatAshow').innerHTML='jani na..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==1){
			document.getElementById('chatAshow').innerHTML='babake proshno?? lojja kore na!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==2){
			document.getElementById('chatAshow').innerHTML='kyano bolbo?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==3){
			document.getElementById('chatAshow').innerHTML='gnar mara ja!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
	}
	else if(textMessageBoxValue.includes('naam') || textMessageBoxValue.includes('nam')){
		whatToAnswer=Math.floor(Math.random()*4);
		if(whatToAnswer==0){
			document.getElementById('chatAshow').innerHTML='bari pala...ekhono time ase..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==1){
			document.getElementById('chatAshow').innerHTML='naam jene chirbi???';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==2){
			document.getElementById('chatAshow').innerHTML='naam amar nanu, dekhi sudhu panu!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==3){
			document.getElementById('chatAshow').innerHTML='naam mein kya rakha hain?? :D';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
	}
	else if(textMessageBoxValue==''){
			document.getElementById('chatAshow').innerHTML='aage type kor kichu bal...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
	}
	else{
		whatToAnswer = Math.floor(Math.random()*101);
		if (whatToAnswer==0) {
			document.getElementById('chatAshow').innerHTML='toke ami roj phone kore madarchod bolbo...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==1){
			document.getElementById('chatAshow').innerHTML='bujhlam na bal...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==2){
			document.getElementById('chatAshow').innerHTML='del Pretom er chaade uthe ghuri orabo...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==3){
			document.getElementById('chatAshow').innerHTML='banchod chaand uthe chilo gogone...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==4){
			document.getElementById('chatAshow').innerHTML='shuntiye laal kore debo...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==5){
			document.getElementById('chatAshow').innerHTML='nongrami bar kore debo...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==6){
			document.getElementById('chatAshow').innerHTML='sex kar dunga... pata bhi nahi chalega..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==7){
			document.getElementById('chatAshow').innerHTML='kha kha kha amae chuise chuise kha.... khna naaaaaa';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==8){
			document.getElementById('chatAshow').innerHTML='dudu khabo ar ghuri orabo... :P';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==9){
			document.getElementById('chatAshow').innerHTML='tui ekta baje lok..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==10){
			document.getElementById('chatAshow').innerHTML='hain....toh??';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==11){
			document.getElementById('chatAshow').innerHTML='oti boro hoyo na jhore pore jabe..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==12){
			document.getElementById('chatAshow').innerHTML='oti choto hoyo na, gnar mara khabe...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==13){
			document.getElementById('chatAshow').innerHTML='ektu tipte de??';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==14){
			document.getElementById('chatAshow').innerHTML='tor malik ke bol... Mr nanu eseche!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==15){
			document.getElementById('chatAshow').innerHTML='khabare amn jolap meshabo...tank er jol sukiye jabe, tor haater jol sokabe na!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==16){
			document.getElementById('chatAshow').innerHTML='ami ramkrishno bolchi...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==17){
			document.getElementById('chatAshow').innerHTML='kiiiii... lagate diba?? :P';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==18){
			document.getElementById('chatAshow').innerHTML='kyano bey?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==19){
			document.getElementById('chatAshow').innerHTML='hello, bhawanipur thana...ekhane ekta khun hobe!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==20){
			document.getElementById('chatAshow').innerHTML='amar naam ki tobe kutta panu?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==21){
			document.getElementById('chatAshow').innerHTML='amar ei moha bichitro birjo...ke koribe grohon?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==22){
			document.getElementById('chatAshow').innerHTML='shon...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==23){
			document.getElementById('chatAshow').innerHTML='ekta kotha chilo..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==24){
			document.getElementById('chatAshow').innerHTML='tor mukhta sora to bal...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==25){
			document.getElementById('chatAshow').innerHTML='tomar oi dugdho...dekhe ami mugdho!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==26){
			document.getElementById('chatAshow').innerHTML='ohhhhh...fatafati!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==27){
			document.getElementById('chatAshow').innerHTML='tor mukhtai kamon beka bnara...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==28){
			document.getElementById('chatAshow').innerHTML='aaj ei din taake...dhoner khatae likhe rakho!!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==29){
			document.getElementById('chatAshow').innerHTML='ekta gaan shonao to baba??';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==30){
			document.getElementById('chatAshow').innerHTML="i don't english me and myself!";
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==31){
			document.getElementById('chatAshow').innerHTML='bolchi je...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==32){
			document.getElementById('chatAshow').innerHTML='gorur dudhe sona pelen??';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==33){
			document.getElementById('chatAshow').innerHTML='beshi jodi baro bar... mere fatiye debo tomar gnar!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==34){
			document.getElementById('chatAshow').innerHTML='le khoka!!!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==35){
			document.getElementById('chatAshow').innerHTML='ami jamini...tumi soshi hey!!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==36){
			document.getElementById('chatAshow').innerHTML='dhyarrrr bal...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==37){
			document.getElementById('chatAshow').innerHTML='wooooooooooowwww';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==38){
			document.getElementById('chatAshow').innerHTML='tor mukhta dekhlei kamon gandu gandu mone hoy...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==39){
			document.getElementById('chatAshow').innerHTML='ektu...soruu kore hoyejak?? :P';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==40){
			document.getElementById('chatAshow').innerHTML='apun idharich hain! fikar naiii!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==41){
			document.getElementById('chatAshow').innerHTML='bepar ta valo hochche na...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==42){
			document.getElementById('chatAshow').innerHTML='tor khobor ki?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==43){
			document.getElementById('chatAshow').innerHTML="amaro to mon vange..dhone jol ashe ar, obhimaan amaro to hoy... :')";
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==44){
			document.getElementById('chatAshow').innerHTML='ki koris?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==45){
			document.getElementById('chatAshow').innerHTML='ki boss bhalo to???';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==46){
			document.getElementById('chatAshow').innerHTML='etodin tumi nai kache....';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==47){
			document.getElementById('chatAshow').innerHTML='nijerta halka kore chuse ne ebar!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==48){
			document.getElementById('chatAshow').innerHTML='ar koto prosno bnara??';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==49){
			document.getElementById('chatAshow').innerHTML='whatsapp number ta diba?? :)';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==50){
			document.getElementById('chatAshow').innerHTML='ki shundor...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==51){
			document.getElementById('chatAshow').innerHTML='koto boroooooo!!! :O';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==52){
			document.getElementById('chatAshow').innerHTML='gojiyeche???';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==53){
			document.getElementById('chatAshow').innerHTML='angrez chale gaye...lekin tumko chhor gaye!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==54){
			document.getElementById('chatAshow').innerHTML="i don't know...";
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==55){
			document.getElementById('chatAshow').innerHTML='banchod..amae cake khawa??';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==56){
			document.getElementById('chatAshow').innerHTML='where is my gift fakar?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==57){
			document.getElementById('chatAshow').innerHTML='cum to sugar daddy.... :)';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==58){
			document.getElementById('chatAshow').innerHTML='kaam, jibone only cum!!!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==59){
			document.getElementById('chatAshow').innerHTML='ja dibi...kochi de..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==59){
			document.getElementById('chatAshow').innerHTML='uffffff!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==60){
			document.getElementById('chatAshow').innerHTML='aste.. lokjon shunte pabe!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==61){
			document.getElementById('chatAshow').innerHTML='tomar shei gupto roger ki khobor?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==62){
			document.getElementById('chatAshow').innerHTML='bolchi... ekta silkcut blue hobe?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==63){
			document.getElementById('chatAshow').innerHTML='shokale uthiya ami mone mone boli... saradin loker jyano gnar mere choli...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==64){
			document.getElementById('chatAshow').innerHTML='facebook e tomar buk ta dekhaba?? :P';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==65){
			document.getElementById('chatAshow').innerHTML='ulta kore kelabo..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==66){
			document.getElementById('chatAshow').innerHTML='i did business.. B)';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==67){
			document.getElementById('chatAshow').innerHTML='ki kore toke bolbo...tui ke amar!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==68){
			document.getElementById('chatAshow').innerHTML='okhane ekta kalo jinis lege ache dyakh... thik tor vobisshot er moton!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==69){
			document.getElementById('chatAshow').innerHTML='tomar khola pacha...lagao mor gaale! tomar khola pacha...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==70){
			document.getElementById('chatAshow').innerHTML='yes';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==71){
			document.getElementById('chatAshow').innerHTML='naaaaaa..no, never!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==72){
			document.getElementById('chatAshow').innerHTML='ghum payna?? -_-';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==73){
			document.getElementById('chatAshow').innerHTML='toke niye chande jabo! ei mashei..honeymoon e... :P';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==74){
			document.getElementById('chatAshow').innerHTML='kana naki?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==75){
			document.getElementById('chatAshow').innerHTML='do you know who the chokbaj is?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==76){
			document.getElementById('chatAshow').innerHTML='onek to holo... :)';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==77){
			document.getElementById('chatAshow').innerHTML='evabe bolbi?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==78){
			document.getElementById('chatAshow').innerHTML='dekhabo? eto boro je gola diyeo nambe na...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==79){
			document.getElementById('chatAshow').innerHTML="chalti hain kya 9 se 12? ;)";
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==80){
			document.getElementById('chatAshow').innerHTML='amar baba bolen, "amar chele futor neshae hariye geche"';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==81){
			document.getElementById('chatAshow').innerHTML='khub dorkar..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==82){
			document.getElementById('chatAshow').innerHTML='tor adeo daray??';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==83){
			document.getElementById('chatAshow').innerHTML='ek second dara...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==84){
			document.getElementById('chatAshow').innerHTML='o boudir dim pauti, dim pauti, dim pauti...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==85){
			document.getElementById('chatAshow').innerHTML='nomoskar, ami buddhodeb!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==86){
			document.getElementById('chatAshow').innerHTML='khub rosh...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==87){
			document.getElementById('chatAshow').innerHTML='amar hol, ami bujhbo...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==88){
			document.getElementById('chatAshow').innerHTML='chosho amar nunku...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==89){
			document.getElementById('chatAshow').innerHTML='opoman manchi na manbo na!!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==90){
			document.getElementById('chatAshow').innerHTML='Joy Shree Rummm...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==91){
			document.getElementById('chatAshow').innerHTML='toke to valo vabtam!!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==92){
			document.getElementById('chatAshow').innerHTML='balloon fulabo ar biri khabo...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==93){
			document.getElementById('chatAshow').innerHTML='my life, my rulez, my sex!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==93){
			document.getElementById('chatAshow').innerHTML='ar badde! pore bolbo...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==94){
			document.getElementById('chatAshow').innerHTML='surprise madarfakar';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==95){
			document.getElementById('chatAshow').innerHTML='muh mein land de dunga...maa chod dunga!';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==96){
			document.getElementById('chatAshow').innerHTML='banchod..';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==97){
			document.getElementById('chatAshow').innerHTML='holer baal...guder chaal...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==98){
			document.getElementById('chatAshow').innerHTML='khankir chele....';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==99){
			document.getElementById('chatAshow').innerHTML='choto magi ta koi re?';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
		else if(whatToAnswer==100){
			document.getElementById('chatAshow').innerHTML='pod ta tolo... ektu pok pok kore mere di...';
			textMessageBox.value='';
			nanuTlk.style.display='block';
			setTimeout(chatBoxClose,4000);
		}
	}
}