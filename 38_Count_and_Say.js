
function nextCountSay(num) {
    let strNum = num.toString();
    let lastNumber = parseInt(strNum.charAt(0));
    let count = 1;
    let countSayStr = "";

    for(let i = 1; i <= strNum.length; i++){

        let digit = parseInt(strNum.charAt(i));

        if ( lastNumber !== digit  || i === strNum.length){
            countSayStr = countSayStr + count + lastNumber;
            count = 1;
            lastNumber = digit;
        }
        else
            count++;
    }
    return countSayStr;
}

function findNthResult(func, n){
    i = 1;
    let result = "1";
    while ( i < n){
        result = func(result);
        i++;
    }
    return result.toString();
}



test = nextCountSay(1211);
console.log(test);
res = findNthResult(nextCountSay, 3);
console.log(res);