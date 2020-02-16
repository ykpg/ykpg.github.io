
let windowParams = `scrollbars=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=350,height=500,left=200,top=80`;

let gs = 0; 	// the selected index of girl nakshatra
let bs = 0; 	// the selected index of boy nakshatra
let gp = 0;  	// the selected index of girl nakshatra paadam
let bp = 0;  	// the selected index of boy nakshatra paadam

let thePoints = 0.0;
let subPoints = 0.0;
let totalPoints = 0.0;
let arrayResults = [];
let goodPoints = 18.0;

let strTemp ;			// general usage


let girlNavamsa = 0;
let boyNavamsa = 0;
let girlRasiNum =0;
let boyRasiNum = 0;
let girlDiff = 0;
let boyDiff = 0;
let girlNavakam =0;
let boyNavakam = 0;
let theRowNum = 0;
let theColNum = 0;


let rasiG2B = 0;
let rasiB2G = 0;
let girlNadiNum = 0;
let boyNadiNum = 0;
let girlRajjuName = "";
let boyRajjuName = "";


//var strTemp = "Aswini,Bharani,Kruttika,Rohini,Mrugasira,Ardra,Punarvasu,Pushyami,Aslesha,Makha,PoorvaPhalguni,UttaraPhalguni,Hasta,Chitta,Swati,Visakha,Anuradha,Jyeshta,Moola,PoorvaShaada,UttaraShaada,Sravana,Dhanishta,Satabhisha,PoorvaBhaadra,UttaraBhaadra,Revati";		
strTemp = "అశ్వని,భరణి,కృత్తిక,రోహిణి,మృగశిర, ఆర్ద్ర,పునర్వసు,పుష్యమి,ఆశ్లేష,మఖ,పుబ్బ, ఉత్తర,హస్త,చిత్త,స్వాతి,విశాఖ,అనూరాధ,జ్యేష్ట,మూల,పూర్వాషాడ,ఉత్తరాషాడ,శ్రవణం,ధనిష్ట,శతభిషం,పూర్వాభాద్ర,ఉత్తరాభాద్ర,రేవతి";
const arrayNamesOfStars = strTemp.split(',');

const arrayStarInfo = [];
arrayStarInfo.push({id:1,name:'అశ్వని',gananame:'దేవ',gananum:1,vedha:18,vadha:'OK',rajju:0,yoninum:1,yonipol:1});
arrayStarInfo.push({id:2,name:'భరణి',gananame:'మనుష్య',gananum:2,vedha:17,vadha:'OK',rajju:1,yoninum:2,yonipol:1});
arrayStarInfo.push({id:3,name:'కృత్తిక',gananame:'రాక్షస',gananum:3,vedha:16,vadha:'Not OK',rajju:2,yoninum:3,yonipol:0});
arrayStarInfo.push({id:4,name:'రోహిణి',gananame:'మనుష్య',gananum:2,vedha:15,vadha:'OK',rajju:3,yoninum:4,yonipol:1});
arrayStarInfo.push({id:5,name:'మృగశిర',gananame:'దేవ',gananum:1,vedha:37,vadha:'Not OK',rajju:4,yoninum:4,yonipol:0});
arrayStarInfo.push({id:6,name:'ఆర్ద్ర',gananame:'మనుష్య',gananum:2,vedha:22,vadha:'OK',yoninum:5,yonipol:0});
arrayStarInfo.push({id:7,name:'పునర్వసు',gananame:'దేవ',gananum:1,vedha:21,vadha:'OK',yoninum:6,yonipol:0});
arrayStarInfo.push({id:8,name:'పుష్యమి',gananame:'దేవ',gananum:1,vedha:20,vadha:'OK',yoninum:3,yonipol:1});
arrayStarInfo.push({id:9,name:'ఆశ్లేష',gananame:'రాక్షస',gananum:3,vedha:19,vadha:'Not OK',yoninum:6,yonipol:1});
arrayStarInfo.push({id:10,name:'మఖ',gananame:'రాక్షస',gananum:3,vedha:27,vadha:'Not OK',yoninum:7,yonipol:1});
arrayStarInfo.push({id:11,name:'పుబ్బ',gananame:'మనుష్య',gananum:2,vedha:26,vadha:'OK',yoninum:7,yonipol:0});
arrayStarInfo.push({id:12,name:'ఉత్తర',gananame:'మనుష్య',gananum:2,vedha:25,vadha:'Not OK',yoninum:8,yonipol:1});
arrayStarInfo.push({id:13,name:'హస్త',gananame:'దేవ',gananum:1,vedha:24,vadha:'Not OK',yoninum:9,yonipol:0});
arrayStarInfo.push({id:14,name:'చిత్త',gananame:'రాక్షస',gananum:3,vedha:28,vadha:'Not OK',yoninum:10,yonipol:0});
arrayStarInfo.push({id:15,name:'స్వాతి',gananame:'దేవ',gananum:1,vedha:4,vadha:'OK',yoninum:9,yonipol:1});
arrayStarInfo.push({id:16,name:'విశాఖ',gananame:'రాక్షస',gananum:3,vedha:3,vadha:'Not OK',yoninum:10,yonipol:1});
arrayStarInfo.push({id:17,name:'అనూరాధ',gananame:'దేవ',gananum:1,vedha:2,vadha:'Not OK',yoninum:11,yonipol:0});
arrayStarInfo.push({id:18,name:'జ్యేష్ట',gananame:'రాక్షస',gananum:3,vedha:1,vadha:'Not OK',yoninum:11,yonipol:1});
arrayStarInfo.push({id:19,name:'మూల',gananame:'రాక్షస',gananum:3,vedha:9,vadha:'OK',yoninum:5,yonipol:1});
arrayStarInfo.push({id:20,name:'పూర్వాషాడ',gananame:'మనుష్య',gananum:2,vedha:8,vadha:'OK',yoninum:12,yonipol:1});
arrayStarInfo.push({id:21,name:'ఉత్తరాషాడ',gananame:'మనుష్య',gananum:2,vedha:7,vadha:'Not OK',yoninum:13,yonipol:1});
arrayStarInfo.push({id:22,name:'శ్రవణం',gananame:'దేవ',gananum:1,vedha:6,vadha:'Not OK',yoninum:12,yonipol:0});
arrayStarInfo.push({id:23,name:'ధనిష్ట',gananame:'రాక్షస',gananum:3,vedha:19,vadha:'Not OK',yoninum:14,yonipol:0});
arrayStarInfo.push({id:24,name:'శతభిషం',gananame:'రాక్షస',gananum:3,vedha:13,vadha:'Not OK',yoninum:1,yonipol:0});
arrayStarInfo.push({id:25,name:'పూర్వాభాద్ర',gananame:'మనుష్య',gananum:2,vedha:12,vadha:'OK',yoninum:14,yonipol:1});
arrayStarInfo.push({id:26,name:'ఉత్తరాభాద్ర',gananame:'మనుష్య',gananum:2,vedha:11,vadha:'Not OK',yoninum:8,yonipol:0});
arrayStarInfo.push({id:27,name:'రేవతి',gananame:'దేవ',gananum:1,vedha:10,vadha:'Not OK',yoninum:2,yonipol:0});


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

