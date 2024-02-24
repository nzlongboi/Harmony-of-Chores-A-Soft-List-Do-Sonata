
import dialogClose from "./dialogClose";
import createProjectsPage from "./projectsPage";
import { makeNewProject } from "./newProject";
import {myProjects} from "./newProject";

// logic for form modal
// needs to create new window with form elements

const createProjectForm = () => {
    const projectsPageBody = document.querySelector('.projects-page-body');

    const dialog = document.createElement('dialog');
    dialog.setAttribute('data-modal', '');
    dialog.classList.add('modal');

    // Create form elements
    const nameLabel = document.createElement('label');
    nameLabel.classList.add('name-label');
    nameLabel.setAttribute('for', 'projectName');
    nameLabel.textContent = 'Project Name:';
    const nameInput = document.createElement('input');
    nameInput.classList.add('name-input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'projectName');
    nameInput.setAttribute('name', 'projectName');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('description-label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('description-input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');

    const dueDateLabel = document.createElement('label');
    dueDateLabel.classList.add('due-date-label');
    dueDateLabel.setAttribute('for', 'dueDate');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.classList.add('due-date-input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'dueDate');
    dueDateInput.setAttribute('name', 'dueDate');

    const priorityLabel = document.createElement('label');
    priorityLabel.classList.add('priority-label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority:';
    const priorityInput = document.createElement('input');
    priorityInput.classList.add('priority-input');
    priorityInput.setAttribute('type', 'number');
    priorityInput.setAttribute('id', 'priority');
    priorityInput.setAttribute('name', 'priority');

    const submitButton = document.createElement('input');
    submitButton.classList.add('submit-button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submitButton.addEventListener('click', () => {
            let projectDiv = document.createElement('div');
            projectDiv.classList.add('project-div');
            projectDiv.textContent = `${nameInput.value} ${descriptionInput.value} ${dueDateInput.value} ${priorityInput.value}`;
            projectsPageBody.appendChild(projectDiv);
        
        makeNewProject();
    });

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';
    exitButton.addEventListener('click', () => {
        dialogClose();
        projectsPageBody.removeChild(dialog);
        createProjectsPage();

    });

    // Append elements to the dialog
    dialog.appendChild(nameLabel);
    dialog.appendChild(nameInput);
    dialog.appendChild(document.createElement('br'));
    dialog.appendChild(descriptionLabel);
    dialog.appendChild(descriptionInput);
    dialog.appendChild(document.createElement('br'));
    dialog.appendChild(dueDateLabel);
    dialog.appendChild(dueDateInput);
    dialog.appendChild(document.createElement('br'));
    dialog.appendChild(priorityLabel);
    dialog.appendChild(priorityInput);
    dialog.appendChild(document.createElement('br'));
    dialog.appendChild(submitButton);
    dialog.appendChild(document.createElement('br'));
    dialog.appendChild(exitButton);



    projectsPageBody.appendChild(dialog);

    dialog.showModal();
}

export default createProjectForm;