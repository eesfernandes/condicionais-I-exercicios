function ePar (){
    const num = parseInt(prompt('Digite um número: '))
    if(num % 2 === 0){
        const msgPar = `O número "${num}" digitado é Par`
        return msgPar
    }else{
        const outraMsg = `O número "${num}" digitado não é Par`
        return outraMsg
    }
}
console.log(ePar())