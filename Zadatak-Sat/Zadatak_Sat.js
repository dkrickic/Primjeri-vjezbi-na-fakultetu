$(function () {

	var mouseDown = false;

    $("body")
    .mousedown(function () {
        mouseDown = true;
    })
    .mouseup(function () {
        mouseDown = false;
    });


    $("body").append("<div id='sadrzaj'>");
    $("div#sadrzaj").addClass("sadrzaj");

    $("div#sadrzaj").append("<input type='range' id='slider' value='100' max='150' min='50' />");

    $("div#sadrzaj").append("<p id='sat'>");
    $("p#sat").addClass("sat");

    IspisVremena();
    var interval = setInterval(IspisVremena, 1000);

    $("#slider").mousemove(PodesiVelicinuSata);

function PodesiVelicinuSata() {
    if (mouseDown)
        $("p#sat").css("font-size", $("#slider").val() + "px");
}

function IspisVremena() {
    var date = new Date();
    var hh = (function () {
		if (date.getHours() < 10) {
			return "0" + date.getHours();
		}
		else {
			return date.getHours();
		}
	}());

    var mm = (function () {
		if (date.getMinutes() < 10) {
			return "0" + date.getMinutes();
		}
		else {
			return date.getMinutes();
		}
	}());

    var ss = (function () {
		if (date.getSeconds() < 10) {
			return "0" + date.getSeconds();
		}
		else {
			return date.getSeconds();
		}
	}());

    $("p#sat").text(hh + ":" + mm + ":" + ss);

    PrikaziKvadratice(ss);
}

var prvoPrikazivanje = true;

function PrikaziKvadratice(ss) {
    if (prvoPrikazivanje) {
        $("div#sadrzaj").append("<div id='kontejnerKvadratici'>");
        $("#kontejnerKvadratici").addClass("kontejnerKvadratici");
        for (var i = 0; i < ss; i++) {
            $("div#kontejnerKvadratici").append("<div id='kvadratic" + i + "'>");
            $("#kontejnerKvadratici > div#kvadratic" + i)
                .addClass("kvadratic")
                .css("background-color", RandomBoja());
        }
        prvoPrikazivanje = false;
    }
    else {
        $("div#kontejnerKvadratici").append("<div id='kvadratic" + ss + "'>");
        $("#kontejnerKvadratici > div#kvadratic" + ss)
            .addClass("kvadratic")
            .css("background-color", RandomBoja());

        if (ss == 0)
            $("#kontejnerKvadratici").empty();
    }
}

function RandomBoja() {
    var R = Math.round(Math.random() * 255);
    var G = Math.round(Math.random() * 255);
    var B = Math.round(Math.random() * 255);
    return "#" + R.toString(16) + G.toString(16) + B.toString(16);
}

});
