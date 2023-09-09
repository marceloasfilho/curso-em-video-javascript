let valores = [6,1,4,9,10,-1,3]

for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

for (let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

console.log(`Existe o valor 7 no vetor? R: ${valores.indexOf(7) == -1 ? 'N' : 'S'}`)