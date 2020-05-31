'use strict'

let aGrahaAll = [];

let planetsInNZD1 = [ " "," "," "," "," "," "," "," "," "," "," "," "];

let planetsInNZD9 = [ " "," "," "," "," "," "," "," "," "," "," "," "]; 

let aRasiAdhipaNum = [3,6,4,2,1,4,6,3,5,7,7,5]; 
let aBhavaAdhipaNum = [0,0,0,0,0,0,0,0,0,0,0,0];  



let aNPaapi = [0,0,0,1,0,0,0,1,1,1]; 
let aPosRasi = []; 
let aPosBhava = []; 

let aKarakaVrudhdhi = [0,0,0,0,0,0,0,0,0,0]; 
let aBhavaVrudhdhi = [0,0,0,0,0,0,0,0,0,0,0,0]; 
let aBhavaAdhipa = [0,0,0,0,0,0,0,0,0,0,0,0]; 
let aBhavaSubhatvam = [1,1,0,1,1,0,1,0,1,1,1,0];
let aPosBhavaLord = [0,0,0,0,0,0,0,0,0,0,0,0]; 
let aAdhipatyaVrudhdhi =  [0,0,0,0,0,0,0,0,0,0,0,0]; 
let aABhavaVrudhdhi = [0,0,0,0,0,0,0,0,0,0,0,0]; 


let aLL = [

    ['Anantapur',		'14N41',    '77E36',    5.5],
    ['Bangalore',       '12N59',    '77E35',    5.5],  
    ['Chennai',         '13N05',    '80E17',    5.5], 
    ['Guntur',          '16N18',    '80E27',    5.5],
    ['Hyderabad',       '17N23',    '78E28',    5.5],
    ['Jodhpur',         '26N17',    '73E01',    5.5],
    ['Kadapa',		    '14E28',    '78E49',    5.5],
    ['Kakinada',	    '16N56',    '82E13',    5.5],	
    ['Rajahmundry',	    '16N59',   	'81E47',    5.5],
    ['Mumbai',		    '18N58',    '72E50',    5.5],
    ['Narsaraopet',     '16N15',    '80E04',    5.5],
    ['Nellore',         '14N26',    '79E58',    5.5],
    ['New Delhi',		'28N36',    '77E12',    5.5], 
    ['Repalle',         '16N01',    '80E51',    5.5],  
    ['Secunderabad',    '17N27',    '78E30',    5.5],
    ['Singapore',       '01N17',    '103E51',   8.0],
    ['Tenali',          '16N15',    '80E35',    5.5],
    ['Vijayawada',      '16N31',    '80E37',    5.5],
    ['Visakha',         '17N42',    '83E18',    5.5] 
  
];

let aDasaInfo = [
    [0,7,20,6,10,7,18,16,19,17],
    ["Lagnam","Ketu","Sukra","Ravi","Chandra","Kuja","Rahu","Guru","Sani","Budha"]

];

let aKujaDoshaPos = [1,2,4,7,8,12];

		
let isOK = false;
let mdLordName = "";
let thePlaceName = "";

strTemp = "Aswini,Bharani,Kruttika,Rohini,Mrugasira,Ardra,Punarvasu,Pushyami,Aslesha,Makha,PoorvaPhalguni,UttaraPhalguni,Hasta,Chitta,Swati,Visakha,Anuradha,Jyeshta,Moola,PoorvaShaada,UttaraShaada,Sravana,Dhanishta,Satabhisha,PoorvaBhaadra,UttaraBhaadra,Revati";		
let aStarNames27 = strTemp.split(',');
strTemp = "Aswini,Bharani,Kruttika,Rohini,Mrugasira,Ardra,Punarvasu,Pushyami,Aslesha,Makha,PoorvaPhalguni,UttaraPhalguni,Hasta,Chitta,Swati,Visakha,Anuradha,Jyeshta,Moola,PoorvaShaada,UttaraShaada,Abhijit,Sravana,Dhanishta,Satabhisha,PoorvaBhaadra,UttaraBhaadra,Revati";		
let aStarNames28 = strTemp.split(',');
strTemp = "Janma,Sampath,Vipath,Kshema,Pratyak,Sadhana,Nadhana,Mitra,ParamMitra";
let aStarMaitri = strTemp.split(',');

let aSpecialTaras = [];
aSpecialTaras.push({id:4, scheme:27,name:'Jaati'}); 
aSpecialTaras.push({id:7, scheme:27,name:'Naidhana'});
aSpecialTaras.push({id:10,scheme:27,name:'Karma'}); 
aSpecialTaras.push({id:12,scheme:28,name:'Desa'});
aSpecialTaras.push({id:16,scheme:28,name:'Sanghatika'}); 
aSpecialTaras.push({id:18,scheme:28,name:'Samudayika'});
aSpecialTaras.push({id:19,scheme:28,name:'Aadhaana'}); 
aSpecialTaras.push({id:22,scheme:28,name:'Vainasika'});
aSpecialTaras.push({id:25,scheme:28,name:'Maanasa'}); 
aSpecialTaras.push({id:28,scheme:28,name:'Abhisheka'});


let t2,t3,t4,t5,t6,t7;
let x, y,d="D";
var name,date,time,tz,lat,lon,latdir,londir,lattmp,lontmp,dn,forward=0;

    
var DEGS = 180/Math.PI;
var RADS = Math.PI/180;
var EPS  = 1.0e-12;

var planets    = [];   
/* D1 zod,house  */
var mygrahas   = []; 
var mybhavas   = [];
var myrashis   = [];
/* D2 zod,house  */
var myhoraz    = [];
var myhorah    = [];
/* D6 zod,house  */
var mysashthamshaz = [];
var mysashthamshah = [];
/* D8 zod,house  */
var myashthamsaz = [];
var myashthamsah = [];
/* D9 zod,house  */
var mynavamsaz = [];
var mynavamsah = []; 
/* D12 zod,house */
var mydwadashamsaz = [];
var mydwadashamsah = []; 

/* Nakshatras    */
var mynaksha   = [];
var mynakshal  = [];
var mynakshap  = [];

var index      = [ 2,2,6,6,8,8,9,9,12,12 ];
var division   = [ myhoraz,myhorah,mysashthamshaz,mysashthamshah,
                    myashthamsaz,myashthamsah,mynavamsaz,mynavamsah,
                    mydwadashamsaz,mydwadashamsah ];
       
var AS    = 0; 
var SU    = 1; 
var MO    = 2;  
var MA    = 3; 
var ME    = 4;  
var JU    = 5;  
var VE    = 6; 
var SA    = 7;  
var RA    = 8;  
var KE    = 9;  

var Aries     = 1;      
var Taurus    = 2;      
var Gemini    = 3;      
var Cancer    = 4;      
var Leo       = 5;      
var Virgo     = 6;     
var Libra     = 7;      
var Scorpio   = 8;       
var Sagittarius = 9;    
var Capricorn   = 10;    
var Aquarius  = 11;      
var Pisces    = 12;     
var MAXZOD    = 12;     

var H1  = 1   /* Lagna     Su    E */
var H2  = 2   /* Dhana     Ju,Ve   */
var H3  = 3   /* Sahaja    Ma      */
var H4  = 4   /* Sukha     Mo    S */
var H5  = 5   /* Putra     Ju      */
var H6  = 6   /* Ari       Me,Ma   */
var H7  = 7   /* Yuvati    Ve    W */
var H8  = 8   /* Randhara  Sa      */
var H9  = 9   /* Dharma    Ju      */
var H10 = 10  /* Karma     Su,Sa,Ma,Me N */
var H11 = 11  /* Labha     Ju      */
var H12 = 12  /* Vyaya     Sa      */
var MAXH= 12  /* Max houses        */

var Ashvini        = 1   /* 0°00'Arie  - 13°20'Arie   Ke */
var Bharani        = 2   /* 13°20'Arie - 26°40'Arie   Ve */
var Krittika       = 3   /* 26°40'Arie - 10°00'Taur   Su */
var Rohini         = 4   /* 10°00'Taur - 23°20'Taur   Mo */
var Mrigasira      = 5   /* 23°20'Taur - 6°40'Gemi    Ma */
var Ardra          = 6   /* 6°40'Gemi  - 20°00'Gemi   Ra */
var Punarvasu      = 7   /* 20°00'Gemi - 3°20'Canc    Ju */
var Pushyami       = 8   /* 3°20'Canc  - 16°40'Canc   Sa */
var Aslesha        = 9   /* 16°40'Canc - 0°00'Leo     Me */
var Makha          = 10  /* 0°00'Leo   - 13°20'Leo    Ke */
var PPhalguni      = 11  /* 13°20'Leo  - 26°40'Leo    Ve */
var UPhalguni      = 12  /* 26°40'Leo  - 10°00'Virg   Su */
var Hasta          = 13  /* 10°00'Virg - 23°20'Virg   Mo */
var Chitra         = 14  /* 23°20'Virg - 6°40'Libr    Ma */
var SWati          = 15  /* 6°40'Libr  - 20°00'Libr   Ra */
var Visakha        = 16  /* 20°00'Libr - 3°20'Scor    Ju */
var Anuradha       = 17  /* 3°20'Scor  - 16°40'Scor   Sa */
var Jyeshta        = 18  /* 16°40'Scor - 0°00'Sagi    Me */
var Moola          = 19  /* 0°00'Sagi  - 13°20'Sagi   Ke */
var PShadha        = 20  /* 13°20'Sagi - 26°40'Sagi   Ve */
var UShadha        = 21  /* 26°40'Sagi - 10°00'Capr   Su */
var Sravana        = 22  /* 10°00'Capr - 23°20'Capr   Mo */
var Dhanista       = 23  /* 23°20'Capr - 6°40'Aqua    Ma */ 
var Satabhisha     = 24  /* 6°40'Aqua  - 20°00'Aqua   Ra */
var PBhadra        = 25  /* 20°00'Aqua - 3°20'Pisc    Ju */
var UBhadra        = 26  /* 3°20'Pisc  - 16°40'Pisc   Sa */
var Revati         = 27  /* 16°40'Pisc - 30°00'Pisc   Me */
var MAXNAKSHA      = 27  /* Max  */


$(document).ready(function() 
{	
    showInfo();
    showPlaces(); 
    showDasa();
    showKujaDosham();
    showAnalysis();
		
});

var showInfo = function() 
{
	
	$("#button").on("click",  function()
	{
		parse_input_data();
        calc_position(false);
        calc_positions(); 
        isOK = printInfo('.main');

        printCharts('.main');
        gotoTop('.main')

	});
    
};


var printInfo = function(theDiv) {
     
    let tempStr;
    $(theDiv).empty();
    
    if ( lat == null || lon == null || lat == undefined || lon == undefined || isNaN(lat) || isNaN(lon) ){
        
        printError(' Latitude or Longitude is not proper. Hyd = 17N23 & 78E28.', '.aside2');
        isOK = false; 
        return false;
    }
    
    strTemp = '<h2>Birth Details:</h2><hr><table class="myt">';
    strTemp += '<thead><tr><th>Planet</th><th>Rasi</th><th>Degree</th><th>Nakashatra</th><th>Paada</th></tr></thead>';
       
    for (var i=0; i<=9; i++) {
        strTemp += '<tbody><tr><td>' + aGrahaNames[i] + '</td><td>' + aRasiNames[(mygrahas[i].rasizn-1) ] ;
        strTemp +=  '</td><td>' +  deg2DMS(mygrahas[i].ra.toFixed(3));
        strTemp += '</td><td>' + mynaksha[i] + '</td><td>' + mynakshap[i] + '</td></tr>';       
    }
    
    strTemp += '</tbody></table>';
    $(theDiv).append(strTemp);

    strTemp = '<p class="right1P">' + name + ' - ' + date.toDateString().slice(0,15)  + ', ' + time.toTimeString().slice(0,8) + (thePlaceName ? (', ' + thePlaceName) : '') + '<br>';
    strTemp +=  ' Latitude:' + parseFloat(lat).toFixed(2) + ',  Longitude:' + parseFloat(lon).toFixed(2) + ', GMT: ' + tz + '<br>';
    strTemp += 'Lagnam:  ' + aRasiNames[(mygrahas[0].rasizn-1) ] + ',  Rasi: ' + aRasiNames[(mygrahas[2].rasizn-1) ] + ' - ' + mynaksha[2] + ' - ' + mynakshap[2] + '<br>';
    strTemp +=  "Ayanamsa:" + (calc_ayanamsa(false).toFixed(4)) +'° , '; 
    strTemp += '  Sid.Time:' + (deg2hms(calc_sideral_time(time.getHours(),time.getMinutes(),false)));
    strTemp += '<br>' + "Sunrise: " + calc_sunriseset(true,  false, true, false);
    strTemp += ",  Sunset: "+ calc_sunriseset(false, false, true, false) + '<br>';
    strTemp += "Tithi: "+ calc_tidhi(mygrahas[2].ra,mygrahas[1].ra)  + '<br>';
    strTemp +=  "Vaaram: " + calc_day_of_the_week(false) + ', Day Lord:' + calc_day_lord(false) + ',  Hora Lord:' + calc_hora_lord(false);
    strTemp += '</p>';
    $(theDiv).append(strTemp);
    isOK = true;
    $('.aside2').empty();

    return true;
    
}

