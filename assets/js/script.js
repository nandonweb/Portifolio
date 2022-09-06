function contato_form(email){
    let msg = document.querySelector('.enviado');
    let nome = document.getElementById('nome').value;
    msg.innerHTML = '';
    msg.innerHTML += `${nome} sua Mensagem foi Enviada!`;

    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check=/@[\w\-]+\./;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1))
    {return msg.innerHTML = `E-mail invalido`;}
    else {return};
}


