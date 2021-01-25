// debo modificar el estilo el margin top del boton cuando el email sea incorrecto 
// clase del boton: .notify-button

let emailInput = document.querySelector('.email-input');
let wrongInput = document.querySelector('.wrong-email');
let notifyButton = document.querySelector('.notify-button');


// When using a form, is usefull to add an Event Listener instead of a 
// onclick on the submit button. Since I can add a preventDefault to 
//avoid the js executing unproperly
notifyButton.addEventListener('click', (event) => {
    let emailValue = emailInput.value;

    if(!emailValue.includes('@') || !emailValue.includes('.com')){
        // console.log(emailValue);
        
        WrongEmailFormat();
        event.preventDefault();    
    }
})

function WrongEmailFormat(){
    emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
    wrongInput.style.display = 'initial';
    notifyButton.style.marginTop = '-30px';
}