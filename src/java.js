
var temperaturaElement = document.querySelector('.temperatura');
var temperaturaTexto = temperaturaElement.textContent;
if(temperaturaTexto != "22"){
    var caixa = document.querySelector('.caixa');
    caixa.style.backgroundColor = 'red';
}