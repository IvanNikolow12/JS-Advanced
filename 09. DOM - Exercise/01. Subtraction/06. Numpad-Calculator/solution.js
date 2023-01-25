function solve() {

    const input = document.getElementById('expressionOutput');
    const result = document.getElementById('resultOutput');
   
    const memory = {
        firstDigit: '',
        secondDigit: '',
        operator: ''
    };


    let operators = {
        '+': () => Number(memory.firstDigit) + Number(memory.secondDigit),
        '-': () => Number(memory.firstDigit) - Number(memory.secondDigit),
        '*': () => Number(memory.firstDigit) * Number(memory.secondDigit),
        '/': () => Number(memory.firstDigit) / Number(memory.secondDigit)
    };

    Array.from(document.getElementsByTagName('button'))
        .forEach(e => e.addEventListener('click', onClick));

    function onClick(e) {
        const value = e.target.value;
        
        if (value === 'Clear') {
            input.innerText = '';
            result.innerText = '';
    
            memory.firstDigit = '';
            memory.operator = '';
            memory.secondDigit = '';
        } else if (operators.hasOwnProperty(value) && memory.operator === '') {
            memory.operator = value;
            input.innerHTML += ` ${value} `;
        } else if (memory.operator === '') {
            memory.firstDigit += value;
            input.innerHTML += value;
        } else if (value == '=') {

            if(memory.secondDigit === ''){
                result.innerHTML = 'NaN'
            } else{
                result.innerHTML = operators[memory.operator]();
            }            
        } else {
            memory.secondDigit += value;
            input.innerHTML += value;
        }
    }
}

// function solve(){
//     const screen = document.querySelector('#expressionOutput');
//     const resultOutput = document.getElementById('resultOutput');
//     const clear = document.querySelector('.clear').addEventListener('click', () => {
//         memory.first = '';
//         memory.second = '';
//         memory.operator = '';
//         screen.textContent = '';
//         resultOutput.textContent = '';
//     });
//     //добавяме eventListener
//     [...document.querySelector('div.keys').querySelectorAll('button')].forEach(b => {
//         b.addEventListener('click', onClick);
//     });

//     const memory = {
//         first: '',
//         second: '',
//         operator: ''
//     }

//     const operators = {
//         '+': () => { Number(memory.first) + Number(memory.second)},
//         '-': () => {Number(memory.first) - Number(memory.second)},
//         '*': () => {Number(memory.first) * Number(memory.second)},
//         '/': () => {Number(memory.first) / Number(memory.second)},
//         '=': true
//     }
    

//     function onClick(e){
//         // прочитаме value на натиснатия бутон;
//         const value = e.target.value;
       
//         if(operators.hasOwnProperty(value)){
//             // натисната е функция
//             if(value == '='){
//                 resultOutput.textContent = operators[memory.operator]();
//             } else {
//                 memory.operator = value;
//             }
//         } else {
//             // натиснато е число 
//             if(memory.operator === ''){
//                 memory.first += value;
//             } else {
//                 memory.second += value;
//             }
//         }
//         //изписваме на екрана
//         screen.textContent = `${memory.first} ${memory.operator} ${memory.second}`;


//         // изпълняваме операция според value;
//     }
// }