import { appState } from "./appState.js";
import { format } from "date-fns";

export const renderProject = () => {
    const projectList = document.querySelector(".project-list");
    projectList.textContent = "";

    appState.projects.forEach(project => {
        const projectEl = document.createElement("button");
        projectEl.textContent = project.name;

        projectEl.addEventListener("click", () => {
            appState.activeProjectId = project.id;
            renderTodo();
        })

        projectList.appendChild(projectEl);
    })
    
}

export const renderTodo = () => {
    const activeProject = appState.projects.find(p => p.id === appState.activeProjectId);
    if (!activeProject) return;

    const todoList = document.querySelector(".todo-list");
    todoList.textContent = "";

    activeProject.todos.forEach(todo => {
        const todoEl = document.createElement("div");
        todoEl.innerHTML = `
        ${todo.title} - ${todo.description} - <b>${todo.priority}</b> 
        (${format(todo.dueDate, "yyyy-MM-dd")})`;
        
        todoEl.addEventListener("click", () => {
            todo.completed = !todo.completed;
            todoEl.style.textDecoration = todo.completed ? "line-through" : "none";
        });

        todoList.appendChild(todoEl);
    })
    
}