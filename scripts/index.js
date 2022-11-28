// ---- Menu responsive configuration

// --- Let and Const declaration

// const xmark = document.getElementById('xmark');
// const responsive = document.getElementById('responsive');
const barMenu = document.getElementById('checkbtn')
const items = document.getElementById('items');

function showMenu() {
    const items = document.getElementById('items');
    items.style.transform = "translatex(0)";
}

function hideMenu() {
    const items = document.getElementById('items');
    items.style.transform = "translatex(-100%)";
}
