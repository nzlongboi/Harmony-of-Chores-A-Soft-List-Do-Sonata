const clearFromProjectsPage = () => {
    const projectsPageBody = document.querySelector('.projects-page-body');
    if (projectsPageBody) {
        while (projectsPageBody.firstChild) {
            projectsPageBody.removeChild(projectsPageBody.firstChild);
        }
    }
}

export default clearFromProjectsPage;