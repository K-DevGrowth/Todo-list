import { saveToLocalStorage, loadFromLocalStorage } from "./storage.js";
import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

export const appState = loadFromLocalStorage("appState", {
    projects: [createProject("Today")],
    activeProjectId: null
});

export const addProject = (name) => {
    const newProject = createProject(name);
    appState.projects.push(newProject);
    saveToLocalStorage("appState", appState);
}

export const addTodo = (title, description, dueDate, priority) => {
    const activeProject = appState.projects.find(p => p.id === appState.activeProjectId);
    if (!activeProject) return;

    const newTodo = createTodo(title, description, dueDate, priority);
    activeProject.todos.push(newTodo);
    saveToLocalStorage("appState", appState);
}