
let windowParams = `scrollbars=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=350,height=500,left=200,top=80`;

let gs = 0; 	// the selected index of girl nakshatra
let bs = 0; 	// the selected index of boy nakshatra
let gp = 0;  	// the selected index of girl nakshatra paadam
let bp = 0;  	// the selected index of boy nakshatra paadam

let thePoints = 0;
let subPoints = 0;
let totalPoints = 0;
let arrayResults = [];
let goodPoints = 18;

let strTemp ;			// general usage
let bd = 0;
let gd = 0;


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


//var strTemp = "Aswini,Bharani,Kruttika,Rohini,Mrugasira,Ardra,Punarvasu,Pushyami,Aslesha,Makha,PoorvaPhalguni,UttaraPhalguni,Hasta,Chitta,Swati,Visakha,Anuradha,Jyeshta,Moola,PoorvaShaada,UttaraShaada,Sravana,Dhanishta,Satabhisha,PoorvaBhaadra,UttaraBhaadra,Revati";		
strTemp = "అశ్వని,భరణి,కృత్తిక,రోహిణి,మృగశిర, ఆర్ద్ర,పునర్వసు,పుష్యమి,ఆశ్లేష,మఖ,పుబ్బ, ఉత్తర,హస్త,చిత్త,స్వాతి,విశాఖ,అనూరాధ,జ్యేష్ట,మూల,పూర్వాషాడ,ఉత్తరాషాడ,శ్రవణం,ధనిష్ట,శతభిషం,పూర్వాభాద్ర,ఉత్తరాభాద్ర,రేవతి";
const arrayNamesOfStars = strTemp.split(',');

const arrayStarInfo = [];
arrayStarInfo.push({id:1,name:'అశ్వని',gananame:'దేవ',gananum:1,vedha:18,vadha:'OK',rajju:0});
arrayStarInfo.push({id:2,name:'భరణి',gananame:'మనుష్య',gananum:2,vedha:17,vadha:'OK',rajju:1});
arrayStarInfo.push({id:3,name:'కృత్తిక',gananame:'రాక్షస',gananum:3,vedha:16,vadha:'Not OK',rajju:2});
arrayStarInfo.push({id:4,name:'రోహిణి',gananame:'మనుష్య',gananum:2,vedha:15,vadha:'OK',rajju:3});
arrayStarInfo.push({id:5,name:'మృగశిర',gananame:'దేవ',gananum:1,vedha:37,vadha:'Not OK',rajju:4});
arrayStarInfo.push({id:6,name:'ఆర్ద్ర',gananame:'మనుష్య',gananum:2,vedha:22,vadha:'OK'});
arrayStarInfo.push({id:7,name:'పునర్వసు',gananame:'దేవ',gananum:1,vedha:21,vadha:'OK'});
arrayStarInfo.push({id:8,name:'పుష్యమి',gananame:'దేవ',gananum:1,vedha:20,vadha:'OK'});
arrayStarInfo.push({id:9,name:'ఆశ్లేష',gananame:'రాక్షస',gananum:3,vedha:19,vadha:'Not OK'});
arrayStarInfo.push({id:10,name:'మఖ',gananame:'రాక్షస',gananum:3,vedha:27,vadha:'Not OK'});
arrayStarInfo.push({id:11,name:'పుబ్బ',gananame:'మనుష్య',gananum:2,vedha:26,vadha:'OK'});
arrayStarInfo.push({id:12,name:'ఉత్తర',gananame:'మనుష్య',gananum:2,vedha:25,vadha:'Not OK'});
arrayStarInfo.push({id:13,name:'హస్త',gananame:'దేవ',gananum:1,vedha:24,vadha:'Not OK'});
arrayStarInfo.push({id:14,name:'చిత్త',gananame:'రాక్షస',gananum:3,vedha:28,vadha:'Not OK'});
arrayStarInfo.push({id:15,name:'స్వాతి',gananame:'దేవ',gananum:1,vedha:4,vadha:'OK'});
arrayStarInfo.push({id:16,name:'విశాఖ',gananame:'రాక్షస',gananum:3,vedha:3,vadha:'Not OK'});
arrayStarInfo.push({id:17,name:'అనూరాధ',gananame:'దేవ',gananum:1,vedha:2,vadha:'Not OK'});
arrayStarInfo.push({id:18,name:'జ్యేష్ట',gananame:'రాక్షస',gananum:3,vedha:1,vadha:'Not OK'});
arrayStarInfo.push({id:19,name:'మూల',gananame:'రాక్షస',gananum:3,vedha:9,vadha:'OK'});
arrayStarInfo.push({id:20,name:'పూర్వాషాడ',gananame:'మనుష్య',gananum:2,vedha:8,vadha:'OK'});
arrayStarInfo.push({id:21,name:'ఉత్తరాషాడ',gananame:'మనుష్య',gananum:2,vedha:7,vadha:'Not OK'});
arrayStarInfo.push({id:22,name:'శ్రవణం',gananame:'దేవ',gananum:1,vedha:6,vadha:'Not OK'});
arrayStarInfo.push({id:23,name:'ధనిష్ట',gananame:'రాక్షస',gananum:3,vedha:19,vadha:'Not OK'});
arrayStarInfo.push({id:24,name:'శతభిషం',gananame:'రాక్షస',gananum:3,vedha:13,vadha:'Not OK'});
arrayStarInfo.push({id:25,name:'పూర్వాభాద్ర',gananame:'మనుష్య',gananum:2,vedha:12,vadha:'OK'});
arrayStarInfo.push({id:26,name:'ఉత్తరాభాద్ర',gananame:'మనుష్య',gananum:2,vedha:11,vadha:'Not OK'});
arrayStarInfo.push({id:27,name:'రేవతి',gananame:'దేవ',gananum:1,vedha:10,vadha:'Not OK'});


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
	handleLink1();
	handleLink2();
	handleLink3();
	handleLink4();
	handleLink5();
	handleLink6();
	handleLink7();
	handleLink8();
	
});

