import "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";

document.addEventListener("DOMContentLoaded", function() {

    let accueil =  document.getElementById("accueil");
    let projet = document.getElementById("project");
    let who = document.getElementById("who");
    let contact = document.getElementById("contact");
    let boutonMail = document.getElementById("sendMail");

    document.addEventListener("click", function(e) {
        if(e.target == accueil) {
            window.location.href = "index.html";
        }
        if(e.target == projet) {
            window.location.href = "projet.html";
        }
        if(e.target == who){
            window.location.href = "qui.html";
        }
        if(e.target == contact){
            window.location.href = "contact.html";
        }
        if(e.target == boutonMail){
            let nom = document.getElementById("nom").value;
            let prenom = document.getElementById("prenom").value;
            let email = document.getElementById("email").value;
            let object = document.getElementById("object").value;
            let message = document.getElementById("message").value;
            let regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
            if(nom.trim() == "" || prenom.trim() == "" || email.trim() == "" || object.trim() == "" || message.trim() == ""){
                alert("Veuillez remplir tous les champs");
                return;
            }
            if(!regex.test(email)){
                alert("Veuillez entrer une adresse email valide");
                return;
            }
            sendMail();
            //clean the form
            document.getElementById("nom").value = "";
            document.getElementById("prenom").value = "";
            document.getElementById("email").value = "";
            document.getElementById("object").value = "";
            document.getElementById("message").value = "";
            document.getElementById("mobile").value = "";
        
        }


    });

    function sendMail(){
        (function(){
            emailjs.init("GVGqm1nsZjV-SLIT0");
        })();
        let name = document.getElementById("prenom").value + " " + document.getElementById("nom").value;
        let message = "New message from " + name + " : \n" + document.getElementById("message").value + "\nfrom " + document.getElementById("email").value;
        var params = {
            from_name: name,
            replyto: document.getElementById("email").value,
            subject: document.getElementById("object").value,
            message: message,
        };
        
        console.log(params);
        
        var service_id = "service_vjis23e";
        var template_id = "template_kbltf2l";
        emailjs.send(service_id, template_id, params)
            .then(res => {
                alert("Mail envoyé !");
                window.location.href = "index.html";
            }).catch(err => {
                alert("Une erreur est survenue, veuillez réessayer plus tard");
            });
    }
});
