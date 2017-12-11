$(document).ready(function(){
    $("#btnMulch").click(function(){
        var dumpTruckAnimation = $("#dumptruck");
        dumpTruckAnimation.animate({left: '20em'}, "slow");
        dumpTruckAnimation.animate({right: '0em'}, "slow");
    });
});


function infoArea() {
	var infoPop = alert("Please insert the area of your Garden (Length x Width)\n\n" + "Hint: \nAverage American front yard = 8,712 square feet" + "\n1 Acre = 43,560 square feet\n");
}

function convertInputAreatoInt() {
	var intInputArea = parseInt(document.getElementById("txtGardenArea").value);
	var strBadInput = "Please input the Area as an Integer only (LxW)";
	
	document.getElementById("area").innerHTML = "If your Garden Area is " + intInputArea + " Square Feet, then you need:";
	if (isNaN(intInputArea)) {
		return alert(strBadInput);
	}else {
		return intInputArea;
	}
}
function getVolumeOption() {
	var obj = document.getElementById("volumeType");
	var strVolume = obj.options[obj.selectedIndex].text;
	return strVolume;
}


function calcMulch() {
	var intMulch;
	var intArea = convertInputAreatoInt();
	var strVolume = getVolumeOption();
	var intCubicFeet = (intArea * 0.33);
	var intBag = (intCubicFeet/2);
	var intCubicYard = (intCubicFeet/27);
	var intPickupLoad = (intCubicYard/2);
	var intDumpLoad = (intCubicYard/12);
	
	convertInputAreatoInt;
	getVolumeOption;
	
	if (strVolume == "Cubic Feet") {
		intMulch = Math.round(intCubicFeet*100)/100 + " Cubic Feet";
	} else if (strVolume == "Bag (2 cubic ft)") {
		intMulch = Math.round(intBag*100)/100 + " Bags";
	} else if (strVolume == "Cubic Yards") {
		intMulch = Math.round(intCubicYard*100)/100 + " Cubic Yards";
	} else if (strVolume == "Pick-Up Truck Loads") {
		intMulch = Math.round(intPickupLoad*100)/100 + " Pick-Up Truck Loads";
	} else if (strVolume == "Dump Truck Loads") {
		intMulch = Math.round(intDumpLoad*100)/100 + " Dump Truck Loads";
	}
	//added Math.round(num * 100)/100 to round to 2 decimal places Max
	document.getElementById("mulch").innerHTML = intMulch;
}
function infoAssumptions() {
	var assumptionsPop = alert("*Assuming 4 inch Mulch Depth.\n" + "Assuming 2 cubic yards per pickup truck.\n" + "Assuming 12 cubic yards per dump truck.\n");
}	