const strArr = "asdasdzxczxc";

const strRev = (str) => {

    let revStr = ""

    for (i = (str.length - 1); i >= 0; i--) {

        revStr += str[i];
    }

    return revStr

}
console.log(strRev(strArr))