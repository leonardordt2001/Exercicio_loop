
    let play1= prompt("escolha um numero de 1 a 10 'Jogado1' ");
    let play2= prompt("adivinhe um numero de 1 a 10 'Jogado2' ");
    let texto="";
    let tentativas =1

    while(play2 != play1){
        play2= prompt("tente outra vez")
        tentativas++;

        if(play2 == play1){
            texto="play2 acertou o numero" + play1 + "em" + tentativas +"tentativas."
    
            document.getElementById("texto").innerHTML =texto
    }
  
}
if(play2 == play1){
    texto=" play2 acertou o numero " + play1 + " em " + tentativas +" tentativas. "
    
    document.getElementById("texto").innerHTML =texto; }