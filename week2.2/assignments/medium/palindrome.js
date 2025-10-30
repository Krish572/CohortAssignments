function isPralindrome(str){
    let s = 0, e = str.length - 1;
    while(s < e){
        if(str.charAt(s) != str.charAt(e)){
            return false;
        }
        s++;
        e--;
    }

    return true;
}

console.log(isPralindrome("Krishnanhsir"));