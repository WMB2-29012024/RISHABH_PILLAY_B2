const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const altArr = (arr)=>{

    newArr=[];

    for(i=0;i< arr.length ;i+=4){

        newArr.push(arr[i])
    }
return newArr;

}
console.log(altArr(numArr))