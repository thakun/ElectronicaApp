$(window).ready(function(){
   $('#background').height($(window).height()-32);
});

$(window).on("resize", function () {
    $('#background').height($(window).height()-32);

    var dispositivo = navigator.userAgent.toLowerCase();

    if( dispositivo.search(/iphone|ipod|ipad|android/) > -1 ){

        document.location = "http://192.168.43.19/Electronica/Views/otherDevice.html";  }

    });


