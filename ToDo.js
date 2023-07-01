!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

var toDoArray = ["test"];

function addToDo(){
  var toDoItem = document.getElementById("toDo").value;
  toDoArray.push(toDoItem)
}
  
function updateToDo(){
  let toDoArray =["one","cool"];
  console.log(toDoArray)
  let list = document.getElementById("UnList");
  console.log(list)
  for (var i = 0; i < toDoArray.length; i++){
    list.innerHTML += toDoArray[i]}}