function calc_positions(){
    for(let i =0 ; i < 10 ; i++){
        aPosRasi[i] = mygrahas[i].rasizn;
        
    }
    let k = myrashis[0]; 
  
    for(let i = 0 ; i < 10 ; i++){
        aPosBhava[i] = aPosRasi[i] - k ;
        if ( aPosBhava[i] < 0 ) { aPosBhava[i] = aPosBhava[i] + 12;}
        aPosBhava[i]++;
        
    }
    for(let i = 0 ; i < 12 ; i++){
        aBhavaAdhipa[i] = aRasiAdhipaNum[myrashis[i]-1];
        
        aPosBhavaLord[i] = aPosBhava[aBhavaAdhipa[i]];
        
    }
    
    
}


function printCharts(theDiv){
  
        if(isOK){
            
            $(theDiv).append('<h2>Rasi(D1) & Navamsa(D9) Charts</h2><hr>');
            drawCharts(theDiv);
        }

        else{

            printError(' Charts can be viewed only after entering proper data and clicking on Generate button.','.aside2');
           
        }
}


function drawCharts(theDiv){

    let k = myrashis[0];
    let theLagnaRasi = k;

    for(let i = 1; i < 13; i++){
        planetsInNZD1[k] = mybhavas[i]; 
        k = k + 1;
        if ( k > 12 ) { k = 1;}    
    }

    strTemp = '<br><table class="chart" id="chart"><thead><tr><td colspan=4>Rasi Chart</td></tr></thead>';
    strTemp += '<tbody><tr><td>' + planetsInNZD1[12] + '</td><td>' + planetsInNZD1[1] + '</td><td>' + planetsInNZD1[2] + '</td><td>' + planetsInNZD1[3] + '</td></tr>';
    strTemp += '<tr><td>' + planetsInNZD1[11] + '</td><td colspan=2 rowspan=2></td><td>' + planetsInNZD1[4] + '</td></tr>';
    strTemp += '<tr><td>' + planetsInNZD1[10] + '</td></td><td>' + planetsInNZD1[5] + '</td></tr>';
    strTemp += '<tr><td>' + planetsInNZD1[9] + '</td><td>' + planetsInNZD1[8] + '</td><td>' + planetsInNZD1[7] + '</td><td>' + planetsInNZD1[6] + '</td></tr></tbody></table><br>';
    $(theDiv).append(strTemp);


    for ( let i = 0; i < 12; i++){
        planetsInNZD9[i] = "";
    }

    for(let i = 0; i < 10; i++){
        k = mygrahas[i].navzn - 1; 
        
   
        planetsInNZD9[k] = planetsInNZD9[k] + mygrahas[i].name + ' '; 
    }

    strTemp = '<br><table class="chart" id="chart"><thead><tr><td colspan=4>Navamsa Chart</td></tr></thead>';
    strTemp += '<tbody><tr><td>' + planetsInNZD9[11] + '</td><td>' + planetsInNZD9[0] + '</td><td>' + planetsInNZD9[1] + '</td><td>' + planetsInNZD9[2] + '</td></tr>';
    strTemp += '<tr><td>' + planetsInNZD9[10] + '</td><td colspan=2 rowspan=2></td><td>' + planetsInNZD9[3] + '</td></tr>';
    strTemp += '<tr><td>' + planetsInNZD9[9] + '</td></td><td>' + planetsInNZD9[4] + '</td></tr>';
    strTemp += '<tr><td>' + planetsInNZD9[8] + '</td><td>' + planetsInNZD9[7] + '</td><td>' + planetsInNZD9[6] + '</td><td>' + planetsInNZD9[5] + '</td></tr></tbody></table><br>';
    
    $(theDiv).append(strTemp);
    $(theDiv).append("<h4>Notation: Ascendant,Sun,Moon,Mars,Mercury,Jupiter,Venus,Saturn,Rahu,Ketu</h4>");
}


function showKujaDosham(){	
	
	$("#kujadosham").on("click",  function()
	{
		if(isOK){
            
            printKujaDosham('.aside2');     
        }
        else{
            printError(' Kuja Dosham can be viewed only after entering proper data and clicking on Generate.','.aside2');

        }	
        divPosition = $(".aside2").offset();
        $('html,body').animate({scrollTop: divPosition.top}, "slow");	
		
	});
}

function printKujaDosham(theDiv){
      
    let posKuja = mygrahas[3].rasizn; 
    
    let posLagna = mygrahas[0].rasizn;
   
    let posChandra = mygrahas[2].rasizn;
    let posSukra = mygrahas[6].rasizn;
    let posGuru = mygrahas[5].rasizn;
    let relativePosLK, relativePosCK, relativePosSK, relativePosGK;
    strTemp = '<h2>Kuja Dosham:</h2><hr><p class="main" >Kuja Dosham is defined as situation of kuja in: <br>';
    strTemp += aKujaDoshaPos.toString() + ' from Lagna/Chandra/Sukra.</p>'
    
    relativePosLK = findRelativePos(posLagna,posKuja);

    strTemp += '<p class="main" >from Lagna' + ' Kuja is in: ' + relativePosLK  + '.&nbsp' ;
    strTemp += (aKujaDoshaPos.includes(relativePosLK) ? 'Dosham - Yes.</p>' : 'Dosham - No.</p>');
    
    relativePosCK = findRelativePos(posChandra,posKuja);
    strTemp += '<p class="main" >from Chandra' + ' Kuja is in: ' + relativePosCK + '.&nbsp'  ;
    strTemp += (aKujaDoshaPos.includes(relativePosCK) ? 'Dosham - Yes.</p>' : 'Dosham - No.</p>');
   
    relativePosSK = findRelativePos(posSukra,posKuja);
    strTemp += '<p class="main" >from Sukra' + ' Kuja is in: ' + relativePosSK  + '.&nbsp' ;
    strTemp += (aKujaDoshaPos.includes(relativePosSK) ? 'Dosham - Yes.</p>' : 'Dosham - No.</p>');
    
    strTemp += '<p class="main">';
   

    if ( (relativePosLK == 2 ||  relativePosCK == 2 || relativePosSK == 2) && ( posKuja == 3 || posKuja == 6)){
        strTemp += 'Exception: kuja in 2nd and that Rasi is Midhuna or Kanya Rasi.<br>';
    }
   
    if ( (relativePosLK == 12 ||  relativePosCK == 12 || relativePosSK == 12) && ( posKuja == 2 || posKuja == 7)){
        strTemp += 'Exception: kuja in 12th and that is Vrushabha or Tula Rasi.<br>';
    }
    
    if ( (relativePosLK == 4 ||  relativePosCK == 4 || relativePosSK == 4) && ( posKuja == 1 || posKuja == 8)){
         strTemp += 'Exception: kuja in 4th and that is Mesha or Vruschika Rasi.<br>';
    }
 
    if ( (relativePosLK == 7 ||  relativePosCK == 7 || relativePosSK == 7) && ( posKuja == 4 || posKuja == 10)){
         strTemp += 'Exception: kuja in 7th and that is Karkaataka or Makara Rasi.<br>';
    }
 
    if( (relativePosLK == 8 ||  relativePosCK == 8 || relativePosSK == 8) && ( posKuja == 9 || posKuja == 12)){
        strTemp += 'Exception: kuja in 7th and that is Dhanu or Meena Rasi.<br>';
    }
    
    if(posKuja == 5 || posKuja == 11){
        strTemp += 'Exception:  Kuja in Simha or Kumbha Rasi.<br>';
    }


    if(posKuja == posChandra || posKuja == posGuru){
        strTemp += 'Exception: Kuja is in Yuti with Chandra or Guru.<br>';
    }
    
    if(posGuru == 1 || posSukra == 1){
        strTemp += 'Exception: Guru or Sukra is in Lagnam.<br>';
    }

    relativePosGK = findRelativePos(posGuru,posKuja);
    if(relativePosGK == 5 || relativePosGK == 9 || relativePosGK == 4 || relativePosGK == 7 || relativePosGK == 10){
        strTemp += 'Note: Kuja is in Kendra or Kona from Guru.';
    }

    strTemp += '</p><p class="main">Note: Exceptions if any, are, as per Mr BV Raman.<br>';
    strTemp += 'In my opinion, Kuja in Lagna or in 2nd from Moon is Ok.';
    strTemp += ' From Sukra, only Kuja in 7th is critical.</p>';
    
    $(theDiv).empty();
    $(theDiv).append(strTemp);

}

function findRelativePos(fromRef,toPlanet){

    if (fromRef > toPlanet){
        
        return (12 - fromRef + toPlanet +1);
    }
    else if (fromRef == toPlanet ){
        return 1;
    }
    else if( fromRef < toPlanet){
   
        return ( toPlanet - fromRef + 1);    
    }
}


function showPlaces(){	
	
	$("#places").on("click",  function()
	{		
        printPlaces('.aside2');
		
	});
}

function printPlaces(theDiv){

    strTemp = '<h2>Lattitude, Longitude & GMT of a few palces:</h2><hr><table class="myt" id="placest">';
    strTemp += '<thead><tr><th>Place</th><th>Latitude</th><th>Longitude</th><th>GMT</th></tr></thead><tbody>'
    aLL.forEach( function (v1, i1){
        strTemp += '<tr>';
        v1.forEach( function (v2,i2){
            strTemp += '<td>' + v2 + '</td>';
        });
        strTemp += '</tr>';
    });
    strTemp += '<tr><td colspan=4>&nbsp</td></tr></tbody></table>';
    strTemp += '<br>Click on a row to fill the relevant fields.'
    strTemp += '<br><a href="http://www.geonames.org/search.html?" title="Opens in seperate window" target=_blank>';
    strTemp += '<img src="img/search.png" width="16" > Search for Latitude & Longitude...</a>';
    $(theDiv).empty();
    $(theDiv).append(strTemp);
    gotoTop(theDiv);
    onRowClickFillData();
    
}


var showDasa = function() 
{
	
	$("#dasa").on("click",  function()
	{
		
        if(isOK){
            
            calc_vdasa('.aside2');       
        }
        else{
            printError(' Dasa can be viewed only after entering proper data and clicking on Generate button.', '.aside2') ;
            
        }	
        gotoTop('.aside2');
	});
    
};


function showAnalysis(){	
	
	$("#analysis").on("click",  function()
	{
		if(isOK){
            
            printAnalysis('.aside2');     
        }
        else{
            printError(' Analysis can be viewed only after entering proper data and clicking on Generate.' , '.aside2') ;
            
        }	
        gotoTop('.aside2');
		
	});
}

