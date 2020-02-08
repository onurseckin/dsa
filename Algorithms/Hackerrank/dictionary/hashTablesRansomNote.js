function hasTablesRansomNote(magazine, note) {
     var map = { };
    var replicable = true;
    for ( var i of magazine ) {
        map[i] = (map[i] || 0) + 1;
    }
    for ( var i of note ) {
        map[i] = (map[i] || 0) - 1;
    }
    for ( var i in map ) {
        if ( map[i] < 0 ) {
            replicable = false;
            break;
        }
    }
    console.log(replicable ? 'Yes' : 'No');
}