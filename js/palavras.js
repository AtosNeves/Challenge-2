var tentativas =6;

var palavraLen=[];


var palavraCategoria;
var palavraSecreta;

var somWin2 = new Audio("https://www.youtube.com/watch?v=ZhstyJSNKME&ab_channel=CORTESCANHOTOS");
somWin2.volume = 0.5;
somWin2.play();

var botao = document.getElementsByClassName("botao-letra");

function palavrasSecretas(){

  const indicePalavra = parseInt(Math.random()*palavras.length);

  palavraSecreta = palavras[indicePalavra].nome;
  palavraCategoria = palavras[indicePalavra].categoria;



  for (const b of botao) {

    b.addEventListener('click', function onClick() {
      // b.classList.add("clicado","errado");
      b.classList.remove("botao-letra");
      //console.log(b.value);
      b.setAttribute("disabled","disabled");


    });
  }



}
palavrasSecretas();
function comecarJogo(){





  const categoria = document.getElementById("categoria-palavra");
  categoria.innerHTML = palavraCategoria;

  const palavraSorteada = document.getElementById("palavra-sorteada");
  palavraSorteada.innerHTML = "";

  for(let j = 0; j < palavraSecreta.length;j++){

    if (palavraLen[j]===undefined){

      palavraLen[j]="&nbsp";
      palavraSorteada.innerHTML = palavraSorteada.innerHTML+ "<div class='letras-entrada'>"+palavraLen[j]+"</div>";
    }
    else {

      palavraSorteada.innerHTML = palavraSorteada.innerHTML+ "<div class='letras-entrada'>"+palavraLen[j]+"</div>";
    }

  }


}

function entradaLetras(letra, botao){

  if (tentativas>0){

    comparaListas(letra, botao);
    comecarJogo();

  }
}

function comparaListas(letra,botao) {


  const indice = palavraSecreta.indexOf(letra);
  //var t = botao.indexOf(letra);




  if (indice < 0) {
    var som2 = new Audio("./audio/lose.mp3");
    som2.volume = 0.5;
    som2.play();
    tentativas = tentativas - 1;


    switch (tentativas) {
      case 5:
        //console.log(tentativas);
        let go = document.querySelector(".forca-div");
        go.style.background="url('./images/forca1.svg')  left no-repeat #636E72";
        go.style.backgroundSize = "contain";
        break;
      case 4 :
        let g2 = document.querySelector(".forca-div");
        g2.style.background="url('./images/forca2.svg')  left no-repeat #636E72";
        g2.style.backgroundSize = "contain";
        //console.log(tentativas);
        break;
      case 3:
        let g3 = document.querySelector(".forca-div");
        g3.style.background="url('./images/forca3.svg')  left no-repeat #636E72";
        g3.style.backgroundSize = "contain";
        break;
      case 2:
        let g4 = document.querySelector(".forca-div");
        g4.style.background="url('./images/forca4.svg')  left no-repeat #636E72";
        g4.style.backgroundSize = "contain";
        break;
      case 1:
        let g5 = document.querySelector(".forca-div");
        g5.style.background="url('./images/forca5.svg')  left no-repeat #636E72";
        g5.style.backgroundSize = "contain";
        break;
      case 0:
        let g6 = document.querySelector(".forca-div");
        g6.style.background="url('./images/forca6.svg')  left no-repeat #636E72";
        g6.style.backgroundSize = "contain";

        break;

    }
  
    //console.log(letra);

    var buti = document.getElementById(letra);

    buti.classList.add("clicado","errado");

    if (tentativas === 0) {


      const but = document.getElementsByClassName("botao-letra");
      for (const b of but) {
        //console.log("asda");
        //b.addEventListener('click', function onClick() {
        b.classList.add("clicado","acabou");
        //b.classList.remove("botao-letra");
        //console.log(b.value);
        b.disabled=true;


        //
        //});
      }
      var somFim = new Audio("./audio/loseFinal.mp3");
      somFim.volume = 1;
      somFim.play();
      setTimeout(function(){
        document.querySelector(".forca-div").style.animation ="perdeu 0.5s forwards";

      }, 1500);


      setTimeout(function(){

        document.querySelector("#modal-final").style.animation=" aparecer 0.5s";
        document.querySelector("#modal-final").style.visibility="visible";

      }, 3000);


      //imagem do erro
      // verificar se ainda tem tentativas
    }
  } else {
    for (var i = 0; i < palavraSecreta.length; i++) {


      if (palavraSecreta[i] === letra) {
        //console.log(letra);
        var som = new Audio("./audio/win.mp3");
        som.volume = 0.5;
        som.play();

        var but = document.getElementById(letra);
        but.classList.add("clicado","certo");
        palavraLen[i] = letra;



      }

    }
  }

  var win = true;
  for (var j = 0; j < palavraSecreta.length; j++) {
    if (palavraSecreta[j] !== palavraLen[j]) {
      win = false;
    }
  }
  if (win === true) {
    var somWin = new Audio("./audio/winFinal.mp3");
    somWin.volume = 0.5;
    somWin.play();

    document.querySelector(".forca-div").style.animation ="venceu 0.5s forwards";
    setTimeout(function(){



      document.querySelector("#modal-final-vitoria").style.visibility="visible";

    }, 3000);


    tentativas = 0;
  }

}

comecarJogo();