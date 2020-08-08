function cambiarAlPersonaje(x,y){
  // alert(document.getElementById("p1").getAttribute("display"));
  // if(document.getElementById("p2").getAttribute("display")){
    if(x=="p1"){
      document.getElementById("p2").style.display="none";
      document.getElementById("p3").style.display="none";
      document.getElementById("p4").style.display="none";
      document.getElementById("p1").style.display="block";
      sonido(y);
      // prompt("Hola");
    } else if(x=="p2"){
      document.getElementById("p1").style.display="none";
      document.getElementById("p3").style.display="none";
      document.getElementById("p4").style.display="none";
      document.getElementById("p2").style.display="block";
      sonido(y);
    } else if(x=="p3"){
      document.getElementById("p1").style.display="none";
      document.getElementById("p2").style.display="none";
      document.getElementById("p4").style.display="none";
      document.getElementById("p3").style.display="block";
      sonido(y);
    } else if(x=="p4"){
      document.getElementById("p1").style.display="none";
      document.getElementById("p2").style.display="none";
      document.getElementById("p3").style.display="none";
      document.getElementById("p4").style.display="block";
      sonido(y);
    }
}


function sonido(y){
  var audio;
  if(y=="correcto"){
    document.getElementById("error").style.display="none";
    document.getElementById("bien").style.display="block";
    document.getElementById("correctAnswer").style.backgroundColor="#2ef936";
    audio = document.getElementById("correcto");
  }
  if(y=="mal"){
    document.getElementById("error").style.display="block";
    document.getElementById("bien").style.display="none";
    audio = document.getElementById("mal");
  }

  audio.play();
}

function sonidoCorrecto(){
  var audio;
  audio = document.getElementById("correcto");
  audio.play();
}



//
