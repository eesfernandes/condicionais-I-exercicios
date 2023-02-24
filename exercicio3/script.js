function verificaNacionalidade (){
    const nacionalidade = prompt('Digite sua nacionalidade: ').toLowerCase()
    if( nacionalidade === 'brasileira' || nacionalidade === 'brasileiro' || 
        nacionalidade === 'argentina' || nacionalidade === 'argentino' ||
        nacionalidade === 'uruguaia' || nacionalidade === 'uruguaio' ||
        nacionalidade === 'chilena' || nacionalidade === 'chileno' ||
        nacionalidade === 'colombiana' || nacionalidade === 'colombiano' ){
        const msgNacionalidade = `Você é ${nacionalidade}`
        console.log(msgNacionalidade[0].toUpperCase() + msgNacionalidade.substring(1))
    }else{
        const msgNacNaoEncontrada = `Nacionalidade não econtrada!`
        console.log(msgNacNaoEncontrada[0].toUpperCase() + msgNacNaoEncontrada.substring(1))
    }
}
verificaNacionalidade()