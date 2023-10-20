$(document).ready(function () {
    //CPF, Telefone e CEP
    $('#telefone').mask('(00)00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('#formEbac').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
        }, messages: {
            nome: "Por favor insira seu nome",
            email: "Por favor insira o email corretamente",
            telefone: "Por favor insira o telefone corretamente",
            cpf: "Por favor insira o cpf corretamente",
            endereco: "Por favor insira o endereco corretamente",
            cep: "Por favor insira o cep corretamente",
        },
        submitHandler: function (form) {
            form.submit();
            console.log('log', form)
            alert('O formulario foi enviado')
        },
    })
});