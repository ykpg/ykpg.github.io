var goodPoints = 18;
var windowParams = `scrollbars=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=350,height=500,left=200,top=80`;
var arrayResults = [];

var strTemp ;			// general usage
//var strTemp = "Aswini,Bharani,Kruttika,Rohini,Mrugasira,Ardra,Punarvasu,Pushyami,Aslesha,Makha,PoorvaPhalguni,UttaraPhalguni,Hasta,Chitta,Swati,Visakha,Anuradha,Jyeshta,Moola,PoorvaShaada,UttaraShaada,Sravana,Dhanishta,Satabhisha,PoorvaBhaadra,UttaraBhaadra,Revati";		
var strTemp = "అశ్వని,భరణి,కృత్తిక,రోహిణి,మృగశిర, ఆర్ద్ర,పునర్వసు,పుష్యమి,ఆశ్లేష,మఖ,పుబ్బ, ఉత్తర,హస్త,చిత్త,స్వాతి,విశాఖ,అనూరాధ,జ్యేష్ట,మూల,పూర్వాషాడ,ఉత్తరాషాడ,శ్రవణం,ధనిష్ట,శతభిషం,పూర్వాభాద్ర,ఉత్తరాభాద్ర,రేవతి";
var arrayStarNames = strTemp.split(',');


//var strTemp = "Janma,Sampath,Vipath,Kshema,Pratyak,Sadhana,Naidhana,Mitra,ParamaMitra";
var strTemp = "జన్మ,సంపత్,విపత్,క్షేమ,ప్రత్యక్,సాధన,నైధన,మిత్ర,పరమమిత్ర";
var arrayMaitriNames = strTemp.split(',');

var g = 0; 		// the selected index of girl nakshatra
var b = 0; 		// the selected index of boy nakshatra
var p1 = 0;  	// the selected index of girl nakshatra paadam
var p2 = 0;  	// the selected index of boy nakshatra paadam

var arrayRasiInfo = []; // array has id, name, lord
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

var number_of_rows = 0;  	// for various tables
var number_of_cols = 0;

var girlRasiNum = 0;		//the number of the rasi. 0 to 11
var boyRasiNum = 0;	

//strTemp = "Kshatriya,Vysya,Sudra,Brahmana";
strTemp = "క్షత్రియ,వైశ్య,శూద్ర,బ్రాహ్మణ";
var arrayVarnaNames = strTemp.split(',');
						
//strTemp = "Chatushpada,Chatushpada,Nara,JalaChara,VanaChara,Nara,Nara,Keetaka,Nara,Chatushpada,Nara,JalaChara";		// vasya names for all the 12 rasis
strTemp = "చతుష్పాద,నర,జలచర,వనచర,కీటక";
var arrayVasyas = strTemp.split(',');
strTemp = "చతుష్పాద,చతుష్పాద,నర,జలచర,వనచర,నర,నర,కీటక,నర,చతుష్పాద,నర,జలచర";
var arrayVasyaNames = strTemp.split(',');
strTemp = "0,0,1,2,3,1,1,4,1,0,1,2";
var arrayVasyaNum = strTemp.split( ",");

var thePoints = 9;
var totalPoints  = 0;
var subPoints = 0;

//'names of yonis from aswini to revati. Mentions male or female also.
strTemp = "+గుఱ్ఱం,+ఏనుగు,-మేక,+పాము,-పాము,-కుక్క,-పిల్లి,+మేక,+పిల్లి,+ఎలుక,-ఎలుక,+ఆవు,-దున్న,-పులి,+దున్న,+పులి,-లేడి,+లేడి,+కుక్క,+కోతి,+ముంగిస,-కోతి,-సింహం,-గుఱ్ఱం,+సింహం,-ఆవు,-ఏనుగు";
//strTemp = "+Gurram,+Enugu,-Meka,+Paamu,-Paamu,-Kukka,-Pilli,+Meka,+Pilli,+Eluka,-Eluka,+Aavu,-Dunna,-Puli,+Dunna,+Puli,-Ledi,+Ledi,+Kukka,+Kothi,+Mungisa,-Kothi,-Simham,-Gurram,+Simham,-Aavu,-Enugu";
var arrayYoniNames = strTemp.split(',');
strTemp = "1,2,3,4,4,5,6,3,6,7,7,8,9,10,9,10,11,11,5,12,13,12,14,1,14,8,2";
var arrayYoniNum = strTemp.split( ",")

