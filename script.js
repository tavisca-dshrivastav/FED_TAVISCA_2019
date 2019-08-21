function changeTab(element) {
    var tab = element.getAttribute('data-tab');
    var allTab = document.querySelectorAll('.main-body');
    for (let i = 0; i < allTab.length; i++) {
        allTab[i].style.display = 'none';
    }
    document.getElementById(tab + '-content').style.display = 'block';
}

function showPopup() {
    document.getElementById('autopop').style.display = 'block';
}

function hidePopup() {
    document.getElementById('autopop').style.display = 'none';
}