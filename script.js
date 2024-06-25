   function login() {
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;

            if (usuario === 'admin' && senha === 'admin') {
                alert('Login bem-sucedido!');
                window.location.href = 'index2.html'; // Redireciona para a página de cadastro de contatos
            } else {
                alert('Usuário ou senha incorretos!');
            }
        }