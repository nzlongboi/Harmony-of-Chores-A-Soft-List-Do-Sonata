


// logic for form modal
// needs to create new window with form elements

const createProjectForm = () => {
    const projectsPageBody = document.querySelector('.projects-page-body');
    const projectFormDiv = document.createElement('div');
    projectFormDiv.classList.add('project-form-div');
    projectFormDiv.innerHTML = 'This is the project form';

    projectsPageBody.appendChild(projectFormDiv);
}

export default createProjectForm;