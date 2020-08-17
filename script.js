var button = document.getElementById("create");
var input = document.getElementById("input");
var list = document.getElementById("list");
var todolist = JSON.parse(localStorage.getItem("listItems")) || [];
render();

function addData(){  
  if(input.value !=" "){
    todolist.push(input.value);
    localStorage.setItem("listItems",JSON.stringify(todolist));
    ///localstorgae只能儲存字串
    input.value=" ";
    render();
  }
}

function delData(i){
  ///刪除畫面
  ///更新資料
  
  todolist.splice(i,1); ///刪除陣列子函式 i=重第幾個刪，1=刪幾個
  render();
  
}

function render(){
  var content="";
  localStorage.setItem("listItems",JSON.stringify(todolist));
  for(var i=0;i<todolist.length;i++){
    content = content + "<div>" +"<button class='space' onclick='delData("+i+")'>" + "刪除" + "</button>"  + todolist[i] + "</div>";
  }
  
  list.innerHTML = content;
 
}


///console.log("print");