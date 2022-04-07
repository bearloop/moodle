import hugeWordList from './ListOfWords'

function isValidWord (word, hiddenWord) {
    
    // Merge separate characters to a single word
    const w = Object.entries(word).map(([k,v])=>v).join('')
    // console.log(w)

    switch (w === hiddenWord) {
    
      case true:
        // console.log('success')
        return {'severity':'success','text':"Yes! The word you're looking for is " + w +'. Nice job!'}

      case false:
        if (hugeWordList.includes(w)){
          // console.log('Wrong word')
          return {'severity':'warning','text':"Wrong word! Try again."}
        }
        else if (w.length < 5) {
          // console.log('Less than 5 characters')
          return {'severity':'error','text':"This text doesn't even have 5 characters. Try better."}
        }
        else {
          // console.log('Not a word')
          return {'severity':'error','text':"I don't know this word. Try again."}
        }

        default:
          // do nothing
    }
}

export default isValidWord