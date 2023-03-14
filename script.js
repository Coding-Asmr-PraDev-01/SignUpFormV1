const eyeIconBx = document.querySelector('.eyeIconBx');
const inputPasswordField = document.querySelector('.inputPasswd');
const icon = document.querySelector('.uil');

let isVisible = false;
eyeIconBx.addEventListener('click', () => {
    if(!isVisible){
        inputPasswordField.setAttribute('type', 'password');
        icon.classList.remove('uil-eye');
        icon.classList.add('uil-eye-slash');        
    }else{
        inputPasswordField.setAttribute('type', 'text');
        icon.classList.remove('uil-eye-slash');
        icon.classList.add('uil-eye');
    }
    isVisible = !isVisible;
});