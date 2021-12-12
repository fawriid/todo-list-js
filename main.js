let todos = document.getElementById("todos");
let filter = document.getElementById("filter");
document.querySelector(".fa-plus").addEventListener("click", addTodo);
document.getElementById("filter").addEventListener("click", filterFunction);

function filterFunction(eve) {
  let todoschild = todos.childNodes;
  todoschild.forEach((child) => {
    switch (eve.target.value) {
      case "all":
        child.style.display = "block";
        break;
      case "completed":
        if (child.classList.contains("finished")) {
          child.style.display = "block";
        } else {
          child.style.display = "none";
        }
        break;
      case "un-completed":
        if (child.classList.contains("finished")) {
          child.style.display = "none";
        } else {
          child.style.display = "block";
        }
        break;
    }
  });
}

function addTodo() {
  let act = document.getElementById("user-todo");
  let ul = document.getElementById("todos");
  let li = document.createElement("li");
  li.classList.add("todoschild");
  let div = document.createElement("div");
  let span = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  span.innerHTML = '<i class="fas fa-trash trash"></i>';
  span2.innerHTML = '<i class="fas fa-check-square tick"></i>';
  span3.innerHTML = act.value;
  span3.classList.add("act");
  div.appendChild(span);
  div.appendChild(span2);
  div.appendChild(span3);
  li.appendChild(div);
  ul.appendChild(li);
  addLocal(act);
  act.value = null;
}
function addLocal(r) {
  let userData = [];
  if (localStorage.getItem("userData") === null) {
    userData.push(r.value);
    localStorage.setItem("userData", JSON.stringify(userData));
  } else {
    let get = localStorage.getItem("userData");
    let getParsed = JSON.parse(get);
    getParsed.push(r.value);
    localStorage.setItem("userData", JSON.stringify(getParsed));
  }
}
document.addEventListener("DOMContentLoaded", loadLocalStorage);
function loadLocalStorage() {
  let get = localStorage.getItem("userData");
  let getParsed = JSON.parse(get);
  getParsed.forEach((element) => {
    let act = document.getElementById("user-todo");
    let ul = document.getElementById("todos");
    let li = document.createElement("li");
    li.classList.add("todoschild");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    span.innerHTML = '<i class="fas fa-trash trash"></i>';
    span2.innerHTML = '<i class="fas fa-check-square tick"></i>';
    span3.innerHTML = element;
    span3.classList.add("act");
    div.appendChild(span);
    div.appendChild(span2);
    div.appendChild(span3);
    li.appendChild(div);
    ul.appendChild(li);
  });
}
document
  .getElementById("user-todo")
  .addEventListener("keypress", enterFunction);
function enterFunction(e) {
  if (e.key === "Enter") {
    let act = document.getElementById("user-todo");
    let ul = document.getElementById("todos");
    let li = document.createElement("li");
    li.classList.add("todoschild");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    span.innerHTML = '<i class="fas fa-trash trash"></i>';
    span2.innerHTML = '<i class="fas fa-check-square tick"></i>';
    span3.innerHTML = act.value;
    span3.classList.add("act");
    div.appendChild(span);
    div.appendChild(span2);
    div.appendChild(span3);
    li.appendChild(div);
    ul.appendChild(li);
    addLocal(act);
    act.value = null;
  }
}
// jkfsdjffffffffffffffffffffffffffffffff

// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
document.getElementById("todos").addEventListener("click", addRemoveFunction);
function addRemoveFunction(e) {
  let etpp = e.target.parentElement.parentElement;
  if (e.target.classList.contains("tick")) {
    etpp.parentElement.classList.toggle("finished");
  }
  if (e.target.classList.contains("trash")) {
    etpp.parentElement.remove();
    let get = localStorage.getItem("userData");
    let getParsed = JSON.parse(get);
    getParsed.splice(
      getParsed.indexOf(
        e.target.parentElement.parentElement.querySelector(".act").innerHTML
      )
    );
    localStorage.setItem("userData", JSON.stringify(getParsed));
  }
}
