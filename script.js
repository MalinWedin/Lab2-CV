window.addEventListener('load', main);

function main() {
    headerDropDownMenu();
    headerDropDownMenuUp();
    headerDropDownMenuUp2();
    headerDropDownMenuUp4();
    doThisLarger2();
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


function doThisLarger2() {
    const photo = document.getElementById('photo4')
    const photo1 = document.getElementById('photo1')
    const photo2 = document.getElementById('photo2')
    const photo3 = document.getElementById('photo3')

    
    photo.onmouseover = function(){
        photo.style.transform = 'scale(1.7)'   
    }
    photo.onmouseout = function(){
        photo.style.transform = 'scale(1)'  
    }
    photo1.onmouseover = function(){
        photo1.style.transform = 'scale(1.7)'   
    }
    photo1.onmouseout = function(){
        photo1.style.transform = 'scale(1)'  
    }
    photo2.onmouseover = function(){
        photo2.style.transform = 'scale(1.7)'
    }
    photo2.onmouseout = function(){
        photo2.style.transform = 'scale(1)'
    }
    photo3.onmouseover = function(){
        photo3.style.transform = 'scale(1.7)'
    }
    photo3.onmouseout = function(){
        photo3.style.transform = 'scale(1)'
    }
}

