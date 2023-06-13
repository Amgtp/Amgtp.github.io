function sendMail(){
    var params = {
        name: document.getElementById("firstname").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value
    };
    const serviceID= "service_dwykq0e";
    const templateID= "template_jkp3k0s"

    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("firstname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("y");
        }
    )
    .catch((err) => console.log(err))
}