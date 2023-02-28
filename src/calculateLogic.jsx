


export default function calculate(str){

    let number=str.split(/(?<=[\d\.])[\+\-X\/](?=.*)/gm)
    let operators=str.match(/(?<=[\d\.])[\+\-X\/](?=.*)/gm)
    let operatorsIndex
    if(!operators) return str

    number=number.map(str=>Number(shortenNumber(str)))

    operatorsIndex=operators.findIndex(operator=>operator.match(/\//))
    while(operatorsIndex>-1){
        number=[...number.slice(0,operatorsIndex),number[operatorsIndex]/number[operatorsIndex+1],...number.slice(operatorsIndex+2)]
        operators.splice(operatorsIndex,1)
        operatorsIndex=operators.findIndex(operator=>operator.match(/\//))
    }

    operatorsIndex=operators.findIndex(operator=>operator.match(/\X/))
    while(operatorsIndex>-1){
        number=[...number.slice(0,operatorsIndex),number[operatorsIndex]*number[operatorsIndex+1],...number.slice(operatorsIndex+2)]
        operators.splice(operatorsIndex,1)
        operatorsIndex=operators.findIndex(operator=>operator.match(/\X/))
    }

    operatorsIndex=operators.findIndex(operator=>operator.match(/\-/))
    while(operatorsIndex>-1){
        number=[...number.slice(0,operatorsIndex),number[operatorsIndex]-number[operatorsIndex+1],...number.slice(operatorsIndex+2)]
        operators.splice(operatorsIndex,1)
        operatorsIndex=operators.findIndex(operator=>operator.match(/\-/))
    }

    operatorsIndex=operators.findIndex(operator=>operator.match(/\+/))
    while(operatorsIndex>-1){
        number=[...number.slice(0,operatorsIndex),number[operatorsIndex]+number[operatorsIndex+1],...number.slice(operatorsIndex+2)]
        operators.splice(operatorsIndex,1)
        operatorsIndex=operators.findIndex(operator=>operator.match(/\+/))
    }

    return String(number[0])
}

function shortenNumber(str){
 
    let minusCount=0
    while(str.match(/\+|\-/gm)){
        let currOperator=str.substring(0,1)
        if(currOperator==='-') minusCount+=
        str=str.substring(1)
    }

    return (minusCount%2===0)? str:`-${str}`
}