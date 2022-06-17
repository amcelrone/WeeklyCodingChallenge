lists = [[1,4,5],[1,3,4],[2,6]]

i = 0;
while(i < lists.length){
    for(j = 0; j < lists.length; j++){
        if(lists[0][j] < lists[i+1][j]){
            lists[0][j-1].push(lists[i+1][j])
        }
        else{
            lists[0].push(lists[i+1][j])
        }

    }
    i++;
}

console.log(lists[0]);