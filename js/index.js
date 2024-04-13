const form = document.querySelector("#form");
const input = document.querySelector(".todo_input");
const submitBtn = document.querySelector(".submit_btn");
const todoList = document.querySelector(".todo_list");
const allBtn = document.querySelector(".all_btn");
const completedBtn = document.querySelector(".completed_btn");
const uncompletedBtn = document.querySelector(".uncompleted_btn");
let todos = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let text = input.value;
    if (text === "") {
        window.alert("Input Is Empty...");
    } else {
        let todo = `<div class="todo">
             <p>${text}</p>
            <button class="delete_btn">X</button>
         </div>`;
        todoList.insertAdjacentHTML("beforeend", todo);
        input.value = "";
        saveData();
    };
});

todoList.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "P") {
        e.target.classList.toggle("checked");
        saveData();
    };
});

// allBtn.addEventListener("click", () => {
//     showData();
// });

// completedBtn.addEventListener("click", () => {
//     let checked = document.querySelectorAll(".checked");
//     if (checked) {
//         todoList.innerHTML = "";
//         for (let i = 0; i < checked.length; i++) {
//             let todo = `<div class="todo">
//                   <p class="checked">${checked[i].textContent}</p>
//                  <button class="delete_btn">X</button>
//               </div>`;
//             todoList.insertAdjacentHTML("beforeend", todo);
//             saveData();
//         };
//     };
// });

// uncompletedBtn.addEventListener("click", () => {
//     let p = document.querySelectorAll("p");
//     todoList.innerHTML = "";
//     for (let i = 0; i < p.length; i++) {
//         if (!p[i].classList.contains("checked")) {
//             let todo = `<div class="todo">
//                 <p>${p[i].textContent}</p>
//                 <button class="delete_btn">X</button>
//                 </div>`;
//             todoList.insertAdjacentHTML("beforeend", todo);
//             saveData();  
//         };
//     }; 
// });

function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
};

function showData() {
    todoList.innerHTML = localStorage.getItem("data");
};

showData();