function printAnalysis(theDiv){

    //age
    strTemp = '<h2>Analysis:</h2><hr><p class="leftp">';
    strTemp += "Age = " + moment(date).fromNow(true) + '<br>' ; 
    

    let theWindow = 48/60;
    let theBTime = parseInt(time.getHours()) +  parseInt(time.getMinutes()) / 60 ;
    let theRise = calc_sunriseset(true, false, false, false);
    let theSet  = calc_sunriseset(false, false, false, false);
    if (   Math.abs(theBTime - theRise ) < theWindow) {strTemp += 'Birth around Sunrise.<br>';}
    if (   Math.abs(theBTime - theSet ) < theWindow) {strTemp += 'Birth around Sunset.<br>';}
    else strTemp += 'Sandhya Samayam - Not Applicable.<br>';

  
    if(mygrahas[1].degree <= 1.0) { strTemp += 'Ravi Samkramanam - ' + mygrahas[1].degree.toFixed(2) +  '°'; }
    else strTemp += 'Ravi Samkramanam below one degree - Not Applicable.<br>';
    $(theDiv).append(strTemp );
    

   
    strTemp = calc_tidhi(mygrahas[2].ra,mygrahas[1].ra);
    let tempArray = strTemp.split('-');
    if ( tempArray[2].trim() === "KsheenaChandra") { aNPaapi[2] = 1;}
    let degMoon = mygrahas[2].degree.toFixed(2);
    strTemp = '<p>Chandra is - ' + (aNPaapi[2] == 1 ? 'Paapi(Ksheena)' : 'Subha(Poorna)') + (mygrahas[2].rasinum == 8 ? ', Neecha(0°-3°) ' + degMoon +  '°' : ' ')
            + (mygrahas[2].rasinum == 2 ? ', Uchcha(0°-3°) ' + degMoon +  '°' : ' ');
    

  
    let degBudha = mygrahas[4].degree.toFixed(2);
    let tempStr = "";
    tempStr = (aPosRasi[4] == 12 ? ', Neecha(15-20) ' + degBudha +  '°' : ' ')
    + (aPosRasi[4] == 6 ? ', Uchcha(15-20) ' + degBudha +  '°' : ' ')
    strTemp += '<br> Budha is - Subha. Not with Sani or Kuja.' + tempStr;
    if ( aPosBhava[4] == aPosBhava[3] ) { aNPaapi[4] = 1; strTemp = '<br>Budha is with Kuja. Hence Paapi' + tempStr ;} 
    if ( aPosBhava[4] == aPosBhava[7] ) { aNPaapi[4] = 1; strTemp = '<br>Budha is with Sani. Hence Paapi' + tempStr ;} 
    if ( aPosBhava[4] == aPosBhava[3] && aPosBhava[4] == aPosBhava[7]) { aNPaapi[4] = 1;strTemp = '<br>Budha is with Kuja & Sani. Hence Paapi' + tempStr; } 
    $(theDiv).append(strTemp + '</p>');

     
 
    strTemp = '<p>';
    for ( let i = 1; i < 10 ; i++){
        if (  mygrahas[i].ra >=100 && mygrahas[i].ra < 120)  {strTemp += aGrahaNames[i] + ' - in Sarpa Drekkana<br>'};
        if (  mygrahas[i].ra >=210 && mygrahas[i].ra < 230)  {strTemp += aGrahaNames[i] + ' - in Sarpa Drekkana<br>'};
        if (  mygrahas[i].ra >=350 && mygrahas[i].ra < 360)  {strTemp += aGrahaNames[i] + ' - in Sarpa Drekkana<br>'};
        if (  mygrahas[i].ra >=270 && mygrahas[i].ra < 280)  {strTemp += aGrahaNames[i] + ' - in Nigala Drekkana<br>'};
    }

    
    strTemp += '</p>';
    $(theDiv).append(strTemp );

    
    strTemp = '<table class="myt"> <caption>Naisargika Graha Karakatva Vruddhi/Kshayam based on Sthiti</caption>' ;
    strTemp += '<thead> <tr><th>Planet</th><th>Vrudhdi</th><th>Kshaya</th></thead><tbody>' ;
    for ( let i = 1; i < 10 ; i++){
        aKarakaVrudhdhi[i] = 1;
       
        if ( aPosBhava[i] == 3 || aPosBhava[i] == 6 || aPosBhava[i] == 8 || aPosBhava[i] == 12)
        {
            aKarakaVrudhdhi[i] = 0;
           

        }
        strTemp += '<tr><td>' + aGrahaNames[i] + '</td><td> ' + (aKarakaVrudhdhi[i] == 1 ? 'Yes' : ' ') +
                    '</td><td> ' + (aKarakaVrudhdhi[i] == 0 ? 'Yes' : ' ') + '</td></tr>'
    }
    $(theDiv).append(strTemp + '</tbody></table><br>');

   
    let tempBhava;
    strTemp = '<table class="myt"> <caption>Naisargika Subha/Asubha Graha Sthiti/Drushti Phalam on Bhavas</caption>' ;
    strTemp += '<thead> <tr><th>Bhava</th><th>Name</th><th>Grahas in</th><th>Vrudhdhi</th></thead><tbody>' ;
    for ( let i = 1; i < 10 ; i++){
        
        
        if (  !aNPaapi[i]) 
        {
            aBhavaVrudhdhi[aPosBhava[i] - 1]++; 
            tempBhava = aPosBhava[i] - 1 + 6; 
            if ( tempBhava > 11) { tempBhava = tempBhava - 12;}
            aBhavaVrudhdhi[tempBhava]++; 
            if (i == 5){
                tempBhava = aPosBhava[i] - 1 + 4;
                if ( tempBhava > 11) { tempBhava = tempBhava - 12;}
                aBhavaVrudhdhi[tempBhava]++;
            }
            if (i == 5){ 
                tempBhava = aPosBhava[i] - 1 + 8;
                if ( tempBhava > 11) { tempBhava = tempBhava - 12;}
                aBhavaVrudhdhi[tempBhava]++; //
            }
        }
       
        if (  aNPaapi[i]) {   
          
            tempBhava = aPosBhava[i] - 1 ;
          
            aBhavaVrudhdhi[tempBhava]--; 
            
        
            if ( i < 8){  
                tempBhava = aPosBhava[i] - 1 + 6;
                if ( tempBhava > 11) { tempBhava = tempBhava - 12;}
                aBhavaVrudhdhi[tempBhava]--; 
            }

            if (i == 3){ 
                tempBhava = aPosBhava[i] - 1 + 3;
                if ( tempBhava > 11) { tempBhava = tempBhava - 12;}
                aBhavaVrudhdhi[tempBhava]--; // 
            }
            
            if (i == 3){
                tempBhava = aPosBhava[i] - 1 + 7;
                if ( tempBhava > 11) { tempBhava = tempBhava - 12;}
                aBhavaVrudhdhi[tempBhava]--; 
            }

            if (i == 7){ 
            
                tempBhava = aPosBhava[i] - 1 + 2;
                if ( tempBhava > 11) { tempBhava = tempBhava - 12;}
                aBhavaVrudhdhi[tempBhava]--; 
            }
            if (i == 7){  
                tempBhava = aPosBhava[i] - 1 + 9;
                if ( tempBhava > 11) { tempBhava = tempBhava - 12;}
                aBhavaVrudhdhi[tempBhava]--; 
            } 
                
        }
    }
    
    for ( let j = 0 ; j < 12 ; j++){
        
        tempStr = aBhavaVrudhdhi[j]   
        strTemp += '<tr><td>' + padLeadingZeroes(j+1,2) + '</td><td>' + aBhavaNames[j] + '</td><td>' 
                    + mybhavas[j+1] + '</td><td>' + padPositiveNums(aBhavaVrudhdhi[j]) + '</td></tr>';
        aBhavaVrudhdhi[j] = 0; 
    }

    $(theDiv).append(strTemp + '</tbody></table>');

   
    for ( let j = 0 ; j < 12 ; j++){ 
        aABhavaVrudhdhi[j] = -1; 
    }

    for ( let i = 1; i < 10 ; i++){
            
       
        if(aPosBhava[i] == 3 || aPosBhava[i] == 6 || aPosBhava[i] == 8 || aPosBhava[i] == 12){

           
            if ( i == aBhavaAdhipa[2]) aABhavaVrudhdhi[2]++;
            if ( i == aBhavaAdhipa[5]) aABhavaVrudhdhi[5]++;
            if ( i == aBhavaAdhipa[7]) aABhavaVrudhdhi[7]++;
            if ( i == aBhavaAdhipa[11]) aABhavaVrudhdhi[11]++;
          
        }

        else{ 

            
            if ( i == aBhavaAdhipa[0]) aABhavaVrudhdhi[0]++;
            if ( i == aBhavaAdhipa[1]) aABhavaVrudhdhi[1]++;
            if ( i == aBhavaAdhipa[3]) aABhavaVrudhdhi[3]++;
            if ( i == aBhavaAdhipa[4]) aABhavaVrudhdhi[4]++;
            if ( i == aBhavaAdhipa[6]) aABhavaVrudhdhi[6]++;
            if ( i == aBhavaAdhipa[8]) aABhavaVrudhdhi[8]++;
            if ( i == aBhavaAdhipa[9]) aABhavaVrudhdhi[9]++;
            if ( i == aBhavaAdhipa[10]) aABhavaVrudhdhi[10]++;

        }
        

    }

    strTemp = '<br><table class="myt"> <caption>Adhipatya Subha/Asubha in Subha/Asubha Bhava</caption>' ;
    strTemp += '<thead> <tr><th>Bhava</th><th>Rasi</th><th>Adhipati</th><th>In Bhava</th><th>Vrudhi</th></thead><tbody>' ;
    
    for ( let j = 0 ; j < 12 ; j++){ 
        if(aABhavaVrudhdhi[j] == 0) aABhavaVrudhdhi[j]++ ; 
        strTemp +=  '<tr><td>' + padLeadingZeroes(j+1,2) + '</td><td>' + aRasiNames[myrashis[j]-1] + '</td><td>' + aGrahaNames[aBhavaAdhipa[j]] +  
        '</td><td>'  +  padLeadingZeroes( aPosBhavaLord[j],2 ) + '</td><td>' + 
        padPositiveNums(aABhavaVrudhdhi[j]) + '</td></tr>';
    }
    $(theDiv).append(strTemp + '</tbody></table>');
    
  
}




function parse_input_data ()
{
    name = (document.getElementById('name').value);
    
    parseDatenTime( document.getElementById('date').value, document.getElementById('time').value );
    tz  = (document.getElementById('tz').value);
    parse_latitude(document.getElementById('lat').value.toUpperCase()); 
    parse_longitude(document.getElementById('lon').value.toUpperCase());
}

function parseDatenTime(adate, atime){
    
    let ad = adate.split('-');
    let at = atime.split(':');
    date = new Date(ad[0],ad[1]-1,ad[2],at[0],at[1]);
    time = date;

}
     
