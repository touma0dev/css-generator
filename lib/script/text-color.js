
function gerarSombra() {
  var horizontal = document.getElementById("horizontal").value + "px";
  var vertical = document.getElementById("vertical").value + "px";
  var blur = document.getElementById("blur").value + "px";
  var color = document.getElementById("color").value;
  var text = document.getElementById("text").value;
  var textoExemplo = document.getElementById("textoExemplo");
  var textShadow = horizontal + " " + vertical + " " + blur + " " + color;
  var div = document.getElementById('resultado');
  textoExemplo.style.textShadow = textShadow;
  textoExemplo.style.color = color;
  div.innerHTML = `<code><li>text-shadow: ${textShadow};</li><br><li>color: ${text};</li></code>`;
}
function copyToClipboard() {
  var horizontal = document.getElementById("horizontal").value + "px";
  var vertical = document.getElementById("vertical").value + "px";
  var blur = document.getElementById("blur").value + "px";
  var color = document.getElementById("color").value;
  var text = document.getElementById("text").value;
  var textoExemplo = document.getElementById("textoExemplo");
  var textShadow = horizontal + " " + vertical + " " + blur + " " + color;
  var copy=`text-shadow: ${textShadow};\ncolor: ${text};`
    navigator.clipboard.writeText(copy)
        .then(function() {
            console.log("Conteúdo copiado para a área de transferência com sucesso!");
        })
        .catch(function(error) {
            console.error("Erro ao copiar para a área de transferência:", error);
        });
}

