

function secondLargest(N, input){
//nested for loop to sort the array from least to greatest
for(i = 0; i<N; i++){

   for(j = i+1; j<N; j++){
    if (input[i] > input[j])   
    {  
        temp = input[i];  
        input[i] = input[j];  
        input[j] = temp;  
    }  
   }
}
return (input[N - 2]);
}