function parse_latitude (input) 
{
    
    lat = undefined;
    var tmp = input.replace(/\s+/g,"");
    if (tmp.indexOf("N") !=-1) {
        lattmp=tmp.split("N");
        lat = dms2real(parseInt(lattmp[0]), parseInt(lattmp[1]), parseInt(0));

    }
    else if (tmp.indexOf("S") !=-1) {
        lattmp=tmp.split("S");
        lat = dms2real(parseInt(lattmp[0]), parseInt(lattmp[1]), parseInt(0));
        lat = -lat;       
    }    
}

    
function parse_longitude (input) 
{
    
    lon = undefined;
    var tmp = input.replace(/\s+/g,"");
    if (tmp.indexOf("W") !=-1) {
        lontmp=tmp.split("W");
        lon = dms2real(parseInt(lontmp[0]), parseInt(lontmp[1]), parseInt(0));
        
        lon = -lon;
    }
    else if (tmp.indexOf("E") !=-1) {
        lontmp=tmp.split("E");
        lon = dms2real(parseInt(lontmp[0]), parseInt(lontmp[1]), parseInt(0));       
    }          
}
    
    
function myplanets ( name,index,ra,ruler,r_index,aspect,day,
        happy_zodiac,happy_house,sad_zodiac,sad_house,
        good_friend, bad_friend,transitdeg) 
{
    this.name    = name;
    this.index   = index;
    this.ra      = ra;
    this.ruler   = ruler;
    this.r_index = r_index;
    this.aspect  = aspect;
    this.day     = day;
    this.happy_zodiac = happy_zodiac;
    this.happy_house  = happy_house;
    this.sad_zodiac   = sad_zodiac;
    this.sad_house    = sad_house;
    this.good_friend  = good_friend;
    this.bad_friend   = bad_friend;
    this.transitdeg   = transitdeg;
    this.house     = "";
    this.zodiac    = "";
    this.degree    = "";
    this.dosha     = "";
    this.naksha    = "";
    this.retro     = "";
    this.range     = "";
    this.rasizn    = ""; /* Rasi zodiac index         */
    this.horadeg   = ""; /* Hora degree               */
    this.horazn    = ""; /* Hora zodiac index         */
    this.drekkdeg  = ""; /* Drekkana degree           */
    this.drekkzn   = ""; /* Drekkana zodiac index     */
    this.turydeg   = ""; /* Turyamsa degree           */
    this.turyzn    = ""; /* Turyamsa zodiac index     */
    this.pancdeg   = ""; /* Panchamsa degree          */
    this.panczn    = ""; /* Panchamsa zodiac index    */
    this.shashdeg  = ""; /* Shashthamsa degree        */
    this.shashzn   = ""; /* Shashthamsa zodiac index  */
    this.shaptdeg  = ""; /* Shapthamsa degree         */
    this.shaptzn   = ""; /* Shapthamsa zodiac index   */
    this.ashtdeg   = ""; /* Ashthamsa degree          */
    this.ashtzn    = ""; /* Ashthamsa zodiac index    */
    this.navdeg    = ""; /* Navamsa degree            */
    this.navzn     = ""; /* Navamsa zodiac index      */
    this.dashdeg   = ""; /* Dashamsa degree           */
    this.dashzn    = ""; /* Dashamsa zodiac index     */
    this.ekaddeg   = ""; /* Ekadashamsa degree        */
    this.ekadzn    = ""; /* Ekadashamsa zodiac index  */
    this.dwaddeg   = ""; /* Dwadashamsa degree        */
    this.dwadzn    = ""; /* Dwadashamsa zodiac index  */
    this.getra     = function()  { return this.ra;     }
    this.getzodiac = function()  { return this.zodiac; }
    this.getdegree = function()  { return this.degree; }
    this.compute   = function(transit)  
    {
        if (!transit) this.ra = mod360(this.ra);
        else          this.ra = mod360(this.transitdeg);
        // D2 - parasara traditional, 4 and 5
        this.horadeg   = ((this.ra-15.0)-60.0*Math.floor((this.ra-15.0)*(1.0/60.0))+90);
        this.horazn    = calc_zodiac(this.horadeg);
        // D6 - continuos
        this.shashdeg  = mod2pi(this.ra*6.0*RADS)*DEGS;
        this.shashzn   = calc_zodiac(this.shashdeg);
        // D8 - continuos
        this.ashtdeg   = mod2pi(this.ra*8.0*RADS)*DEGS;  
        this.ashtzn    = calc_zodiac(this.ashtdeg);
        // D9 - continuos
        this.navdeg    = mod2pi(this.ra*9.0*RADS)*DEGS;  
        this.navzn     = calc_zodiac(this.navdeg);
        // D12 - parasara traditional
        var l1 = ((this.ra)-30.0*Math.floor((this.ra)*(1.0/30.0)))*12;
        var l2 = parseInt((this.ra/30))*30;
        this.dwaddeg   = mod2pi((l2+l1)*RADS)*DEGS; 
        this.dwadzn    = calc_zodiac(this.dwaddeg);

        if (this.ra>=0 && this.ra<=30)        {
            this.zodiac="Aries";
            this.rasizn=1; this.range="000-030";
            this.degree=(this.ra-0);
        }
        else if (this.ra>30  && this.ra<=60)  {
            this.zodiac="Taurus";
            this.rasizn=2; this.range="030-060";
            this.degree=(this.ra-30);
        }
        else if (this.ra>60  && this.ra<=90)  {
            this.zodiac="Gemini";
            this.rasizn=3; this.range="060-090";
            this.degree=(this.ra-60);
        }
        else if (this.ra>90  && this.ra<=120) {
            this.zodiac="Cancer";
            this.rasizn=4; this.range="090-120";
            this.degree=(this.ra-90);
        }
        else if (this.ra>120 && this.ra<=150) {
            this.zodiac="Leo";
            this.rasizn=5; this.range="120-150";
            this.degree=(this.ra-120);
        }
        else if (this.ra>150 && this.ra<=180) {
            this.zodiac="Virgo";
            this.rasizn=6; this.range="150-180";
            this.degree=(this.ra-150);
        }
        else if (this.ra>180 && this.ra<=210) {
            this.zodiac="Libra";
            this.rasizn=7; this.range="180-210";
            this.degree=(this.ra-180);
        }
        else if (this.ra>210 && this.ra<=240) {
            this.zodiac="Scorpio";
            this.rasizn=8; this.range="210-240";
            this.degree=(this.ra-210);
        }
        else if (this.ra>240 && this.ra<=270) {
            this.zodiac="Sagittarius";
            this.rasizn=9; this.range="240-270";
            this.degree=(this.ra-240);
        }
        else if (this.ra>270 && this.ra<=300) {
            this.zodiac="Capricorn";
            this.rasizn=10; this.range="270-300";
            this.degree=(this.ra-270);
        }
        else if (this.ra>300 && this.ra<=330) {
            this.zodiac="Aquarius";
            this.rasizn=11; this.range="300-330";
            this.degree=(this.ra-300);
        }
        else if (this.ra>330 && this.ra<=360) {
            this.zodiac="Pisces";
            this.rasizn=12; this.range="330-360";
            this.degree=(this.ra-330);
        }  

            this.compute_division_zodiac();
            this.compute_division_nakshatra();
            this.compute_division_houses();
        }

        this.compute_division_zodiac = function()
        {
        // D1
        var ay = calc_ayanamsa(false);
        var as = calc_ascendant(time.getHours(),time.getMinutes(),false)-ay;
        var x=1;
        for (var i=0; i<MAXZOD; i++)  {
        if (calc_zodiac(as)+i>12) { myrashis[i]=x; x++;            }
        else                      { myrashis[i]=calc_zodiac(as)+i; }   
        }
        // D2
        var x=1;
        var deg = ((as-15.0)-60.0*Math.floor((as-15.0)*(1.0/60.0))+90);
        for (var i=0; i<MAXZOD; i++)   {
        if (calc_zodiac(deg)+i>12) { myhoraz[i]=x; x++;             }
        else                       { myhoraz[i]=calc_zodiac(deg)+i; }   
        }
        // D6
        var x=1;
        var deg = mod2pi(as*6.0*RADS)*DEGS;
        for (var i=0; i<MAXZOD; i++)   {
        if (calc_zodiac(deg)+i>12) { mysashthamshaz[i]=x; x++;             }
        else                       { mysashthamshaz[i]=calc_zodiac(deg)+i; }   
        }
        // D8
        var x=1;
        var deg = mod2pi(as*8.0*RADS)*DEGS;
        for (var i=0; i<MAXZOD; i++)   {
        if (calc_zodiac(deg)+i>12) { myashthamsaz[i]=x; x++;             }
        else                       { myashthamsaz[i]=calc_zodiac(deg)+i; }   
        }
        // D9
        var x=1,deg=0;
        deg = mod2pi(as*9.0*RADS)*DEGS;  
        for (var i=0; i<MAXZOD; i++)   {
        if (calc_zodiac(deg)+i>12) { mynavamsaz[i]=x; x++;              }
        else                       { mynavamsaz[i]=calc_zodiac(deg)+i;  }
        }
        // D12
        var x=1,deg=0;
        var l1 = ((as)-30.0*Math.floor((as)*(1.0/30.0)))*12;
        var l2 = parseInt((as/30))*30;
        deg    = mod2pi((l2+l1)*RADS)*DEGS;  
        for (var i=0; i<MAXZOD; i++)   {
        if (calc_zodiac(deg)+i>12) { mydwadashamsaz[i]=x; x++;              }
        else                       { mydwadashamsaz[i]=calc_zodiac(deg)+i;  }
        }
        }
        this.compute_division_nakshatra = function()
        {
        // 1-Nakshatras, 2-N.lord, 3-N.pada,
            for (var i=0; i<=9; i++) {
                mynaksha [i] = calc_nakshatra(mygrahas[i].getra(),1);
                mynakshal[i] = calc_nakshatra(mygrahas[i].getra(),2);
                mynakshap[i] = calc_nakshatra(mygrahas[i].getra(),3);
            }
        }
        this.compute_division_houses = function()
        {
        // D1
        for (var i=0; i<=9; i++) {
            planets[i] = (mygrahas[i].rasizn);
        }
        calc_houses(myrashis,mybhavas,mygrahas);
        // D2
        for (var i=0; i<=9; i++) {
            planets[i] = (mygrahas[i].horazn);
        }
        calc_houses(myhoraz,myhorah,mygrahas);
        // D6
        for (var i=0; i<=9; i++) {
            planets[i] = (mygrahas[i].shashzn);
        }
        calc_houses(mysashthamshaz,mysashthamshah,mygrahas);
        // D8
        for (var i=0; i<=9; i++) {
            planets[i] = (mygrahas[i].ashtzn);
        }
        calc_houses(myashthamsaz,myashthamsah,mygrahas);
        // D9 
        for (var i=0; i<=9; i++) {
            planets[i] = (mygrahas[i].navzn); //.div name
        }
        calc_houses(mynavamsaz,mynavamsah,mygrahas);
        // D12
        for (var i=0; i<=9; i++) {
            planets[i] = (mygrahas[i].dwadzn);
        }
        calc_houses(mydwadashamsaz,mydwadashamsah,mygrahas);
        }
    };

function calc_zodiac (_deg)
{
    var zodiac;
    var deg = mod360(_deg);

    if (deg>=0 && deg<=30)        {zodiac=Aries;      }
    else if (deg>30  && deg<=60)  {zodiac=Taurus;     }
    else if (deg>60  && deg<=90)  {zodiac=Gemini;     }
    else if (deg>90  && deg<=120) {zodiac=Cancer;     }
    else if (deg>120 && deg<=150) {zodiac=Leo;        }
    else if (deg>150 && deg<=180) {zodiac=Virgo;      }
    else if (deg>180 && deg<=210) {zodiac=Libra;      }
    else if (deg>210 && deg<=240) {zodiac=Scorpio;    }
    else if (deg>240 && deg<=270) {zodiac=Sagittarius;}
    else if (deg>270 && deg<=300) {zodiac=Capricorn;  }
    else if (deg>300 && deg<=330) {zodiac=Aquarius;   }
    else if (deg>330 && deg<=360) {zodiac=Pisces;     }

    return zodiac;
}

function calc_houses (zodiac,house,planetname)
{
    house[1]=""; house[2]=""; house[3]=""; house[4]="";
    house[5]=""; house[6]=""; house[7]=""; house[8]="";
    house[9]=""; house[10]="";house[11]="";house[12]="";

    var i,j;
    for (i=0; i<=11; i++)  {
        for (j=0; j<=9; j++) {
            if (j>9) j=0;
            if (zodiac[i] == planets[j] && (i==0))
            house[1] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==1)
            house[2] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==2)
            house[3] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==3)
            house[4] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==4)
            house[5] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==5)
            house[6] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==6)
            house[7] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==7)
            house[8] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==8)
            house[9] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==9)
            house[10] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==10)
            house[11] +=  planetname[j].name+" ";
            else if (zodiac[i] == planets[j] && i==11)
            house[12] +=  planetname[j].name+" ";
        }
    }
}

function calc_nakshatra (deg,n)
{
    let nakshatra, lord, pada=0, sdeg=0, vperiod = 0, nnum=0, lnum=0; 
  
    if      (deg < 0)     {  deg += 360; }  
    if      (deg>=0.0000  && deg<=13.3333)  {nakshatra="Ashvini";   nnum=1;  lord="Ke"; lnum=1; vperiod = 7;  pada=(deg -   0.0000);sdeg=  0.0000;}
    else if (deg>13.3333  && deg<=26.6667)  {nakshatra="Bharani";   nnum=2;  lord="Ve"; lnum=2; vperiod = 20; pada=(deg -  13.3333);sdeg= 13.3333;}
    else if (deg>26.6667  && deg<=40.0000)  {nakshatra="Krittika";  nnum=3;  lord="Su"; lnum=3; vperiod = 6;  pada=(deg -  26.6667);sdeg= 26.6667;}
    else if (deg>40.0000  && deg<=53.3333)  {nakshatra="Rohini";    nnum=4;  lord="Mo"; lnum=4; vperiod = 10; pada=(deg -  40.0000);sdeg= 40.0000;}
    else if (deg>53.3333  && deg<=66.6667)  {nakshatra="Mrugasira"; nnum=5;  lord="Ma"; lnum=5; vperiod = 7;  pada=(deg -  53.3333);sdeg= 53.3333;}
    else if (deg>66.6667  && deg<=80.0000)  {nakshatra="Ardra";     nnum=6;  lord="Ra"; lnum=6; vperiod = 18; pada=(deg -  66.6667);sdeg= 66.6667;}
    else if (deg>80.0000  && deg<=93.3333)  {nakshatra="Punarvasu"; nnum=7;  lord="Ju"; lnum=7; vperiod = 16; pada=(deg -  80.0000);sdeg= 80.0000;}
    else if (deg>93.3333  && deg<=106.6667) {nakshatra="Pushyami";  nnum=8;  lord="Sa"; lnum=8; vperiod = 19; pada=(deg -  93.3333);sdeg= 93.3333;}
    else if (deg>106.6667 && deg<=120.0000) {nakshatra="Aslesha";   nnum=9;  lord="Me"; lnum=9; vperiod = 17; pada=(deg - 106.6667);sdeg=106.6667;}
    else if (deg>120.0000 && deg<=133.3333) {nakshatra="Makha";     nnum=10; lord="Ke"; lnum=1; vperiod = 7;  pada=(deg - 120.0000);sdeg=120.0000;}
    else if (deg>133.3333 && deg<=146.6667) {nakshatra="P.Phalguni";nnum=11; lord="Ve"; lnum=2; vperiod = 20; pada=(deg - 133.3333);sdeg=133.3333;}
    else if (deg>146.6667 && deg<=160.0000) {nakshatra="U.Phalguni";nnum=12; lord="Su"; lnum=3; vperiod = 6;  pada=(deg - 146.6667);sdeg=146.6667;}
    else if (deg>160.0000 && deg<=173.3333) {nakshatra="Hasta";     nnum=13; lord="Mo"; lnum=4; vperiod = 10; pada=(deg - 160.0000);sdeg=160.0000;}
    else if (deg>173.3333 && deg<=186.6667) {nakshatra="Chitra";    nnum=14; lord="Ma"; lnum=5; vperiod = 7;  pada=(deg - 173.3333);sdeg=173.3333;}
    else if (deg>186.6667 && deg<=200.0000) {nakshatra="Swati";     nnum=15; lord="Ra"; lnum=6; vperiod = 18; pada=(deg - 186.6667);sdeg=186.6667;}
    else if (deg>200.0000 && deg<=213.3333) {nakshatra="Visakha";   nnum=16; lord="Ju"; lnum=7; vperiod = 16; pada=(deg - 200.0000);sdeg=200.0000;}
    else if (deg>213.3333 && deg<=226.6667) {nakshatra="Anuradha";  nnum=17; lord="Sa"; lnum=8; vperiod = 19; pada=(deg - 213.3333);sdeg=213.3333;}
    else if (deg>226.6667 && deg<=240.0000) {nakshatra="Jyeshta";   nnum=18; lord="Me"; lnum=9; vperiod = 17; pada=(deg - 226.6667);sdeg=226.6667;}
    else if (deg>240.0000 && deg<=253.3333) {nakshatra="Moola";     nnum=19; lord="Ke"; lnum=1;  vperiod = 7;  pada=(deg - 240.0000);sdeg=240.0000;}
    else if (deg>253.3333 && deg<=266.6667) {nakshatra="P.Shadha";  nnum=20; lord="Ve"; lnum=2; vperiod = 20; pada=(deg - 253.3333);sdeg=253.3333;}
    else if (deg>266.6667 && deg<=280.0000) {nakshatra="U.Shadha";  nnum=21; lord="Su"; lnum=3; vperiod = 6;  pada=(deg - 266.6667);sdeg=266.6667;}
    else if (deg>280.0000 && deg<=293.3333) {nakshatra="Sravanam";  nnum=22; lord="Mo"; lnum=4; vperiod = 10; pada=(deg - 280.0000);sdeg=280.0000;}
    else if (deg>293.3333 && deg<=306.6667) {nakshatra="Dhanista";  nnum=23; lord="Ma"; lnum=5; vperiod = 7;  pada=(deg - 293.3333);sdeg=293.3333;}
    else if (deg>306.6667 && deg<=320.0000) {nakshatra="Satabhisha";nnum=24; lord="Ra"; lnum=6; vperiod = 18; pada=(deg - 306.6667);sdeg=306.6667;}
    else if (deg>320.0000 && deg<=333.3333) {nakshatra="P.Bhadra";  nnum=25; lord="Ju"; lnum=7; vperiod = 16; pada=(deg - 320.0000);sdeg=320.0000;}
    else if (deg>333.3333 && deg<=346.6667) {nakshatra="U.Bhadra";  nnum=26; lord="Sa"; lnum=8; vperiod = 19; pada=(deg - 333.3333);sdeg=333.3333;}
    else if (deg>346.6667 && deg<=360.0000) {nakshatra="Revati";    nnum=27; lord="Me"; lnum=9; vperiod = 17; pada=(deg - 346.6667);sdeg=346.6667;}

    if      (n == 1)  return nakshatra;
    else if (n == 2)  return lord;
    else if (n == 3)  {
    if (pada >= 0.000000 && pada <=3.333334)
        return 1;
    if (pada > 3.333334  && pada <=6.666667)
        return 2;
    if (pada > 6.666667  && pada <=9.999999)
        return 3;
    if (pada > 9.999999  && pada <=13.400000)
        return 4;
    }
    else if (n == 4)  {
        return sdeg;        
    }
    else if (n == 5)  {
        return nnum;       
    }
    else if (n == 6)  {
        return vperiod;     
    }
    else if (n == 7)  {
        return lnum;    
    }

}

