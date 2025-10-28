function entrar() {
    // console.log("Vamos ver se funciona");
    // let email = 'teste@teste';
    // console.log(email)
    // alert('Entrando...');
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    //estrutura condicional
    if (email == 'pietromessias39@gmail.com' && senha == 'pietro2009') {
        Swal.fire({
    title: "Acesso permitido!",
    text: "seja bem-vindo a nossa plataforma!",
    icon: "success"
});
    window.location = 'index.html';
    } else {
        Swal.fire({
    title: "Acesso Negado!",
    text: "Algo deu errado!", 
    icon: "error",
});
    }
    //console.log(email, senha);
}