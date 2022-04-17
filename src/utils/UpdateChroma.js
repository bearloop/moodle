function updateChroma(chroma, word, hiddenWord) {
    // console.log('Chroma',chroma)
    // console.log('Word',word)
    console.log('hiddenWord',hiddenWord)
    // Create deep copy
    const newChroma =  JSON.parse(JSON.stringify(chroma))

    const wordString = Object.entries(word).map(([k,v],ind)=>v).join('')

    for (let i=0; i<wordString.length; i++){
        let currentChar = wordString.charAt(i)
        console.log(currentChar)
        
        if (newChroma[currentChar] === '#0fa641') {
            // Success from origin
            newChroma[currentChar] = '#0fa641'
        }
        else if (newChroma[currentChar] === '#d1a754') {

            if (hiddenWord.charAt(i) === currentChar) {
                // Success
                newChroma[currentChar] = '#0fa641'
            }
            else {
                // Close from origin
                newChroma[currentChar] = '#d1a754'
            }

        }
        else if (newChroma[currentChar] === '#1a1a1a') {

            if (hiddenWord.charAt(i) === currentChar) {
                // Success
                newChroma[currentChar] = '#0fa641'
            }
            else if (hiddenWord.includes(currentChar)) {
                // Close
                newChroma[currentChar] = '#d1a754'
            }
            else {
                // Just clicked on
                newChroma[currentChar] = '#40434d'
            }
            
        }
    
    }

    return newChroma
    
}

export default updateChroma