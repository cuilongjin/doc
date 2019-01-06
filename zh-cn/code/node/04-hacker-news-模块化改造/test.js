let str = 'hh123ggg'
let str1 = 'hh'
let str2 = 'ggg'
console.log(str.indexOf(str1) === 0)
console.log(str.indexOf(str2) === str.length - str2.length)
console.log(str.startsWith(str1))
console.log(str.endsWith(str2))

