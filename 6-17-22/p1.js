function Median(nums1, nums2){

nums3 = nums1.concat(nums2);

nums3.sort(function(a, b){return a - b});

if(nums3.length%2 == 0){
    return (nums3[Math.floor(nums3.length/2)-1] + nums3[Math.ceil(nums3.length/2)]) / 2;
}
else{
    return nums3[Math.ceil(nums3.length/2)-1];
}

}
