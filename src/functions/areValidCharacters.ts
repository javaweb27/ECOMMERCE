const verifyAllowedCharacters = (string: string) => {
  try {
    btoa(string)
    return true
  }
  catch {
    return false
  }
}

export default verifyAllowedCharacters