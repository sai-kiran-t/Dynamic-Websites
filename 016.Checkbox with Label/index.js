let containerEl = document.getElementById("checkboxWithLabelContainer");
containerEl.classList.add("text-center", "p-5");

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkbox";
containerEl.appendChild(inputEl);


let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.id = "checkboxLabel";
labelEl.textContent = "Click Me!";
labelEl.classList.add("ml-2");
containerEl.appendChild(labelEl);