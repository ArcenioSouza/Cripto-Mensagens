let modal = document.getElementById('modal')

let btnCesar = document.getElementById('cesar')

let btnModal = document.getElementById('btnModal')

let btnBase64 = document.getElementById('base64')

let btnCripto = document.getElementById('cripto')

let btnDescripto = document.getElementById('descripto')

let incremento = document.getElementById('incremento')

var valueIncrement = 0

var alphabet = "abcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ"


btnCesar.addEventListener('click', () => {
   modal.style.display = 'flex'
   btnCesar.setAttribute("ativo", "ativo")
   btnBase64.removeAttribute("ativo")
})

btnBase64.addEventListener('click', () => {
   btnBase64.setAttribute("ativo", "ativo")
   btnCesar.removeAttribute("ativo")
})

btnCripto.addEventListener('click', () => {
   btnCripto.setAttribute("ativo", "ativo")
   btnDescripto.removeAttribute("ativo")
})

btnDescripto.addEventListener('click', () => {
   btnDescripto.setAttribute("ativo", "ativo")
   btnCripto.removeAttribute("ativo")
})

btnModal.addEventListener('click', () => {
   modal.style.display = 'none'
   valorIncremento = parseInt(incremento.value)
})

function codificarCesar() {
   var textMessage = document.querySelector("#textMessage").value;
   var textLowerCase = textMessage.toLowerCase();
   var textCripto = "";
 
   for (var i = 0; i < textLowerCase.length; i++) {
     for (var j = 0; j < alphabet.length; j++)
       if (textLowerCase[i] == alphabet[j]) {
         textCripto += alphabet[j + valueIncrement];
         break;
       } else if (textLowerCase[i] == " ") {
         textCripto += " ";
         break;
       }
   }
   return textCripto;
 }