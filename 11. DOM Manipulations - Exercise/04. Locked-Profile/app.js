function lockedProfile() {
    const profileDivs = document.querySelectorAll('.profile');

    for (const profileDiv of profileDivs) {
        
        const hiddenField = profileDiv.querySelector('div');
        const button = profileDiv.querySelector('button');
        const inputElements = profileDiv.querySelectorAll('input[type="radio"]');

        button.addEventListener('click', () => {
            let buttonText = button.textContent;

            if(inputElements[1].checked === true){
                if(buttonText === 'Show more'){
                    hiddenField.style.display = 'block';
                    button.textContent = 'Hide it';
                }else{
                    hiddenField.style.display = 'none';
                    button.textContent = 'Show more';
                }

            }
        });
    }
}

// function lockedProfile() {
//     document.querySelector('#main').addEventListener('click', onClick);

//     function onClick (e) {
//         if (e.target.nodeName === 'BUTTON') {
//             const parent = e.target.parentNode;
//             const lock = parent.querySelector('input[type="radio"][value = "lock"]');
//             if (lock.checked){
//                 return;
//             } 

//             const hiddenFields = [...parent.querySelectorAll('div')].filter(d => d.id.includes('HiddenFields'))[0];
//             console.log(hiddenFields)
//             if (hiddenFields.style.display !== 'block') {
//                 hiddenFields.style.display = 'block';
//                 e.target.textContent = 'Hide it';
//             } else {
//                 hiddenFields.style.display = 'none';
//                 e.target.textContent = 'Show more';
//             }
//         }
//     }
// }