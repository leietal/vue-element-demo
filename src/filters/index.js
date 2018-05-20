const capitalize = function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const reverseString = function (value) {
  if (!value) return ''
  value = value.toString()
  return value.split('').reverse().join('')
}

export default {
  capitalize,
  reverseString
}
