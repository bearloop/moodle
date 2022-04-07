
function checkPosition(hiddenWord, letter, position, trial, placeholder, savedWord) {
    
    if (trial > placeholder){

        if (letter === null){
            const outcome = 'base'
            return outcome
        }
        else if (hiddenWord.includes(letter) && hiddenWord.charAt(position) !== letter){
            // Exception if there is a character guessed at the correct position (so if a green exists) you should not show any yellows

            // Check whether the letter appears in at least one position across the word
            function multipleChars () {

                let whatToReturn = false
                
                // Check if the letter appears at least twice in the word the user typed
                const isDuplicate = Object.entries(savedWord).map((keys,values) => keys[1]).filter(item => item === letter).length > 1
                console.log('IsD', isDuplicate)
                // If the letter is not null and it does appear at least twice
                if (letter != null && isDuplicate){
                    
                    // Check if any of the duplicate characters is at the correct position

                    // duplicateIndex returns an array (list) of numbers representing indices to the savedWord
                    const duplicateIndex = Object.entries(savedWord).map(x => x[1] === letter).reduce((out, bool, index) => bool ? out.concat(index) : out, [])
                    console.log('Dindex', duplicateIndex)
                    // If there are at least two characters in savedWord then iterate over them to check if at least one is in the correct position
                    if (duplicateIndex.length > 1 ){

                        for (const [key,ind] of Object.entries(duplicateIndex)) {
                           console.log('ind of dind', ind, 'HiddenWord at', hiddenWord.at(ind), 'Letter', letter)
                           if (hiddenWord.at(ind) === letter){
                               // Magic happens here: if at least one of the duplicate chars is in the correct position then return true or "base/black color"
                               whatToReturn =  true
                           }
                        }
                    }
                    console.log('what was returned', whatToReturn)
                    return whatToReturn

                }
                else {
                    return whatToReturn
                }
                // let flag = 0
                // console.log('flag', flag)
                // for (let i = 1; i < 6; i++) {
                //     if (hiddenWord.includes(letter) ){
                //         flag += 1
                //     }
                // }
                // console.log('flag', flag)
                // if (flag>=2){
                //     return true
                // }
                // else{
                //     return false
                // }
                
            }

            if (multipleChars()) {
                const outcome = 'base'
                return outcome
            }
            else {
                const outcome = 'notQuite'
                return outcome
            }
            
        }
        else if (hiddenWord.charAt(position) === letter){
            const outcome = 'success'
            return outcome
        }
        else {
            const outcome = 'base'
            return outcome
        }
    }
    else {
        const outcome = 'base'
        return outcome
    }
    
}

export default checkPosition