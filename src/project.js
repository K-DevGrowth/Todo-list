export const createProject = (name) => {
    return {
        id: Date.now(),
        name,
        todos: []
    }
}