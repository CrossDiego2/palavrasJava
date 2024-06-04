let palavra;


function setup() {
 
  palavra = palavraAleatoria();
  
  createCanvas(400, 400);
}

function palavraAleatoria() {
  let palavras = ["Cabuloso" , "Cabreiro" , "Complicado"];
  return random (palavras);  
}


function inicializaCores (){
  background("white");
  fill("black");
  textSize (64);
  textAlign (CENTER , CENTER);

}

function palavraParcial(minimo , maximo
                        )   {
  let quantidade = map (mouseX, minimo , maximo, 1 , palavra.length);
  let parcial = palavra.substring(0, quantidade);
 return parcial;
}

function draw() {
  inicializaCores();
  
  
  
 let parcial = palavraParcial(0,width);
  text (parcial , 200 , 200);
  

}