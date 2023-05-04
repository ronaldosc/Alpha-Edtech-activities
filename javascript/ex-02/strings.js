var str1 = 'abc'
var str2 = 'abe'

if (str1.length(str2) > str2.length(str1))
  console.log('str1 is greater than str2')
else if (str1.length(str2) < str2.length(str1))
  console.log('str1 is lesser than str2')
else str1.length === str2.length
console.log('str1 is equal to str2')

// indentação mostra que a última linha não faz parte da sentença
/* if (str1.localeCompare(str2) > str2.localeCompare(str1))
  console.log('str1 is greater than str2')
else if (str1.localeCompare(str2) < str2.localeCompare(str1)) */
