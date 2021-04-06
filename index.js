

function superbowlWin([...record]){
    let winYear = record.find(isWin);
    if(typeof(winYear) === "undefined"){
        return winYear;
    }
    else{
        return winYear.year;
    }
}

function isWin(record){
    return record.result === "W"
}