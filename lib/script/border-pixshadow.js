 // Função para atualizar os estilos do box e gerar o código CSS
 function updateBoxStyles() {
    var borderSize = document.getElementById('borderSize').value;
    var color = document.getElementById('colorPicker').value;
    var border = document.getElementById('borderColorPicker').value;
    var spreadRadius = document.getElementById('spreadRadius').value;
    var horizontalOffset = document.getElementById('horizontalOffset').value;
    var verticalOffset = document.getElementById('verticalOffset').value;
    var box = document.getElementById('box');
    // Atualizar estilos do box
    box.style.borderWidth = borderSize + 'px';
    box.style.borderColor = border;
    box.style.boxShadow = horizontalOffset + 'px ' + verticalOffset + 'px ' + spreadRadius + 'px ' + color;
    // Gerar código CSS
    var codeOutput = document.getElementById('codeOutput');
    codeOutput.innerHTML= `border-width: ${borderSize}px;<br>\nborder-color: ${border};<br>\nbox-shadow: ${horizontalOffset}px ${verticalOffset}px ${spreadRadius}px ${color};`;
  }
  var copy = document.getElementById("copy");
  var div = document.getElementById('codeOutput');
  copy.addEventListener("click", function() {
    var textArea = document.createElement("textarea");
    textArea.value = div.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  });