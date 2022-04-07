function onDelete (word) {
    // Find the index of non-null values. If index = 0 all keys have null values, if index = 5 all items have non-null values
    let deleteIndexNum = Object.entries(word).filter( ([key, value]) => value != null).length;
    console.log('Delete index: ', deleteIndexNum);

    const toDelete = {
        first: word.first,
        second: word.second,
        third: word.third,
        fourth: word.fourth,
        fifth: word.fifth
    };

    switch (deleteIndexNum) {
        case 0:
            console.log('Cannot delete anything')
            break
        case 1:
            toDelete.first = null;
            break
        case 2:
            toDelete.second = null;
            break
        case 3:
            toDelete.third = null;
            break
        case 4:
            toDelete.fourth = null;
            break
        case 5:
            toDelete.fifth = null;
            break
        default:
            // do nothing
    }

    return toDelete
}

export default onDelete