function calc_planets_position () 
{
    var today = new Date();
    dn = calc_day_number(time.getHours(),time.getMinutes(),false);

    var jd    = calc_julian_date(time.getHours(),time.getMinutes(),tz,false);
    var jdnow = calc_julian_date(today.getHours(),today.getMinutes(),tz,true);

    var ay    = calc_ayanamsa(false);
    var aynow = calc_ayanamsa(true);

    var as    = calc_ascendant(time.getHours(),time.getMinutes(),false)-ay;
    var asnow = calc_ascendant(today.getHours(),today.getMinutes(),true)-aynow;

    mygrahas[0] = new myplanets("As",AS,as,"","","","","","","","","","",asnow);

    mygrahas[1] = new myplanets("Su",SU,calc_vsop87(1,jd)-ay,"Leo",Leo,"7th","Sunday",
            "Le,Ar","1,5,9,10","Li","4,6,7,8,12","Mo,Ma,Ju","Sa,Ve",
            calc_vsop87(1,jdnow)-aynow);

    mygrahas[2] = new myplanets("Mo",MO,calc_moon_positionIII(false)-ay,"Cancer",Cancer,"7th",
            "Monday","Ca,Ta","4,7,9,11,12","Sc,Cp","2,3,6,8","Su,Me"," - ",
            calc_moon_positionIII(true)-aynow);

    mygrahas[3] = new myplanets("Ma",MA,calc_vsop87(3,jd)-ay,"Aries",Aries,"4,7,8th",
            "Tuesday","Ar,Sc,Cp","1,3,5,8,10,11","Ca,Li,Pi","2,4,6,12","Su,Mo,Ju","Me",
            calc_vsop87(3,jdnow)-aynow);  //1

    mygrahas[4] = new myplanets("Me",ME,calc_vsop87(4,jd)-ay,"Virgo",Virgo,"7th",
            "Wednesday","Vi,Ge","1,3,5,6,7,10,11","Sa,Pi","2,4,8,9,12","Ve,Su","Mo",
            calc_vsop87(4,jdnow)-aynow);  //2

    mygrahas[5] = new myplanets("Ju",JU,calc_vsop87(5,jd)-ay,"Sagittarius",Sagittarius,"5,7,9th",
            "Thursday","Ca","1,4,5,7,9,10,2,11","Cp","2,11","Su,Mo,Ma","Ve,Me",
            calc_vsop87(5,jdnow)-aynow);  //3

    mygrahas[6] = new myplanets("Ve",VE,calc_vsop87(6,jd)-ay,"Libra",Libra,"7th",
            "Friday","Li,Ta,Pi","1,2,4,5,7.9.11,12","Sc,Vi","3,6,8,10","Sa,Me","Su,Mo",
            calc_vsop87(6,jdnow)-aynow);  //4

    mygrahas[7] = new myplanets("Sa",SA,calc_vsop87(7,jd)-ay,"Aquarius",Aquarius,"3,7,10th",
            "Saturday","Li,Cp,Aq","3,6,7,10,11","Ar,Ca","4,5,8,9,12","Me,Ve","Su,Mo,Ma",
            calc_vsop87(7,jdnow)-aynow);  //5

    mygrahas[8] = new myplanets("Ra",RA,calc_moon_acending_node(false),"","","5,7,9th","",
            "Ta,Ge,Vi,Li","1,2,3,5,10,11","Sg,Ar,Le,Pi","4,6,7,8,9,12"," - "," - ",
            calc_moon_acending_node(true));

    mygrahas[9] = new myplanets("Ke",KE,mod360(calc_moon_acending_node(false)+180),"","","5,7,9th","",
            "Sc,Pi,Sg,Ar","4,6,8,9,12","Ta,Ge,Vi,Li","1,2,3,5,7,10,11"," - "," - ",
            calc_moon_acending_node(true)+180);
}

function calc_position (transit)
{   

    calc_planets_position();
    for (var i=0; i<=9; i++) {  mygrahas[i].compute(transit); }
}


function elements ()
{   
    

    a = parseFloat("0");        
    e = parseFloat("0");       
    i = parseFloat("0");       
    O = parseFloat("0");       
    w = parseFloat("0");       
    L = parseFloat("0");        
}

function calc_day_number (hours,minutes,transit)
{   
    

    var today = new Date(),yy,mm,dd;
    if (!transit) {
        yy = date.getUTCFullYear();
        mm = date.getUTCMonth()+1;
        dd = date.getDate();
    }
    else {
        yy = today.getUTCFullYear();
        mm = today.getUTCMonth()+1;
        dd = today.getUTCDate();
    }   
    if (mm < 3) { yy -= 1; mm += 12; }

    if (yy*10000+mm*100+dd > 15821004) { 
        var a = Math.floor(0.01 * yy);
        var b = 2 - a + Math.floor(0.25 * a);
    }
    else {
        var a = Math.floor(0.01 * yy);
        var b = 0*(2 - a + Math.floor(0.25 * a));
    }

    var c  = Math.floor(365.25*yy);
    var d  = Math.floor(30.6001*(mm+1));

    return (b + c + d - 730550.5 + dd + (((hours-tz)) + minutes/60.0)/24.0);
}

function calc_julian_date (hours,minutes,_tz,transit) 
{   
    

    var today = new Date(),yy,mm,dd;
    if (!transit) { 
    
        yy=date.getFullYear();
        mm=date.getMonth()+1;
        dd=date.getDate();

    }
    else {
        yy=today.getUTCFullYear();
        mm=today.getUTCMonth()+1;
        dd=today.getUTCDate();
    }
    var jy = yy;
    var jm = mm;
    var df;
    if (mm > 2) { jy = yy; jm++;     } 
    else        { jy--;    jm += 13; }

    var j = Math.floor(365.25 * jy) + Math.floor(30.6001*jm) + dd + 1720995.0;
    if (dd + 31 * (mm + 12 * yy) >= 588829) {
    var a = Math.floor(0.01 * jy);
    j += 2 - a + Math.floor(0.25 * a);
    }

    df = (hours - _tz) / 24.0 - 0.5; 
    if (df < 0.0) { df += 1.0; --j; }
    var fc = df + (minutes + dT(transit) / 60.0) / 60.0 / 24.0;
    var jd = Math.floor(((j + fc) * 10000000));
    if ((((j + fc) * 10000000) - jd) > 0.5) ++jd;
    else jd *= 1.0;
    return (jd * 0.0000001);
}

function calc_day_of_the_week (transit)
{ 
    var jd  = calc_julian_date(time.getHours(),time.getMinutes(),0,transit);
    var day = (Math.floor(jd + 0.5) + 1) % 7;
    var str;
    let myvar = parseInt(time.getHours()) +  parseInt(time.getMinutes()) / 60;
    if ( myvar < calc_sunriseset(true, false, false, false)){
        day = day -1;
        if ( day < 0) {
            day = 6;
        }
    }
    switch (day) {
        case 0:
        str="Sunday";
        break;
        case 1:
        str="Monday";
        break;
        case 2:
        str="Tuesday";         
        break;
        case 3:
        str="Wednesday";                
        break;
        case 4:
        str="Thursday";         
        break;
        case 5:  
        str="Friday";       
        break;
        case 6:
        str="Saturday";         
        break;
        default:
        str="NaN"; 
    }

    return str;
}

function calc_sideral_time (hours,minutes,transit)
{
      
    if (londir == "W")
    lon = -lon;

    var t    = (calc_day_number(hours,minutes,transit)/36525.0);
    var tt   = t * 36525.0
    var LMST = mod360(280.46061837 + 360.98564736629 * tt
    + 0.000387933*t*t - (t*t*t)/38710000 + lon);
    return LMST;
}

function calc_ra (p)
{
    
    var cy = (dn/36525); 

    var planet = new elements();
    mean_elements(planet, p);
    var ap = planet.a;
    var ep = planet.e;
    var ip = planet.i;
    var op = planet.O;
    var pp = planet.w;
    var lp = planet.L;

    var earth = new elements();
    mean_elements(earth, 0);
    var ae = earth.a;
    var ee = earth.e;
    var ie = earth.i;
    var oe = earth.O;
    var pe = earth.w;
    var le = earth.L; 
  
    var me = mod2pi(le - pe);
    var ve = true_anomaly(me, ee);
    var re = ae*(1 - ee*ee)/(1 + ee*Math.cos(ve));
 
    var xe = re*Math.cos(ve + pe);
    var ye = re*Math.sin(ve + pe);
    var ze = 0.0;

    var mp = mod2pi(lp - pp);
    var vp = true_anomaly(mp, planet.e);
    var rp = ap*(1 - ep*ep)/(1 + ep*Math.cos(vp));

    var xh = rp*(Math.cos(op)*Math.cos(vp + pp - op) - Math.sin(op)*Math.sin(vp + pp - op)*Math.cos(ip));
    var yh = rp*(Math.sin(op)*Math.cos(vp + pp - op) + Math.cos(op)*Math.sin(vp + pp - op)*Math.cos(ip));
    var zh = rp*(Math.sin(vp + pp - op)*Math.sin(ip));

    if (p == 0) {
        xh = 0;
        yh = 0;
        zh = 0;
    }

    var xg = xh - xe;
    var yg = yh - ye;
    var zg = zh - ze;

    var ecl = ((23.4392911 - 0.0000003563) * cy) * RADS;             
    var xeq = xg;
    var yeq = yg*Math.cos(ecl) - zg*Math.sin(ecl);
    var zeq = yg*Math.sin(ecl) + zg*Math.cos(ecl);

    ra = mod2pi(Math.atan2(yeq, xeq))*DEGS;

    return ra;
}

function true_anomaly (M, e)
{
    var V, E1;

    var E = M + e*Math.sin(M)*(1.0 + e*Math.cos(M));
    do                                   
    {
        E1 = E;
        E  = E1 - (E1 - e*Math.sin(E1) - M)/(1 - e*Math.cos(E1));
    }
    while (Math.abs( E - E1 ) > EPS);

    V = 2*Math.atan(Math.sqrt((1 + e)/(1 - e))*Math.tan(0.5*E));
    if (V < 0) V = V + (2*Math.PI);

    return V;
}

