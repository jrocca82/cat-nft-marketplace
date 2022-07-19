var colors = Object.values(allColors());

var defaultDNA = {
	headcolor: 10,
	mouthColor: 13,
	eyesColor: 96,
	earsColor: 10,

	//Cattributes
	eyesShape: 1,
	decorationPattern: 1,
	decorationMidcolor: 13,
	decorationSidescolor: 13,
	animation: 1,
	lastNum: 1,
};

// when page load
$(document).ready(function () {
	$("#dnabody").html(defaultDNA.headColor);
	$("#dnamouth").html(defaultDNA.mouthColor);
	$("#dnaeyes").html(defaultDNA.eyesColor);
	$("#dnaears").html(defaultDNA.earsColor);

	  $('#dnashape').html(defaultDNA.eyesShape)
	  $('#dnadecoration').html(defaultDNA.decorationPattern)
	  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
	  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
	  $('#dnaanimation').html(defaultDNA.animation)
	  $('#dnaspecial').html(defaultDNA.lastNum)

	renderCat(defaultDNA);
});

function getDna() {
	var dna = "";
	dna += $("#dnabody").html();
	dna += $("#dnamouth").html();
	dna += $("#dnaeyes").html();
	dna += $("#dnaears").html();
	dna += $("#dnashape").html();
	dna += $("#dnadecoration").html();
	dna += $("#dnadecorationMid").html();
	dna += $("#dnadecorationSides").html();
	dna += $("#dnaanimation").html();
	dna += $("#dnaspecial").html();

	return parseInt(dna);
}


//Generate random cat
function randomKitty() {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	  }
    var randomDna = {
		headcolor: getRandomInt(10, 99),
		mouthColor: getRandomInt(10, 99),
		eyesColor: getRandomInt(10, 99),
		earsColor: getRandomInt(10, 99),
	
		//Cattributes
		eyesShape: getRandomInt(1, 8),
		decorationPattern: getRandomInt(1, 8),
		decorationMidcolor: getRandomInt(10, 99),
		decorationSidescolor: getRandomInt(10, 99),
		animation: getRandomInt(1, 5),
		lastNum: 1,
	};
	renderCat(randomDna);
}

//reset to basic cat
function resetKitty() {
	renderCat(defaultDNA);
}

function renderCat(dna){
    headColor(colors[dna.headColor],dna.headColor)
    $('#bodycolor').val(dna.headColor)
    bodyColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouth-belly-tail').val(dna.mouthColor)
    eyeColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyecolor').val(dna.eyesColor)
    pawColor(colors[dna.earsColor],dna.earsColor)
    $('#ears-paws').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    
    $('#decorationpattern').val(dna.decorationPattern)
    decorationMidColor([dna.decorationMidcolor],dna.decorationMidcolor)
    $('#decorationmid').val(dna.decorationMidcolor)
    decorationSidesColor([dna.decorationSidescolor],dna.decorationSidescolor)
    $('#decorationsides').val(dna.decorationSidescolor)
    animationVariation(dna.animation)
    $('#animation').val(dna.animation)  

    // $("#eyeShapeGroup").hide();
    // $("#decoGroup").hide();
    // $('#midDecoGroup').hide();
    // $('#sideDecoGroup').hide();
    // $("#animGroup").hide();
  
}

// Changing cat body colors
$("#bodycolor").change(() => {
	var colorVal = $("#bodycolor").val();
	headColor(colors[colorVal], colorVal);
});

// Changing cat mouth, belly, and tail colors
$("#mouth-belly-tail").change(() => {
	var colorVal = $("#mouth-belly-tail").val();
	bodyColor(colors[colorVal], colorVal);
});

// Changing cat eye colors
$("#eyecolor").change(() => {
	var colorVal = $("#eyecolor").val();
	eyeColor(colors[colorVal], colorVal);
});

// Changing cat ears and paws colors
$("#ears-paws").change(() => {
	var colorVal = $("#ears-paws").val();
	pawColor(colors[colorVal], colorVal);
});

// Changing cat ears and paws colors
$("#eyeshape").change(() => {
	var shape = parseInt($("#eyeshape").val());
	eyeVariation(shape);
});

$('#decorationpattern').change(()=>{
  var pattern = parseInt($('#decorationpattern').val())
  decorationVariation(pattern)
})

$('#decorationmid').change(()=>{
  var colorVal = $('#decorationmid').val()
  decorationMidColor(colors[colorVal],colorVal)
})

$('#decorationsides').change(()=>{
  var colorVal = $('#decorationsides').val()
  decorationSidesColor(colors[colorVal],colorVal)
})

$('#animation').change(()=>{
  var animationVal = parseInt($('#animation').val())
  animationVariation(animationVal)
})
