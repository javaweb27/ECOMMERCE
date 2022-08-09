const verifyValidChars = (string: string) => {
  try {
    btoa(string)
    return true
  } catch {
    return false
  }
}

export default verifyValidChars
