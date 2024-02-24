import createProjectForm from "./createNewProject";



// my array
    let myProjects = [];

   // creating an object
    class Project {
        constructor(name, description, dueDate, priority) {
            this.name = name;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    function makeNewProject() {
        const nameInput = document.querySelector('.name-input');
        const descriptionInput = document.querySelector('.description-input');
        const dueDateInput = document.querySelector('.due-date-input');
        const priorityInput = document.querySelector('.priority-input');
        const newProject = new Project(
            `${nameInput.value}`,
             `${descriptionInput.value}`,
              `${dueDateInput.value}`,
               `${priorityInput.value}`
               );
        myProjects.push(newProject);
        console.log(myProjects);
        console.log(newProject);
    }

    export { makeNewProject, Project, myProjects}; 