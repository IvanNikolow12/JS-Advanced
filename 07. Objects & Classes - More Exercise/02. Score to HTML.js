// function solve(input){
//     function escapeChars(str){
//         return str.toString().replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/"/g, '&quot;')
//             .replace(/'/g, '&#39;');
//     }
//     let ojbArray = input.map(x => JSON.parse(x));
//     let result = "<table>\n";
//     result += "   <tr>";
//     Object.keys(ojbArray).forEach(element => {
//         result += `<th>${element}</th>`;    
//     });
//     result += "</tr>\n";
//     ojbArray.forEach(element => {
//         result += "   <tr>"
//         Object.values(element).forEach(value => {
//             result += `<td>${escapeChars(value)}</td>`; 
//         });
//         result += "</tr>\n"
//     });
//     result += "</table>";    
//     console.log(result);
// }

// solve(
//     [{"name":"Pesho","score":479},
//    {"name":"Gosho","score":205}]
// )