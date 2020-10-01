
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined ) return [];
    let result = [];
    matrix.forEach((elem, index, matrix) => {
        if (index % 2 != 0) elem = elem.reverse();
        elem.forEach(item => result.push(item));
    })
    return result;
}
