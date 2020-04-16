module.exports = {
    forEach(arr, fn) {
        // for (let i = 0; i < arr.length; i++) {
        //     const value = arr[i];
        //     fn(value, i);
        // }

        for (let index in arr) {
            fn(arr[index], index);
        }
    },
    map(arr, fn) {
        result = [];
        // iterate through array

        // for (let i = 0; i < arr.length; i++) {
        //     const value = arr[i];
        //     result.push(fn(value, i));
        // }

        for (let index in arr) {
            result.push(fn(arr[index], index));
        }

        // for (const value of arr) {
        //     // run fn on each array item
        //     // add result to new array
        //     result.push(fn(value));
        // }

        return result;
    },
};
