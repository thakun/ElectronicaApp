
$(window).ready(function () {
    $('#btnCalc').click(function () {
        $('#resultado').html('El valor de tu resistencia es:<br/>' + Calcular($('#select-native-11').val(),$('#select-native-12').val(),$('#select-native-13').val(),$('#select-native-14').val()));
    });

    $('#btnCalc1').click(function () {
        var colores = Calcular1($('#valor').val(),$('#select-native-15').val(),$('input:checked').val());

        $('#resultado1').html('Los colores de tu resistencia son:<br/>' + colores[0] + '<br/>' + colores[1] + '<br/>' + colores[2] + '<br/>' + colores[3] );


    });
})

//region
var Calcular = function (val1,val2,val3,val4) {

    var valor = "";

    if(val1 == "0")
        return "0 ohms <b>Error</b>"

    switch(val3){

        case "0":

            break;
        case "1": valor += "0";
            break;
        case "2":
            if(val2 == "0")
                valor = convert(val1,val4,"Kohms");
            else{
                valor = convert(val1 + "." + val2,val4,"Kohms");
            }
            break;
        case "3":
                valor = convert(val1 + val2 ,val4,"Kohms");
            break;
        case "4":
                valor = convert(val1 + val2 + "0" ,val4,"Kohms");
            break;
        case "5":
            if(val2 == "0")
                valor = convert(valor,val4,"Mohms");
            else{
                valor = convert(valor + "." + val2,val4,"Mohms");
            }
            break;
        case "6":
                valor = convert(val1 + val2 ,val4,"Mohms");
            break;
        case "7":
                valor = convert(val1 + val2 + "0" ,val4,"Mohms");
            break;
        case "8":
            if(val2 == "0")
                valor = convert(valor,val4,"Gohms");
            else{
                valor = convert(valor + "." + val2,val4,"Gohms");
            }
            break;
        case "9":
                valor = convert(val1 + val2 ,val4,"Gohms");
            break;

    }

    return valor;

}
var convert = function (valor, val4, unidad) {
    return valor + " " + unidad + " +/- " + val4 ;
}



var Calcular1 = function (val1,val2,val3) {

    var colores = Array();

    switch(val3){
        case "ohms":
            colores = colors(val1);
            break;
        case "kohms":
            valor = parseInt(val1)*1000;
            valor = "" + valor;
            colores = colors(valor);
            break;
        case "mohms":
            valor = parseInt(val1)*1000000;
            valor = "" + valor;
            colores = colors(valor);
            break;
        case "gohms":
            valor = parseInt(val1)*1000000000;
            valor = "" + valor;
            colores = colors(valor);
            break;
    }

    if(val2 == "1"){
        colores[3] = "Dorado";
    }else{
        colores[3] = "Plata";
    }

    return colores;

}

var colors = function (val1) {

    var colors = Array();

    for(var i = 0; i < 3; i++){

        if(i < 2){
            valor = val1[i] + "";
        }else{
            valor = val1.length - 2;
            valor = "" + valor;
        }

        switch(valor){
            case "0":
                colors[i] = "Negro";
                break;
            case "1":
                colors[i] = "Cafe";
                break;
            case "2":
                colors[i] = "Rojo";
                break;
            case "3":
                colors[i] = "Naranja";
                break;
            case "4":
                colors[i] = "Amarillo";
                break;
            case "5":
                colors[i] = "Verde";
                break;
            case "6":
                colors[i] = "Azul";
                break;
            case "7":
                colors[i] = "Violeta";
                break;
            case "8":
                colors[i] = "Gris";
                break;
            case "9":
                colors[i] = "Blanco";
                break;
        }
    }



    return colors;

}