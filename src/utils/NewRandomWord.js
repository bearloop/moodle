import hugeWordList from './ListOfWords'

function newRandomWord() {
    const nrw = hugeWordList[Math.floor(Math.random() * hugeWordList.length)]
    return nrw
}

export default newRandomWord