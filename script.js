const header= document.querySelector('header')
const dropdown = document.getElementById('toggleThis');

dropdown.onclick = function() {
    if (header.style.height == '100%') {
        header.style.height = null;
    } else {
        header.style.height = '100%';
    }
}