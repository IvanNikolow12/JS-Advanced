function solve() {

    const addButton = document.querySelector('.form-control:last-child button');

    addButton.addEventListener('click', (e) => {

        e.preventDefault();

        let lectureName = document.querySelectorAll('.form-control input')[0];
        let date = document.querySelectorAll('.form-control input')[1];
        let module = document.querySelector('.form-control select');

        if (!lectureName.value.trim() || !date.value.trim() || module == 'Select module') {
            return;
        }
        let currentModulText = module.value.toUpperCase() + '-MODULE';
        let currentLectureAndDate = `${lectureName.value} - ${replaceDate(date.value)}`

        let h3Elements = document.querySelectorAll('.modules h3');

        let isEmpty = Array.from(h3Elements).find(x => x.outerText == currentModulText)

        const divElementWithClassModules = document.querySelector('.modules');

        if (!isEmpty) {
            let divElement = createCurrentElement('div');
            divElement.setAttribute('class', 'module');

            let h3Element = createCurrentElement('h3', currentModulText);

            divElement.appendChild(h3Element);


            let ulElement = createCurrentElement('ul');

            let liElement = createLiElement();
           
            ulElement.appendChild(liElement);
            divElement.appendChild(ulElement);
            divElementWithClassModules.appendChild(divElement);          
        }else{

            let ulElement = isEmpty.nextSibling;
            let liElement = createLiElement();
            ulElement.appendChild(liElement);
            sortingLectures();


            function sortingLectures() {
                for (let mod of divElementWithClassModules.querySelectorAll('.module')) {
                    let allLi = Array.from(mod.querySelectorAll('li'));
                    mod.querySelector('ul').innerHTML = '';
                    allLi.sort((a,b) => {
                        const [nameA, dateA, timeA] = a.firstChild.textContent.split(' - ');
                        const [nameB, dateB, timeB] = b.firstChild.textContent.split(' - ');
                        const first = `${dateA} ${timeA}`;
                        const second = `${dateB} ${timeB}`;
        
                        if(first < second){
                            return -1;
                        } else if(first > second){
                            return 1;
                        } 

                        return 0;

                    }).forEach(el => mod.querySelector('ul').appendChild(el));
                }
            }
        }

        lectureName.value = '';
        date.value = '';
        module.value = 'Select module';

        function createLiElement(){
           
            let liElement = createCurrentElement('li')
            liElement.setAttribute('class', 'flex');

            let h4Element = createCurrentElement('h4', currentLectureAndDate);
            let delButton = createCurrentElement('button', 'Del')
            delButton.setAttribute('class', 'red');
            delButton.addEventListener('click', (e) => {

                let currentUlElement = e.target.parentElement.parentElement;
                let num = currentUlElement.querySelectorAll('li');

                if (num.length == 1) {
                    currentUlElement.parentElement.remove();
                } else {
                    e.target.parentElement.remove();
                }

            })

            liElement.appendChild(h4Element);
            liElement.appendChild(delButton);

            return liElement;
        }
    });

    function replaceDate(date) {
        let formating = date
            .replace('-', '/')
            .replace('-', '/')
            .replace('T', ' - ');

        return formating;
    }

    function createCurrentElement(type, text) {

        let element = document.createElement(type);

        if (text) {
            element.textContent = text;
        }

        return element;
    }
}


// function solve() {
//     let modules = document.querySelector('.modules');
//     document.querySelector('.form-control > button').addEventListener('click', add);

//     function add(e) {
//         e.preventDefault();
//         let lectureName = document.querySelector('input[name="lecture-name"]');
//         let date = document.querySelector('input[name="lecture-date"]');
//         let module = document.querySelector('select[name="lecture-module"]');

//         //checking for empty or default input
//         if(lectureName.value === '') return;
//         if(date.value === '' || date.value === ' ') return;
//         if(module.value === '' || module.value === 'Select module') return;

//         //formating date
//         const dataForLecture = formatLecture(lectureName.value, date.value);
//         //foramting module name
//         const modName = formatModule(module.value.toUpperCase());
    
//         //Create Lecture
//         let createdLecture = addLecture(dataForLecture);
//          //check that module is exist!
//         const currentModule = checkForExistModule(modName);
//         if(currentModule) {
//             currentModule.lastChild.appendChild(createdLecture);
//         } else {
//             //Create Module
//             let mod = addModule(modName);
//             mod.lastChild.appendChild(createdLecture);
//             modules.appendChild(mod);
//         }

//         sortingLectures();

//         //input filed is default value!!!
//         lectureName.value = '', date.value = '';
//         //get first option from Select tag (by default).
//         let op = module.querySelectorAll('option')[0];
//         //set default Option valur to Select value!
//         module.value = op.value;
//     }

//     function addModule(text) {
//         let module = createElement('div', 'module', '');
//         module.appendChild(createElement('h3', '', text));
//         module.appendChild(createElement('ul', '', ''));
//         return module;
//     }

//     function addLecture(text) {
//         let li = createElement('li', 'flex', '');
//         li.appendChild(createElement('h4', '', text));
//         li.appendChild(createElement('button', 'red', 'Del'));
//         return li;
//     }

