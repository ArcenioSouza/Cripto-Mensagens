let modal = document.getElementById("modal");

let btnCesar = document.getElementById("cesar");

let btnModal = document.getElementById("btnModal");

let btnBase64 = document.getElementById("base64");

let btnCripto = document.getElementById("cripto");

let btnDescripto = document.getElementById("descripto");

let resultMessage = document.getElementById("resultMessage");

let incremento = document.getElementById("incremento");

let btnResult = document.getElementById("result");

let valueIncrement = 0;

let alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-_";

btnCesar.addEventListener("click", () => {
  modal.style.display = "flex";
  btnCesar.setAttribute("ativo", "ativo");
  btnBase64.removeAttribute("ativo");
  if(btnCripto.hasAttribute('ativo') == true){
    btnResult.innerText = "Criptografar com César"
  }else{
    btnResult.innerText = "Descriptografar com César"
  }
});

btnBase64.addEventListener("click", () => {
  btnBase64.setAttribute("ativo", "ativo");
  btnCesar.removeAttribute("ativo");
  if(btnCripto.hasAttribute('ativo') == true){
    btnResult.innerText = "Criptografar com Base64"
  }else{
    btnResult.innerText = "Descriptografar com Base64"
  }
});

btnCripto.addEventListener("click", () => {
  btnCripto.setAttribute("ativo", "ativo");
  btnDescripto.removeAttribute("ativo");
  if(btnCesar.hasAttribute('ativo') == true){
    btnResult.innerText = "Criptografar com César"
  }else{
    btnResult.innerText = "Criptografar com Base64"
  }
});

btnDescripto.addEventListener("click", () => {
  btnDescripto.setAttribute("ativo", "ativo");
  btnCripto.removeAttribute("ativo");
  if(btnCesar.hasAttribute('ativo') == true){
    btnResult.innerText = "Descriptografar com César"
  }else{
    btnResult.innerText = "Descriptografar com Base64"
  }
});

btnModal.addEventListener("click", () => {
  modal.style.display = "none";
  valueIncrement = parseInt(incremento.value);
});

function codificarBase() {
  var textMessage = document.getElementById("textMessage").value;
  var binario = btoa(textMessage);
  return binario;
}

function decodificarBase() {
  var textMessage = document.getElementById("textMessage").value;
  var binario = atob(textMessage);
  return binario;
}

function codificarCesar() {
  var textMessage = document.querySelector("#textMessage").value;
  var textCripto = "";

  for (var i = 0; i < textMessage.length; i++) {
    for (var j = 0; j < alphabet.length; j++)
      if (textMessage[i] == alphabet[j]) {
        textCripto += alphabet[j + valueIncrement];
        break;
      } else if (textMessage[i] == " ") {
        textCripto += " ";
        break;
      }
  }
  return textCripto;
}

function decodificarCesar() {
  var textMessage = document.querySelector("#textMessage").value;
  var textCripto = "";

  for (var i = 0; i < textMessage.length; i++) {
    for (var j = alphabet.length; j > 0; j--) {
      if (textMessage[i] == alphabet[j]) {
        textCripto += alphabet[j - valueIncrement];
        break;
      } else if (textMessage[i] == " ") {
        textCripto += " ";
        break;
      }
    }
  }
  return textCripto;
}

btnResult.addEventListener("click", (e) => {
  e.preventDefault();
  if (btnCesar.hasAttribute("ativo") == true) {
    if (btnCripto.hasAttribute("ativo") == true) {
      var resposta = codificarCesar();
    } else {
      var resposta = decodificarCesar();
    }
  } else {
    if (btnCripto.hasAttribute("ativo") == true) {
      var resposta = codificarBase();
    } else {
      var resposta = decodificarBase();
    }
  }
  resultMessage.value = `${resposta}`;
});