//strTemp = "Kshatriya,Vysya,Sudra,Brahmana";
strTemp = "క్షత్రియ,వైశ్య,శూద్ర,బ్రాహ్మణ";
const arrayVarnaNames = strTemp.split(',');

//strTemp = "Chatushpada,Chatushpada,Nara,JalaChara,VanaChara,Nara,Nara,Keetaka,Nara,Chatushpada,Nara,JalaChara";		// vasya names for all the 12 rasis
strTemp = "చతుష్పాద,నర,జలచర,వనచర,కీటక";
const arrayVasyas = strTemp.split(',');
//strTemp = "చతుష్పాద,చతుష్పాద,నర,జలచర,వనచర,నర,నర,కీటక,నర,చతుష్పాద,నర,జలచర";
//const arrayVasyaNames = strTemp.split(',');
strTemp = "0,0,1,2,3,1,1,4,1,0,1,2";
const arrayVasyaNum = strTemp.split( ",");

//var strTemp = "Janma,Sampath,Vipath,Kshema,Pratyak,Sadhana,Naidhana,Mitra,ParamaMitra";
strTemp = "జన్మ,సంపత్,విపత్,క్షేమ,ప్రత్యక్,సాధన,నైధన,మిత్ర,పరమమిత్ర";
const arrayMaitriNames = strTemp.split(',');

//'names of yonis from aswini to revati. Mentions male or female also.
strTemp = "+గుఱ్ఱం,+ఏనుగు,-మేక,+పాము,-పాము,-కుక్క,-పిల్లి,+మేక,+పిల్లి,+ఎలుక,-ఎలుక,+ఆవు,-దున్న,-పులి,+దున్న,+పులి,-లేడి,+లేడి,+కుక్క,+కోతి,+ముంగిస,-కోతి,-సింహం,-గుఱ్ఱం,+సింహం,-ఆవు,-ఏనుగు";
//strTemp = "+Gurram,+Enugu,-Meka,+Paamu,-Paamu,-Kukka,-Pilli,+Meka,+Pilli,+Eluka,-Eluka,+Aavu,-Dunna,-Puli,+Dunna,+Puli,-Ledi,+Ledi,+Kukka,+Kothi,+Mungisa,-Kothi,-Simham,-Gurram,+Simham,-Aavu,-Enugu";
const arrayYoniNames = strTemp.split(',');
strTemp = "1,2,3,4,4,5,6,3,6,7,7,8,9,10,9,10,11,11,5,12,13,12,14,1,14,8,2";
const arrayYoniNum = strTemp.split( ",")


strTemp = "పాద,ఊరూ/కటి,నాభి/ఉదర,కంఠ,శిర ";
const arrayRajjuNames = strTemp.split(',');

strTemp = "4,6,10,13,16,22,26,27";
const arrayssAllowed = strTemp.split(",");
strTemp = "2,9,14,18,19,24,25";
const arrayssNotAllowed = strTemp.split(",");

let nadiNum = 0;
strTemp = "ఆది,మధ్య,అంత్య";
const arrayNadiNames = strTemp.split(',');


$(document).ready(function() 
{	
	showContent();
	//handleLink1();	//suitable stars for girl 
	//handleLink2();	//suitable stars for boy 
	handleLink3();	//vadha
	handleLink4();	//vedha
	//handleLink5();	// ashta kootami for girl
	//handleLink6();	// ashta kootami for boy
	//handleLink7();	// panchanga points girl
	//handleLink8();	// panchanga points boy
	//handleLink9();	// visha kanya
	//handleLink10();	// dosha nakshatra
	handleLink11();	// eka

	handleLink20();	// visleshana
	
	handleLink21();	// వధువుకి?
	handleLink22();	// వరునికి?
	
	handleLink30();	// నాపద్ధతి
 
	
});

