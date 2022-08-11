export default function areValidChars(string) {
  try {
    btoa(string)
    return true
  } catch {
    return false
  }
}
