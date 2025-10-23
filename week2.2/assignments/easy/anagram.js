// function isAnagram(str1, str2){ // Does not word for "ab" & "aabb";
//     for(let i = 0; i < str1.length; i++){
//         if(!str2.includes(str1.charAt(i)) && str2.charAt(i) != " "){
//             return false;
//         }
//     }
//     for(let i = 0; i < str2.length; i++){
//         if(!str1.includes(str2.charAt(i)) && str2.charAt(i) != " "){
//             return false;
//         }
//     }
//     return true;
// }

function isAnagramBetter(str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    const sortedStr1 = str1.split('').sort().join();
    const sortedStr2 = str2.split('').sort().join();

    return sortedStr1 === sortedStr2;
}

function isAnagramOptimal(str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    const obj = {};

    for(let char of str1){
        obj[char] = (obj[char] || 0) + 1;
    }

    for(let char of str2){
        if(!obj[char]) return false;
        obj[char]--;
    }

    return true;
}

const word1 = "conversation";
const word2 = "voicesraton" 
console.log(isAnagramOptimal(word1, word2));