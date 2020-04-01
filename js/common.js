let strTemp ;	
let divPosition;

let aRasiNames = ['Mesha','Vrushabha','Midhuna','Karkataka','Simha','Kanya','Tula','Vruschika','Dhanus','Makara','Kumbha','Meena'];
let aBhavaNames = ['Tanu','Dhana','Sahaja','Matru','Putra','Roga','Kalatra','Ayush','Dharma','Karma','Labha','Vyaya'];
let aGrahaNames = ["Lagnam","Ravi","Chandra","Kuja","Budha","Guru","Sukra","Sani","Rahu","Ketu"];
strTemp = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday";
let aWDNames = strTemp.split(',');


let aPataTable = [];
aPataTable.push( { utpata: 20, mruthyu: 21, kaana: 22, rasi1: 8,  rasi2: 9});
aPataTable.push( { utpata: 24, mruthyu: 25, kaana: 26, rasi1: 10, rasi2: -1});
aPataTable.push( { utpata: 28, mruthyu: 1,  kaana: 2,  rasi1: 0,  rasi2: 11});
aPataTable.push( { utpata: 4,  mruthyu: 5,  kaana: 6,  rasi1: 1,  rasi2: 2});
aPataTable.push( { utpata: 8,  mruthyu: 9,  kaana: 10, rasi1: 3,  rasi2: 4});
aPataTable.push( { utpata: 12, mruthyu: 13, kaana: 14, rasi1: 5,  rasi2: -1});
aPataTable.push( { utpata: 16, mruthyu: 17, kaana: 18, rasi1: 7,  rasi2: -1});


function showText(fileName,theDiv)
{	
	$.get(fileName) 	
			.done(function(data) {
				$(theDiv).empty();
				$(theDiv).append(data); })
			.fail(function(xhr, status, error) {
				alert( "Reading: \"" + fileName +  "\"." + ' - ' + status + ' - ' + error );
		});   
}



function showRowWiseText(theTableID, theDiv) 
{       
   
    let rowID = 0;
    let rowSelected = 0;
    let theStr = theTableID + " tbody tr";

    $( theStr ).on( "click", function( event ) {
        
        rowSelected = $( this );
        rowID = rowSelected.index() ;
     
        let rowsNotSelected = $( theStr);
        for (let row = 0; row < rowsNotSelected.length; row++) 
        {
            rowsNotSelected[row].style.backgroundColor = "";
            rowsNotSelected[row].classList.remove('selected');
        }
        
        rowSelected =  $( theStr )[rowID];
        rowSelected.style.backgroundColor = "khaki";
        rowSelected.className += " selected";
        
      
		let fileName = "txt/t" + (rowID+1).toString() + ".txt" ;
     
        if(rowID < 11) { showText(fileName, theDiv);}
        
    });
   
        
    
}
	


function printError( thePrompt, theDiv){

    strTemp = '<p style="color:darkred;"; text-align: center"><img src="img/hand.png" height=16 ">';
    strTemp += thePrompt + '<p>';
    $(theDiv).empty();
    $(theDiv).append(strTemp);
}



function gotoTop(theDiv){

    divPosition = $(theDiv).offset();
    $('html,body').animate({scrollTop: divPosition.top}, "slow");	
}


function padLeadingZeroes(num, size) {
    	
	let s = num + "";
    while (s.length < size) s = "0" + s;

    return s;
}

function numToString(num) { 

  
	if ((num/10) < 1) { 
	  return ( '0' + num.toString() );
	} else {
	  return num.toString(); 
	}
}


function padPositiveNums(num) {
    
	let s = num + "";
    if (num >= 0) {s = "&nbsp" + s;}  
   
    return s;
}



function deg2DMS(mydeg){

    let tempVal = parseInt(mydeg);
    let myD = parseInt(tempVal % 30 ); 
    tempVal = mydeg - tempVal;  
    tempVal = tempVal * 60 * 60; 
    let myM = parseInt(tempVal / 60);  
    let myS = parseInt(tempVal - myM * 60); 
    let tempStr = padLeadingZeroes(myD,2) + '° ' + padLeadingZeroes(myM,2) + "\' " + padLeadingZeroes( myS,2) + '\"';
    return tempStr;

}

function dms2real (deg, min, sec)
{
    
    let r;
    if (deg < 0) r =  deg - min/60 - sec/3600;
    else         r =  deg + min/60 + sec/3600;       

    return r;
}

function dec2hms (x)
{
    

    if (isNaN(x)) return ("00:00:00");

    var st = x;
    var s  = st;      
    st     = st; 

    var d = Math.floor( s );

    s = s - d;
    s = s * 60;
    var mm = Math.floor( s );

    var hour = Math.floor( st );

    st  = st - hour;
    st  = st * 60;
    var minute = Math.floor( st );

    st  = st - minute;
    st  = st * 60;
    var second = Math.floor( st );

    var str = ((hour  <10) ?  "0" :  "") + hour;
    str    += ((minute<10) ? ":0" : ":") + minute;
    str    += ((second<10) ? ":0" : ":") + second;

    return str;
}

function deg2hms (x)
{   
    if (isNaN(x)) return ("00:00:00");

    var st = x;
    var s  = st;      
    st     = st / 15.0; 

    var d = Math.floor( s );

    s = s - d;
    s = s * 60;
    var mm = Math.floor( s );

    var hour = Math.floor( st );

    st  = st - hour;
    st  = st * 60;
    var minute = Math.floor( st );

    st  = st - minute;
    st  = st * 60;
    var second = Math.floor( st );

    var str = ((hour  <10) ?  "0" :  "") + hour;
    str    += ((minute<10) ? ":0" : ":") + minute;
    str    += ((second<10) ? ":0" : ":") + second;

    return str;
}


function _abs (x)
{
    var r;
    if (x >= 0.0) r = Math.floor(x);
    else          r = Math.ceil(x);
    return r;
}

function mod24 (x)
{
    return (x + 24) % 24;
}

function mod360 (x) 
{  
    var a = 360 * ((x / 360) - _abs(x / 360));
    if (a < 0) a = a + 360; 
    return a;
}

function mod2pi(x)
{
    var b = x/(2*Math.PI);
    var a = (2*Math.PI)*(b - _abs(b));
    if (a < 0) a = (2*Math.PI) + a;
    return a;
}

