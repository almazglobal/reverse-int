module.exports = function reverse (n) {
    let arrNum = n.toString().split('')
    if (arrNum[0] === '-') {
        return parseInt(`${arrNum.splice(1).reverse().join('')}`)
    } else {
        return parseInt(arrNum.reverse().join(''))
    }
}
