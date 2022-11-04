function resumen (){

    cantidad = document.getElementById('cantInput').value;
    cantidad = parseInt(cantidad);
    total = 0;
    total = cantidad * 200 ;
    porcentaje = 0;
    categoria = document.getElementById('categ').value;

    if (categoria == 1 ){
        porcentaje = total * 80 / 100;
        total = total - porcentaje;
    }

    if (categoria == 2){
        porcentaje = total * 50 / 100;
        total = total - porcentaje;
    }
    
    if (categoria == 3 ){
        porcentaje = total * 15 / 100;
        total = total - porcentaje;
    }

    document.getElementById('cantTotal').innerHTML = "Total a pagar : " + total + " $" ;

}

function limpiar () {
    document.getElementById('myForm').reset ();
    document.getElementById('cantTotal').innerHTML = "Total a pagar : $";
}