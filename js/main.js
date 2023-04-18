function verifyEmail() {

    const signedMail = ["personal.favia@gmail.com","mario.rossi@gmail.com","rosa.verdi@gmail.com"];
    let userMail = document.getElementById("mailInput").value;

    for (let i = 0; i < signedMail.length; i++) {
        let verifiedEmail = signedMail[i];

        if (userMail == verifiedEmail) {
            alert("ciao")
            
        } else{
            alert("email non registrata")
        }
};
};