var showContent = function() 
{
	
	// Init. fill select boxes of nakshatra names
	$.each(arrayNamesOfStars, function(val, text) 
	{
            $('#girlstar').append( $('<option></option>').val(val).html(text) );
			$('#boystar').append( $('<option></option>').val(val).html(text) );
			
	}); 
	$("#girlstar").val(0)   	// selects rohini by default
	$("#boystar").val(13)   	// selects chitta by default


	$('#bt').click( function () 
	{		
		prepareData();
		$(".pattika").empty();			
		$('.pattika').append('<h2>  మేలాపకము - కూటముల పట్టిక  </h2> <hr>');		// Dispaly starts here
		
		//Table1 Starts
		strTemp = '<table id="mytable1"><tr><th> </th><th>వధువు</th><th>వరుడు</th></tr>';			// 1st table- table headings
		
		// Table1-1st row - show nakshatra and paadam
		strTemp+= '<tr>'			
		strTemp+= '<td>నక్షత్రము - పాదం  </td> <td>(' + (gs+1) + ') <strong>' + arrayNamesOfStars[gs]  + ' - '+ (gp+1) + '</strong></td> <td>(' + (bs+1) + ') <strong>' + arrayNamesOfStars[bs]   + ' - ' + (bp+1) + '</strong></td></tr>';
		
		// Table1-2nd row - show rasi name and lord of that rasi.
		strTemp+= '<tr><td>రాశి - రాశ్యాధిపతి</td> <td><strong>' + arrayRasiInfo[girlRasiNum].name + ' - ' + arrayRasiInfo[girlRasiNum].lord + '</strong></td>';
		strTemp+= '<td><strong>' + arrayRasiInfo[boyRasiNum].name + ' - ' + arrayRasiInfo[boyRasiNum].lord + '</strong></td></tr>';
		
		//Table1-3rd row - show the navamsa rasi name and lord of that rasi
		//there are 0 to 107 navamsa numbers.		
		strTemp+= '<tr><td>నవాంశ - రాశి - అధిపతి</td> <td>'  + arrayRasiInfo[(girlNavamsa % 12)].name + ' - ' + arrayRasiInfo[(girlNavamsa % 12)].lord + '</td>';
		strTemp+= '<td>' +  arrayRasiInfo[(boyNavamsa % 12)].name + ' - ' + arrayRasiInfo[(boyNavamsa % 12)].lord + '</td></tr>';
		//alert("g = " + g + "Paadam = " + p1 + "navaamsa = " + theRowNum + "by 12 Mod = " + (theRowNum % 12) + "rasi = " + arrayRasiInfo[(theRowNum % 12)].name);
			
		strTemp+= '</table>';
		$('.pattika').append(strTemp); 
		//Table1 Ends							
		
		// *** Table2 ***
		//Table2 - headings 
		strTemp = '<br><table id="mytable2"><tr><th>కూటమి</th><th>వధువు</th><th>వరుడు</th><th>గుణం</th></tr>';
		subPoints = 0;
		totalPoints = 0;
		
		// Table2 - row 1.varna.   varna index is 0 to 3. ~rasinum is 0 to 11	
		find1Varna();
		strTemp+= '<tr><td>1. వర్ణ కూటమి</td> <td>' + arrayVarnaNames[(girlRasiNum % 4)] + '</td>';	
		strTemp+= '<td>' + arrayVarnaNames[(boyRasiNum % 4)] + '</td><td>' + thePoints +'</td></tr>';

		//Table2 - row 2.Vasya Kootami
		//vasya divisions are - Chatushpada =0,Nara=1, JalaChara=2 ,VanaChara=3,Keetaka=4.rasinum is 0 to 11						
		find2Vasya();
		strTemp+= '<tr><td>2. వశ్య కూటమి</td> <td>' + arrayVasyas[theRowNum] + '</td>';	
		strTemp+= '<td>' + arrayVasyas[theColNum] + '</td><td>' + thePoints + '</td></tr>';		
		
		
		// Table2 - row 3.Dina or Taaraa kootami
		findNavakam();
		find3Tara();
		strTemp+= '<tr><td>3. దిన/తారా కూటమి</td> <td>' + arrayMaitriNames[girlDiff] + '_N' + girlNavakam +  '</td>';
		strTemp+= '<td>' + arrayMaitriNames[boyDiff] +  '_N' + boyNavakam  + '</td><td>' + thePoints + '</td></tr>' ;
	
		//Table2 - row 4.Yoni Kootami
		find4Yoni();
		strTemp+= '<tr><td>4. యోని కూటమి</td> <td>' + arrayYoniNames[gs]  + '</td>';
		strTemp+= '<td>' + arrayYoniNames[bs] + '</td><td>' + thePoints + '</td></tr>';
	
		//Table2 - row 5. grahamaitri or rasyaadhipa  kootami
		find5Grahamaitri();	
		strTemp+= '<tr><td>5. రాశ్యాధిప/గ్రహమైత్రి కూటమి</td> <td>' +  arrayRasiInfo[girlRasiNum].lord + '</td>';
		strTemp+= '<td>' +  arrayRasiInfo[boyRasiNum].lord + '</td><td>' + thePoints + '</td></tr>';		// ~rasiNum is 0 to 11		
	
		//Table2 - row 6.Ganam
		//arrayGanaTypes gives 3 ganas and list of all stars in each gana - deva ,manushya, raakshasa
		//for each gana get the list of nakshatras
		// then check if one of them matches the girl's nakshatra.		
		find6Gana();
		strTemp+= '<tr><td>6. గణ కూటమి</td> <td>' +  arrayStarInfo[gs].gananame + '</td>';
		strTemp+= '<td>' +  arrayStarInfo[bs].gananame + '</td><td>' + thePoints + '</td></tr>';		
	

		//Table2 - row. 7.Bha Kootami				
		find7Bha();
		strTemp+= '<tr><td>7. భ/రాశి కూటమి</td> <td>' +  rasiG2B + '</td>';
		strTemp+= '<td>' +  rasiB2G + '</td><td>' + thePoints +'</td></tr>';
		

		//Table2 - row. 8.Naadi Kootami
		
		find8Nadi();
		strTemp+= '<tr><td>8. నాడీ కూటమి</td> <td>' +  arrayNadiNames[girlNadiNum] + '</td>';  // g is 0 to 26
		strTemp+= '<td>' +  arrayNadiNames[boyNadiNum] +  '</td><td>' + thePoints +'</td></tr>';
		
		//Table2 - row 9. Total
		strTemp+= '<tr><td><strong>మొత్తం గుణములు(36 కి)</strong></td> <td>-</td>';  // g is 0 to 26
		strTemp+= '<td>-</td><td><strong>' + totalPoints +'</strong></td></tr>';
	
		
		//Table2 - row 10. Rajju
		find10Rajju();
		strTemp+= '<tr><td>రజ్జు</td> <td>' +  girlRajjuName + '</td>';  // g is 0 to 26
		strTemp+= '<td>' +  boyRajjuName +  '</td><td>' + ' ' +'</td></tr>';
		
		//Table2 - 11th row - show G->B and B->G counts. sthree deergham

		strTemp+= '<tr><td>స్త్రీ దీర్ఘం</td> <td>g->b:' + ( (girlDiff+1) + (girlNavakam-1) * 9 )  + '</td>';
		strTemp+= 	'<td></td><td></td></tr>';	

		strTemp+= '</table>';     // end of table2   
		$('.pattika').append(strTemp); 

		getPoints("csv/ppidaparti.csv",girlNavamsa,boyNavamsa);	
		strTemp = "<p><h3>పిడపర్తి పంచాంగం ప్రకారం గుణాంకములు = " + thePoints + '</h2></p><hr class="style2">' ;
		$('.pattika').append(strTemp);   // show panchanga points
		
		showText("txt/t0.txt");
		
		let theRow = highlight_row(); // for table2 only
		

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



function showText(fname)
{
	
	jQuery.get(fname, function(data) 
	{
		//process text file line by line
		$('.vivarana').html(data.replace('n',''));
		$('#vivarana').empty();
		$("#vivarana").append(data);
	});
}


function handleLink3(){
	
	//vadha
	$("#link3").on("click",  function()
	{
		var fileName = "txt/vadha.txt" ;
		//alert(fileName);
			
		jQuery.get(fileName, function(data) 
		{
			$('.vivarana').empty();
			$(".vivarana").append(data);
        });
		
	});
}

function handleLink4(){
	//vedha
	
	$("#link4").on("click",  function()
	{
		let fileName = "txt/vedha.txt" ;
		//alert(fileName);
			
		jQuery.get(fileName, function(data) 
		{
			$('.vivarana').empty();
			$(".vivarana").append(data);
        });
		
	});
}

function handleLink11(){
// eka rasi or eka nakshatra 
	
	$("#link11").on("click",  function()
	{
		let fileName = "txt/eka.txt" ;
		//alert(fileName);
			
		jQuery.get(fileName, function(data) 
		{
			$('.vivarana').empty();
			$(".vivarana").append(data);
        });
		
	});
}



function handleLink20(){
//visleshana
	
	$("#link20").on("click",  function()
	{
		let fileName = "txt/visleshana.txt" ;
		//alert(fileName);
			
		jQuery.get(fileName, function(data) 
		{
			$('.vivarana').empty();
			$(".vivarana").append(data);
        });
		
	});
}

function handleLink21(){
	//vadhuvuku?
		
	$("#link21").on("click",  function()
	{
		// for the girl
		
		prepareData();
		$(".vivarana").empty();	
		strTemp = 	'<h2>' + arrayNamesOfStars[gs] + ' - ' + (gp+1) +  ' వధువుకు సరిపడే వరుల నక్షత్రములు</h2> <hr>';
		strTemp += '<table class="mytable"><tbody><tr><th> నక్షత్రం </th> <th> పాదం </th><th>గుణములు</th></tr>';
		//$('.vivarana').append(strTemp);		// Dispaly starts here
		let oldBS = "xxx";
		for ( let n=0;n<108;n++)
		{
			
			//gs and gp are given. selected by uer.
			bs = parseInt(n/4);
			
			bp = n % 4;
			boyNavamsa  = n;			
			boyRasiNum =  parseInt( n / 9 );

			girlNavamsa = gs * 4 + gp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 			
			girlRasiNum = parseInt( girlNavamsa / 9 );    // rasi numbers are 0 to 11. 
			
			let countRasi = 0.0;
			let countStar = 0.0;
			
			// rashi based
			find1Varna();
			find2Vasya();
			find5Grahamaitri();
			
			countRasi = ( parseFloat(arrayResults[0]) + parseFloat(arrayResults[1]) + parseFloat(arrayResults[4]) );
			if (countRasi >= 6){
											findNavakam();
					find3Tara();
					if(thePoints > 1){
						find4Yoni();					
						find6Gana();
						find8Nadi();
						countStar = ( parseFloat(arrayResults[2]) + parseFloat(arrayResults[3]) + parseFloat(arrayResults[5]) + parseFloat(arrayResults[7]) );
						if (countStar >= 7.5){
							find10Rajju();
							if ( (girlNadiNum != boyNadiNum) && (girlRajjuName != boyRajjuName) ){
								getPoints("csv/ppidaparti.csv",girlNavamsa,boyNavamsa);	
								//strTemp =  '(' + (bs+1) + ')' + arrayNamesOfStars[bs] + ' - ' + (bp+1) + ' - ' + countRasi + ' - ' + countStar + '<br>'  ;
								strTemp += '<tr><td>' + ((bs==oldBS) ? ' ' : arrayNamesOfStars[bs]) + '</td><td>' + (bp+1) + '</td><td>' + thePoints + '</td></tr>'  ;
								oldBS = bs;	
								//strTemp += ' - '  + girlNadiNum + ', ' + boyNadiNum + girlRajjuName + ', ' + boyRajjuName + '<br>';
								
							}
						}
					}
			}	
			
		}
		strTemp += '</tbody></table>';
		strTemp += '<p class="mytext">గుణములు పిడపర్తి పంచాంగములోనివి. నా పద్ధతిలో అన్నిటికన్నా మేలయిన నక్షత్రములు మాత్రమె ఇవ్వబడ్డాయి.';
		strTemp += '</p>';
		$('.vivarana').append(strTemp); 
		
	});
}


function handleLink22(){
	//varuni?
		
	$("#link22").on("click",  function()
	{
		// for the girl
		
		prepareData();
		$(".vivarana").empty();	
		strTemp = 	'<h2>' + arrayNamesOfStars[bs] + ' - ' + (bp+1) +  ' వరునికి సరిపడే వధూ నక్షత్రములు</h2> <hr>';
		strTemp += '<table class="mytable"><tbody><tr><th> నక్షత్రం </th> <th> పాదం </th><th>గుణములు</th></tr>';
		//$('.vivarana').append(strTemp);		// Dispaly starts here
		let oldGS = "xxx";
		for ( let n=0;n<108;n++)
		{
			//gs and gp are given. selected by uer.
			gs = parseInt(n/4);			
			gp = n % 4;
			girlNavamsa  = n;			
			girlRasiNum =  parseInt( n / 9 );

			boyNavamsa = bs * 4 + bp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 			
			boyRasiNum = parseInt( boyNavamsa / 9 );    // rasi numbers are 0 to 11. 
			
			let countRasi = 0.0;
			let countStar = 0.0;
			
			// rashi based
			find1Varna();
			find2Vasya();
			find5Grahamaitri();
			
			countRasi = ( parseFloat(arrayResults[0]) + parseFloat(arrayResults[1]) + parseFloat(arrayResults[4]) );
			if (countRasi >= 6){
					findNavakam();
					find3Tara();
					if(thePoints > 1){
						find4Yoni();					
						find6Gana();
						find8Nadi();
						countStar = ( parseFloat(arrayResults[2]) + parseFloat(arrayResults[3]) + parseFloat(arrayResults[5]) + parseFloat(arrayResults[7]) );
						if (countStar >= 7.5){
							find10Rajju();
							if ( (girlNadiNum != boyNadiNum) && (girlRajjuName != boyRajjuName) ){
								getPoints("csv/ppidaparti.csv",girlNavamsa,boyNavamsa);	
								//strTemp =  '(' + (bs+1) + ')' + arrayNamesOfStars[bs] + ' - ' + (bp+1) + ' - ' + countRasi + ' - ' + countStar + '<br>'  ;
								strTemp += '<tr><td>' + ((gs==oldGS) ? ' ' : arrayNamesOfStars[gs]) + '</td><td>' + (gp+1) + '</td><td>' + thePoints + '</td></tr>'  ;
								oldGS = gs;	
								//strTemp += ' - '  + girlNadiNum + ', ' + boyNadiNum + girlRajjuName + ', ' + boyRajjuName + '<br>';
								
							}
						}
					}
			}	
			
		}
		strTemp += '</tbody></table>';
		strTemp += '<p class="mytext">గుణములు పిడపర్తి పంచాంగములోనివి. నా పద్ధతిలో అన్నిటికన్నా మేలయిన నక్షత్రములు మాత్రమె ఇవ్వబడ్డాయి.';
		strTemp += '</p>';
		$('.vivarana').append(strTemp); 
		
	});
}



function handleLink30(){
	//నాపద్దతి
	$("#link30").on("click",  function(){

		prepareData();
		$(".vivarana").empty();			
		$('.vivarana').append('<h2>  కూటముల పట్టిక - నా పద్ధతి </h2> <hr>');		// Dispaly starts here
						
		strTemp = '<p class="mytext">వధువు = ' + (gs+1) + ') <strong>' + arrayNamesOfStars[gs]  + ' - '+ (gp+1) + '</strong>  &amp  వరుడు = ' + (bs+1) + ') <strong>' + arrayNamesOfStars[bs]   + ' - ' + (bp+1) + '</strong>. ';
		strTemp+= ' మూడు విధాలుగా బాగుంటేనే పొంతన ఉన్నట్లు.</p>';
		$('.vivarana').append(strTemp); 
			
		//Table2 - headings 
		strTemp = '<table id="mytable2"><tr><th>కూటమి</th><th>వధువు</th><th>వరుడు</th><th>గుణం</th></tr>';
		subPoints = 0;
		totalPoints = 0;

		// Table2 - row 1.varna.   varna index is 0 to 3. ~rasinum is 0 to 11
			
		find1Varna();
		strTemp+= '<tr><td>1. వర్ణ కూటమి</td> <td>' + arrayVarnaNames[(girlRasiNum % 4)] + '</td>';	
		strTemp+= '<td>' + arrayVarnaNames[(boyRasiNum % 4)] + '</td><td>' + thePoints +'</td></tr>';
		
		//Table2 - row 2.Vasya Kootami
		//vasya divisions are - Chatushpada =0,Nara=1, JalaChara=2 ,VanaChara=3,Keetaka=4.rasinum is 0 to 11						
		find2Vasya();
		strTemp+= '<tr><td>2. వశ్య కూటమి</td> <td>' + arrayVasyas[theRowNum] + '</td>';	
		strTemp+= '<td>' + arrayVasyas[theColNum] + '</td><td>' + thePoints + '</td></tr>';		
		
		//Table2 - row 5. Rasyaadhipa or graha maitri kootami
		find5Grahamaitri();
		strTemp+= '<tr><td>5. రాశ్యాధిప/గ్రహమైత్రి కూటమి</td> <td>' +  arrayRasiInfo[girlRasiNum].lord + '</td>';
		strTemp+= '<td>' +  arrayRasiInfo[boyRasiNum].lord + '</td><td>' + thePoints + '</td></tr>';		// ~rasiNum is 0 to 11		
	
		// Table2 - row 3.Dina or Taaraa kootami
		findNavakam();
		find3Tara();
		strTemp+= '<tr><td>3. దిన/తారా కూటమి</td> <td>' + arrayMaitriNames[girlDiff] + '_N' + girlNavakam +  '</td>';
		strTemp+= '<td>' + arrayMaitriNames[boyDiff] +  '_N' + boyNavakam  + '</td><td>' + thePoints + '</td></tr>' ;
			
		//Table2 - row 4.Yoni Kootami
		find4Yoni();
		strTemp+= '<tr><td>4. యోని కూటమి</td> <td>' + arrayYoniNames[gs]  + '</td>';
		strTemp+= '<td>' + arrayYoniNames[bs] + '</td><td>' + thePoints + '</td></tr>';
		
		//Table2 - row 6.Ganam
		//arrayGanaTypes gives 3 ganas and list of all stars in each gana - deva ,manushya, raakshasa
		//for each gana get the list of nakshatras
		// then check if one of them matches the girl's nakshatra.		
		find6Gana();
		strTemp+= '<tr><td>6. గణ కూటమి</td> <td>' +  arrayStarInfo[gs].gananame + '</td>';
		strTemp+= '<td>' +  arrayStarInfo[bs].gananame + '</td><td>' + thePoints + '</td></tr>';		
	
		//Table2 - row. 8.Naadi Kootami
		find8Nadi();
		strTemp+= '<tr><td>8. నాడీ కూటమి</td> <td>' +  arrayNadiNames[girlNadiNum] + '</td>';  // g is 0 to 26
		strTemp+= '<td>' +  arrayNadiNames[boyNadiNum] +  '</td><td>' + thePoints +'</td></tr>';
	

		//Table2 - row 9. Total
		strTemp+= '<tr><td><strong>మొత్తం గుణములు(29 కి)</strong></td> <td>-</td>';  // g is 0 to 26
		strTemp+= '<td>-</td><td><strong>' + totalPoints +'</strong></td></tr>';


		//Table2 - row. 7.Bha Kootami				
		find7Bha();
		strTemp+= '<tr><td>7. భ/రాశి కూటమి</td> <td>' +  rasiG2B + '</td>';
		strTemp+= '<td>' +  rasiB2G + '</td><td>' + thePoints +'</td></tr>';
	
		//Table2 - row 10. Rajju
		find10Rajju();
		strTemp+= '<tr><td>రజ్జు</td> <td>' +  girlRajjuName + '</td>';  // g is 0 to 26
		strTemp+= '<td>' +  boyRajjuName +  '</td><td>' + ' ' +'</td></tr>';
		

		strTemp+= '</table>';
		$('.vivarana').append(strTemp); // end of table2 and div


	strTemp = '<p class="mytext">';
	strTemp += '</p>';
	strTemp += '<p class="mytext">రాశి ఆధార విభజన( 8 కి కనీసం 6)     :';
	let tempResult = ( parseFloat(arrayResults[0]) + parseFloat(arrayResults[1]) + parseFloat(arrayResults[4]) );
	strTemp +=  tempResult;
	if (tempResult >= 6){
	
		strTemp += '<span class="mygreen">' + " పొంతన బాగుంది.  " + '</span>' ;
	} else{
		strTemp += '<span class="myred">' + " పొంతన బాలేదు.  " + '</span>';
	}
	
	strTemp += '<br>నక్షత్ర ఆధార విభజన( 21 కి కనీసం 7.5):';
	tempResult = ( parseFloat(arrayResults[2]) + parseFloat(arrayResults[3]) + parseFloat(arrayResults[5]) + parseFloat(arrayResults[7]) ) ;
	strTemp += tempResult;
	if (tempResult >= 7.5){
	
		strTemp += '<span class="mygreen">' + " పొంతన బాగుంది." + '</span>' ;
	} else{
		strTemp += '<span class="myred">' + " పొంతన బాలేదు." + '</span>' ;
	}

	strTemp += '<br>ఏక నాడి మరియు ఏక రజ్జు:';
	
	if(( girlNadiNum == boyNadiNum) && (girlRajjuName == boyRajjuName) ){

		
		strTemp += '<span class="myred">' + " దోషం ఉన్నది." + '</span>';
	} else{
		strTemp += '<span class="mygreen">' + "దోషం లేదు." + '</span>' ;
	}

	strTemp += '</p>';
	
	$('.vivarana').append(strTemp); // end of table2 and div
	

	});

	
}

function highlight_row() 
{
	//only for table2
	let table = document.getElementById('mytable2');
    let cells = table.getElementsByTagName('td');
	let rowSelected = 0;
	let rowId = 0;
    for (let i = 0; i < cells.length; i++) 
	{
        // Take each cell
        let cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () 
		{
            // Get the row id where the cell exists
            rowId = this.parentNode.rowIndex;

            let rowsNotSelected = table.getElementsByTagName('tr');
            for (let row = 0; row < rowsNotSelected.length; row++) 
			{
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "#FFEA9F";
            rowSelected.className += " selected";
			let fileName = "txt/t" + rowId.toString() + ".txt" ;
			//alert(fileName);
			//if ( parseInt(rowId) == 1) {  showText(fileName);}
			//showText(fileName);
            //msg = 'Row is: ' + rowId;			//rowSelected.cells[0].innerHTML
            //msg += '\nThe cell value is: ' + this.innerHTML;
			//alert(msg);
			jQuery.get(fileName, function(data) 
			{
				$('.vivarana').empty();
				$(".vivarana").append(data);
            });
        }
    }
	
	
}

function prepareData()
{
	
	thePoints = 0.0;
	subPoints = 0.0;
	totalPoints = 0.0;
	goodPoints = 18.0;
	

	for(let i=0 ; i < 10; i++){
		arrayResults[i] = 0.0;
	}

	

	// gs/bs is 0 to 26. gp/bp is 0 to 3
	gs = $("#girlstar").prop('selectedIndex');
	if (gs < 0 ) { gs = 0};			
	gp = $("#girlpaadam").prop('selectedIndex');
	if (gp < 0 ) { gp = 0};		
	bs = $("#boystar").prop('selectedIndex');
	if (bs < 0 ) { bs = 0};
	bp = $("#boypaadam").prop('selectedIndex');
	if (bp < 0 ) { bp = 0};	
	
	
	girlNavamsa = gs * 4 + gp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 				
	boyNavamsa  = bs * 4 + bp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. col is boys.
		
	girlRasiNum = parseInt( girlNavamsa / 9 );    // rasi numbers are 0 to 11. 
	boyRasiNum =  parseInt( boyNavamsa / 9 );	
	
}

function find1Varna(){
	//takes rasinum of girl and boy
	//reads points
	//calculates sub and total
	theRowNum = girlRasiNum % 4;
	theColNum = boyRasiNum % 4;
	getPoints("csv/varna.csv",theRowNum,theColNum);

	subPoints = parseInt(thePoints);
	arrayResults[0] = subPoints;
	totalPoints = totalPoints + subPoints;
}

function find2Vasya(){
	//uses rasinum of girl and boy to find vasya numbers
	//corrects special cases of dhanus and makara rasi
	//చతుష్పాద,నర,జలచర,వనచర,కీటక
	// rasis taken as 0,0,1,2,3,1,1,4,1,0,1,2
	//reads points. as per adipudi
	//caluculates sub and total points

	theRowNum = arrayVasyaNum[girlRasiNum];
	theColNum = arrayVasyaNum[boyRasiNum];
	//// for dhanus initially Nara. Only moola nara. others jantu.	
	if ( boyRasiNum == 8  && (boyNavamsa > 75 && boyNavamsa < 81) ) theColNum = 0; 
	if ( girlRasiNum == 8 &&  (girlNavamsa > 75 && girlNavamsa < 81 ) ) theRowNum = 0;
	// for makara intially jantu. only dhanus 1 n 2 are jala.
	if ( girlRasiNum == 9  && (girlNavamsa == 88 || girlNavamsa == 89) ) theRowNum = 2;	 
	if ( boyRasiNum == 9  && (boyNavamsa == 88 || boyNavamsa == 89)  ) theColNum = 2;			
	getPoints("csv/vasya.csv",theRowNum,theColNum);		
	
	subPoints = parseFloat(thePoints);
	arrayResults[1] = subPoints;
	totalPoints = totalPoints + subPoints;
}

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

function find3Tara(){

	//before this findNavakam function calculates girldiff and boydiff
	// takes girldiff and boydiff.
	// starts with zero points
	// if from girl tara is not 3/5/7 then 1.5 points
	// then if from  boy also tara is not 3/5/7 then 3 points
	//calculates sub and total points

	let tpG = 1.5;
	let tpB = 1.5;
	thePoints = 0.0;
	
	if ( (girlDiff+1) == 7 ){ tpG = 0.0;}
	if ( ( (girlDiff+1) == 5 ) && ( girlNavakam == 1 || girlNavakam == 2) ){ tpG = 0.0; }
	if ( ( (girlDiff+1) == 3 ) && ( girlNavakam == 1 ) ){ tpG = 0.0; }
	
	if ( (boyDiff+1) == 7 ){ tpB = 0.0;}
	if ( ( (boyDiff+1) == 5 ) && ( boyNavakam == 1 || boyNavakam == 2) ){ tpB = 0.0; }
	if ( ( (boyDiff+1) == 3 ) && ( boyNavakam == 1 ) ){ tpB = 0.0; }
	
	thePoints = tpG + tpB;
	if(tpG == 0){ thePoints = 0;} // points only if G->B is OK.
	
		/*
	//first, g 2 b must be ok. then only chck b 2 g.
	thePoints = 0;
	if ( (girlDiff+1) != 3 && (girlDiff+1) != 5 && (girlDiff+1) != 7  )
	{
		thePoints = 1.5; // only g 2 b ok
		if ( (boyDiff+1) != 3 && (boyDiff+1) != 5 && (boyDiff+1) != 7  )
		{
			thePoints = 3; // both ways ok
		}	

	}


	// either ok means 1.5 points. both ways is 3
	thePoints = 0.0;
	thePoints = 1.5; // only g 2 b ok
	if (  ( (girlDiff+1) != 3 && (girlDiff+1) != 5 && (girlDiff+1) != 7  ) || (  (boyDiff+1) != 3 && (boyDiff+1) != 5 && (boyDiff+1) != 7  )  ){
		thePoints = 1.5; // either way ok
	}
	if (  ( (girlDiff+1) != 3 && (girlDiff+1) != 5 && (girlDiff+1) != 7  ) && (  (boyDiff+1) != 3 && (boyDiff+1) != 5 && (boyDiff+1) != 7  )  ){
		thePoints = 3.0; // both ways ok
	}		
	*/

		
	subPoints = thePoints;
	arrayResults[2] = subPoints;
	totalPoints = totalPoints + subPoints;
}

function find4Yoni(){

	//gets yoninum of girl and boy from starinfo array
	//calculates points as per adipudi
	//calculates sub and total points

	theRowNum = arrayStarInfo[gs].yoninum-1; // yoninum is 1 to 14
	theColNum = arrayStarInfo[bs].yoninum-1;	
	getPoints("csv/yoni.csv",theRowNum,theColNum);		

	subPoints = parseInt(thePoints);
	arrayResults[3] = subPoints;
	totalPoints = totalPoints + subPoints;

}

function getRaasyaadhipa(x)
{
		//given rasi number 0 to 11
		// returns rasyadhipa grha number 0 to 6
		
		let numTemp = 0;
		if ( x == 4 )
		{
			return 0;
		}
		if ( x == 3 )
		{
			return 1;
		}
		if ( x == 0 || x == 7 )
		{
			return 2;
		}
		if ( x == 2 || x == 5 )
		{
			return 3;
		}
		if ( x == 8 || x == 11 )
		{
			return 4;
		}
		if ( x == 1 || x == 6 )
		{
			return 5;
		}
		if ( x == 9 || x == 10 )
		{
			return 6;
		}			
}


function find5Grahamaitri(){
	// uses get rasyadhipa function to get rasyadhipa number of girl and boy
	// gets points
	// as per muhurta sindhu
	//calculates sub and total points

	theRowNum = getRaasyaadhipa(girlRasiNum);
	theColNum = getRaasyaadhipa(boyRasiNum);
	getPoints("csv/raasyaadhipa.csv",theRowNum,theColNum);		

	subPoints = parseFloat(thePoints);
	arrayResults[4] = subPoints;
	totalPoints = totalPoints + subPoints;

}


function getGanaPoints(f,m)
{
	//takes gana number of girl and boy. 
	//returns gana points.
	// as per muhurta sindhu.
	if ( f == m) { return 6;} // both same
	else if (f == 1 && m == 2) { return 4;} // G= deva. B= nara
	else if (f == 1 && m == 3) { return 2;} // G= deva. B= rak
	else if (f == 2 && m == 1) { return 5;} // G= nara. B= deva
	else if (f == 2 && m == 3) { return 1;} // G= nara. B= rak
	else if (f == 3 && m == 1) { return 0;} // G= rak. B= deva
	else if (f == 3 && m == 2) { return 0;} // G= rak. B= nara
	
}

function find6Gana(){

	//gana number for boy and girl is read from starinfo array.
	//getganapoints function uses those gana numbers to calaculate points
	//calculates sub and total points

	thePoints = getGanaPoints(arrayStarInfo[gs].gananum,arrayStarInfo[bs].gananum);

	subPoints = parseInt(thePoints);
	arrayResults[5] = subPoints;
	totalPoints = totalPoints + subPoints;

}

function find7Bha(){
	//first find rasidiff or rasi distance of g2b and b2g.
	//this is required for print out.
	//get points based on rasi numbers
	//calaculate sub and total points

				
	if (girlRasiNum == boyRasiNum) 
	{ 
		rasiG2B = 1;
		rasiB2G = 1;			
	}
	else if (girlRasiNum > boyRasiNum)
	{
		rasiG2B = 12 - girlRasiNum + boyRasiNum + 1;
		rasiB2G = girlRasiNum - boyRasiNum + 1;
	}
	else if ( girlRasiNum < boyRasiNum)
	{
		rasiG2B = boyRasiNum - girlRasiNum + 1;
		rasiB2G = 12 - boyRasiNum + girlRasiNum + 1;
	}
	
	theRowNum = girlRasiNum;
	theColNum = boyRasiNum;
	getPoints("csv/bhakoota.csv",theRowNum,theColNum);

	subPoints = parseInt(thePoints);
	arrayResults[6] = subPoints;
	totalPoints = totalPoints + subPoints;
}


var getNadiNum = function(starNum)
{
	// star number needs to be 1 to 27
	// takes star number
	// returns nadi namber 0/1/2
	let numTemp = starNum % 6;
	
	if (numTemp < 2)
	{
		nadiNum = 0;		
	}
	else if (numTemp == 2 || numTemp == 5)
	{
		nadiNum = 1;		
	}
	else if (numTemp == 3 || numTemp == 4)
	{
		nadiNum = 2;		
	}
	
	return nadiNum;
};



function find8Nadi(){
	// nadi num function returns nadi num, given the star number.
	// nadis or 0/1/2
	// calculates points
	// calculates sub and total points

	girlNadiNum = getNadiNum(gs+1);
	boyNadiNum = getNadiNum(bs+1);

	thePoints = 8;
	if ( girlNadiNum == boyNadiNum){ thePoints = 0;}

	subPoints = parseInt(thePoints);
	arrayResults[7] = subPoints;
	totalPoints = totalPoints + subPoints;
}

function getRajjuNum(x)
{
	// x is star num 1 to 27
	// rajju numbers are 0 to 4
	let tempNum = 0;
	switch( x % 9)
	{
		case 0:
			tempNum = 0;
			break;
		case 1:
			tempNum = 0;
			break;	
		case 2:
			tempNum = 1;
			break;
		case 3:
			tempNum = 2;
			break;
		case 4:
			tempNum = 3;
			break;
		case 5:
			tempNum = 4;
			break;
		case 6:
			tempNum = 3;
			break;
		case 7:
			tempNum = 2;
			break;
		case 8:
			tempNum = 1;
			break;
	}
	return tempNum;
}

function find10Rajju(){

	// finds rajju number of boy or girl from get rajjuNum function.
	// then find rajju name from rajjunames array.

	girlRajjuName = arrayRajjuNames[getRajjuNum(gs+1)];
	boyRajjuName = arrayRajjuNames[getRajjuNum(bs+1)];

}

function numToString(num) { 

	if (Number.isInteger(num)) { 
	  return num + ".0"
	} else {
	  return num.toString(); 
	}
}
