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
				$(theDiv).append(data); 
		
		
	})
 
			.fail(function(xhr, status, error) {
				alert( "Reading: \"" + fileName +  "\"." + ' - ' + status + ' - ' + error );
		});   
}


//given the table id and a div, when a row is clciked, shows related text in the div and moves to top
// uses gotoTop function and showText(filename) function
function showRowWiseText(theTableID, theDiv) 
{       
    //only for table2  
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
        
        // display text for given row
		let fileName = "txt/t" + (rowID+1).toString() + ".txt" ;
        //only upto rwo id 11
        if(rowID < 11) { showText(fileName, theDiv);}
        gotoTop(theDiv)  ;
    });
    
}
	

//prints the given error msg to the given div in orange color
function printError( thePrompt, theDiv){

    strTemp = '<p style="color:red;"; text-align: center"><img src="img/hand.png" height=16 ">';
    strTemp += thePrompt + '<p>';
    $(theDiv).empty();
    $(theDiv).append(strTemp);
}


//helps go to top of the given div
function gotoTop(theDiv){

    divPosition = $(theDiv).offset();
    $('html,body').animate({scrollTop: divPosition.top}, "slow");	
}

//given a number and the rquired no of digits, returns a string filled with prefixed zeroes 
function padLeadingZeroes(num, size) {
    	
	let s = num + "";
    while (s.length < size) s = "0" + s;
    //console.log('num = ' + num + ' s = ' + s);
    return s;
}

function numToString(num) { 

    //add 0 to num string if it is single digit
	if ((num/10) < 1) { 
	  return ( '0' + num.toString() );
	} else {
	  return num.toString(); 
	}
}

// given a number, returns a string prefixed with  a space if it is a positive number
function padPositiveNums(num) {
    
	let s = num + "";
    if (num >= 0) {s = "&nbsp" + s;}  
    //console.log('num = ' + num + ' s = ' + s);
    return s;
}


//given decimal degrees, returns a string converted as Degrees, Minutes and Seconds.
function deg2DMS(mydeg){

    let tempVal = parseInt(mydeg);
    let myD = parseInt(tempVal % 30 ); // divide by 30 and keep reminder as degs
    tempVal = mydeg - tempVal;  // get decimal value of mydeg
    tempVal = tempVal * 60 * 60;  // gives total secs
    let myM = parseInt(tempVal / 60);  // gives minutes
    let myS = parseInt(tempVal - myM * 60); // gives secs
    let tempStr = padLeadingZeroes(myD,2) + '° ' + padLeadingZeroes(myM,2) + "\' " + padLeadingZeroes( myS,2) + '\"';
    return tempStr;

}

/*
function dec2date (etime)
{
    

    if (isNaN(etime)) return ("00/00/0000");

    var s = etime;
    var tmp = Math.round(s);
    var year = parseInt(date.getFullYear() - tmp);

    s = s - tmp;
    var tmp0 = Math.round(s*12);
    var month = parseInt((12-tmp0)+(date.getMonth()+1) - 12);
    if (isNaN(month) || month<0) month=1;

    var tmp1 = Math.round(s*12);
    var tmp2 = Math.abs(tmp1 - (s*12));
    var tmp3 = Math.round(tmp2*30);
    var day  = Math.abs((30-date.getDate())-tmp3);

    var str = ((day   <10) ?  "0" :  "") + day;
    str    += ((month <10) ? "/0" : "/") + month;
    str    += ((year<1000) ? "/0" : "/") + year;

    return str;
}
*/

//given degrees, minutes and seconds, returns a real number of that total.
function dms2real (deg, min, sec)
{
    
    let r;
    if (deg < 0) r =  deg - min/60 - sec/3600;
    else         r =  deg + min/60 + sec/3600;       

    return r;
}

/*
//given hours, minutes and seconds, returns degrees
function hms2deg (hours, min, sec)
{
    

    return (hours * 15 + min/4 + sec/240);
}
*/

//given anumber, returns hours, minutes, seconds.
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