function mean_elements (p, i)
{
    var cy = dn/36525;                    

    switch (i) {
        case 0: // Sun
        p.a = 1.00000011 - 0.00000005*cy;
        p.e = 0.01671022 - 0.00003804*cy;
        p.i = (  0.00005 -    46.94*cy/3600)*RADS;
        p.O = (-11.26064 - 18228.25*cy/3600)*RADS;
        p.w = (102.94719 +  1198.28*cy/3600)*RADS;
        p.L = mod2pi((100.46435 + 129597740.63*cy/3600)*RADS);
        break;
        case 1: // Mars
        p.a = 1.52366231 - 0.00007221*cy;
        p.e = 0.09341233 + 0.00011902*cy;
        p.i = (  1.85061 -   25.47*cy/3600)*RADS;
        p.O = ( 49.57854 - 1020.19*cy/3600)*RADS;
        p.w = (336.04084 + 1560.78*cy/3600)*RADS;
        p.L = mod2pi((355.45332 + 68905103.78*cy/3600)*RADS);
        break;
        case 2: // Mercury
        p.a = 0.38709893 + 0.00000066*cy;
        p.e = 0.20563069 + 0.00002527*cy;
        p.i = ( 7.00487  -  23.51*cy/3600)*RADS;
        p.O = (48.33167  - 446.30*cy/3600)*RADS;
        p.w = (77.45645  + 573.57*cy/3600)*RADS;
        p.L = mod2pi((252.25084 + 538101628.29*cy/3600)*RADS);
        break;
        case 3: // Jupiter
        p.a = 5.20336301 + 0.00060737*cy;
        p.e = 0.04839266 - 0.00012880*cy;
        p.i = (  1.30530 -    4.15*cy/3600)*RADS;
        p.O = (100.55615 + 1217.17*cy/3600)*RADS;
        p.w = ( 14.75385 +  839.93*cy/3600)*RADS;
        p.L = mod2pi((34.40438 + 10925078.35*cy/3600)*RADS);
        break;
        case 4: // Venus
        p.a = 0.72333199 + 0.00000092*cy;
        p.e = 0.00677323 - 0.00004938*cy;
        p.i = (  3.39471 -   2.86*cy/3600)*RADS;
        p.O = ( 76.68069 - 996.89*cy/3600)*RADS;
        p.w = (131.53298 - 108.80*cy/3600)*RADS;
        p.L = mod2pi((181.97973 + 210664136.06*cy/3600)*RADS);
        break;   
        case 5: // Shani
        p.a = 9.53707032 - 0.00301530*cy;
        p.e = 0.05415060 - 0.00036762*cy;
        p.i = (  2.48446 +    6.11*cy/3600)*RADS;
        p.O = (113.71504 - 1591.05*cy/3600)*RADS;
        p.w = ( 92.43194 - 1948.89*cy/3600)*RADS;
        p.L = mod2pi((49.94432 + 4401052.95*cy/3600)*RADS);
        break;
        default:
        window.alert(" Have you discovered a new planet :) ");
    }
}

function calc_vsop87 (planet,jd)
{

    var  X=0, Y=1, Z=2;
    var  Xp,  Yp,  Zp,  Rp;
    var  Xe,  Ye,  Ze,  Re;
    var  Xa,  Ya,  Za,  Ra;

    var T = (jd - 2451545.0)/365250.0;

    calc_earth(T);

    Xe = earth[X];
    Ye = earth[Y];
    Ze = earth[Z];

    switch (planet) {
        case 1:
        Xp = -earth[X];
        Yp = -earth[Y];
        Zp = -earth[Z];
        break;
        case 2:
        
        break;
        case 3:
        calc_mars(T);
        Xp = mars[X];
        Yp = mars[Y];
        Zp = mars[Z];
        break;
        case 4:
        calc_mercury(T);
        Xp = mercury[X];
        Yp = mercury[Y];
        Zp = mercury[Z];
        break;
        case 5: 
        calc_jupiter(T);
        Xp = jupiter[X];
        Yp = jupiter[Y];
        Zp = jupiter[Z];
        break;  
        case 6: 
        calc_venus(T); 
        Xp = venus[X];
        Yp = venus[Y];
        Zp = venus[Z];
        break;
        case 7: 
        calc_shani(T);
        Xp = shani[X];
        Yp = shani[Y];
        Zp = shani[Z];
        break;
        default:
        window.alert(" error ;) ");
    }

    if (planet == SU) { Xe=0; Ye=0; Ze=0; }

    Xa = (Xp - Xe);
    Ya = (Yp - Ye);
    Za = (Zp - Ze);

    Ra = Math.atan2(Ya,Xa)*DEGS;

    return Ra;
}

function calc_moon_positionI () 
{
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var jy = year;
    var jm = month;
    var jh = time.getHours() - tz + time.getMinutes()/60;
    if (month < 3) { jy -= 1; jm += 12 };      
    if (year*10000+month*100+day > 15821004) {
    var a = Math.floor(0.01 * jy);
    var b = 2 - a + Math.floor(0.25 * a);
    }
    else {
    var a = Math.floor(0.01 * jy);
    var b = 0*(2 - a + Math.floor(0.25 * a));
    }
    var JD = Math.floor(365.25 * jy) 
    +Math.floor(30.6001 * (jm + 1))
    -730550.4 + day + (jh) / 24 + b;

    var T = JD / 36525.0;

    var Ls = mod360(280.466 + 36000.8 * T);

    var Ms = mod360(357.529+35999 * T - 0.0001536 * T*T + T*T*T/24490000);

    var C =   Math.sin(Ms*RADS) * (1.915 - 0.004817 * T - 0.000014 * T*T)
    + (0.01999 - 0.000101 * T) * Math.sin(2*Ms*RADS) 
    +  0.00029 * Math.sin(3*Ms*RADS);

    var v = Ms + C;

    var e = 0.01671 - 0.00004204 * T - 0.0000001236 * T*T;

    var rs = 0.99972 / (1 + e * Math.cos(v*RADS));

    var ls = Ls + C;

    var Ns = mod360(125.04 - 1934.1 * T);

    var Ls = ls - 0.00569 - 0.00478 * Math.sin(Ns*RADS);

    var ecl = (84381.448 - 46.815 * T)/3600;

    var xs = Math.sin(ls*RADS) * Math.cos(ecl*RADS);
    var ys = 0;
    var zs = Math.cos(ls*RADS);

    RAs = mod2pi(Math.atan2(xs-ys,zs))*DEGS;

    var F = mod360(93.2721 + 483202 * T - 0.003403 * T*T - T*T*T/3526000);

    var Lm = mod360(218.316 + 481268 * T);

    var Mm = mod360(134.963 + 477199 * T + 0.008997 * T*T + T*T*T/69700);

    var D = mod360(297.85 + 445267 * T - 0.00163 * T*T + T*T*T/545900);

    var rm = 1 + (-20954 * Math.cos(Mm*RADS) 
    - 3699 * Math.cos((2*D-Mm)*RADS) 
    - 2956 * Math.cos(2*D)*RADS) / 385000;

    var lat  = 5.128  * Math.sin(F*RADS) 
    + 0.2806 * Math.sin((Mm+F)*RADS)
    + 0.2777 * Math.sin((Mm-F)*RADS) 
    + 0.1732 * Math.sin((2*D-F)*RADS);

    var term = 6.289  * Math.sin(Mm*RADS) 
    + 1.274  * Math.sin((2*D-Mm)*RADS) 
    + 0.6583 * Math.sin(2*D*RADS)
    + 0.2136 * Math.sin(2*Mm*RADS) 
    - 0.1851 * Math.sin(Ms*RADS) 
    - 0.1143 * Math.sin(2*F*RADS)
    + 0.0588 * Math.sin((2*D - 2*Mm)*RADS) 
    + 0.0572 * Math.sin((2*D - Ms-Mm)*RADS) 
    + 0.0533 * Math.sin((2*D + Mm)*RADS);

    var lon = term + Lm;

    var xm = Math.sin(lon*RADS) * Math.cos(ecl*RADS);
    var ym = Math.tan(lat*RADS) * Math.sin(ecl*RADS);
    var zm = Math.cos(lon*RADS);

    RAm = mod2pi(Math.atan2(xm-ym,zm))*DEGS;

    return RAm;
}

function calc_moon_positionII () 
{
    var JD =  calc_julian_date(time.getHours(),time.getMinutes(),tz,false) - 2451543.5; 

    var N = mod2pi((125.1228 - 0.0529538083  * JD)*RADS);  
    var i =  5.1454*RADS;                          
    var w = mod2pi((318.0634 + 0.1643573223  * JD)*RADS);  
    var a =  60.2666; /* 0.002569489 AU; 60.2666 radii; */                              
    var e =  0.054900;                           
    var M = mod2pi((115.3654 + 13.0649929509 * JD)*RADS);

    var cy = JD/36525;
    var ecl = 23.4393 - 3.563E-7 * JD;

    var E = M + e * Math.sin(M) * ( 1.0 + e * Math.cos(M) );
    var E1;
    do                                   
    {
        E1 = E;
        E  = E1 - (E1 - e*Math.sin(E1) - M)/(1 - e*Math.cos(E1));
    }
    while (Math.abs( E - E1 ) > EPS);

    var xv = a*( Math.cos(E) - e );
    var yv = a*( Math.sqrt(1 - e*e) * Math.sin(E) );

    var v = mod2pi(Math.atan2( yv, xv ));
    var r = Math.sqrt( xv*xv + yv*yv );

    var xh = r * ( Math.cos(N) * Math.cos(v+w) - Math.sin(N) * Math.sin(v+w) * Math.cos(i) );
    var yh = r * ( Math.sin(N) * Math.cos(v+w) + Math.cos(N) * Math.sin(v+w) * Math.cos(i) );
    var zh = r * ( Math.sin(v+w) * Math.sin(i) );

    var xe = xh;
    var ye = yh * Math.cos(ecl) - zh*Math.sin(ecl);
    var ze = yh * Math.sin(ecl) + zh*Math.cos(ecl);

    var lonecl = mod2pi(Math.atan2( yh,xh )); 
    var latecl = (Math.atan2( zh, Math.sqrt(xh*xh + yh*yh) ));
    var recl   = (Math.sqrt( xe*xe + ye*ye + ze*ze ));

    var Ns = 0.0;  
    var as = 1.00000011 - 0.00000005*cy;
    var es = 0.016709 - 1.151E-9 * cy;
    var is = (0.00005 -    46.94*cy/3600)*RADS;
    var ws = mod2pi((282.9404 + 4.70935E-5 * JD)*RADS);      
    var Ms = mod2pi((356.0470 + 0.9856002585 * JD)*RADS);    
    var Ls = mod2pi((Ms*DEGS + ws*DEGS)*RADS); 


    var Mm = M*DEGS;
    var Lm = mod2pi(N + w + M)*DEGS;
    var D  = Lm-Ls*DEGS;
    var F  = Lm-N*DEGS;

    var tlon,tlat,tr;

    tlon =  -1.274 * Math.sin(Mm*RADS - 2*D*RADS)
    +0.658 * Math.sin(2*D*RADS)         
    -0.186 * Math.sin(Ms)          
    -0.059 * Math.sin(2*Mm*RADS - 2*D*RADS)
    -0.057 * Math.sin(Mm*RADS - 2*D*RADS + Ms)
    +0.053 * Math.sin(Mm*RADS + 2*D*RADS)
    +0.046 * Math.sin(2*D*RADS - Ms)
    +0.041 * Math.sin(Mm*RADS - Ms)
    -0.035 * Math.sin(D*RADS)            
    -0.031 * Math.sin(Mm*RADS + Ms)
    -0.015 * Math.sin(2*F*RADS - 2*D*RADS)
    +0.011 * Math.sin(Mm*RADS  - 4*D*RADS);
    tlat =  -0.173 * Math.sin(F*RADS - 2*D*RADS)
    -0.055 * Math.sin(Mm*RADS - F*RADS - 2*D*RADS)
    -0.046 * Math.sin(Mm*RADS + F*RADS - 2*D*RADS)
    +0.033 * Math.sin(F*RADS + 2*D*RADS)
    +0.017 * Math.sin(2*Mm*RADS + F*RADS);
    tr   =  -0.58  * Math.cos(Mm*RADS - 2*D*RADS)
    -0.46  * Math.cos(2*D*RADS);

    lonecl = (lonecl*DEGS + tlon);
    latecl = (latecl*DEGS + tlat);
    r      = (r + tr);

    var xg = r * Math.cos(lonecl*RADS) * Math.cos(latecl*RADS);
    var yg = r * Math.sin(lonecl*RADS) * Math.cos(latecl*RADS);
    var zg = r * Math.sin(latecl*RADS);

    xe = xg;
    ye = yg * Math.cos(ecl*RADS) - 0 * Math.sin(ecl);
    ze = yg * Math.sin(ecl*RADS) + 0 * Math.cos(ecl);

    var ra   = mod2pi(Math.atan2(ye, xe))*DEGS;

    return ra;
}

