function hacerSalsaPesto(){
    console.log ("Obtener los ingredientes para salsa pesto");
    console.log ("Revolver los ingredientes de salsa pesto");
    console.log("Salsa pesto lista!");
}

/*hacerSalsaPesto();*/

function hacerSalsaAlfredo() {
    console.log("Colocar crema con resto de ingredientes");
    console.log("Hervir la crema");
    console.log("Salsa alfredo lista!");
}

/*hacerSalsaAlfredo();

/*pasta = "spagetti","fetuccini"
hacerSalsa = FUNCION
*/

function hacerPasta(pasta, hacerSalsa) {
    console.log("Hervir agua");
    console.log(`Agregar ${pasta} al agua`);
    hacerSalsa();//acá invocamos a la funcion recibida por hacerSalsa
}

hacerPasta("spagetti", hacerSalsaAlfredo);

/*
pasta = "Spagetti";
hacerSalsa = hacerSalsaAlfredo
IMPR: Hervir agua
IMPR:Agregar spagetti al agua
INVOCAMOS hacerSalsaAlfredo
IMPR: colocar crema
IMPR: hervir crema
IMPR Salsa lista
---------------------------
pasta = "Fetuccini"
hacerSalsa = hacerSalsaPesto
IMPR:hervir el agua
IMPR: agregar Fetuccini al agua
INVOCAMOS hacerSalsaPesto
IMPR:Obtener los ingredientes para salsa pesto
IMPR:Revolver los ingredientes de salsa pesto
IMPR:Salsa pesto lista!
*/

hacerPasta("Fetuccini", hacerSalsaPesto);