//     function createElement(type, nameClass, content) {
//         let element = document.createElement(`${type}`);
//         if(nameClass !== '') element.className = nameClass;
//         if(content !== '') element.textContent = content;
//         if(type === 'button') element.addEventListener('click', removeLecture);
//         return element;
//     }

//     function removeLecture(e) {
//         e.preventDefault();
//         const allLiForModule = this.parentNode.parentNode.querySelectorAll('li');
//         if(allLiForModule.length === 1)
//             //when is do removing last lecture, she was removing and current Module!
//             return this.parentNode.parentNode.parentNode.remove();

//         //remove only current Lecture!
//         this.parentNode.remove();
//     }

//     function formatLecture(name, date) {
//         const [year, month, days, hours] = date.split(/[-T]/);
//         return `${name} - ${year}/${month}/${days} - ${hours}`;
//     }

//     function formatModule(m) {
//         return `${m}-MODULE`;
//     }

//     function checkForExistModule(modName) {
//         for (let m of modules.querySelectorAll('.module')) {
//             if(m.firstChild.textContent === modName) 
//                 return m;
//         }

//         return null;
//     }

//     function sortingLectures() {
//         for (let mod of modules.querySelectorAll('.module')) {
//             let allLi = Array.from(mod.querySelectorAll('li'));
//             mod.querySelector('ul').innerHTML = '';
//             allLi.sort((a,b) => {
//                 const [nameA, dateA, timeA] = a.firstChild.textContent.split(' - ');
//                 const [nameB, dateB, timeB] = b.firstChild.textContent.split(' - ');
//                 const first = `${dateA} ${timeA}`;
//                 const second = `${dateB} ${timeB}`;

//                 if(first < second) return -1;
//                 if(first > second) return 1;
//                 return 0;
//             }).forEach(el => mod.querySelector('ul').appendChild(el));
//         }
//     }
// };



// function solve() {

//     function makeElement(type, text) {
//         let element = document.createElement(type);
//         if (text !== null) {
//             element.textContent = text;
//         }
//         return element;
//     }

//     function convertDate(dateValue) {
//         while (dateValue.includes('-')) {
//             dateValue = dateValue.replace('-', '/');
//         }

//         dateValue = dateValue.replace('T', ' - ');
        
//         return dateValue;
//     }

//     function convertToDateAgain(string) {
//         let splittedString = string.split(' - ');
//         let dateValue = splittedString[1] + 'T' + splittedString[2];

//         while (dateValue.includes('/')) {
//             dateValue = dateValue.replace('/', '-');
//         }
        
//         return dateValue;;
//     }

//     const [lectureInput, dateInput] = document.querySelectorAll('div .form-control > input');
//     const selectModule = document.querySelector('div .form-control > select');
//     const addButton = document.querySelector('.form-control > button');
//     const trainingsSection = document.querySelector('section.user-view.section-view > div');

//     addButton.addEventListener('click', addNewLecture);

//     function addNewLecture(e) {
//         e.preventDefault();

//         if (lectureInput.value.trim() === '' || dateInput.value.trim() === '' || selectModule.value === 'Select module') {
//             return;
//         }
        
//         const selectedModule = selectModule.value.toUpperCase() + '-MODULE';
        
//         const selectedDate = `${lectureInput.value} - ${convertDate(dateInput.value)}`;

//         const div = makeElement('div');
//         div.setAttribute('class', 'module');

//         const h3 = makeElement('h3', selectedModule);
//         div.appendChild(h3);

//         const ul = makeElement('ul');

//         const li = makeElement('li');
//         li.setAttribute('class', 'flex');

//         const h4 = makeElement('h4', selectedDate);
//         li.appendChild(h4);

//         const deleteButton = makeElement('buton', 'Del');
//         deleteButton.setAttribute('class', 'red');
//         li.appendChild(deleteButton);
//         deleteButton.addEventListener('click', deleteLecture);

//         ul.appendChild(li);

//         let allModules = Array.from(trainingsSection.querySelectorAll('div'));

//         allModules.sort((a, b) => {  
//             let aDate = new Date(convertToDateAgain(a.querySelector('h4').textContent));
//             let bDate = new Date(convertToDateAgain(b.querySelector('h4').textContent));
                      
//             return aDate.localeCompare(bDate);
           
//         })
//         if (allModules.length === 0) {
//             div.appendChild(ul);
//             trainingsSection.appendChild(div);
//         } else {
//             let isModuleExist = allModules.find(m => m.querySelector('h3').textContent === selectedModule);
            
//             if (isModuleExist) {
//                 isModuleExist.querySelector('ul').appendChild(li);
//             } else {
//                 div.appendChild(ul);
//                 trainingsSection.appendChild(div);
//             }
//         }
        
//     }

//     function deleteLecture(e) {
//         const lecturesCurrentModule = e.target.parentNode.parentNode.children;
//         const currentModule = e.target.parentNode.parentNode.parentNode;

//         if (lecturesCurrentModule.length === 1) {
//             currentModule.remove();
//         } else {
//             e.target.parentNode.remove();
//         }
//     }
// }