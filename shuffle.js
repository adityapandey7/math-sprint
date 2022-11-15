function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    //while thre remain elements to shuffle...
    while(0!== currentIndex){

        //pick a remaining element...
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -=1;

        //and swap it with the current element,
        temporaryValue = array[currentIndex];
        array[currentIndex]=array[randomIndex];
        array[randomIndex]=temporaryValue;
    }
    return array;
}