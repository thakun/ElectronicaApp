$(window).ready(function(){
   $('#background').height($(window).height()-32);

    var dispositivo = navigator.userAgent.toLowerCase();

    if( dispositivo.search(/iphone|ipod|ipad|android/) != -1 ){

        document.location = "https://build.phonegap.com/apps/1576726/builds";  }


});

$(window).on("resize", function () {
    $('#background').height($(window).height()-32);
});


