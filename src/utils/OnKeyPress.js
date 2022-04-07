function keysClicked (word, lastEvent) {

    if (word.first == null ) {
        const dataBack = {
            first: lastEvent,
            second: null,
            third: null,
            fourth: null,
            fifth: null
        };

        return dataBack
    }
    else if (word.second == null ){
        const dataBack = {
            first: word.first,
            second: lastEvent,
            third: null,
            fourth: null,
            fifth: null
        };

        return dataBack
    }
    else if (word.third == null ){
        const dataBack = {
            first: word.first,
            second: word.second,
            third: lastEvent,
            fourth: null,
            fifth: null
        };
        
        return dataBack        
    }
    else if (word.fourth == null ){
        const dataBack = {
            first: word.first,
            second: word.second,
            third: word.third,
            fourth: lastEvent,
            fifth: null
        };
        
        return dataBack
    }
    else if (word.fifth == null ){
        const dataBack = {
            first: word.first,
            second: word.second,
            third: word.third,
            fourth: word.fourth,
            fifth:  lastEvent
        };
        
        return dataBack
    }
    else {
        return false
    }
}

export default keysClicked