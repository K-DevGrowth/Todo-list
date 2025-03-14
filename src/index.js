import "./styles.css";
import { renderProject, renderTodo } from "./ui.js";
import { addProject, addTodo, appState } from "./appState.js";

const addProjectBtn = document.querySelector(".add-project");
const addTodoBtn = document.querySelector(".add-todo");

addProjectBtn.addEventListener("click", () => {
    let projectName = prompt("Enter Project Name: ");
    if (projectName) {
        addProject(projectName);
        renderProject();
    }
})

addTodoBtn.addEventListener("click", () => {
    if (!appState.activeProjectId) {
        alert("Please Choose a Project!");
        return;
    }
    
    let title = prompt("Enter Todo Title: ");
    let description = prompt("Enter Todo Description: ");
    let dueDate = prompt("Enter Todo Due Date (YYYY-MM-DD): ");
    dueDate = Date();
    let priority = prompt("Enter Todo Priority (low, medium, high): ");
    
    if (title && dueDate && priority) {
        addTodo(title, description, dueDate, priority);
        renderTodo();
    }
})

window.addEventListener("DOMContentLoaded", renderProject);