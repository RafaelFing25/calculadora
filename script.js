const historyCalc = []
let Ac = true
teclado.addEventListener('click', e=>{
   
    const btn = e.toElement.innerText;
    if(Number(btn)){
        display.innerText += btn;
        historyCalc.push(btn)
        Ac = false;
    }else if(btn === 'AC') {
        display.innerText = '';
        Ac = true
    }else if(btn === '='){
        const calc = display.innerText.replaceAll('X','*').replaceAll('%','/100')
        console.log(calc)
        display.innerText = eval(calc);
        Ac=true
    }else if(btn == 'CE'){
        historyCalc.pop()
        display.innerText = historyCalc.join('')
    }
    else{
        display.innerText += btn;
        historyCalc.push(btn)
    }
    if(display.innerText != '' && !Ac){
        Ac = false
        ac.innerText = 'CE'
    }else{
        ac.innerText = 'AC'
    }
    console.log(display.innerText)
})