var showContent = function() 
{
	
	// Init. fill select boxes of nakshatra names
	$.each(arrayNamesOfStars, function(val, text) 
	{
            $('#girlstar').append( $('<option></option>').val(val).html(text) );
			$('#boystar').append( $('<option></option>').val(val).html(text) );
			
	}); 
	$("#girlstar").val(26)   	// selects rohini by default
	$("#boystar").val(13)   	// selects chitta by default


	$('#bt').click( function () 
	{		
		prepareData();
		$(".item2").empty();			
		$('.item2').append('<h1>  మేలాపకము - కూటముల పట్టిక  </h1> <hr>');		// Dispaly starts here
		
		//Table1 Starts
		strTemp = '<table id="mytable1"><tr><th> </th><th>వధువు</th><th>వరుడు</th></tr>';			// 1st table- table headings
		
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


		strTemp+= '</table>';				
		$('.item2').append(strTemp);		
		//Table1 Ends							
		
		// *** Table2 ***
		//Table2 - headings 
		strTemp = '<br><table id="mytable2"><tr><th>కూటమి</th><th>వధువు</th><th>వరుడు</th><th>గుణములు</th></tr>';
		subPoints = 0;
		totalPoints = 0;
		
		// Table2 - row 1.varna.   varna index is 0 to 3. ~rasinum is 0 to 11
		strTemp+= '<tr><td>1. వర్ణ కూటమి</td> <td>' + arrayVarnaNames[(girlRasiNum % 4)] + '</td>';		
		theRowNum = girlRasiNum % 4;
		theColNum = boyRasiNum % 4;
		getPoints("csv/varna.csv",theRowNum,theColNum);		
		strTemp+= '<td>' + arrayVarnaNames[(boyRasiNum % 4)] + '</td><td>' + thePoints +'</td></tr>';
		subPoints = parseInt(thePoints);
		arrayResults[0] = subPoints;
		totalPoints = totalPoints + subPoints;
		
		//Table2 - row 2.Vasya Kootami
		//vasya divisions are - Chatushpada =0,Nara=1, JalaChara=2 ,VanaChara=3,Keetaka=4.rasinum is 0 to 11						
		theRowNum = arrayVasyaNum[girlRasiNum];
		theColNum = arrayVasyaNum[boyRasiNum];
		if ( girlRasiNum == 8  && gdegrees > 14 )theRowNum = 0; // for dhanus 2nd half is animal.
		if ( girlRasiNum == 9  && gdegrees > 14 ) theRowNum = 2;	// for makara 2nd half is jalachara.
		if ( boyRasiNum == 8  && bdegrees > 14 )theColNum = 0; // for dhanus 2nd half is animal.
		if ( boyRasiNum == 9  && bdegrees > 14 ) theColNum = 2;	// for makara 2nd half is jalachara.			
		getPoints("csv/vasya.csv",theRowNum,theColNum);		
		strTemp+= '<tr><td>2. వశ్య కూటమి</td> <td>' + arrayVasyas[theRowNum] + '</td>';	
		strTemp+= '<td>' + arrayVasyas[theColNum] + '</td><td>' + thePoints + '</td></tr>';		
		subPoints = parseInt(thePoints);
		arrayResults[1] = subPoints;
		totalPoints = totalPoints + subPoints;

		// Table2 - row 3.Dina or Taaraa kootami
		findNavakam();
		thePoints = 3;
		if ( (girlDiff+1) == 3 || (girlDiff+1) == 5 || (girlDiff+1) == 7 || (boyDiff+1) == 3 || (boyDiff+1) == 5  || (boyDiff+1) == 7 ) 
		{
			thePoints =0;
		}
		strTemp+= '<tr><td>3. దిన/తారా కూటమి</td> <td>' + arrayMaitriNames[girlDiff] + '_N' + girlNavakam +  '</td>';
		strTemp+= '<td>' + arrayMaitriNames[boyDiff] +  '_N' + boyNavakam  + '</td><td>' + thePoints + '</td></tr>' ;
		subPoints = parseInt(thePoints);
		arrayResults[2] = subPoints;
		totalPoints = totalPoints + subPoints;

		//Table2 - row 4.Yoni Kootami
		theRowNum = arrayYoniNum[gs] -1;
		theColNum = arrayYoniNum[bs] -1;
		//alert("rownum = " + theRowNum + "  -  " + "   Colnum = " + theColNum + " g = " + g + "  peru = " + arrayYoniNames[g]);
		getPoints("csv/yoni.csv",theRowNum,theColNum);		
		strTemp+= '<tr><td>4. యోని కూటమి</td> <td>' + arrayYoniNames[gs]  + '</td>';
		strTemp+= '<td>' + arrayYoniNames[bs] + '</td><td>' + thePoints + '</td></tr>';
		subPoints = parseInt(thePoints);
		arrayResults[3] = subPoints;
		totalPoints = totalPoints + subPoints;

		//Table2 - row 5. Rasyaadhipa kootami
		theRowNum = getRaasyaadhipa(girlRasiNum);
		theColNum = getRaasyaadhipa(boyRasiNum);
		getPoints("csv/raasyaadhipa.csv",theRowNum,theColNum);		
		strTemp+= '<tr><td>5. రాశ్యాధిప కూటమి</td> <td>' +  arrayRasiInfo[girlRasiNum].lord + '</td>';
		strTemp+= '<td>' +  arrayRasiInfo[boyRasiNum].lord + '</td><td>' + thePoints + '</td></tr>';		// ~rasiNum is 0 to 11		
		subPoints = parseInt(thePoints);
		arrayResults[4] = subPoints;
		totalPoints = totalPoints + subPoints;

		//Table2 - row 6.Ganam
		//arrayGanaTypes gives 3 ganas and list of all stars in each gana - deva ,manushya, raakshasa
		//for each gana get the list of nakshatras
		// then check if one of them matches the girl's nakshatra.		
		thePoints = getGanaPoints(arrayStarInfo[gs].gananum,arrayStarInfo[bs].gananum);
		strTemp+= '<tr><td>6. గణ కూటమి</td> <td>' +  arrayStarInfo[gs].gananame + '</td>';
		strTemp+= '<td>' +  arrayStarInfo[bs].gananame + '</td><td>' + thePoints + '</td></tr>';		
		subPoints = parseInt(thePoints);
		arrayResults[5] = subPoints;
		totalPoints = totalPoints + subPoints;


		//Table2 - row. 7.Bha Kootami				
		let rasiDiffGirl = 0;
		let rasiDiffBoy = 0;				
		if (girlRasiNum == boyRasiNum) 
		{ 
			rasiDiffGirl = 1;
			rasiDiffBoy = 1;			
		}
		else if (girlRasiNum > boyRasiNum)
		{
			rasiDiffGirl = 12 - girlRasiNum + boyRasiNum + 1;
			rasiDiffBoy = girlRasiNum - boyRasiNum + 1;
		}
		else if ( girlRasiNum < boyRasiNum)
		{
			rasiDiffGirl = boyRasiNum - girlRasiNum + 1;
			rasiDiffBoy = 12 - boyRasiNum + girlRasiNum + 1;
		}
		
		theRowNum = girlRasiNum;
		theColNum = boyRasiNum;
		getPoints("csv/bhakoota.csv",theRowNum,theColNum);
		strTemp+= '<tr><td>7. భ/రాశి కూటమి</td> <td>' +  rasiDiffGirl + '</td>';
		strTemp+= '<td>' +  rasiDiffBoy + '</td><td>' + thePoints +'</td></tr>';
		subPoints = parseInt(thePoints);
		arrayResults[6] = subPoints;
		totalPoints = totalPoints + subPoints;


		//Table2 - row. 8.Naadi Kootami
		
		let girlNadiNum = getNadiNum(gs+1);
		let boyNadiNum = getNadiNum(bs+1);
		
		thePoints = 8;
		if ( girlNadiNum == boyNadiNum){ thePoints = 0;}
		
		strTemp+= '<tr><td>8. నాడీ కూటమి</td> <td>' +  arrayNadiNames[girlNadiNum] + '</td>';  // g is 0 to 26
		strTemp+= '<td>' +  arrayNadiNames[boyNadiNum] +  '</td><td>' + thePoints +'</td></tr>';
		subPoints = parseInt(thePoints);
		arrayResults[7] = subPoints;
		totalPoints = totalPoints + subPoints;
		
		//Table2 - row 9. Total
		strTemp+= '<tr><td>మొత్తం గుణములు</td> <td>' +   '</td>';  // g is 0 to 26
		strTemp+= '<td>' + '</td><td>' + totalPoints +'</td></tr>';

		
		
		//Table2 - row 10. Rajju
		let girlRajjuName = arrayRajjuNames[getRajju(gs+1) -1];
		let boyRajjuName = arrayRajjuNames[getRajju(bs+1) - 1];
		if (girlRajjuName == boyRajjuName) { arrayResults[0] = 10; }
		strTemp+= '<tr><td>రజ్జు</td> <td>' +  girlRajjuName + '</td>';  // g is 0 to 26
		strTemp+= '<td>' +  boyRajjuName +  '</td><td>' + ' ' +'</td></tr>';
		

		strTemp+= '</table>';
		$('.item2').append(strTemp); // end of table2 and div

		getPoints("csv/ppidaparti.csv",girlNavamsa,boyNavamsa);	
		strTemp = "<h3>పిడపర్తి పంచాంగం ప్రకారం గుణాంకములు = " + thePoints + '</h2>' ;
		$('.item2').append(strTemp);   // show panchanga points
		
		showText("txt/t0.txt");

		let theRow = highlight_row();
		

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

function getRaasyaadhipa(x)
{
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



function getGanaPoints(f,m)
{
	if ( f == m) { return 6;}
	else if (f == 1 && m == 2) { return 4;}
	else if (f == 1 && m == 3) { return 2;}
	else if (f == 2 && m == 1) { return 5;}
	else if (f == 2 && m == 3) { return 1;}
	else if (f == 3 && m == 1) { return 1;}
	else if (f == 3 && m == 2) { return 0;}
	
}

var getNadiNum = function(starNum)
{
	// star number needs to be 1 to 27
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

function getRajju(x)
{
	// x is star num 1 to 27
	let tempNum = 0;
	switch( x % 9)
	{
		case 0:
			tempNum = 1;
			break;
		case 1:
			tempNum = 1;
			break;	
		case 2:
			tempNum = 2;
			break;
		case 3:
			tempNum = 3;
			break;
		case 4:
			tempNum = 4;
			break;
		case 5:
			tempNum = 5;
			break;
		case 6:
			tempNum = 4;
			break;
		case 7:
			tempNum = 3;
			break;
		case 8:
			tempNum = 2;
			break;
	}
	return tempNum;
}

function showText(fname)
{
	
	jQuery.get(fname, function(data) 
	{
		//alert("here in showtext");
		//alert(fname);
		//process text file line by line
		$('.item3').html(data.replace('n',''));
		$('#item3').empty();
		$("#item3").append(data);
	});
}

function handleLink1(){
	
	
	$("#link1").on("click",  function()
	{
		prepareData();		
		let arrayGoodNavamsas = [];
		let arrayGoodPoints = [];
		let j = 0;
	
		
		$('.item3').empty();
		let strData = "";
		let strAmsa = "";
		
		//$('#item3').append('<h3>  </h3> <hr>');		// Dispaly starts here
		strData+=  '<h1>' + arrayNamesOfStars[gs] + ' - ' + (gp+1) + ' - వధువుకు సరిపడే నక్షత్రములు</h1><hr>' ;
		//strData+=  '<table><tr><th>' + 'గుణములు' + '</th><th>' + 'నక్షత్రం' + '</th><th>' + 'పాదములు' + '</th></tr>' ;
		for (i=0;i<108;i++)
		{
			theRowNum = 0;
			theRowNum = gs * 4 + gp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 			
		
			theColNum = 0;					
			theColNum = bs * 4 + bp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. col is boys.
			
			getPoints("csv/ppidaparti.csv",theRowNum,i);
			
			if (thePoints >= goodPoints)
			{
				//alert("Points = " + thePoints);
				arrayGoodNavamsas[j] = i;
				arrayGoodPoints[j] = thePoints;
				j = j + 1;
				
			}
		}
		let oldStar = -1;
		let starRepeated = 0;
		
		for (i=0;i< arrayGoodNavamsas.length;i++)
		{
			let theStar = 	parseInt(arrayGoodNavamsas[i] / 4 ); // 0 to 107 divided by 4. Take the quotient only.
			
			let thePaada = (arrayGoodNavamsas[i] % 4) + 1 ; // 0 to 107 mod by 4. gives 0 to 3. So, +1
			//alert("i = " + i + ", Star Number = " + theStar + ", Star = " + arrayStarNames[theStar] + ", Paadam = "  + thePaada);
			if (theStar != oldStar) 
			{ 
				starDataV = '<br>';
				starDataX = arrayNamesOfStars[theStar] ;
				starDataN = arrayGoodPoints[i] + ' - ' ;
				starDataY = ' - ';
				starDataZ = '';
				starRepeated = 0;
			}
			else
			{
				starDataV = '';
				starDataN = '' ;
				starRepeated = 1;
				starDataX = '' ;
				starDataY = ',';
				starDataZ = 'thePaada'
				starDataZ = '';
			}
			strData+= starDataV + starDataN  + starDataX + starDataY + thePaada + starDataZ;
			oldStar = theStar;
		}

		//strData+= '</table>'
		$(".item3").append(strData);
		strData = "";
		
		let a108 = 0;
		a108 = theRowNum + 107; // therownum is 0 to 107. gs and gp start from 0		
		if ( a108 > 107) { a108 = a108 - 108;}
		theStar = parseInt(a108 / 4);
		thePaada = (a108 % 4 ) + 1;
		strAmsa = '<br><br>' + 'G->B - 108th Navamsa = ' + a108;
		strAmsa+= ' - ' + arrayNamesOfStars[theStar] + ' - ' + thePaada ;
		
		let a88 = theRowNum + 87;
		if ( a88 > 107 ) { a88 = a88 - 108 ;}
		theStar = parseInt(a88 / 4);
		thePaada = (a88 % 4 ) + 1;
		strAmsa+=   ' , G->B - 88th Navamsa = ' + a88;
		strAmsa+= ' - ' + arrayNamesOfStars[theStar] + ' - ' + thePaada ;

		$(".item3").append(strAmsa);


		// vedha nakshtaras
		$(".item3").append('<br> ' + 'వేధ నక్షత్రములు నిషిద్ధము:  ');

		if ( (gs == 4) || (gs == 13) || (gs == 22) )
		{
			
			if (gs == 4) {
				$(".item3").append(arrayNamesOfStars[13] + ' & ' + arrayNamesOfStars[22]);
			 }
			 if (gs == 13) {
				$(".item3").append(arrayNamesOfStars[4] + ' & ' + arrayNamesOfStars[22]);
			 }
			 if (gs == 22) {
				$(".item3").append(arrayNamesOfStars[13] + ' & ' + arrayNamesOfStars[4]);
			 }
		}
		else
		{
			theStar = arrayStarInfo[gs].vedha - 1;
			$(".item3").append(arrayStarInfo[theStar].name);
		}

		//vadha nakshatras
		$(".item3").append('<br> ' + 'వధ నక్షత్రము:  ');
		let vadhaStar = gs + 1 + 6;
		if (vadhaStar > 27)
		{
			vadhaStar = vadhaStar - 27;
		}
		
		$(".item3").append(arrayStarInfo[vadhaStar-1].name + ' - ' + arrayStarInfo[gs].vadha);

		//alert(strData);
		/*
		var x=window.open("/","Test", windowParams);
		x.document.open();
		x.document.write(strData);
		x.document.close();
		*/
		
	});
}



function handleLink2(){
	
	
	$("#link2").on("click",  function()
	{
		prepareData();
		let arrayGoodNavamsas = [];
		let arrayGoodPoints = [];
		let j = 0;
	
		
		$('.item3').empty();
		let strData = "";
		let strAmsa = "";
		
		$('.item3').append('<h3>  </h3> <hr>');		// Dispaly starts here
		strData+=  '<h1>' + arrayNamesOfStars[bs] + ' - ' + (bp+1) + ' - వరుడికి సరిపడే నక్షత్రములు</h1><hr>' ;
		for (i=0;i<108;i++)
		{
			var theRowNum = 0;
			theRowNum = gs * 4 + gp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 			
		
			var theColNum = 0;					
			theColNum = bs * 4 + bp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. col is boys.
		
			getPoints("csv/ppidaparti.csv",i,theColNum);
			
			if (thePoints >= goodPoints)
			{
				//alert("Points = " + thePoints);
				arrayGoodNavamsas[j] = i;
				arrayGoodPoints[j] = thePoints;
				j = j + 1;
				
			}
		}
		var oldStar = -1;
		var starRepeated = 0;
		
		for (i=0;i< arrayGoodNavamsas.length;i++)
		{
			var theStar = 	parseInt(arrayGoodNavamsas[i] / 4 ); // 0 to 107 divided by 4. Take the quotient only.
			
			var thePaada = (arrayGoodNavamsas[i] % 4) + 1 ; // 0 to 107 mod by 4. gives 0 to 3. So, +1
			//alert("i = " + i + ", Star Number = " + theStar + ", Star = " + arrayStarNames[theStar] + ", Paadam = "  + thePaada);
			if (theStar != oldStar) 
			{ 
				
				starDataX = arrayNamesOfStars[theStar] ;
				
				starDataN = arrayGoodPoints[i] + ' - ' ;
				starDataY = ' - ';
				starDataZ = '';
				starDataV = '<br>';
				starRepeated = 0;
			}
			else
			{
				starRepeated = 1;
				starDataN = '';
				starDataX = '' ;
				starDataY = ',';
				starDataZ = 'thePaada'
				starDataZ = '';
				starDataV = '';
			}
			strData+= starDataV + starDataN + starDataX + starDataY + thePaada + starDataZ;
			oldStar = theStar;
			
						
		}
		
		$(".item3").append(strData);
		strData = "";
		
		let a108 = 0;
		a108 = theColNum + 107; // therownum is 0 to 107. gs and gp start from 0		
		if ( a108 > 107) { a108 = a108 - 108;}
		theStar = parseInt(a108 / 4);
		thePaada = (a108 % 4 ) + 1;
		strAmsa = '<br><br>' + 'G->B - 108th Navamsa = ' + a108;
		strAmsa+= ' - ' + arrayNamesOfStars[theStar] + ' - ' + thePaada ;
		
		let a88 = theColNum + 87;
		if ( a88 > 107 ) { a88 = a88 - 108 ;}
		theStar = parseInt(a88 / 4);
		thePaada = (a88 % 4 ) + 1;
		strAmsa+=   ' , G->B - 88th Navamsa = ' + a88;
		strAmsa+= ' - ' + arrayNamesOfStars[theStar] + ' - ' + thePaada ;


		$(".item3").append(strAmsa);

		// vedha nakshtaras
		$(".item3").append('<br> ' + 'వేధ నక్షత్రములు నిషిద్ధము:  ');

		if ( (bs == 4) || (bs == 13) || (bs == 22) )
		{
			
			if (bs == 4) {
				$(".item3").append(arrayNamesOfStars[13] + ' & ' + arrayNamesOfStars[22]);
			 }
			 if (bs == 13) {
				$(".item3").append(arrayNamesOfStars[4] + ' & ' + arrayNamesOfStars[22]);
			 }
			 if (bs == 22) {
				$(".item3").append(arrayNamesOfStars[13] + ' & ' + arrayNamesOfStars[4]);
			 }
		}
		else
		{
			theStar = arrayStarInfo[bs].vedha - 1;
			$(".item3").append(arrayStarInfo[theStar].name);
		}

		//vadha nakshatras
		$(".item3").append('<br> ' + 'వధ నక్షత్రము:  ');
		let vadhaStar = bs + 1 + 6;
		if (vadhaStar > 27)
		{
			vadhaStar = vadhaStar - 27;
		}
		
		$(".item3").append(arrayStarInfo[vadhaStar-1].name + ' - ' + arrayStarInfo[bs].vadha);

		
	});
}


function handleLink3(){
	
	
	$("#link3").on("click",  function()
	{
		var fileName = "txt/vadha.txt" ;
		//alert(fileName);
			
		jQuery.get(fileName, function(data) 
		{
			$('.item3').empty();
			$(".item3").append(data);
        });
		
	});
}

function handleLink4(){
	
	
	$("#link4").on("click",  function()
	{
		var fileName = "txt/vedha.txt" ;
		//alert(fileName);
			
		jQuery.get(fileName, function(data) 
		{
			$('.item3').empty();
			$(".item3").append(data);
        });
		
	});
}

function handleLink5(){
	
	
	$("#link5").on("click",  function()
	{
		prepareData();	
		$(".item3").empty();
		$('.item3').append('<h1>  మేలాపకము - కూటముల పట్టిక  </h1> <hr>');		// Dispaly starts here
		
		//Table1 Starts
		// 1st table- table headings
		strTemp = '<table id="mytable3"><caption>' + arrayNamesOfStars[gs] ;
		strTemp+= " - అమ్మాయి నక్షత్రానికి - వివిధ అబ్బాయి నక్షత్రముల అష్టకూటములు" + '</caption>';
		strTemp+= '<tr><th>Star</th><th>Paadam</th><th>వర్ణ</th><th>వశ్య</th><th>దిన</th><th>యోని</th><th>రాశ్యాధిప</th><th>గణ</th><th>రాశి</th><th>నాడి</th><th>మొత్తం</th></tr>';
		
		for (n=0; n<108; n++)
		{
			totalPoints = 0;
			boyNavamsa = n;
			bp = n % 4;
			girlRasiNum = parseInt( girlNavamsa / 9 );    // rasi numbers are 0 to 11. 
			boyRasiNum =  parseInt( boyNavamsa / 9 );	

			//calc1 Varna
			theRowNum = girlRasiNum % 4; //theRowNum points to the Navamsa.
			theColNum = boyRasiNum % 4;
			getPoints("csv/varna.csv",theRowNum,theColNum);		
			subPoints = parseInt(thePoints);
			arrayResults[0] = subPoints;
			totalPoints = totalPoints + subPoints;
			
			//Calc2 Vashya
			theRowNum = arrayVasyaNum[girlRasiNum];
			theColNum = arrayVasyaNum[boyRasiNum];
			if ( girlRasiNum == 8  && gd > 14 )theRowNum = 0; // for dhanus 2nd half is animal.
			if ( girlRasiNum == 9  && gd > 14 ) theRowNum = 2;	// for makara 2nd half is jalachara.
			if ( boyRasiNum == 8  && bd > 14 )theColNum = 0; // for dhanus 2nd half is animal.
			if ( boyRasiNum == 9  && bd > 14 ) theColNum = 2;	// for makara 2nd half is jalachara.			
			getPoints("csv/vasya.csv",theRowNum,theColNum);	
			subPoints = parseInt(thePoints);
			arrayResults[1] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc3 Dina or Tara
			bs = parseInt(n/4); // findNavakam function needs bs

			findNavakam(); // it creates ~Diff and ~Navakam
			thePoints = 3;
			if ( (girlDiff+1) == 3 || (girlDiff+1) == 5 || (girlDiff+1) == 7 || (boyDiff+1) == 3 || (boyDiff+1) == 5  || (boyDiff+1) == 7 ) 
			{
				thePoints =0;
			}
			subPoints = parseInt(thePoints);
			arrayResults[2] = subPoints;
			totalPoints = totalPoints + subPoints;

			//clac4 Yoni
			theRowNum = arrayYoniNum[gs] -1;
			theColNum = arrayYoniNum[bs] -1;
			//alert("rownum = " + theRowNum + "  -  " + "   Colnum = " + theColNum + " g = " + g + "  peru = " + arrayYoniNames[g]);
			getPoints("csv/yoni.csv",theRowNum,theColNum);		
			subPoints = parseInt(thePoints);
			arrayResults[3] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc5 maitri
			theRowNum = getRaasyaadhipa(girlRasiNum);
			theColNum = getRaasyaadhipa(boyRasiNum);
			getPoints("csv/raasyaadhipa.csv",theRowNum,theColNum);	
			subPoints = parseInt(thePoints);
			arrayResults[4] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc6 Gana
			//arrayGanaTypes gives 3 ganas and list of all stars in each gana - deva ,manushya, raakshasa
			//for each gana get the list of nakshatras
			// then check if one of them matches the girl's nakshatra.		
			thePoints = getGanaPoints(arrayStarInfo[gs].gananum,arrayStarInfo[bs].gananum);
			subPoints = parseInt(thePoints);
			arrayResults[5] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc7 bha
			theRowNum = girlRasiNum;
			theColNum = boyRasiNum;
			getPoints("csv/bhakoota.csv",theRowNum,theColNum);
			subPoints = parseInt(thePoints);
			arrayResults[6] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc8 Nadi
			let girlNadiNum = getNadiNum(gs+1);
			let boyNadiNum = getNadiNum(bs+1);
			
			thePoints = 8;
			if ( girlNadiNum == boyNadiNum){ thePoints = 0;}
			subPoints = parseInt(thePoints);
			arrayResults[7] = subPoints;
			totalPoints = totalPoints + subPoints;
		
			strTemp+= '<tr><td>' + arrayNamesOfStars[bs] +  '</td><td>' + (bp+1) + '</td>';
			for( i = 0 ; i < 8; i++)
			{
				strTemp+= '<td>' + arrayResults[i] +  '</td>';
			}
			strTemp+= '<td>' + totalPoints +  '</td></tr>';		
		
		}	// for loop ends here	
		
		strTemp+= '</table>';
		$('.item3').append(strTemp);   // show panchanga points
		

	});
}

function handleLink6(){
	
	
	$("#link6").on("click",  function()
	{
		prepareData();		
		$(".item3").empty();
		$('.item3').append('<h1>  మేలాపకము - కూటముల పట్టిక  </h1> <hr>');		// Dispaly starts here
		
		//Table1 Starts
		// 1st table- table headings
		strTemp = '<table id="mytable3"><caption>' + arrayNamesOfStars[bs] ;
		strTemp+= " - అబ్బాయి నక్షత్రానికి - వివిధ అమ్మాయి నక్షత్రముల అష్టకూటములు" + '</caption>';
		strTemp+= '<tr><th>Star</th><th>Paadam</th><th>వర్ణ</th><th>వశ్య</th><th>దిన</th><th>యోని</th><th>రాశ్యాధిప</th><th>గణ</th><th>రాశి</th><th>నాడి</th><th>మొత్తం</th></tr>';
		
		for (n=0; n<108; n++)
		{
			totalPoints = 0;
			girlNavamsa = n;
			gp = n % 4;
			girlRasiNum = parseInt( girlNavamsa / 9 );    // rasi numbers are 0 to 11. 
			boyRasiNum =  parseInt( boyNavamsa / 9 );	

			//calc1 Varna
			theRowNum = girlRasiNum % 4; //theRowNum points to the Navamsa.
			theColNum = boyRasiNum % 4;
			getPoints("csv/varna.csv",theRowNum,theColNum);		
			subPoints = parseInt(thePoints);
			arrayResults[0] = subPoints;
			totalPoints = totalPoints + subPoints;
			
			//Calc2 Vashya
			theRowNum = arrayVasyaNum[girlRasiNum];
			theColNum = arrayVasyaNum[boyRasiNum];
			if ( girlRasiNum == 8  && gd > 14 )theRowNum = 0; // for dhanus 2nd half is animal.
			if ( girlRasiNum == 9  && gd > 14 ) theRowNum = 2;	// for makara 2nd half is jalachara.
			if ( boyRasiNum == 8  && bd > 14 )theColNum = 0; // for dhanus 2nd half is animal.
			if ( boyRasiNum == 9  && bd > 14 ) theColNum = 2;	// for makara 2nd half is jalachara.			
			getPoints("csv/vasya.csv",theRowNum,theColNum);	
			subPoints = parseInt(thePoints);
			arrayResults[1] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc3 Dina or Tara
			gs = parseInt(n/4); // findNavakam function needs gs
			let oldStarName = arrayNamesOfStars[gs];
			findNavakam(); // it creates ~Diff and ~Navakam
			thePoints = 3;
			if ( (girlDiff+1) == 3 || (girlDiff+1) == 5 || (girlDiff+1) == 7 || (boyDiff+1) == 3 || (boyDiff+1) == 5  || (boyDiff+1) == 7 ) 
			{
				thePoints =0;
			}
			subPoints = parseInt(thePoints);
			arrayResults[2] = subPoints;
			totalPoints = totalPoints + subPoints;

			//clac4 Yoni
			theRowNum = arrayYoniNum[gs] -1;
			theColNum = arrayYoniNum[bs] -1;
			//alert("rownum = " + theRowNum + "  -  " + "   Colnum = " + theColNum + " g = " + g + "  peru = " + arrayYoniNames[g]);
			getPoints("csv/yoni.csv",theRowNum,theColNum);		
			subPoints = parseInt(thePoints);
			arrayResults[3] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc5 maitri
			theRowNum = getRaasyaadhipa(girlRasiNum);
			theColNum = getRaasyaadhipa(boyRasiNum);
			getPoints("csv/raasyaadhipa.csv",theRowNum,theColNum);	
			subPoints = parseInt(thePoints);
			arrayResults[4] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc6 Gana
			//arrayGanaTypes gives 3 ganas and list of all stars in each gana - deva ,manushya, raakshasa
			//for each gana get the list of nakshatras
			// then check if one of them matches the girl's nakshatra.		
			thePoints = getGanaPoints(arrayStarInfo[gs].gananum,arrayStarInfo[bs].gananum);
			subPoints = parseInt(thePoints);
			arrayResults[5] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc7 bha
			theRowNum = girlRasiNum;
			theColNum = boyRasiNum;
			getPoints("csv/bhakoota.csv",theRowNum,theColNum);
			subPoints = parseInt(thePoints);
			arrayResults[6] = subPoints;
			totalPoints = totalPoints + subPoints;

			//calc8 Nadi
			let girlNadiNum = getNadiNum(gs+1);
			let boyNadiNum = getNadiNum(bs+1);
			
			thePoints = 8;
			if ( girlNadiNum == boyNadiNum){ thePoints = 0;}
			subPoints = parseInt(thePoints);
			arrayResults[7] = subPoints;
			totalPoints = totalPoints + subPoints;
			
			strTemp+= '<tr><td>' + arrayNamesOfStars[gs] +  '</td><td>' + (gp+1) + '</td>';
			for( i = 0 ; i < 8; i++)
			{
				strTemp+= '<td>' + arrayResults[i] +  '</td>';
			}
			strTemp+= '<td>' + totalPoints +  '</td></tr>';		
			
		}	// for loop ends here	
		
		strTemp+= '</table>';
		//strTemp+= "<h3>పిడపర్తి పంచాంగం ప్రకారం గుణాంకములు = " + thePoints + '</h2>' ;
		$('.item3').append(strTemp);   // show panchanga points
		

	});
}


function handleLink7(){	
	$("#link7").on("click",  function()
	{
		prepareData();
		$(".item3").empty();		
		$('.item3').append('<h1>  మేలాపకము - కూటముల పట్టిక  </h1> <hr>');		// Dispaly starts here
				
		//Table1 Starts. - table headings
		strTemp = '<table id="mytable1"><caption>' + arrayNamesOfStars[gs] ;
		strTemp+= " - అమ్మాయి నక్షత్రానికి - వివిధ అబ్బాయి నక్షత్రముల పాయింట్స్" + '</caption>';
		strTemp+= '<th>Star</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>';
		for(s = 0; s < 27; s++)
		{
			strTemp+= '<tr><td>' + arrayNamesOfStars[s] + '</td>';
			for(p = 0; p<4 ; p++)
			{
				getPoints("csv/ppidaparti.csv",girlNavamsa,(4*s + p) );
				strTemp+= '<td>'+ thePoints + '</td>';

			}
		}	
		
		strTemp+= '</table>';				
		strTemp+= '<h3>పిడపర్తి పంచాంగం ప్రకారం ఇవ్వబడ్డాయి.</h2>' ;					
		$('.item3').append(strTemp);   // show panchanga points
	});
}


function handleLink8(){		
	$("#link8").on("click",  function()
	{
		prepareData();
		$(".item3").empty();
		$('.item3').append('<h1>  మేలాపకము - కూటముల పట్టిక  </h1> <hr>');		// Dispaly starts here
		
		//Table2 Starts
		// 2nd table- table headings
		strTemp = '<table id="mytable2"><caption>' + arrayNamesOfStars[bs] ;
		strTemp+= " - అబ్బాయి నక్షత్రానికి - వివిధ అమ్మాయి నక్షత్రముల పాయింట్స్" + '</caption>';
		strTemp+= '<th>Star</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>';
		for(s = 0; s < 27; s++)
		{
			strTemp+= '<tr><td>' + arrayNamesOfStars[s] + '</td>';
			for(p = 0; p<4 ; p++)
			{
				getPoints("csv/ppidaparti.csv",(4*s + p), boyNavamsa );
				strTemp+= '<td>'+ thePoints + '</td>';

			}
		}		
		strTemp+= '</table>';
		strTemp+= '<h3>పిడపర్తి పంచాంగం ప్రకారం ఇవ్వబడ్డాయి.</h2>' ;
		$('.item3').append(strTemp);   // show panchanga points
		
	});
}



function highlight_row() 
{
    let table = document.getElementById('mytable2');
    let cells = table.getElementsByTagName('td');
	let rowSelected = 0;
	let rowId = 0;
    for (var i = 0; i < cells.length; i++) 
	{
        // Take each cell
        let cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () 
		{
            // Get the row id where the cell exists
            rowId = this.parentNode.rowIndex;

            let rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) 
			{
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "yellow";
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
				$('.item3').empty();
				$(".item3").append(data);
            });
        }
    }
	
	
}


function isinArray(arr, obj) {
    for( i=0; i<arr.length; i++) {
        if (arr[i] == obj) return true;
	}
	return false;
}

function prepareData()
{
	// gs/bs is 0 to 26. gp/bp is 0 to 3
	gs = $("#girlstar").prop('selectedIndex');
	if (gs < 0 ) { gs = 0};			
	gp = $("#girlpaadam").prop('selectedIndex');
	if (gp < 0 ) { gp = 0};		
	bs = $("#boystar").prop('selectedIndex');
	if (bs < 0 ) { bs = 0};
	bp = $("#boypaadam").prop('selectedIndex');
	if (bp < 0 ) { bp = 0};	
	
	// degrees are 0 to 29	
	gd = $("#girldeg").prop('value');
	bd = $("#boydeg").prop('value');

	girlNavamsa = gs * 4 + gp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 				
	boyNavamsa  = bs * 4 + bp;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. col is boys.
		
		
}