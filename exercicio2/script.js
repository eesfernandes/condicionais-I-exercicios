function tresValores (){
    let idade = parseInt(prompt('Digite sua idade: '))

    // Valida se os dados não são números, se não for, informar que o valor digitado é inválido e pede para inserir novamente.
    while(isNaN(idade)){
        alert(`O valor digitado é inválido. Digite um valor numérico.`)
        idade = parseInt(prompt('Digite sua idade: '))
   }
   // Verifica Maior ou Menor de idade
   if(idade >= 18){
    const msgMaiorIdade = `Idade: ${idade} anos - Maior De Idade!`
    console.log(msgMaiorIdade)
   }else{
    const msgMenorIdade = `Idade: ${idade} anos - Menor De Idade!`
    console.log(msgMenorIdade)
   }

   //---------------------------------------------------------------------------------------------------------------//

    let perEnsinoMedio = prompt('Ensino médio concluído? (Responda sim ou não): ').toLowerCase()

    // Valida se é menor ou igual a 17 anos e se a resposta é sim, caso positivo, informa que a resposta é incorreta por ser menor de idade e encerra o progra
    if(idade <= 17 && perEnsinoMedio === 'sim'){
        alert(`Menor De Idade! Sua resposta não pode ser sim para termino do ENSINO MÉDIO.`)
        return 
    }
    // Verifica se concluíu ou não o ensino médio
    if(perEnsinoMedio === 'sim'){
        const msgEnsinoMedioSim = `Ensino médio concluído!`
        console.log(msgEnsinoMedioSim)
    }else{
        const msgEnsinoMedioNao = `Não concluíu o ensino médio!`
        console.log(msgEnsinoMedioNao)
    }

    //---------------------------------------------------------------------------------------------------------------//

    let perFaculdade = prompt('Está cursando alguma faculdade? (Responda sim ou não): ').toLowerCase()

    // Valida dados. Se a resposta do ensino médio for não ou nao e faculdade for sim, o sistema informa que o usuario não possui ensino medio e encerra o programa.
    if((perEnsinoMedio === 'não' || perEnsinoMedio === 'nao') && perFaculdade === 'sim'){
        alert(`Você não terminou o ensino médio! Sua resposta não pode ser sim para FACULDADE.`)
        return
    }
    // Verifica se iniciou ou não uma faculdade
    if(perFaculdade === 'sim'){
        const msgPerfaculdadeSim = `Iniciou uma faculdade!`
        console.log(msgPerfaculdadeSim)
    }else{
        const msgPerfaculdadeNao = `Não iniciou uma faculdade!`
        console.log(msgPerfaculdadeNao)
    }
    
}
tresValores()