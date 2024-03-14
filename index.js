var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var Bruna = window.document.getElementById("bruna")
var Samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none";
    bruna.style = "display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex; margin-top:70 px" 
}

function RolarParaEsquerda() {
leonardo.style = "display: flex"
Bruna.style = "display: none"
setaDireita.style = "display:flex; margin-top:55px"
setaEsquerda.style = "display: none"
}