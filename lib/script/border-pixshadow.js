 
 // Função para atualizar os estilos do box e gerar o código CSS
 function updateBoxStyles() {
    // Atualizar estilos do box
    var borderSize = document.getElementById('borderSize').value;
    var color = document.getElementById('colorPicker').value;
    var border = document.getElementById('borderColorPicker').value;
    var spreadRadius = document.getElementById('spreadRadius').value;
    var horizontalOffset = document.getElementById('horizontalOffset').value;
    var verticalOffset = document.getElementById('verticalOffset').value;
    var box = document.getElementById('box');
    box.style.borderWidth = borderSize + 'px';
    box.style.borderColor = border;
    box.style.boxShadow = horizontalOffset + 'px ' + verticalOffset + 'px ' + spreadRadius + 'px ' + color;
    // Gerar código CSS
    var codeOutput = document.getElementById('codeOutput');
    codeOutput.innerHTML= `border-width: ${borderSize}px;<br>\nborder-color: ${border};<br>\nbox-shadow: ${horizontalOffset}px ${verticalOffset}px ${spreadRadius}px ${color};`;
  }
  function copyToClipboardbox() {
    var borderSize = document.getElementById('borderSize').value;
    var color = document.getElementById('colorPicker').value;
    var border = document.getElementById('borderColorPicker').value;
    var spreadRadius = document.getElementById('spreadRadius').value;
    var horizontalOffset = document.getElementById('horizontalOffset').value;
    var verticalOffset = document.getElementById('verticalOffset').value;
    var boxShadow = horizontalOffset + 'px ' + verticalOffset + 'px ' + spreadRadius + 'px ' + color;
    var copy = `border-width: ${borderSize}px;\nborder-color: ${border};\nbox-shadow: ${boxShadow} ${color};`;
    navigator.clipboard.writeText(copy)
        .then(function() {
            console.log("Conteúdo copiado para a área de transferência com sucesso!");
        })
        .catch(function(error) {
            console.error("Erro ao copiar para a área de transferência:", error);
        });
}
