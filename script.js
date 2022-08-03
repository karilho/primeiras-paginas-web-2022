// Retira a show da coluna todos, fazendo com que exiba tudo.
filterSelection("todos")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("coluna");
  if (c == "todos") c = "";

// Adiciona a class:show (display:block) nos elementos do filtro, 
// Remove a class:show dos elementos que não foram selecionados.
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Adiciona as classes aos elementos para que eles desapareçam.
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Remove as classes adicionadas para que o elemento reapareça.
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Adiciona a classe .active aos elementos no cabeçalho para sombrear.
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btnr");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Faz a função de marcar e desmarcar o coração trocando a cor de cinza para vermelho em um loop.
// MELHORAR ESSA PARTE DO CÓDIGO FAZENDO ARRAY.
function toggle0(){
    var btnvar1 = document.getElementById('btnh0');
         if (btnvar1.style.color =="red") {
             btnvar1.style.color = "grey"
         }
         else{
             btnvar1.style.color = "red"
         }
}

function toggle1(){
    var btnvar1 = document.getElementById('btnh1');
         if (btnvar1.style.color =="red") {
             btnvar1.style.color = "grey"
         }
         else{
             btnvar1.style.color = "red"
         }
}

function toggle2(){
    var btnvar1 = document.getElementById('btnh2');
         if (btnvar1.style.color =="red") {
             btnvar1.style.color = "grey"
         }
         else{
             btnvar1.style.color = "red"
         }
}

function toggle3(){
    var btnvar1 = document.getElementById('btnh3');
         if (btnvar1.style.color =="red") {
             btnvar1.style.color = "grey"
         }
         else{
             btnvar1.style.color = "red"
         }
}

function toggle4(){
    var btnvar1 = document.getElementById('btnh4');
         if (btnvar1.style.color =="red") {
             btnvar1.style.color = "grey"
         }
         else{
             btnvar1.style.color = "red"
         }
}

function toggle5(){
    var btnvar1 = document.getElementById('btnh5');
         if (btnvar1.style.color =="red") {
             btnvar1.style.color = "grey"
         }
         else{
             btnvar1.style.color = "red"
         }
}