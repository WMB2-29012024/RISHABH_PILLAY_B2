const arr = [1, 2, 3, 4, 5];
// // const newarr = arr.map((elem) => elem * 2);
// // console.log(newarr)

// Array.prototype.myMap = function (callBack) {

//     if (!Array.isArray) {
//         console.log(`${this}not a array`)
//     }

//     const newArr = [];

//     for (let i = 0; i < this.length; i++) {
//         newArr.push(callBack(this[i], i, this))

//     }
//     return newArr

// }

// const newResult = arr.myMap((element, index, myArray) => {
//     // console.log(element, index, myArray)
//     return {element: element*2 , index, myArray}
// })

// console.log(newResult)

// Array.prototype.myFilter = function(callBack){
//     if (!Array.isArray) {
//                 console.log(`${this}not a array`)
//             }

//             const newArr = [];

//             for (let i = 0; i < this.length; i++) {
//                 if(callBack(this[i])){
//                     newArr.push(this[i])
//                 }

//             }
//             return newArr


// }

// const newArr = arr.myFilter((elem) => elem % 2)
// console.log(newArr)

Array.prototype.myReduce = function (callBack, initialValue) {

    if (!Array.isArray) {
        console.log(`${this}not a array`)
    }
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {

        accumulator = accumulator ? callBack(accumulator,this[i],i,this) : this[i]
              
    }
    return accumulator
}

const newArr = arr.myReduce((accumulator, current) => accumulator += current ,2)
console.log(newArr)





