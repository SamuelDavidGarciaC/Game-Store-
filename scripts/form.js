
// Form validation


const inputs = document.querySelectorAll('input');
const names = document.querySelector('#name')

console.log(names)

const expresiones = {
	namePattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	emailPattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	
}

    function validation() {
        const form = document.getElementById('form');
        const email = document.getElementById('email').value
        ;
        var alert = document.getElementById('alert');
        var pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    
        if (email.match(pattern)) {
            form.classList.add("valid");
            form.classList.remove("invalid");
        }else {
            form.classList.remove("valid");
            form.classList.add("invalid");
        }
    }
