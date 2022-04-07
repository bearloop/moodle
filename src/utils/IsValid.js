function isValid (input) {
    // valid if char length is one and it is a capitalized alphabetic char
    if (input.length === 1 && (/[A-Z]/).test(input)){
      return true
    }
    else {
      return false
    }
  }

export default isValid