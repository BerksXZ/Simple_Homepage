const switchButton = document.getElementById('darkMode');
function darkMode() { 
    
}

switchButton.addEventListener('click', () => {
    const body = document.querySelector("body");
    const dataTheme = body.getAttribute('data-theme');
    const change_color = document.getElementsByClassName("white-logo")
    for (let i = 0; i < change_color.length;)
    {
        if(dataTheme === 'dark')
        {
            change_color[i].setAttribute('fill', '#223344');
            
        }else {
            change_color[i].setAttribute('fill', '#fff');
        }
        i++;
    }

    if(dataTheme === 'dark') {
    body.setAttribute('data-theme', 'light');
    // switchButton.innerHTML = 'DARK MODE';
    } else {
    body.setAttribute('data-theme', 'dark');
    // switchButton.innerHTML = 'LIGHT MODE';
    }
    switchButton.classList.toggle('active');
});