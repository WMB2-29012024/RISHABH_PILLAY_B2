const numArr = [1, "234_45" , 89 , 75 , "4e9"];

const rever = (arr)=>{
    const reverArr=[]; 

    for(i=(arr.length-1);i>=0;i--){

        reverArr.push(arr[i])
    }
return reverArr;

}
console.log(rever(numArr))