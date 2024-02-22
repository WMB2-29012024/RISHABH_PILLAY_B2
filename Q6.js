

const adtArr = (arr) => {

    let newArr = []

    for (i = 0; i < arr.length; i++) {

        if (i === (arr.length - 1)) {

            newArr.push([arr[i]])

        }
        else {
            newArr.push([arr[i], arr[i + 1]])
        }
    }

    console.log(newArr)
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


adtArr(numArr);
