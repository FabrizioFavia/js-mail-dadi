function verifyEmail() {

    const signedMail = ["personal.favia@gmail.com", "mario.rossi@gmail.com", "rosa.verdi@gmail.com"];
    let userMail = document.getElementById("mailInput").value;
    let insertedMail = [userMail]

    for (let i = 0; i < insertedMail.length; i++) {
        let possibleEmail = insertedMail[i];
        let verifiedEmail = signedMail[i]

        if (possibleEmail == verifiedEmail) {
            alert("Email esistente")

        } else {
            alert("Email non registrata")
        }
    };
};