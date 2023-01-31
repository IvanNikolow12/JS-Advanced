function solve() {
   const input = document.querySelector('#searchField');
   document.querySelector('#searchBtn').addEventListener('click', () => {

      const trWithClass = document.querySelectorAll('tbody tr[class="select"]');
      Array.from(trWithClass).forEach(x => x.removeAttribute('class'));

      if (input.value === '') {
         return;
      }

      const trAll = document.querySelectorAll('tbody tr');

      for (const tr of Array.from(trAll)) {

         if (tr.textContent.includes(input.value)) {
            tr.setAttribute('class', 'select');
         }
      }

      input.value = '';
   });
}

// function solve() {
//    const inputElement = document.querySelector('#searchField');
//    document.querySelector('#searchBtn').addEventListener('click', onClick);

//    function onClick (e) {
//       const trWithClass = Array.from(document.querySelectorAll('tbody tr[class="select"]'));
//       trWithClass.forEach(e => e.removeAttribute('class'));

//       if (inputElement.value == '') {
//          return;
//       }

//       const allTr = Array.from(document.querySelectorAll('tbody tr'));

//       for (const tr of allTr) {
//          if (tr.textContent.includes(inputElement.value)){
//             tr.setAttribute('class', 'select')
//          }
//       }
//       inputElement.value = ''
//    }

// }