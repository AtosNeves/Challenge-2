var bAdcionar = document.getElementById("adcionar");
bAdcionar.addEventListener('click', function onClick()  {
    console.log("asd");
    document.getElementById("modal-adcionar").style.visibility= "visible";

});
var i = 1;
var vv = document.querySelector("#home2");

vv.addEventListener('click', function() {
    event.preventDefault();
    var categoria = document.getElementById("entrada-categoria").value;
    var palavra = document.getElementById("entrada-palavra").value;
    console.log(categoria);
    console.log(palavra);
    document.getElementById("entrada-categoria").value="";
    document.getElementById("entrada-palavra").value="";
    i=i+1;
    palavras.push(i = {nome:palavra,categoria:categoria});
    document.getElementById("modal-adcionar").style.visibility= "hidden";
    console.log(palavras);









});
