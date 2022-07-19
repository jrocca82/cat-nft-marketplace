//Random color
function getColor() {
	var randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return randomColor;
}

function genColors() {
	var colors = [];
	for (var i = 10; i < 99; i++) {
		var color = getColor();
		colors[i] = color;
	}
	return colors;
}

//Color functions
function headColor(color, code) {
	$(".cat__head, .cat__chest").css("background", "#" + color);
	$("#headcode").html("code: " + code);
	$("#dnabody").html(code);
}

function bodyColor(color, code) {
	$(".cat__mouth-contour, .cat__chest_inner, #tail").css(
		"background",
		"#" + color
	);
	$("#bodycode").html("code: " + code);
	$("#dnamouth").html(code);
}

function eyeColor(color, code) {
	$(".pupil-right, .pupil-left").css("background", "#" + color);
	$("#eyecolorcode").html("code: " + code);
	$("#dnaeyes").html(code);
}

function pawColor(color, code) {
	$(
		".cat__paw-right, .cat__paw-right_inner, .cat__paw-left, .cat__paw-left_inner, .cat__ear--right, .cat__ear--left"
	).css("background", "#" + color);
	$("#pawcode").html("code: " + code);
	$("#dnaears").html(code);
}


function decorationMidColor(color,code) {
    $('.cat__head-dots').css('background', '#' + color)  //This changes the mid decoration color of the cat
    $('#midcolorcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the eye color part of the DNA that is displayed below the cat
}

function decorationSidesColor(color,code) {
    $('.cat__head-dots_first, .cat__head-dots_second').css('background', '#' + color)  //This changes the side decoration color of the cat
    $('#sidecolorcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the eye color part of the DNA that is displayed below the cat
}

//Cattribute functions
function eyeVariation(num) {
	$("#dnashape").html(num);
	switch (num) {
		case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Chill')
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Looking Up')
            eyesType2()
            break
        case 4:
            normalEyes()
            $('#eyeName').html('Looking Left')
            eyesType3()
            break
        case 5:
            normalEyes()
            $('#eyeName').html('Looking Right')
            eyesType4()
            break
        case 6:
            normalEyes()
            $('#eyeName').html('Focused')
            eyesType5()
            break
        case 7:
            normalEyes()
            $('#eyeName').html('Dreamy')
            eyesType6()
            break
	}
}

function decorationVariation(num) {
	$("#dnadecoration").html(num);
	switch (num) {
		case 1:
			normaldecoration();
			$("#decorationName").html("Basic");
			break;
		case 2:
			normaldecoration();
			$("#decorationName").html("Basic");
			break;
		case 3:
			normaldecoration();
			$("#decorationName").html("Basic");
			break;
		case 4:
			normaldecoration();
			$("#decorationName").html("Basic");
			break;
		case 5:
			normaldecoration();
			$("#decorationName").html("Basic");
			break;
	}
}

function animationVariation(num) {
    $('#dnadanimation').html(num)
    switch (num) {
        case 1:
            noAnimation()
            $('#animation').html('None')
            break
        case 2:
            noAnimation()
            $('#animation').html('Shake')
            moveHead()
            break
        case 3:
            noAnimation()
            $('#animation').html('Grow')
            growHead()
            break
        case 4:
            noAnimation()
            $('#animation').html('Warp')
            warpHead()
            break
        default:
            console.log("Undefined pattern : "+ num)
    }
}

function eyeVariation(num) {
	$("#dnashape").html(num);
	switch (num) {
		case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Chill')
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Looking Up')
            eyesType2()
            break
        case 4:
            normalEyes()
            $('#eyeName').html('Looking Left')
            eyesType3()
            break
        case 5:
            normalEyes()
            $('#eyeName').html('Looking Right')
            eyesType4()
            break
        case 6:
            normalEyes()
            $('#eyeName').html('Focused')
            eyesType5()
            break
        case 7:
            normalEyes()
            $('#eyeName').html('Dreamy')
            eyesType6()
            break
	}
}


async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function eyesType1() {
    await $('.cat__eye').find('span').css('border-top', 'solid 15px')
}

async function eyesType2() {
    await $('.cat__eye').find('span').css('border-bottom', 'solid 15px')
}

async function eyesType3() {
    await $('.cat__eye').find('span').css('border-left', 'solid 10px')
}

async function eyesType4() {
    await $('.cat__eye').find('span').css('border-right', 'solid 10px')
}

async function eyesType5() {
    await $('.cat__eye').find('span').css('border-top', 'solid 7px')
    await $('.cat__eye').find('span').css('border-bottom', 'solid 7px')
    await $('.cat__eye').find('span').css('border-left', 'solid 7px')
    await $('.cat__eye').find('span').css('border-right', 'solid 7px')
}

async function eyesType6() {
    await $('.cat__eye').find('span').css('border-bottom', 'solid 7px')
    await $('.cat__eye').find('span').css('border-left', 'solid 7px')
    await $('.cat__eye').find('span').css('border-right', 'solid 7px')
}

async function normaldecoration() {
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType1() {
    // Long
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType2() {
    //Longer
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "63px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "50px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "50px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType3() {
    // Long Left
    $('.cat__head-dots').css({ "transform": "rotate(20deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType4() {
    // Long Right
    $('.cat__head-dots').css({ "transform": "rotate(-20deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType5() {
    // Long Spread
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(28deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-28deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType6() {
    //Longer Spread
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "63px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(28deg)", "height": "50px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-28deg)", "height": "50px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function noAnimation() {
    $('#head').removeClass("moving_head")
    $('#head').removeClass("grow_head")
    $('#head').removeClass("warp_head")
}

async function moveHead() {
    $('#head').addClass("moving_head")
}

async function growHead() {
    $('#head').addClass(" grow_head")
}

async function warpHead() {
    $('#head').addClass("warp_head")
}