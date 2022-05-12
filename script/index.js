function submitForm() {

    const mailReciver = 'jhonlaw1983@gmail.com';

    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-phone').value;
    let subject = document.getElementById('choose-subject').value;
    let message = document.getElementById('input-message').value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name == '' || email == '' || phone == '' || phone == '' || subject == '' || message == '' ) {
        alert('Lengkapi yang kosong....')
    }

    let a = document.createElement('a');
    a.href = `mailto:${mailReciver}?subject=${subject}&body=Hi, my name ${name}, I wanted to ${subject}, ${message}`;
    a.click();

    let dataObject = {
        name: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message,
    };
    
    console.log(dataObject);


}