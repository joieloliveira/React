function gerarNumeroNaoContido(min,max,array){
    const aleatorio = parseInt(Math.random()*(max+1-min))+min
    return array.includes(aleatorio) ? 
    gerarNumeroNaoContido(min,max,array) : 
    aleatorio
}
//função para gerar numeros aleatorios sem repetição 1 ou 60
function gerarNumeros(qtde){
    const numeros = Array(qtde)
        .fill(0)
        .reduce((nums)=>{
            const novoNumero = gerarNumeroNaoContido(1,60,nums)
            return [...nums,novoNumero]
        },[])
        .sort((n1,n2)=>n1-n2)//coloca os numeros em ordem crescente n1-n2 ou dec n2-n1

    return numeros
}

console.log(gerarNumeros(7))