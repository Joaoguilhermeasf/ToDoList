const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {

   if (listContainer.getElementsByTagName("li").length >= 5) {
    alert("You can't add more than 5 tasks!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
}

  inputBox.value = "";
  saveData();
}


inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") { 
    addTask();
  }
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();