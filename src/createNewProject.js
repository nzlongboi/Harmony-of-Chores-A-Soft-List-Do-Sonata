


class Project {
    constructor(title, description, dueDate, priority, counter) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.counter = counter;
    }

    createProject() {
        // creating a form element
        const projectForm = document.createElement('form');
        projectForm.classList.add('project-form');

        // creating the input elements for the form
        const projectNameInput = document.createElement('input');
        projectNameInput.setAttribute('type', 'text');
        projectNameInput.setAttribute('placeholder', 'Enter project name');
        projectNameInput.setAttribute('required', 'true');

        // add description, due date, priority and counter

        // creating the submit button
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.innerText = 'Create Project';

        projectForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // retrive the project name from the input field
            const projectName = projectNameInput.value;

            // create project DOM element and append it to the projects page
            const projectElement = document.createElement('div');
            projectElement.innerText = `Project: ${projectName}`;

            const projectsPage = document.getElementById('content');
            projectsPage.appendChild(projectElement);

            projectForm.reset();
        });

        projectForm.appendChild(projectNameInput);
        projectForm.appendChild(submitButton);

        // return the form so it can be used externally
        return projectForm;
    }

}



export default Project;


// this whole bit may beed to be rewritten