var arrayGanaTypes = [];    // 3 types of ganas. which gana represents which nakshatraas.
arrayGanaTypes.push({id:1,gana:'దేవ',stars:'1,5,7,8,13,15,17,22,27'}); 
arrayGanaTypes.push({id:2,gana:'మనుష్య',stars:'2,4,6,11,12,20,21,25,26'});
arrayGanaTypes.push({id:3,gana:'రాక్షస',stars:'3,9,10,14,16,18,19,23,24'}); 

var nadiNum;
strTemp = "పాద,ఊరూ/కటి,నాభి/ఉదర,కంఠ,శిర ";
var arrayRajjuNames = strTemp.split(',');


$(document).ready(function() 
{	
	showContent();
	//$(selector).on(event,childSelector,data,function,map) 
	handleLink1();
	handleLink2();
	handleLink3();
	handleLink4();
	
});

var showContent = function() 
{
	
	// for each loop to fill select boxes of nakshatra names
	$.each(arrayStarNames, function(val, text) 
	{
            $('#girlstar').append( $('<option></option>').val(val).html(text) );
			$('#boystar').append( $('<option></option>').val(val).html(text) );
			
    }); 
	
	$("#boystar").val(13)   	// selects chitta by default
			
	$('#bt').click( function () 
	{		
		g = $("#girlstar").prop('selectedIndex');
		if (g < 0 ) { g = 0};
		
		
		p1 = $("#paadam1").prop('selectedIndex');
		if (p1 < 0 ) { p1 = 0};
		
		
		b = $("#boystar").prop('selectedIndex');
		if (b < 0 ) { b = 0};
	
		p2 = $("#paadam2").prop('selectedIndex');
		if (p2 < 0 ) { p2 = 0};		
		
		var gdegrees = $("#gdeg").prop('value');
		var bdegrees = $("#bdeg").prop('value');
		
		
		$("#rightcol1").empty(); 
		$("#rightcol2").empty(); 
		
		number_of_rows = 3;
		number_of_cols = 3;
						
		var theRowNum = 0;
		theRowNum = g * 4 + p1;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 			
		
		var theColNum = 0;					
		theColNum = b * 4 + p2;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. col is boys.
		
		getPoints("csv/ppidaparti.csv",theRowNum,theColNum);
		
		$('#rightcol1').append('<h3>  మేలాపకము - కూటముల పట్టిక  </h3> <hr>');		// Dispaly starts here
		$('#rightcol1').append("<h2>పిడపర్తి పంచాంగం ప్రకారం గుణాంకములు = " + thePoints + '</h2>' );   // show anchanga points
		
		
		strTemp = '<table id="mytable"><tr><th> </th><th>వధువు</th><th>వరుడు</th></tr>';			// 1st table- table headings
		
		// Table1-frist row - show nakshatra and paadam
		strTemp+= '<tr>'			
		strTemp+= '<td>నక్షత్రము - పాదం  </td> <td>' + arrayStarNames[g] + '(' + (g+1) + ') ' + '-'+ (p1+1) + '</td> <td>' + arrayStarNames[b] + '(' + (b+1) + ') '  + '-' + (p2+1) + '</td></tr>';
										
		
		
		
		// Table1-2nd row - show rasi name and lord of that rasi.
		girlRasiNum = parseInt( theRowNum / 9 );    // rasi numbers are 0 to 11. theRowNum points to the Navamsa.
		boyRasiNum =  parseInt( theColNum / 9 );
		
		strTemp+= '<tr><td>రాశి - రాశ్యాధిపతి</td> <td>' + arrayRasiInfo[girlRasiNum].name + ' - ' + arrayRasiInfo[girlRasiNum].lord + '</td>';
		strTemp+= '<td>' + arrayRasiInfo[boyRasiNum].name + ' - ' + arrayRasiInfo[boyRasiNum].lord + '</td></tr>';
		

		
		//Table1-3rd row - show the navamsa rasi name and lord of that rasi
		//therownum and thecolnum give 0 to 107 navamsa numbers.
				
		strTemp+= '<tr><td>చంద్ర నవాంశ - అధిపతి</td> <td>' + (theRowNum+1) + ' - ' + arrayRasiInfo[(theRowNum % 12)].name + ' - ' + arrayRasiInfo[(theRowNum % 12)].lord + '</td>';
		strTemp+= '<td>' + (theColNum+1) + ' - ' + arrayRasiInfo[(theColNum % 12)].name + ' - ' + arrayRasiInfo[(theColNum % 12)].lord + '</td></tr>';
		//alert("g = " + g + "Paadam = " + p1 + "navaamsa = " + theRowNum + "by 12 Mod = " + (theRowNum % 12) + "rasi = " + arrayRasiInfo[(theRowNum % 12)].name);
		// table1 completed.now write to display.
		
		//Table1-4th row - show G->B and B->G counts.
		var diffGilr = 0;
		var diffBoy = 0;
		var girlNavakam =0;
		var boyNavakam = 0;
						
		if ( g < b )
		{
			diffGirl = (b-g) % 9;
			//alert(diffGirl);
			diffBoy = (27- b + g) % 9;
			//alert(diffBoy);
			girlNavakam = parseInt ( (b - g)/ 9) + 1;
			boyNavakam = parseInt ( (27- b + g)/ 9) + 1;
		}
		else if ( g > b )
		{
			diffGirl = (27 - g + b) % 9;
			diffBoy = (g - b) % 9;
			girlNavakam = parseInt ( (27 - g + b)/ 9) + 1;
			boyNavakam = parseInt ( (g - b)/ 9) + 1;
		}
		else if ( g == b )
		{
			diffGirl = 0;
			diffBoy = 0;
			girlNavakam = 1;
			boyNavakam = 1;
		}
		
		strTemp+= '<tr><td>నక్షత్ర దూరము:</td> <td>' + "g->b : " + ( (diffGirl+1) + (girlNavakam-1) * 9 ) + " (N-" + girlNavakam + ")" + '</td>';
		strTemp+= 					   '<td>' + "b->g : " + ( (diffBoy+1 ) + (boyNavakam-1) * 9 ) + " (N-" + boyNavakam + ")"  + '</td></tr>';

		strTemp+= '</table><br><br>';				
		$('#rightcol1').append(strTemp);		
		
		// *** Table2 ***
		number_of_rows = 12;
		number_of_cols = 4;
		
		
		//Table2 - headings 
		var strTemp = '<table id="mytable2"><tr><th>కూటమి</th><th>వధువు</th><th>వరుడు</th><th>గుణములు</th></tr>';
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
		//alert("sub = " + subPoints + " , total = " + totalPoints);
		//alert("sub = " + typeof(subPoints) + " , total = " + typeof(totalPoints) );
		
		//Table2 - row 2.Vasya Kootami
		
		//vasya divisions are - Chatushpada =0,Nara=1, JalaChara=2 ,VanaChara=3,Keetaka=4
		// ~rasinum is 0 to 11				
				
		theRowNum = arrayVasyaNum[girlRasiNum];
		theColNum = arrayVasyaNum[boyRasiNum];
		//alert (bdegrees);
		if ( girlRasiNum == 8 || boyRasiNum == 8 && gdegrees > 14)
		{
			theRowNum = 0;	// for dhanus 2nd half is animal.
			theColNum = 0;
		}
		if ( girlRasiNum == 9 || boyRasiNum == 9 && gdegrees > 14)
		{
			theRowNum = 2;	// for makara 2nd half is jalachara.
			theColNum = 2;
		}
		
		getPoints("csv/vasya.csv",theRowNum,theColNum);
		
		strTemp+= '<tr><td>2. వశ్య కూటమి</td> <td>' + arrayVasyas[theRowNum] + '</td>';	
		strTemp+= '<td>' + arrayVasyas[theColNum] + '</td><td>' + thePoints + '</td></tr>';
		
		subPoints = parseInt(thePoints);
		arrayResults[1] = subPoints;
		totalPoints = totalPoints + subPoints;
		
		// Table2 - row 3.Dina or Taaraa kootami
		var diffGilr = 0;
		var diffBoy = 0;
		var girlNavakam =0;
		var boyNavakam = 0;
						
		if ( g < b )
		{
			diffGirl = (b-g) % 9;
			//alert(diffGirl);
			diffBoy = (27- b + g) % 9;
			//alert(diffBoy);
			girlNavakam = parseInt ( (b - g)/ 9) + 1;
			boyNavakam = parseInt ( (27- b + g)/ 9) + 1;
		}
		else if ( g > b )
		{
			diffGirl = (27 - g + b) % 9;
			diffBoy = (g - b) % 9;
			girlNavakam = parseInt ( (27 - g + b)/ 9) + 1;
			boyNavakam = parseInt ( (g - b)/ 9) + 1;
		}
		else if ( g == b )
		{
			diffGirl = 0;
			diffBoy = 0;
			girlNavakam = 1;
			boyNavakam = 1;
		}
		
		thePoints = 3;
		if ( (diffGirl+1) == 3 || (diffGirl+1) == 5 || (diffGirl+1) == 7 )
		{
			thePoints =0;
		}
		
		
		strTemp+= '<tr><td>3. దిన/తారా కూటమి</td> <td>' + arrayMaitriNames[diffGirl] + '_N' + girlNavakam +  '</td>';
		strTemp+= '<td>' + arrayMaitriNames[diffBoy] +  '_N' + boyNavakam  + '</td><td>' + thePoints + '</td></tr>' ;
		subPoints = parseInt(thePoints);
		arrayResults[2] = subPoints;
		totalPoints = totalPoints + subPoints;
		
						
		//Table2 - row 4.Yoni Kootami
		theRowNum = arrayYoniNum[g] -1;
		theColNum = arrayYoniNum[b] -1;
		//alert("rownum = " + theRowNum + "  -  " + "   Colnum = " + theColNum + " g = " + g + "  peru = " + arrayYoniNames[g]);
		getPoints("csv/yoni.csv",theRowNum,theColNum);
		
		strTemp+= '<tr><td>4. యోని కూటమి</td> <td>' + arrayYoniNames[g]  + '</td>';
		strTemp+= '<td>' + arrayYoniNames[b] + '</td><td>' + thePoints + '</td></tr>';
		
		
		
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
		for (i=0; i<3 ; i++)
		{
			var arrayTemp = arrayGanaTypes[i].stars.split(',');
			var isFound = -1;
			var theGana = 0;
			isFound = arrayTemp.indexOf(String(g+1));
			if (isFound > -1) {theGana = i; break;}
		}
		strTemp+= '<tr><td>6. గణ కూటమి</td> <td>' +  arrayGanaTypes[theGana].gana + '</td>';
		for (i=0; i<3 ; i++)
		{
			arrayTemp = arrayGanaTypes[i].stars.split(',');
			isFound = -1;
			theGana = 0;
			isFound = arrayTemp.indexOf(String(b+1));
			if (isFound > -1) {theGana = i; break;}
		}
		
		var girlGana = getGana(g);
		var boyGana = getGana(b);
		thePoints = getGanaPoints(girlGana+1,boyGana+1);
		strTemp+= '<td>' +  arrayGanaTypes[theGana].gana + '</td><td>' + thePoints + '</td></tr>';
		
		subPoints = parseInt(thePoints);
		arrayResults[5] = subPoints;
		totalPoints = totalPoints + subPoints;
						
		//Table2 - row. 7.Bha Kootami				
		var rasiDiffGirl = 0;
		var rasiDiffBoy = 0;				
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
		
		var girlNadiName = getNadi(g+1);
		var girlNadiNum = nadiNum;
		var boyNadiName = getNadi(b+1);
		var boyNadiNum = nadiNum;
		
		thePoints = 8;
		if ( girlNadiNum == boyNadiNum){ thePoints = 0;}
		
		strTemp+= '<tr><td>8. నాడీ కూటమి</td> <td>' +  girlNadiName + '</td>';  // g is 0 to 26
		strTemp+= '<td>' +  boyNadiName +  '</td><td>' + thePoints +'</td></tr>';
		subPoints = parseInt(thePoints);
		arrayResults[7] = subPoints;
		totalPoints = totalPoints + subPoints;
		
		//Table2 - row 9. Total
		strTemp+= '<tr><td>మొత్తం గుణములు</td> <td>' +   '</td>';  // g is 0 to 26
		strTemp+= '<td>' + '</td><td>' + totalPoints +'</td></tr>';
		
		
		//Table2 - row 10. Rajju
		var girlRajjuName = arrayRajjuNames[getRajju(g+1) -1];
		var boyRajjuName = arrayRajjuNames[getRajju(b+1) - 1];
		if (girlRajjuName == boyRajjuName) { arrayResults[0] = 10; }
		strTemp+= '<tr><td>రజ్జు</td> <td>' +  girlRajjuName + '</td>';  // g is 0 to 26
		strTemp+= '<td>' +  boyRajjuName +  '</td><td>' + ' ' +'</td></tr>';
		
		// end of table2
		strTemp+= '</table>';
		$('#rightcol1').append(strTemp);
		
		showText("txt/t0.txt");
		
		var theRow = highlight_row();
			
		
	});	//function button click ends
		
}; // showContent function ends


