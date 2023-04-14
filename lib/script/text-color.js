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
    textoExemplo.style.color = text; // Corrigido: definir a cor do texto
    div.innerHTML = `<code><li>text-shadow: ${textShadow};</li><br><li>color: ${text};</li></code>`;
  }
  
      var copy = document.getElementById("copy");
      var div = document.getElementById('resultado');
      copy.addEventListener("click", function() {
        var textArea = document.createElement("textarea");
        textArea.value = div.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      });
     