function tresValores (){
    const idade = parseInt(prompt('Digite sua idade: '))
    let perEnsinoMedio = prompt('Ensino médio concluído? (Responda sim ou não): ')
    let perFaculdade = prompt('Está cursando alguma faculdade? (Responda sim ou não): ')
    if(idade >= 18){
        const msgMaiorIdade = `Idade: ${idade} - Maior De Idade!`
        console.log(msgMaiorIdade)
    }else{
        perEnsinoMedio = false
        perFaculdade = false
        const msgMenorIdade = `Idade: ${idade} - Menor De Idade!`
        console.log(msgMenorIdade)
    }
    if(perEnsinoMedio === 'sim'){
        const msgEnsinoMedioSim = `Terminou o ensino médio!`
        console.log(msgEnsinoMedioSim)
    }else{
        perFaculdade = false
        const msgEnsinoMedioNao = `Não terminou o ensino médio!`
        console.log(msgEnsinoMedioNao)
    }
    if(perFaculdade === 'sim'){
        const msgFaculdadeSim = `Sim, está cursando faculdade!`
        console.log(msgFaculdadeSim)
    }else{
        const msgFaculdadenNao = `Não, não está cursando faculdade!`
        console.log(msgFaculdadenNao)
    }
}
tresValores()