function mostrarColor(x){
  document.getElementById('divVerde').style.display="none";
  document.getElementById('divRojo').style.display="none";
  document.getElementById('divAzul').style.display="none";
  document.getElementById('divAmarillo').style.display="none";
  document.getElementById('divNaranja').style.display="none";
  document.getElementById('divRosa').style.display="none";

  var aud;
  aud = document.getElementById("sonidoColor");
  var vid;

  if(x=="verde"){
    document.getElementById('divVerde').style.display="block";
    prompt("Hola");
    aud.play();
    vid = document.getElementById("vidVerde");
  } else if(x=="rojo"){
    document.getElementById('divRojo').style.display="block";
    aud.play();
    vid = document.getElementById("vidRojo");
  } else if(x=="azul"){
    document.getElementById('divAzul').style.display="block";
    aud.play();
    vid = document.getElementById("vidAzul");
  } else if(x=="amarillo"){
    document.getElementById('divAmarillo').style.display="block";
    aud.play();
    vid = document.getElementById("vidAmarillo");
  } else if(x=="naranja"){
    document.getElementById('divNaranja').style.display="block";
    aud.play();
    vid = document.getElementById("vidNaranja");
  } else if(x=="rosa"){
    document.getElementById('divRosa').style.display="block";
    aud.play();
    vid = document.getElementById("vidRosa");
  }

  if(x=="nadaR"){
    vid = document.getElementById("vidRojo");
    vid.pause();
  }else if(x=="nadaA"){
    vid = document.getElementById("vidAzul");
    vid.pause();
  }else if(x=="nadaAm"){
    vid = document.getElementById("vidAmarillo");
    vid.pause();
  }else{
    vid.play();
  }
}
