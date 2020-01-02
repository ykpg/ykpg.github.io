
let windowParams = `scrollbars=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=350,height=500,left=200,top=80`;



let gs = 0; 	// the selected index of girl nakshatra
let bs = 0; 	// the selected index of boy nakshatra
let gp = 0;  	// the selected index of girl nakshatra paadam
let bp = 0;  	// the selected index of boy nakshatra paadam

let thePoints = 0;
let girlNavamsa = 0;
let boyNavamsa = 0;
let girlRasiNum =0;
let boyRasiNum = 0;
var girlDiff = 0;
var boyDiff = 0;
var girlNavakam =0;
var boyNavakam = 0;

let strTemp ;			// general usage

//var strTemp = "Aswini,Bharani,Kruttika,Rohini,Mrugasira,Ardra,Punarvasu,Pushyami,Aslesha,Makha,PoorvaPhalguni,UttaraPhalguni,Hasta,Chitta,Swati,Visakha,Anuradha,Jyeshta,Moola,PoorvaShaada,UttaraShaada,Sravana,Dhanishta,Satabhisha,PoorvaBhaadra,UttaraBhaadra,Revati";		
strTemp = "అశ్వని,భరణి,కృత్తిక,రోహిణి,మృగశిర, ఆర్ద్ర,పునర్వసు,పుష్యమి,ఆశ్లేష,మఖ,పుబ్బ, ఉత్తర,హస్త,చిత్త,స్వాతి,విశాఖ,అనూరాధ,జ్యేష్ట,మూల,పూర్వాషాడ,ఉత్తరాషాడ,శ్రవణం,ధనిష్ట,శతభిషం,పూర్వాభాద్ర,ఉత్తరాభాద్ర,రేవతి";
const arrayNamesOfStars = strTemp.split(',');

const arrayRasiInfo = []; // array has id, name, lord
//"Mesham,Vrushabham,Midhunam,Karkaatakam,Simham,Kanya,Tula,Vruschikam,Dhanussu,Makaram,Kumbham,Meenam";
//ravi,chandra,kuja,budha,guru,sukra,sani
arrayRasiInfo.push({id:1,name:'మేషం',lord:'కుజ',}); 
arrayRasiInfo.push({id:2,name:'వృషభం',lord:'శుక్ర'});
arrayRasiInfo.push({id:3,name:'మిధునం',lord:'బుధ',}); 
arrayRasiInfo.push({id:4,name:'కర్కాటకం',lord:'చంద్ర'});
arrayRasiInfo.push({id:5,name:'సింహం',lord:'రవి',}); 
arrayRasiInfo.push({id:6,name:'కన్య',lord:'బుధ'});
arrayRasiInfo.push({id:7,name:'తుల',lord:'శుక్ర',}); 
arrayRasiInfo.push({id:8,name:'వృశ్చికం',lord:'కుజ'});
arrayRasiInfo.push({id:9,name:'ధనుస్సు',lord:'గురు',}); 
arrayRasiInfo.push({id:10,name:'మకరం',lord:'శని'});
arrayRasiInfo.push({id:11,name:'కుంభం',lord:'శని',}); 
arrayRasiInfo.push({id:12,name:'మీనం',lord:'గురు'});


$(document).ready(function() 
{	
	showContent();
	
	
});

