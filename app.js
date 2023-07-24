function addListeners() {
    const alertButton = document.getElementsByClassName('submit-button')[0];
    alertButton.addEventListener('click', showInputs);
}

function showInputs (){
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const emailAddress = document.getElementById('email');
    const companyName = document.getElementById('companyName');
    const phoneNumber = document.getElementById('phone');
    const message = document.getElementById('message');

    const name = firstName.value;
    const laName = lastName.value;
    const email = emailAddress.value;
    const company = companyName.value;
    const phone = phoneNumber.value;
    const mensaje = message.value;

    const alert = {name, laName, email, company, phone, mensaje};

    if (name && laName && email && company && phone && mensaje) {
        console.log(`First Name: ${name}, Last Name: ${laName}, Email: ${email}, Company Name: ${company}, Phone: ${phone}, Message: ${mensaje}`);
        addInputAlert(alert);
    }
}

function addInputAlert(input){
    const {name, laName, email, company, phone, mensaje} = input;
    window.alert(`First Name: ${name}, Last Name: ${laName}, Email: ${email}, Company Name: ${company}, Phone: ${phone}, Message: ${mensaje}`);
}

addListeners();