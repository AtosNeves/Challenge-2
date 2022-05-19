var tentativas =6;

var palavraLen=[];


var palavraCategoria;
var palavraSecreta;


const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria:"LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria:"LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria:"LUGARES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria:"LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria:"LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria:"LUGARES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria:"LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra010 = {
        nome: "CREGUENHEM",
        categoria:"LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria:"TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria:"OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria:"OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria:"OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria:"OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria:"OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria:"OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria:"OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria:"OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria:"ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria:"ALIMENTOS"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria:"ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria:"ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria:"ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria:"ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria:"ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    }
];





var botao = document.getElementsByClassName("botao-letra");

console.log(botao);



function palavrasSecretas(){

    const indicePalavra = parseInt(Math.random()*palavras.length);

   palavraSecreta = palavras[indicePalavra].nome;
   palavraCategoria = palavras[indicePalavra].categoria;

    console.log(palavraSecreta);
    console.log(palavraCategoria);

    for (const b of botao) {
        //console.log("asda");
            b.addEventListener('click', function onClick() {
           // b.classList.add("clicado","errado");
            b.classList.remove("botao-letra");
            //console.log(b.value);
            b.setAttribute("disabled","disabled");

            //document.getElementById("c").disabled = true;
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
                console.log(tentativas);
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





        console.log(letra);

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
            setTimeout(function(){
                document.querySelector(".forca-div").style.animation ="perdeu 0.5s forwards";
                //window.alert("falou");
                //document.querySelector("#modal-final").style.visibility="visible";
                console.log("Executed after 3 second");
            }, 1500);


            setTimeout(function(){
                //document.querySelector(".forca-div").style.animation ="perdeu 0.5s forwards";
                //window.alert("falou");
                document.querySelector("#modal-final").style.animation=" aparecer 0.5s";
                document.querySelector("#modal-final").style.visibility="visible";
                console.log("Executed after 3 second");
            }, 3000);


            //imagem do erro
            // verificar se ainda tem tentativas
        }
    } else {
        for (var i = 0; i < palavraSecreta.length; i++) {
            console.log("adfgg");

            if (palavraSecreta[i] === letra) {
                console.log(letra);
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
            document.querySelector(".forca-div").style.animation ="venceu 0.5s forwards";
            setTimeout(function(){

                //window.alert("falou");

               document.querySelector("#modal-final").style.visibility="visible";
                //console.log("Executed after 3 second");
            }, 3000);

            console.log("win");
            tentativas = 0;
        }

}

comecarJogo();