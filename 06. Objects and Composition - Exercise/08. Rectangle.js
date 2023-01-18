function rectangle (width, height, color){

    let str = color.split('')
    str[0] = str[0].toUpperCase();
    str = str.join('')  

    let obj = {
        width,
        height,
        color: str,
        calcArea(){
            return this.width * this.height
        }
    }

return obj
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());