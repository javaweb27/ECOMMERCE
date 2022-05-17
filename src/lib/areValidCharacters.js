function areValidCharacters(string) {
  try {
    btoa(string)
    return true
  }
  catch {
    return false
  }
}

module.exports = areValidCharacters