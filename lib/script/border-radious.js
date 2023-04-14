var topLeftSlider = document.getElementById("topLeftSlider");
var topRightSlider = document.getElementById("topRightSlider");
var bottomLeftSlider = document.getElementById("bottomLeftSlider");
var bottomRightSlider = document.getElementById("bottomRightSlider");
var topLeftInput = document.getElementById("topLeftInput");
var topRightInput = document.getElementById("topRightInput");
var bottomLeftInput = document.getElementById("bottomLeftInput");
var bottomRightInput = document.getElementById("bottomRightInput");
var allSlider = document.getElementById("allSlider");
var allInput = document.getElementById("allInput");

//Mostra os valores no input e da replace nos valores de todos os radious
allSlider.addEventListener("input", function() {
  var value = allSlider.valueAsNumber; // Usa valueAsNumber para obter o valor numérico
  topLeftSlider.valueAsNumber = value; // Usa valueAsNumber para definir o valor numérico
  topRightSlider.valueAsNumber = value;
  bottomLeftSlider.valueAsNumber = value;
  bottomRightSlider.valueAsNumber = value;
  topLeftInput.valueAsNumber = value;
  topRightInput.valueAsNumber = value;
  bottomLeftInput.valueAsNumber = value;
  bottomRightInput.valueAsNumber = value;
  allInput.valueAsNumber = value; // Adiciona o valor em allInput
  updatePreview();
});

//Mostra os valores no input e da replace nos valores de todos os radious
allInput.addEventListener("input", function() {
  var value = allInput.valueAsNumber; // Usa valueAsNumber para obter o valor numérico
  if (value >= 0 && value <= 50) { // Verifica se o valor está dentro do intervalo permitido
    topLeftSlider.valueAsNumber = value; // Usa valueAsNumber para definir o valor numérico
    topRightSlider.valueAsNumber = value;
    bottomLeftSlider.valueAsNumber = value;
    bottomRightSlider.valueAsNumber = value;
    topLeftInput.valueAsNumber = value;
    topRightInput.valueAsNumber = value;
    bottomLeftInput.valueAsNumber = value;
    bottomRightInput.valueAsNumber = value;
    allSlider.valueAsNumber = value;  
    updatePreview();
  }
});

//Chama as funcoes para realizar update  
topLeftSlider.addEventListener("input", function() {
  updatePreview();
});
topRightSlider.addEventListener("input", function() {
  updatePreview();
});
bottomLeftSlider.addEventListener("input", function() {
  updatePreview();
});
bottomRightSlider.addEventListener("input", function() {
  updatePreview();
});
topLeftInput.addEventListener("input", function() {
  topLeftUpdate(); // Chama a função para sincronizar o input do tipo number com o input do tipo range
});
topRightInput.addEventListener("input", function() {
  topRightUpdate(); // Chama a função para sincronizar o input do tipo number com o input do tipo range
});
bottomLeftInput.addEventListener("input", function() {
  bottomLeftUpdate(); // Chama a função para sincronizar o input do tipo number com o input do tipo range
});
bottomRightInput.addEventListener("input", function() {
  bottomRightUpdate(); // Chama a função para sincronizar o input do tipo number com o input do tipo range
});

//Funcao que atualiza os valores dos inputs e da preview
function updatePreview(){
    var borderRadius = topLeftSlider.value + "% " + topRightSlider.value + "% " + bottomRightSlider.value + "% " + bottomLeftSlider.value + "%";
  preview.style.borderRadius = borderRadius;
  topLeftInput.value = topLeftSlider.value;
  topRightInput.value = topRightSlider.value;
  bottomLeftInput.value = bottomLeftSlider.value;
  bottomRightInput.value = bottomRightSlider.value;
  document.getElementById('res').innerHTML = "border-radius: " + borderRadius + ";";
}

//Funcao que sincroniza o input do tipo number com o input do tipo range para topLeft
function topLeftUpdate(){
   var topLeftNum=topLeftInput.valueAsNumber; // Usa valueAsNumber para obter o valor numérico
   if (topLeftNum >=0 && topLeftNum <=50) { // Verifica se o valor está dentro do intervalo permitido
      topLeftSlider.valueAsNumber = topLeftNum; // Usa valueAsNumber para definir o valor numérico
      updatePreview();
   }
}

//Funcao que sincroniza o input do tipo number com o input do tipo range para topRight
function topRightUpdate(){
   var topRightNum=topRightInput.valueAsNumber; // Usa valueAsNumber para obter o valor numérico
   if (topRightNum >=0 && topRightNum <=50) { // Verifica se o valor está dentro do intervalo permitido
      topRightSlider.valueAsNumber = topRightNum; // Usa valueAsNumber para definir o valor numérico
      updatePreview();
   }
}

//Funcao que sincroniza o input do tipo number com o input do tipo range para bottomLeft
function bottomLeftUpdate(){
   var bottomLeftNum=bottomLeftInput.valueAsNumber; // Usa valueAsNumber para obter o valor numérico
   if (bottomLeftNum >=0 && bottomLeftNum <=50) { // Verifica se o valor está dentro do intervalo permitido
      bottomLeftSlider.valueAsNumber = bottomLeftNum; // Usa valueAsNumber para definir o valor numérico
      updatePreview();
   }
}

//Funcao que sincroniza o input do tipo number com o input do tipo range para bottomRight
function bottomRightUpdate(){
   var bottomRightNum=bottomRightInput.valueAsNumber; // Usa valueAsNumber para obter o valor numérico
   if (bottomRightNum >=0 && bottomRightNum <=50) { // Verifica se o valor está dentro do intervalo permitido
      bottomRightSlider.valueAsNumber = bottomRightNum; // Usa valueAsNumber para definir o valor numérico
      updatePreview();
   }
}

//Funcao que copia os valores da preview para a area de transferencia
copy.addEventListener("click", function() {
  var textArea = document.createElement("textarea");
  textArea.value = res.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
});