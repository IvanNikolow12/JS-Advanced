function solve() {
    document.querySelector('#dropdown').addEventListener('click', onClick);
    let ul = document.querySelector('#dropdown-ul');
    ul.addEventListener('click', chooseStyle);
    let box = document.querySelector('#box');

    function onClick(e) {
        let display = ul.style.display

        if (display != 'block') {
            ul.style.display = 'block';
        } else {
            ul.style.display = 'none';
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
        }
    }

    function chooseStyle(e) {

        let rgb = e.target.textContent;
        box.style.backgroundColor = rgb;
        box.style.color = 'black';
    }
}

// function solve() {
//   let ulList = document.getElementById("dropdown-ul");
//   let boxElement = document.getElementById("box");

//   document.querySelector("#dropdown").addEventListener("click", function (e) {
//     let display = ulList.style.display;
//     if (display != "block") {
//       ulList.style.display = "block";
//     } else {
//       ulList.style.display = "none";
//     }
//   });
//   ulList.addEventListener("click", function (e) {
//     let backgroundColor = e.target.textContent;
//     boxElement.style.backgroundColor = backgroundColor;
//     boxElement.style.color = "black";
//   });
// }
