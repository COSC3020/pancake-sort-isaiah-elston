// function flip(array, n) {
//     return array;
// }

// // Use only flip() here to manipulate the array
// function pancakeSort(array) {
//     return array;
// }

function swap(array, left, right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

function flip(array, n) {
    if (n > array.length - 1) {
        flip(array, array.length - 1);
    } else {
        let left = 0, right = n;
        while (left < right) {
            swap(array, left, right);
            left++, right--;
        }
    }
}

function findMaxIndex(array, n) {
    let maxIndex = 0;
    for (let index = 0; index < n; index++) {
        if (array[index] > array[maxIndex]) {
            maxIndex = index;
        }
    }
    return maxIndex;
}

function pancakeSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
    let size = array.length, maxIndex = findMaxIndex(array, size);
    while (size > 0) {
            flip(array, maxIndex);
            flip(array, size - 1);
            maxIndex = findMaxIndex(array, --size);
        }
    }
    return array;
}