window.addEventListener('load', main);

function main() {
    headerDropDownMenu();
    headerDropDownMenuUp();
    headerDropDownMenuUp2();
    headerDropDownMenuUp3();
    headerDropDownMenuUp4();
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

    linkClicked.onclick = function() {
        if (header.style.height == '100%') {
            header.style.height = null;
        } else {
            header.style.height = '100%';
        }
    }    
}

function headerDropDownMenuUp2() {
    const header = document.querySelector('header')
    const linkClicked = document.getElementById('afterClick2');

    linkClicked.onclick = function() {
        if (header.style.height == '100%') {
            header.style.height = null;
        } else {
            header.style.height = '100%';
        }
    }
}

function headerDropDownMenuUp3() {
    const header = document.querySelector('header')
    const linkClicked = document.getElementById('afterClick3');

    linkClicked.onclick = function() {
        if (header.style.height == '100%') {
            header.style.height = null;
        } else {
            header.style.height = '100%';
        }
    }
}

function headerDropDownMenuUp4() {
    const header = document.querySelector('header')
    const linkClicked = document.getElementById('afterClick4')

    linkClicked.onclick = function() {
        if (header.style.height == '100%') {
            header.style.height = null;
        } else {
            header.style.height = '100%'
        }
    }
}