function calc_moon_positionIII (transit) 
{
    
    var lrCoeff = [60]; for (var i=0; i<60; i++) { lrCoeff[i] = [4] }
    lrCoeff = [
    [0, 0, 1, 0],[2, 0,-1, 0],[2, 0, 0, 0],[0, 0, 2, 0],[0, 1, 0, 0],[0, 0, 0, 2],[2, 0,-2, 0],
    [2,-1,-1, 0],[2, 0, 1, 0],[2,-1, 0, 0],[0, 1,-1, 0],[1, 0, 0, 0],[0, 1, 1, 0],[2, 0, 0,-2],
    [0, 0, 1, 2],[0, 0, 1,-2],[4, 0,-1, 0],[0, 0, 3, 0],[4, 0,-2, 0],[2, 1,-1, 0],[2, 1, 0, 0],
    [1, 0,-1, 0],[1, 1, 0, 0],[2,-1, 1, 0],[2, 0, 2, 0],[4, 0, 0, 0],[2, 0,-3, 0],[0, 1,-2, 0],
    [2, 0,-1, 2],[2,-1,-2, 0],[1, 0, 1, 0],[2,-2, 0, 0],[0, 1, 2, 0],[0, 2, 0, 0],[2,-2,-1, 0],
    [2, 0, 1,-2],[2, 0, 0, 2],[4,-1,-1, 0],[0, 0, 2, 2],[3, 0,-1, 0],[2, 1, 1, 0],[4,-1,-2, 0],
    [0, 2,-1, 0],[2, 2,-1, 0],[2, 1,-2, 0],[2,-1, 0,-2],[4, 0, 1, 0],[0, 0, 4, 0],[4,-1, 0, 0],
    [1, 0,-2, 0],[2, 1, 0,-2],[0, 0, 2,-2],[1, 1, 1, 0],[3, 0,-2, 0],[4, 0,-3, 0],[2,-1, 2, 0],
    [0, 2, 1, 0],[1, 1,-1, 0],[2, 0, 3, 0],[2, 0,-1,-2]];

    var bCoeff = [60]; for (var i=0; i<60; i++) { bCoeff[i] = [4] }
    bCoeff = [
    [0, 0, 0, 1],[ 0, 0, 1, 1],[ 0, 0, 1,-1],[ 2, 0, 0,-1],[ 2, 0,-1, 1],[ 2, 0,-1,-1],[ 2, 0, 0, 1],
    [0, 0, 2, 1],[ 2, 0, 1,-1],[ 0, 0, 2,-1],[ 2,-1, 0,-1],[ 2, 0,-2,-1],[ 2, 0, 1, 1],[ 2, 1, 0,-1],
    [2,-1,-1, 1],[ 2,-1, 0, 1],[ 2,-1,-1,-1],[ 0, 1,-1,-1],[ 4, 0,-1,-1],[ 0, 1, 0, 1],[ 0, 0, 0, 3],
    [0, 1,-1, 1],[ 1, 0, 0, 1],[ 0, 1, 1, 1],[ 0, 1, 1,-1],[ 0, 1, 0,-1],[ 1, 0, 0,-1],[ 0, 0, 3, 1],
    [4, 0, 0,-1],[ 4, 0,-1, 1],[ 0, 0, 1,-3],[ 4, 0,-2, 1],[ 2, 0, 0,-3],[ 2, 0, 2,-1],[ 2,-1, 1,-1],
    [2, 0,-2, 1],[ 0, 0, 3,-1],[ 2, 0, 2, 1],[ 2, 0,-3,-1],[ 2, 1,-1, 1],[ 2, 1, 0, 1],[ 4, 0, 0, 1],
    [2,-1, 1, 1],[ 2,-2, 0,-1],[ 0, 0, 1, 3],[ 2, 1, 1,-1],[ 1, 1, 0,-1],[ 1, 1, 0, 1],[ 0, 1,-2,-1],
    [2, 1,-1,-1],[ 1, 0, 1, 1],[ 2,-1,-2,-1],[ 0, 1, 2, 1],[ 4, 0,-2,-1],[ 4,-1,-1,-1],[ 1, 0, 1,-1],
    [4, 0, 1,-1],[ 1, 0,-1,-1],[ 4,-1, 0,-1],[ 2,-2, 0, 1]];

    var lTerms = [
    6288774,1274027,658314,213618,-185116,-114332,58793,57066,53322,45758,-40923,-34720,
    -30383,15327,-12528,10980,10675,10034,8548,-7888,-6766,-5163,4987,4036,3994,3861,3665,
    -2689,-2602,2390,-2348,2236,-2120,-2069,2048,-1773,-1595,1215,-1110,-892,-810,759,-713,
    -700,691,596,549,537,520,-487,-399,-381,351,-340,330,327,-323,299,294,0];
                
    var rTerms = [
    -20905355,-3699111,-2955968,-569925,48888,-3149,246158,-152138,-170733,-204586,-129620,
    108743,104755,10321,0,79661,-34782,-23210,-21636,24208,30824,-8379,-16675,-12831,-10445,
    -11650,14403,-7003,0,10056,6322,-9884,5751,0,-4950,4130,0,-3958,0,3258,2616,-1897,-2117,
    2354,0,0,-1423,-1117,-1571,-1739,0,-4421,0,0,0,0,1165,0,0,8752];             

    var bTerms = [
    5128122,280602,277693,173237,55413,46271,32573,17198,9266,8822,8216,4324,4200,-3359,2463,
    2211,2065,-1870,1828,-1794,-1749,-1565,-1491,-1475,-1410,-1344,-1335,1107,1021,833,777,671,
    607,596,491,-451,439,422,421,-366,-351,331,315,302,-283,-229,223,223,-220,-220,-185,181,-177,
    176,166,-164,132,-119,115,107];

    var lprime,d,m,mprime,f,a1,a2,a3,e=[],sigmaL=0,sigmaB=0,sigmaR=0,ang,today=new Date(),t;
    if (!transit) t=(calc_julian_date(time.getHours(),time.getMinutes(),tz,transit)-2451545.0)/36525.0;
    else          t=(calc_julian_date(today.getHours(),today.getMinutes(),tz,transit)-2451545.0)/36525.0; 

    t4 = t*t*t*t;
    t3 = t*t*t;
    t2 = t*t;

    lprime = mod2pi((218.3164591 + 481267.88134236*t - 0.0013268*t2 + t3 / 538841.0 - t4 / 65194000.0)*RADS);
    d = mod2pi((297.8502042 + 445267.1115168*t - 0.00163*t2 + t3 / 545868.0 - t4 / 113065000.0)*RADS);
    m = mod2pi((357.5291092 + 35999.0502909*t - 0.0001536*t2 + t3 / 24490000.0)*RADS);
    mprime = mod2pi((134.9634114 + 477198.8676313*t + 0.008997*t2 + t3 / 69699.0 - t4 / 14712000.0)*RADS);
    f = mod2pi((93.2720993 + 483202.0175273*t - 0.0034029*t2 - t3 / 3526000.0 + t4 / 863310000.0)*RADS);

    a1 = mod2pi((119.75 + 131.849 * t)*RADS);
    a2 = mod2pi((53.09 + 479264.29 * t)*RADS);
    a3 = mod2pi((313.45 + 481266.484 * t)*RADS);

    e[0] = 1;
    e[1] = 1 - 0.002516 * t - 0.0000074 * t2;
    e[2] = e[1] * e[1];

    for (i = 0; i < 60; i++) {
        ang = lrCoeff[i][0] * d + lrCoeff[i][1] * m + lrCoeff[i][2] * mprime + lrCoeff[i][3] * f;
        sigmaL += lTerms[i] * Math.sin(ang) * e[Math.abs(lrCoeff[i][1])];

        if (rTerms[i] != 0)  {
            sigmaR += rTerms[i] * Math.cos(ang) * e[Math.abs(lrCoeff[i][1])];
        }

        ang = bCoeff[i][0] * d + bCoeff[i][1] * m + bCoeff[i][2] * mprime + bCoeff[i][3] * f;
        sigmaB += bTerms[i] * Math.sin(ang) * e[Math.abs(bCoeff[i][1])];
    }

    sigmaL +=   3958.0 * Math.sin(a1) + 1962.0 * Math.sin(lprime - f) + 318.0 * Math.sin(a2);
    sigmaB += - 2235.0 * Math.sin(lprime) + 382.0  * Math.sin(a3) + 175.0 * Math.sin(a1 - f) 
    +  175.0 * Math.sin(a1 + f) + 127.0 * Math.sin(lprime - mprime) 
    -  115.0 * Math.sin(lprime + mprime);

    let l = mod2pi(((lprime*DEGS) + sigmaL / 1000000.0)*RADS)*DEGS;

    return l;
}

function _ecl (jd)
{
    
    var terms = [ -4680.93/3600.0,   -1.55/3600.0,  1999.25/3600.0, 
        -51.38/3600.0, -249.67/3600.0,  -39.05/3600.0, 
        7.12/3600.0,   27.87/3600.0,   5.79/3600.0,   2.45/3600.0 ];

    var eps = 23 + (26 / 60.0) + (21.448 / 3600.0); 
    var u=0, v=0;
    var cy = jd / 36525.0;
    v = u = (jd - 2415020.0) / (cy * 100);

    if (Math.abs(u) < 1.0) {
        for (var i = 0; i < 10; i++) {
            eps += terms[i] * v;
            v *= u;
        }
    }

    return eps;
}

function dT (transit)
{
    
    var today=new Date(),y;
    if (!transit) y = date.getFullYear()  + ((date.getMonth()+1)  - 0.5)/12;
    else          y = today.getFullYear() + ((today.getMonth()+1) - 0.5)/12;

    var c = -0.000012932 * Math.pow((y - 1955),2);
    var dt=0, u=0, t=0;
    t2 = t*t;
    t3 = t*t*t;
    t4 = t*t*t*t;
    t5 = t4*t;
    t6 = t5*t;
    t7 = t6*t;

    if (y <= -500) {
        u  = (y - 1820)/100;
        dt = -20 + 32 * u*u + c;
    }
    else if (y < -500 && y <= 500) {
        u  = y/100;
        dt = 10583.6 - 1014.41 * u + 33.78311 * u*u - 5.952053 * u*u*u
        - 0.1798452 * u*u*u*u + 0.022174192 * u*u*u*u*u + 0.0090316521 * u*u*u*u*u*u + c;
    }
    else if (y > 500 && y <= 1600) {
        u  = (y - 1000)/100;
        dt = 1574.2 - 556.01 * u + 71.23472 * u*u + 0.319781 * u*u*u
        - 0.8503463 * u*u*u*u - 0.005050998 * u*u*u*u*u + 0.0083572073 * u*u*u*u*u*u + c;
    }
    else if (y > 1600 && y <= 1700) {
        t  = (y - 1600);
     dt = 120 - 0.9808 * t - 0.01532 * t2 + t3 / 7129 + c;
    }
    else if (y > 1700 && y <= 1800) {
        t  = (y - 1800);
        dt = 13.72 - 0.332447 * t + 0.0068612 * t2 + 0.0041116 * t3 
        - 0.00037436 * t4 + 0.0000121272 * t5 - 0.0000001699 * t6 
        + 0.000000000875 * t7 + c;
    }
    else if (y > 1860 && y <= 1900) {
        t  = (y - 1860);
        dt = 7.62 + 0.5737 * t - 0.251754 * t2 + 0.01680668 * t3
        -0.0004473624 * t4 + t5 / 233174 + c;
    }
    else if (y > 1900 && y <= 1920) {
        t  = (y - 1920);
        dt = 21.20 + 0.84493 * t - 0.076100 * t2 + 0.0020936 * t3 + c;
    }
    else if (y > 1941 && y <= 1961) {
        t  = (y - 1950);
        dt =  29.07 + 0.407 * t - t2 / 233 + t3 / 2547;
    }
    else if (y > 1961 && y <= 1986) {
        t  = (y - 1975);
        dt = 45.45 + 1.067 * t - t2 / 260 - t3 / 718;
    }
    else if (y > 1986 && y <= 2005) {
        t  = (y - 2000);
        dt = 3.86 + 0.3345 * t - 0.060374 * t2 + 0.0017275 * t3 
        + 0.000651814 * t4 + 0.00002373599 * t5;
    }
    else if (y > 2005 && y <= 2050) {
        t  = (y - 2000);
        dt = 62.92 + 0.32217 * t + 0.005589 * t2 + c;
    }
    else if (y > 2050 && y <= 2150) {
        dt = -20 + 32 * ((y-1820)/100)*((y-1820)/100) - 0.5628 * (2150 - y) + c;
    }
    else if (y > 2150) {
        u  = (y-1820)/100;
        dt = -20 + 32 * u*u + c;
    }

    return dt;
}



function calc_moon_acending_node (transit) 
{ 
    
    var T,today=new Date(),ay,n;
    if (!transit) T=(calc_julian_date(time.getHours(),time.getMinutes(),tz,transit)-2415020.5)/36525.0;
    else          T=(calc_julian_date(today.getHours(),today.getMinutes(),tz,transit)-2415020.5)/36525.0;
    ay = calc_ayanamsa (transit);

    n  = mod2pi((259.183275 - 1800*T - 134.142008*T + 0.002078*T*T)*RADS)*DEGS;

    return (n-ay);
}

function calc_ayanamsa (transit)
{
    
    var d,today=new Date(),yy,mm,dd;
    if (!transit) {
        yy=date.getFullYear();
        mm=date.getMonth()+1;
        dd=date.getDate();
    }
    else {
        yy=today.getFullYear();
        mm=today.getMonth()+1;
        dd=today.getDate();
    }
    if (yy < 100)  d = 10.;
    else         d = 1000.;
    var c = yy*1.0/d;
    var a = -6.92416+16.90709*c-0.757371*c*c;
    var b = (mm + dd/30.)*1.1574074/d;

    return (a + b - 0.021111); // my ayanamsa correction
}

function calc_ascendant (hours,minutes,transit)
{       
    
    var t   = calc_sideral_time(hours,minutes,transit); 
    var ecl = _ecl(calc_julian_date(hours,minutes,tz,transit));

    var asc = Math.atan2(Math.cos(t*RADS), -Math.sin(t*RADS)*Math.cos(ecl*RADS) 
                                -Math.tan(lat*RADS)*Math.sin(ecl*RADS));
                                    
    return (asc*DEGS);
}                           


function calc_day_lord (transit)
{
    var jd  = calc_julian_date(time.getHours(),time.getMinutes(),0,transit);
    var day = (Math.floor(jd + 0.5) + 1) % 7;
    var str;
    let myvar = parseInt(time.getHours()) +  parseInt(time.getMinutes()) / 60;
    if ( myvar < calc_sunriseset(true, false, false, false)){
        day = day -1;
        if ( day < 0) {
            day = 6;
        }
    }

    switch (day) {
        case 0:
        str="Sun";
        break;
        case 1:
        str="Moon";
        break;
        case 2:
        str="Mars";         
        break;
        case 3:
        str="Mercury";                
        break;
        case 4:
        str="Jupiter";         
        break;
        case 5:  
        str="Venus";       
        break;
        case 6:
        str="Shani";         
        break;
        default:
        str="NaN"; 
    }

    return (str);
}

