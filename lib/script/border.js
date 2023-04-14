 // Função para atualizar os estilos do box e gerar o código CSS
 function boxradious() {
    // Atualizar estilos do box
    var borderTopLeftRadius = document.getElementById('borderTopLeftRadius').value;
    var borderTopRightRadius = document.getElementById('borderTopRightRadius').value;
    var borderBottomLeftRadius = document.getElementById('borderBottomLeftRadius').value;
    var borderBottomRightRadius = document.getElementById('borderBottomRightRadius').value;
    var color = document.getElementById('colorPicker').value;
    var border = document.getElementById('borderColorPicker').value;
    var box = document.getElementById('box');
    box.style.borderTopLeftRadius = borderTopLeftRadius + '%';
    box.style.borderTopRightRadius = borderTopRightRadius + '%';
    box.style.borderBottomLeftRadius = borderBottomLeftRadius + '%';
    box.style.borderBottomRightRadius =  document.getElementById('borderBottomRightRadius').value + '%';
    box.style.backgroundColor = color;
    box.style.borderColor = border;
    // Gerar código CSS
    var cssCode = '<code>\n';
    cssCode += '<li>border-radius: ' + borderTopLeftRadius + '% ' + borderTopRightRadius + '% ' + borderBottomRightRadius + '% ' + borderBottomLeftRadius + '% ;</li>\n';
    cssCode += '<li>background-color: ' + color + ';</li>\n';
    cssCode += '<li>border-color: ' + border + ';</li>\n';
    cssCode += '</code>';
    document.getElementById('codeOutput').innerHTML = cssCode;
    
  }
  
  // Função para atualizar todos os campos de uma só vez
  function updateAll() {
    var borderRadiusAll = document.getElementById('borderRadiusAll').value;
    document.getElementById('borderTopLeftRadius').value = borderRadiusAll;
    document.getElementById('borderTopRightRadius').value = borderRadiusAll;
    document.getElementById('borderBottomLeftRadius').value = borderRadiusAll;
    document.getElementById('borderBottomRightRadius').value = borderRadiusAll;
    boxradious();
  }
  
  function bordercopy(){
    var borderTopLeftRadius = document.getElementById('borderTopLeftRadius').value;
    var borderTopRightRadius = document.getElementById('borderTopRightRadius').value;
    var borderBottomLeftRadius = document.getElementById('borderBottomLeftRadius').value;
    var borderBottomRightRadius = document.getElementById('borderBottomRightRadius').value;
    var color = document.getElementById('colorPicker').value;
    var border = document.getElementById('borderColorPicker').value;
    var box = document.getElementById('box');
    
    var cssCode = 'border-radius: ' + borderTopLeftRadius + '% ' + borderTopRightRadius + '% ' + borderBottomRightRadius + '% ' + borderBottomLeftRadius + '% ;\n';
    cssCode += 'background-color: ' + color + ';\n';
    cssCode += 'border-color: ' + border + ';\n';
    
    
    navigator.clipboard.writeText(cssCode)
      .then(function() {
          console.log("Conteúdo copiado para a área de transferência com sucesso!");
      })
      .catch(function(error) {
          console.error("Erro ao copiar para a área de transferência:", error);
      });
  }