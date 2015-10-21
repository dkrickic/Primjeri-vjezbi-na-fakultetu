$(function () {
    $("#txtPojam").focus();

    $("#btnPretrazi").click(function (e) {
        var trazilica = $("input:checked").val();
        var pojam = $("#txtPojam").val();

        if (pojam == "" || pojam == "Unesite pojam!") {
            e.preventDefault();
            $("#txtPojam").val("Unesite pojam!").focus().select();
        }

        if (trazilica == "google")
            $("#forma").attr("action", "http://www.google.com");
        else
            $("#forma").attr("action", "http://www.bing.com");
    });
});