var showContent = function() 
{
	
	// for each loop to fill select boxes of nakshatra names
	$.each(arrayNamesOfStars, function(val, text) 
	{
            $('#girlstar').append( $('<option></option>').val(val).html(text) );
			$('#boystar').append( $('<option></option>').val(val).html(text) );
			
	}); 
	$("#girlstar").val(26)   	// selects rohini by default
	$("#boystar").val(13)   	// selects chitta by default


	$('#bt').click( function () 
	{		
		gs = $("#girlstar").prop('selectedIndex');
		if (gs < 0 ) { gs = 0};
		
		
		gp = $("#girlpaadam").prop('selectedIndex');
		if (gp < 0 ) { gp = 0};
		
		
		bs = $("#boystar").prop('selectedIndex');
		if (bs < 0 ) { bs = 0};
	
		bp = $("#boypaadam").prop('selectedIndex');
		if (bp < 0 ) { bp = 0};		
		
		let gdegrees = $("#girldeg").prop('value');
		let bdegrees = $("#boydeg").prop('value');
		
		
		$("#rightcol").empty(); 
		
		
						
		girlNavamsa = gs * 4 + gp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 			
		
		boyNavamsa  = bs * 4 + bp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. col is boys.
		
		getPoints("csv/ppidaparti.csv",girlNavamsa,boyNavamsa);
		
		$('#rightcol').append('<h1>  మేలాపకము - కూటముల పట్టిక  </h1> <hr>');		// Dispaly starts here
		$('#rightcol').append("<h3>పిడపర్తి పంచాంగం ప్రకారం గుణాంకములు = " + thePoints + '</h3>' );   // show anchanga points
		
		//Table1 Starts
		strTemp = '<table id="mytable"><tr><th> </th><th>వధువు</th><th>వరుడు</th></tr>';			// 1st table- table headings
		
		// Table1-1st row - show nakshatra and paadam
		strTemp+= '<tr>'			
		strTemp+= '<td>నక్షత్రము - పాదం  </td> <td>' + arrayNamesOfStars[gs]  + ' - '+ (gp+1) + '</td> <td>' + arrayNamesOfStars[bs]   + ' - ' + (bp+1) + '</td></tr>';
		
		// Table1-2nd row - show rasi name and lord of that rasi.
		girlRasiNum = parseInt( girlNavamsa / 9 );    // rasi numbers are 0 to 11. theRowNum points to the Navamsa.
		boyRasiNum =  parseInt( boyNavamsa / 9 );	
		strTemp+= '<tr><td>రాశి - రాశ్యాధిపతి</td> <td>' + arrayRasiInfo[girlRasiNum].name + ' - ' + arrayRasiInfo[girlRasiNum].lord + '</td>';
		strTemp+= '<td>' + arrayRasiInfo[boyRasiNum].name + ' - ' + arrayRasiInfo[boyRasiNum].lord + '</td></tr>';
		
		//Table1-3rd row - show the navamsa rasi name and lord of that rasi
		//there are 0 to 107 navamsa numbers.		
		strTemp+= '<tr><td>నవాంశ - రాశి - అధిపతి</td> <td>'  + arrayRasiInfo[(girlNavamsa % 12)].name + ' - ' + arrayRasiInfo[(girlNavamsa % 12)].lord + '</td>';
		strTemp+= '<td>' +  arrayRasiInfo[(boyNavamsa % 12)].name + ' - ' + arrayRasiInfo[(boyNavamsa % 12)].lord + '</td></tr>';
		//alert("g = " + g + "Paadam = " + p1 + "navaamsa = " + theRowNum + "by 12 Mod = " + (theRowNum % 12) + "rasi = " + arrayRasiInfo[(theRowNum % 12)].name);
		
		//Table1-4th row - show G->B and B->G counts.
		findNavakam();
		strTemp+= '<tr><td>నక్షత్ర దూరము:</td> <td>' + "g->b : " + ( (girlDiff+1) + (girlNavakam-1) * 9 ) + " (N-" + girlNavakam + ")" + '</td>';
		strTemp+= 	'<td>' + "b->g : " + ( (boyDiff+1 ) + (boyNavakam-1) * 9 ) + " (N-" + boyNavakam + ")"  + '</td></tr>';


		strTemp+= '</table><br><br>';				
		$('#rightcol').append(strTemp);		
		//Table1 Ends							
		
		
		
		
		
	});	//function button click ends
		

	
};// function show content ends


var getPoints = function(theFile,girlNavamsa,boyNavamsa)
{
	
	$.ajax(
		{
			type: "GET",
			url: theFile,			//panchanga points csv file name
			dataType: "text",
			error: function (e) 
			{
				//alert("An error occurred while processing file:" + theFile + "Is local server on? Is the file path correct?");
				console.log("An error occurred while processing file:" + theFile , e);
			},
			async: false,
			success: function(allText) 
			{			
				
				let arrayAllLines = allText.split("\n");	// array has all the row data strings												
				let strRowLine = arrayAllLines[girlNavamsa];  	//get the full text line for that particular row.
				let arrayCols = strRowLine.split(',');		//create array with columns data from the row line text.
				thePoints = arrayCols[boyNavamsa];
				
				
			} // success ends
			
		}); // ajax ends
};

function findNavakam(){
					
	if ( gs < bs )
	{
		girlDiff = (bs-gs) % 9;
		boyDiff = (27- bs + gs) % 9;
		girlNavakam = parseInt ( (bs - gs)/ 9) + 1;
		boyNavakam = parseInt ( (27- bs + gs)/ 9) + 1;
	}
	else if ( gs > bs )
	{
		girlDiff = (27 - gs + bs) % 9;
		boyDiff = (gs - bs) % 9;
		girlNavakam = parseInt ( (27 - gs + bs)/ 9) + 1;
		boyNavakam = parseInt ( (gs - bs)/ 9) + 1;
	}
	else if ( gs == bs )
	{
		girlDiff = 0;
		boyDiff = 0;
		girlNavakam = 1;
		boyNavakam = 1;
	}

}