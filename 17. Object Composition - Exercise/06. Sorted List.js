function sortedList() {
    let obj = (() => {
        let arr = [];
        let sorted = (a, b) => a - b;
        let size = 0;

        let add = function (element) {
            arr.push(element);
            arr.sort(sorted);
            this.size++;
            return arr;
        };

        let remove = function (index) {
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                arr.sort(sorted);
                this.size--;
                return arr;
            }
        };

        let get = function (index) {
            if (index >= 0 && index < arr.length) {
                return arr[index];
            }
        };

        return { add, remove, get, size}

    })();

    return obj;
}