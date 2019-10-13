function generateRandom(max){
    var arr = [];
    for(var i = 0; i < max; i++){
        arr.push(i);
    }
    for(var i = 0; i < max; i++){
       var swap = Math.floor(Math.random()*i);
       var temp;
       temp = arr[i]
       arr[i] = arr[swap];
       arr[swap] = temp;
    }
    return arr;
}



module.exports = generateRandom(10);