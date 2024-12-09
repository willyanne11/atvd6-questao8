let maioresdeidades = 0;

for (let i = 1; i <= 20; i++) {

    let idade = parseInt(prompt('Digite a idade da ' + i + ' pessoa:'));
    if (idade >= 18) {
        maioresdeidades++;
    }
}


alert('O numero de pessoas maiores de idade é: ' + maioresdeidades);