function calc_hora_lord (transit)
{
    var lords = ["Sun","Venus","Mercury","Moon","Shani","Jupiter","Mars"];
    var hour=[], lord=[], currentlord, currenthour,today=new Date();

    if (!transit)  currenthour = (time.getHours()  + time.getMinutes()/60);
    else           currenthour = (today.getHours() + today.getMinutes()/60);
    var daylord    = calc_day_lord (transit);
    var index      = lords.indexOf(daylord);
    var todayrise    = calc_sunriseset(true, false, false, transit);
    var todayset     = calc_sunriseset(false,false, false, transit);
    var tomorrowrise = calc_sunriseset(true, true,  false, transit); 

    var daylength    =  ((todayset      - todayrise) / 12);
    var nightlength  =  (((24-todayset) + tomorrowrise) / 12);

    hour[0]  = todayrise;
    for (var i=1; i<12; i++)  {  hour[i] = hour[i-1] + daylength;   }
    hour[12] = todayset;
    for (var i=13; i<25; i++) {  hour[i] = hour[i-1] + nightlength; }

    lord[0]  = lords[index];
    for (var i=1; i<25; i++)  {
    if (index > 5) { index = -1; }
        lord[i] = lords[index+1];
        index++;
    }
    for (var i=0; i<24; i++) {
        if (currenthour < (tomorrowrise))
        currenthour +=24;
        if ((currenthour >= hour[i]) && (currenthour <= hour[i+1]))
        currentlord = lord[i];
    }

    return currentlord;
}

function calc_sunriseset (rising,hora,hms,transit)
{       
    

    var offical      = (90+(50/60));// 90°50'00"
    var civil        = 96;          // 96°00'00"
    var nautical     = 102;         //102°00'00" 
    var astronomical = 108;         //108°00'00"

    var zenith = offical; 


    var today=new Date(),yy,mm,dd,tzdls;
    if (!transit) {
        yy=date.getFullYear();
        mm=date.getMonth()+1;
        dd=date.getDate();
        tzdls=tz;
    }
    else {
    yy=today.getFullYear();
    mm=today.getMonth()+1;
    dd=today.getDate();
    tzdls = -(today.getTimezoneOffset() / 60);
    }
    var a = Math.floor(275 * mm / 9);
    var b = Math.floor((mm + 9) / 12);
    var c = (1 + Math.floor((yy - 4 * Math.floor(yy / 4) + 2) / 3));
    var n  = hora ? a - (c*b) + (dd+1) - 30 : a - (c*b) + dd - 30;
    var lonhour = lon / 15;

    if (rising) var t = n + ((6 -lonhour)/24);
    else        var t = n + ((18-lonhour)/24);

    var Ms = (0.9856 * t) - 3.289;

    var Ls = mod360(Ms + (1.916 * Math.sin(Ms*RADS)) + (0.020*Math.sin(2*Ms*RADS)) + 282.634);
    var ra = mod360(Math.atan(0.91764 * Math.tan(Ls*RADS))*DEGS);
    var Lquadrant  = (Math.floor(Ls/90)) * 90;
    var RAquadrant = (Math.floor(ra/90)) * 90;
    ra = (ra + (Lquadrant - RAquadrant)) / 15;

    var sind = 0.39782 * Math.sin(Ls*RADS)
    var cosd = Math.cos((Math.asin(sind)*DEGS)*RADS);
    var cosh = (Math.cos(zenith*RADS) - (sind * Math.sin(lat*RADS))) / (cosd * Math.cos(lat*RADS));
    if      (cosh >  1) { return '00:00:00'; }
    else if (cosh < -1) { return '00:00:00'; }
    else {
    var h  = rising ? (360-(Math.acos(cosh)*DEGS))/15 : (Math.acos(cosh)*DEGS)/15;
    var tm = h + ra - (0.06571 * t) - 6.622;
    var UT = mod24(tm-lonhour) + (1.0*tzdls);
    if ( UT < 0 ) UT += 24; UT %= 24;
}


var sunhour = parseInt(UT);
var jd, rsun, asc, rsunrise, rsunset, sunminute=0;

var browser = navigator.userAgent.toLowerCase();

if((browser.indexOf("firefox") > -1) ||
(browser.indexOf("chrome")  > -1) ||
(browser.indexOf("msie")    > -1)) {

    if (rising) {
        try
        {
            for (sunminute=0; sunminute<63; sunminute++) {
                jd   = calc_julian_date(sunhour,sunminute,tz,transit);
                if (tzdls != tz) asc  = (Math.floor(calc_ascendant(sunhour-1, sunminute,transit)));
                else             asc  = (Math.floor(calc_ascendant(sunhour,   sunminute,transit)));
                rsun = (Math.floor(calc_vsop87(1,jd)));
                if(asc  < 0.0)asc  += 360;if(asc  > 360)asc  -= 360;
                if(rsun < 0.0)rsun += 360;if(rsun > 360)rsun -= 360;
                if (rsun == asc) {
                    sunminute++ 
                    break;
                }
            }
        } catch(e) { return hms ? dec2hms(UT) : (UT); }
    }
    if (!rising) {
        try
        {
            for (sunminute=0; sunminute<63; sunminute++) {
                jd   = calc_julian_date(sunhour,sunminute,tz,transit);
                if (tzdls != tz) asc  = (Math.floor(calc_ascendant(sunhour-1, sunminute,transit)));
                else             asc  = (Math.floor(calc_ascendant(sunhour,   sunminute,transit)));
                rsun = (Math.floor(calc_vsop87(1,jd))+180);
                if(asc  < 0.0)asc  += 360;if(asc  > 360)asc  -= 360;
                if(rsun < 0.0)rsun += 360;if(rsun > 360)rsun -= 360;
                if (rsun == asc) {
                    sunminute++
                    break;
                }
            }
        } catch(e) { return hms ? dec2hms(UT) : (UT); }
    }
        return hms ? dec2hms(sunhour+((sunminute)/60)) : (sunhour+((sunminute)/60)); 
        }
        else
        return hms ? dec2hms(UT) : (UT);
}





function calc_tidhi(moondeg, sundeg){

    let theNum; 
    let tidhiStr;
    let vrudhdhiStr = "KsheenaChandra";
    let pakshaStr = "Sukla Paksha";
    let atidhiStr = [ "",
        "Pratipada",  "Dvitiya",   "Trutiya", "Chaturthi",   "Panchami",
        "Shashti",  "Saptami",    "Ashtami",   "Navami", "Dasami", 
        "Ekadasi",   "Dwadasi",  "Trayodasi", "Chaturdasi", "Pournima",
        "Pratipada",  "Dvitiya",   "Trutiya", "Chaturthi",   "Panchami",
        "Shashti",  "Saptami",    "Ashtami",   "Navami", "Dasami", 
        "Ekadasi",   "Dwadasi",  "Trayodasi", "Chaturdasi", "Amavasya",
    ];

    theNum = moondeg - sundeg ;
    if (theNum < 0){
        theNum = theNum + 360;  
    }
    theNum = theNum /12;    
    theNum = Math.ceil(theNum);  
    
    tidhiStr = atidhiStr[theNum];
  
    if (theNum == 15){
        pakshaStr = " ";  
    }
    else if( theNum == 30){
        pakshaStr = " ";  
    }
    if ( theNum >7 && theNum < 23){
        vrudhdhiStr = "PoornaChandra"
    }
   
    if ( theNum> 15  && theNum < 30){
        theNum = theNum -15;
        pakshaStr = "Krishna Paksha"
    }
   
    return pakshaStr + ' - ' + tidhiStr + ' - ' + vrudhdhiStr ;
}

function calc_vdasa(theDiv){

    let jd =  calc_julian_date(time.getHours(),time.getMinutes(),0,false);
    let Ts = (jd - 2415020.0)/36525.0;
    let solaryear   = 365.2421896698-6.15359*(10e-6)*Ts-7.29*(10e-10)*Ts*Ts+2.64*(10e-10)*Ts*Ts*Ts; 
    
    let tempStr = "";
    let firstStr = "";
    let mDate = new Date();
    let isFirst = true;

    let mdPeriod = 0;
    let mdLordName = "";
    let adPeriod = 0;

    let mDegrees = mygrahas[2].ra; 
    let msDegrees = calc_nakshatra(mDegrees,4)  
    let dasaLordSeqNum = calc_nakshatra(mDegrees,7); 
    let antarLordSeqNum = dasaLordSeqNum;
    
    $(theDiv).empty();
    $(theDiv).append('<h2>Vimsottari Dasa:</h2><hr>');   

    mdPeriod = aDasaInfo[0][dasaLordSeqNum];   
    mdLordName = aDasaInfo[1][dasaLordSeqNum];  
    
    mDate = calc_mahaDasa(mDegrees, msDegrees,mdPeriod, solaryear);
   
    tempStr = createDateStr(mDate);
    
    for (let m = 0; m < 9 ; m++){
        
        firstStr = '<table class="myt"><thead><tr><th>' + mdLordName + ' Dasa Starts</th><th>from</th><th>'+ tempStr + '</th></tr></thead><tbody>';
        strTemp = "";

        for ( let a = 0 ; a < 9; a++){
          
            adPeriod = aDasaInfo[0][antarLordSeqNum]; 
            mDate = calc_antarDasa(mdPeriod, adPeriod,mDate);
            tempStr = createDateStr(mDate);        
            strTemp += '<tr><td>' + mdLordName + ' - ' + aDasaInfo[1][antarLordSeqNum] + '</td>\t<td>Till</td><td>';  
            strTemp +=  tempStr + '</td></tr>';
         
            
            antarLordSeqNum++;
            if ( antarLordSeqNum  > 9) { antarLordSeqNum = 1}; 
    
        }

        dasaLordSeqNum++;
        if (dasaLordSeqNum > 9) {dasaLordSeqNum = 1;}
        mdPeriod = aDasaInfo[0][dasaLordSeqNum];   
        mdLordName = aDasaInfo[1][dasaLordSeqNum]; 
        antarLordSeqNum = dasaLordSeqNum;
        $(theDiv).append(firstStr + strTemp + '</tbody></table><br>');   

    }      
    
}

function calc_mahaDasa(mdeg,msdeg,mdperiod,syear){

    let theYears = 0, theMonths = 0, theDays = 0;
    let theDiff = (mdeg - msdeg) ;
    theDiff = theDiff/13.3333;
    theDiff = theDiff * mdperiod; 

    theYears = parseInt(theDiff);
    theMonths =  (theDiff - theYears) * syear / 30 ; 
    theDays =  parseInt(  ( theMonths - parseInt( theMonths  ) ) * 30  ) ;  
    theMonths = parseInt(theMonths); 
    
    let vdate;
    vdate = createDate(-theDays,-theMonths,-theYears,date);   
    return vdate;
}

function calc_antarDasa(mperiod, aperiod,sdate){

    let theYears = 0, theMonths = 0, theDays = 0;
    let theDiff = mperiod * aperiod;

    theMonths = parseInt(theDiff /10); 
    
    theDays = theDiff - theMonths * 10;
    theYears = parseInt(theMonths /12); 
    theMonths = theMonths % 12;
    theDays = 3 * theDays;
  
    let vdate = createDate(theDays,theMonths,theYears,sdate);
    return vdate;
}

function createDate(days, months, years,idate) {
    let odate = new Date(); 
    odate.setUTCFullYear(idate.getUTCFullYear() + years); 
    odate.setUTCMonth(idate.getUTCMonth() + months);
    odate.setUTCDate(idate.getUTCDate() + days);
    return odate;    
}

function createDateStr(idate){
    let strD = padLeadingZeroes( idate.getUTCDate(), 2 );
    let strM = padLeadingZeroes( idate.getUTCMonth() + 1 , 2);
    let strY = idate.getUTCFullYear();
    return (strY + ' - ' + strM + ' - ' + strD) ;
}

function onRowClickFillData() 
{
	       
    let theTable;
    thePlaceName = "";
    if ( (theTable = document.getElementById('placest')) != null){
        
        
        let theCells = theTable.getElementsByTagName('td');
        let cname , clat , clon , cgmt ;
        
        
        for ( let i = 1; i < theCells.length; i++) {

            let theCell = theCells[i];
            
            theCell.onclick = function() {
                
                let theRowID = this.parentNode.rowIndex;
                let theRowSelected = theTable.getElementsByTagName('tr')[theRowID];

                cname = theRowSelected.cells[0].innerHTML;                
                clat  = theRowSelected.cells[1].innerHTML;
                clon  = theRowSelected.cells[2].innerHTML;
                cgmt  = theRowSelected.cells[3].innerHTML;
              
                thePlaceName = cname;
                document.getElementById("tz").value  = cgmt;
                document.getElementById("lat").value = clat;
                document.getElementById("lon").value = clon;
                gotoTop('.aside1');
            };
        }
    }
    
	
}

