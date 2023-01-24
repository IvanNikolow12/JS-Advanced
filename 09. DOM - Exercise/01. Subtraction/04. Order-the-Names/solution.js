function solve() {
    const li = document.getElementsByTagName('li');
    let a = 65;

    [...li].forEach(e => {
        e.setAttribute('id', String.fromCharCode(a++))
    });

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {
        const currentName = document.getElementsByTagName('input')[0].value;
        const firstLetter = currentName[0].toUpperCase();
        const word = firstLetter + currentName.slice(1).toLowerCase();

        const currnetLi = document.getElementById(`${firstLetter}`);

        if (currnetLi.textContent === '') {
            currnetLi.textContent = word;
        } else {
            const temp = currnetLi.textContent + `, ${word}`;
            currnetLi.textContent = temp;
        }

        document.getElementsByTagName('input')[0].value = '';
    }
}

// function solve() {
//     document.querySelector('button').addEventListener('click', onClick);
//     const items = document.querySelector('ol').querySelectorAll('li')
//     const list = {};
//     [...items].forEach(element => {
//         if(e.textContent.trim().length = 0){
//             return;
//         } 
//             const letter = element.textContent[0].toUpperCase();
//             list[letter] = e.textContent;   
//     })

//     function onClick(e){
//         const input = document.querySelector('input');
//         const value = input.value;
//         const letter = value[0].toLocaleUpperCase();
//         if(list.hasOwnProperty(letter) === false){
//             list[letter] = value[0].toUpperCase() + value.slice(1).toLowerCase();
//         } else {
//             list[letter] = list[letter] + ', ' + (value[0].toUpperCase() + value.slice(1).toLowerCase());
//         }
//         const index = letter.charCodeAt(0) - 65;
//         items[index].textContent = list[letter];
//         input.value = ''
//     }
// }