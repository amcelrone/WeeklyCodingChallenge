function numbersOnly(T, testStr){
var result = 0;

//checks whether the element in the string is a number, converts it to an
// integer and adds to the total
for(j = 0; j<T; j++){
    for(i = 0; i < testStr.length; i++){
        if(!isNaN(testStr[i])){
        result = result + parseInt(testStr[i]);
       
        }
    }
    console.log(result);
}

}
