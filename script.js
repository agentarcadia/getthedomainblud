

window.addEventListener('load', () => {
    const enterScreen = document.getElementById('enter-screen');
    const enterButton = document.getElementById('enter-button');
    const mainContent = document.getElementById('main-content');

    
    enterButton.addEventListener('click', () => {
        enterScreen.style.display = 'none';
        mainContent.style.display = 'block';
    });

    
    setTimeout(() => {
        enterScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 30000);  
});
