const verifyAllowedCharacters = (string) => {
  try {
    btoa(string)
    return true
  }
  catch {
    return false
  }
}

export default verifyAllowedCharacters