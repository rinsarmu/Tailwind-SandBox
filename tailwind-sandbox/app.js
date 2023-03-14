console.log('helo')

function longestString( s){
    let check = s[0]
    for(let i =0; i<s.length; i++){
        if(!check.includes(s[i])){
            check +=s[i]
        }
    }
}

longestString('pwwkew')