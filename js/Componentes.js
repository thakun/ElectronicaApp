$(window).ready(function () {

    $.ajax({
        type: "POST",
        url: "http://192.168.1.74/Electronica/Server/loadComponents.php",
        data: {},
        cache: false,

        success: function(resultado){
            res = JSON.parse(resultado);

            var comp = "";
            var arr;

            for(var i = 0; i < res.length; i++){

                if(res[i][2] != comp){

                    crearCat(res[i]);
                    comp = res[i][2];
                }

                crearLi(res[i]);

            }

        }

    });

});

var crearCat = function (val) {
    var li = $('<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-a ui-first-child">' + val[2] + '</li>');
    var lidesc = $('<li class="ui-disabled"><a href="index.html" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + val[3] + '</a></li>')

    li.appendTo($("#list"));
    lidesc.appendTo($("#list"));

}

var crearLi = function (val) {

    var lidesc;

    if(val[4]!=null)
        lidesc = $('<li class="ui-li-has-thumb ui-first-child"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#popopResultado" data-rel="popup" data-position-to="window" data-transition="fade" aria-haspopup="true" aria-owns="popopResultado" aria-expanded="false" class="ui-link"><img id="imgP" src="'+  val[4]  + '"> <h2>'+ val[1] +'</h2> <p>'+ val[2] +'</p></a> </li>')
    else
        lidesc = $('<li class="ui-li-has-thumb ui-first-child"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#popopResultado" data-rel="popup" data-position-to="window" data-transition="fade" aria-haspopup="true" aria-owns="popopResultado" aria-expanded="false" class="ui-link"><img id="imgP" src="../files/default.png"> <h2>'+ val[1] +'</h2> <p>'+ val[2] +'</p></a> </li>')

    lidesc.click(function () {
        $('.popphoto').attr("src","http://192.168.1.74/Electronica/files/"+val[4]);
    })


    lidesc.appendTo($("#list"));

}