var getNadi = function(starNum)
{
	// star number needs to be 1 to 27
	numTemp = starNum % 6;
	
	var NadiName;
	
	if (numTemp < 2)
	{
		nadiNum = 1;
		NadiName = "ఆది";
		
	}
	else if (numTemp == 2 || numTemp == 5)
	{
		nadiNum = 2;
		NadiName = "మధ్య";
	}
	else if (numTemp == 3 || numTemp == 4)
	{
		nadiNum = 3;
		NadiName = "అంత్య";
	}
	
	return NadiName;
};

var getPoints = function(theFile,theRowNum,theColNum)
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
				
				var arrayAllLines = allText.split("\n");	// array has all the row data strings												
				var strRowLine = arrayAllLines[theRowNum];  	//get the full text line for that particular row.
				var arrayCols = strRowLine.split(',');		//create array with columns data from the row line text.
				thePoints = arrayCols[theColNum];
				
				
			} // success ends
			
		}); // ajax ends
};

function getRaasyaadhipa(x)
{
		numTemp = 0;
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

function getGana(x)
{
	var tempNum = -1;
	for (i=0;i<3;i++)
	{
		var strTemp = arrayGanaTypes[i].stars;
		//alert("i = " + i + " ->  " + strTemp);
		var arrayTemp = strTemp.split(',');
				
		var itemIndex = arrayTemp.indexOf((x+1).toString() );
		
		if ( itemIndex > -1)
		{
			tempNum = i;
			//alert("breaking out. Index = " + itemIndex);
			break;
		}
		
		
	}
	//alert("tempNum = " + tempNum);
	return tempNum;	
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

function getRajju(x)
{
	var tempNum = 0;
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


function highlight_row() 
{
    var table = document.getElementById('mytable2');
    var cells = table.getElementsByTagName('td');
	var rowSelected = 0;
	var rowId = 0;
    for (var i = 0; i < cells.length; i++) 
	{
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () 
		{
            // Get the row id where the cell exists
            rowId = this.parentNode.rowIndex;

            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) 
			{
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "yellow";
            rowSelected.className += " selected";
			var fileName = "txt/t" + rowId.toString() + ".txt" ;
			//alert(fileName);
			//if ( parseInt(rowId) == 1) {  showText(fileName);}
			//showText(fileName);
            //msg = 'Row is: ' + rowId;			//rowSelected.cells[0].innerHTML
            //msg += '\nThe cell value is: ' + this.innerHTML;
			//alert(msg);
			jQuery.get(fileName, function(data) 
			{
				$('#rightcol2').empty();
				$("#rightcol2").append(data);
            });
        }
    }
	
	
}


function showText(fname)
{
	
	jQuery.get(fname, function(data) 
	{
		//alert("here in showtext");
		//alert(fname);
		//process text file line by line
		$('#rightcol2').html(data.replace('n',''));
		$('#rightcol2').empty();
		$("#rightcol2").append(data);
	});
}


function handleLink1(){
	
	
	$("#link1").on("click",  function()
	{
		g = $("#girlstar").prop('selectedIndex');
		if (g < 0 ) { g = 0};
		
		
		p1 = $("#paadam1").prop('selectedIndex');
		if (p1 < 0 ) { p1 = 0};
		
		
		b = $("#boystar").prop('selectedIndex');
		if (b < 0 ) { b = 0};
	
		p2 = $("#paadam2").prop('selectedIndex');
		if (p2 < 0 ) { p2 = 0};		
		
		arrayGoodNavamsas = [];
		arrayGoodPoints = [];
		j = 0;
	
		
		$('#rightcol2').empty();
		var strData = "";
		var strAmsa = "";
		
		$('#rightcol2').append('<h3>  </h3> <hr>');		// Dispaly starts here
		strData+=  '<h3>' + arrayStarNames[g] + ' - ' + (p1+1) + '- వధువుకు సరిపడే నక్షత్రములు</h3><hr>' ;
		
		for (i=0;i<108;i++)
		{
			var theRowNum = 0;
			theRowNum = g * 4 + p1;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 			
		
			var theColNum = 0;					
			theColNum = b * 4 + p2;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. col is boys.
		
			getPoints("csv/ppidaparti.csv",theRowNum,i);
			
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
				starDataV = '<br>';
				starDataX = arrayStarNames[theStar] ;
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
		
		var a108 = 0;
		a108 = theRowNum + 107;
		if ( a108 > 107) { a108 = a108 - 108;}
		theStar = parseInt(a108 / 4);
		thePaada = (a108 % 4 ) + 1;
		strAmsa = '<br>' + arrayStarNames[theStar] + ' - ' + thePaada + ' n ';
		
		var a88 = theRowNum + 87;
		if ( a88 > 107 ) { a88 = a88 - 108 ;}
		theStar = parseInt(a88 / 4);
		thePaada = (a88 % 4 ) + 1;
		strAmsa+= arrayStarNames[theStar] + ' - ' + thePaada + '<br>';
		strAmsa+= 'G->B - 108th Navamsa = ' + a108 + ' G->B - 88th Navamsa = ' + a88;
		
		$("#rightcol2").append(strData);
		strData = "";
		$("#rightcol2").append(strAmsa);
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
		g = $("#girlstar").prop('selectedIndex');
		if (g < 0 ) { g = 0};
		
		
		p1 = $("#paadam1").prop('selectedIndex');
		if (p1 < 0 ) { p1 = 0};
		
		
		b = $("#boystar").prop('selectedIndex');
		if (b < 0 ) { b = 0};
	
		p2 = $("#paadam2").prop('selectedIndex');
		if (p2 < 0 ) { p2 = 0};		
		
		arrayGoodNavamsas = [];
		arrayGoodPoints = [];
		j = 0;
		
	
		
		$('#rightcol2').empty();
		var strData = "";
		var strAmsa = "";
		
		$('#rightcol2').append('<h3>  </h3> <hr>');		// Dispaly starts here
		strData+=  '<h3>' + arrayStarNames[b] + ' - ' + (p1+1) + '- వరుడికి సరిపడే నక్షత్రములు</h3><hr>' ;
		
		for (i=0;i<108;i++)
		{
			var theRowNum = 0;
			theRowNum = g * 4 + p1;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. row is girls. 			
		
			var theColNum = 0;					
			theColNum = b * 4 + p2;		//there are 0-107 navamsas. this gives navamsa of given nakshatra and paadam. col is boys.
		
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
				
				starDataX = arrayStarNames[theStar] ;
				
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
		
		
		var a108 = 0;
		{ a108 = theColNum + 1;}
		if (theColNum == 107) { a108 = 0;}
		theStar = parseInt(a108 / 4);
		thePaada = (a108 % 4 ) + 1;
		strAmsa = '<br>' + arrayStarNames[theStar] + ' - ' + thePaada + ' n ';
		
		var a88 = theColNum + 21;
		if ( a88 > 107 ) { a88 = a88 - 107 ;}
		theStar = parseInt(a88 / 4);
		thePaada = (a88 % 4 ) + 1;
		strAmsa+= arrayStarNames[theStar] + ' - ' + thePaada + '<br>';
		strAmsa+= 'G->B - 108th Navamsa = ' + a108 + ' G->B - 88th Navamsa = ' + a88;

		$("#rightcol2").append(strData);
		$("#rightcol2").append(strAmsa);
		strData = "";
		//alert(strData);
		/*
		var x=window.open("/","Test", windowParams);
		x.document.open();
		x.document.write(strData);
		x.document.close();
		*/
		
	});
}


function handleLink3(){
	
	
	$("#link3").on("click",  function()
	{
		var fileName = "txt/vadha.txt" ;
		//alert(fileName);
			
		jQuery.get(fileName, function(data) 
		{
			$('#rightcol2').empty();
			$("#rightcol2").append(data);
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
			$('#rightcol2').empty();
			$("#rightcol2").append(data);
        });
		
	});
}

/*
$(document).ready(function() {
 $("#tblDatatr:has(td)").mouseover(function(e) {
 $(this).css("cursor", "pointer");
 });
 $("#tblDatatr:has(td)").click(function(e) {
 $("#tblData td").removeClass("highlight");
 var clickedCell= $(e.target).closest("td");
 clickedCell.addClass("highlight");
 $("#spnText").html(
 'Clicked table cell value is: <b> ' + clickedCell.text() + '</b>');
 });
});

*/