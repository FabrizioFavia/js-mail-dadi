function verifyEmail() {

    var check = false;
    const signedMail = ["personal.favia@gmail.com", "mario.rossi@gmail.com", "rosa.verdi@gmail.com"];
    var userMail = document.getElementById("mailInput").value;

    for (let i = 0; i < signedMail.length; i++) {
         let validMail = signedMail[i];

        if (userMail == validMail) {
            check = true;
        }
    }

    if (check) {
        alert("mail presente");
    }
    else{
        alert("mail non presente");
    }
};