$(document).ready(function () {
    var tikla = function () {
        var ana = $("#countdown");
        var gun = ana[0].children[0].children[0].innerText;
        var saat = ana[0].children[1].children[0].innerText;
        var dakika = ana[0].children[2].children[0].innerText;
        var saniye = ana[0].children[3].children[0].innerText;
        var saniyeInt = parseInt(saniye);
        if(gun == "00" && saat == "00" && dakika == "00" && saniyeInt <= 01) {
            $(".btn-elli").click();
        };
    };
    setTimeout(tikla, 10);
});