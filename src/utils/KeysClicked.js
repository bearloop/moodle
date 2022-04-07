
function wasClicked(trial, summary, key) {

    let keys ="";
    for (let i = 1; i < trial; i++) {
        keys += Object.entries(summary[i]).map(([k,v])=>v).join('')
    }

    return keys.includes(key)
}

export default wasClicked