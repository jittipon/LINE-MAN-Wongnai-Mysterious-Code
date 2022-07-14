let data = 'aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K=';
let buff = new Buffer(data, 'base64');
let text = buff.toString('ascii');
let reverseString = "";

for(i=text.length-1;i>=0;i--){
    reverseString += text[i];
}

console.log("Answer is "+ reverseString);
//ANSWER = Join:us:at:LINE:MAN:Wongnai