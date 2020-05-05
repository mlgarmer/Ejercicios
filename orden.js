var miArreglo = [5,20,25,11,2,35,50,45];
var miArregloOrd=[];
var maxItem=0;

for (var j=0; j<miArreglo.length;j++){
    if (maxItem < miArreglo[j]){
        maxItem = miArreglo[j];
    }
}
miArregloOrd.push(maxItem);


for (var i=1; i<miArreglo.length;i++){
    maxItem = 0;
    for (var j=0; j<miArreglo.length;j++){
        if (maxItem < miArreglo[j] && miArregloOrd[i-1]>miArreglo[j]){
            maxItem = miArreglo[j];
        }
    }
    miArregloOrd.push(maxItem);
}
for (var i=0; i<miArregloOrd.length;i++){
    console.log("arr["+i+"] = "+miArregloOrd[i]);
}