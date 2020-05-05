class Gelatina{
    constructor(sabor, color, azucar){
        this.sabor = sabor;
        this.color = color;
        this.azucar = azucar;
    }
    combinar(gelat1,gelat2){
        this.color = gelat1.color + gelat2.color;
        this.sabor = gelat2.sabor + gelat1.sabor;
        this.azucar = gelat1.azucar + gelat2.azucar;
    }
}

var gela1 = new Gelatina("uva","morado",4);
var gela2 = new Gelatina("naranja","anaranjado",3);
var gela3 = new Gelatina("nueva","nueva",0);
console.log(gela3.combinar(gela1,gela2));