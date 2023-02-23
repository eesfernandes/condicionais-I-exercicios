function verificaNacionalidade (){
    const nacionalidade = prompt('Digite sua nacionalidade: ')
    if(nacionalidade === 'brasileira' || nacionalidade === 'argentina' || nacionalidade === 'uruguaia' || nacionalidade === 'chilena' || nacionalidade === 'colombiana'){
        const msgNacionalidade = `${nacionalidade}`
        console.log(msgNacionalidade)
    }else{
        const msgNacNaoEncontrada = `Nacionalidade não econtrada!`
        console.log(msgNacNaoEncontrada)
    }
}
verificaNacionalidade()