window.addEventListener('load', main);

function main() {
    headerDropDownMenu();
    headerDropDownMenuUp();
}

function headerDropDownMenu() {
    const header = document.querySelector('header')
    const dropdown = document.getElementById('toggleThis');

    dropdown.onclick = function() {
        if (header.style.height == '100%') {
            header.style.height = null;
        } else {
            header.style.height = '100%';
        }
    }
    
}

function headerDropDownMenuUp() {
    const header = document.querySelector('header')
    const linkClicked = document.getElementById('afterClick');

    linkClicked.onclick = function()  {
        if (header.style.height == '100%') {
            header.style.height = null;
        } else {
            header.style.height = '100%';
        }
    }
    
}