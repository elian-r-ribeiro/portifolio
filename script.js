function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const diff = hoje - nascimento;

    const idade = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    return idade;
}

document.getElementById('ageText').innerText = `Meu nome é Elian Rodrigues Ribeiro, tenho ${calcularIdade('2004-05-29')} anos e atualmente moro na cidade de Cantagalo - PR, e também tenho disponibilidade para trabalho (presencial) em Guarapuava - PR e Curitiba - PR. Atualmente estou cursando o 4º período de Engenharia de Software na faculdade UniGuairacá em Guarapuava - PR. Pretendo seguir o rumo de desenvolvimento back-end.`;