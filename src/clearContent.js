const clearContent = () => {
    const content = document.getElementById('content');
    if (content) {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }
};

export default clearContent;