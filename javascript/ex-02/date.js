var day = a,
  month = b,
  year = c

var today = new Date.now()
var birthday = new Date(c, b - 1, a).getTime()

var age = today - birthday
var ageDate = new Date(age)
var finalAge = Math.abs(ageDate.getUTCFullYear() - 1970)
console.log(finalAge)

// var age = today.getFullYear() - birthday.getFullYear()
// var m = today.getMonth() - birthday.getMonth()

// if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
//   age--
// }
// console.log(age)

/* function getAge(birthday) {
  var ageDifMs = Date.now() - birthday.getTime()
  var ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
getAge(new Date(c, b - 1, a)) */

/* var date = new Date(13976391000)
var date = date.getDate() //returns date (1 to 31) you can getUTCDate() for UTC date
var month = date.getMonth() // returns 1 less than month count since it starts from 0
var year = date.getFullYear() //returns year
// You can also use getHours(), getMinutes() and so on
 */

/* var d = new Date(1397639141184);
alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()); */

/* Dates before 01.01.1970 have negative timestamps, e.g.:
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000)
alert(Dec31_1969) */

/* Human Readable Time 	Seconds
1 Hour               	3600 Seconds
1 Day               	86400 Seconds
1 Week              	604800 Seconds
1 Month (30.44 days) 	2629743 Seconds
1 Year (365.24 days) 	31556926 Seconds */

function date() {
  var today = new Date()
  var day = today.getUTCDate()
  var month = today.getMonth() + 1
  var year = today.getFullYear()
  var date = day + '/' + month + '/' + year
  return date
}
function time() {
  var today = new Date()
  var hour = today.getHours()
  var minute = today.getMinutes()
  var second = today.getSeconds()
  var time = hour + ':' + minute + ':' + second
  return time
}
function utcDateTime() {
  // UTC
  var today = new Date()
  var day = today.getUTCDate()
  var month = today.getUTCMonth() + 1
  var year = today.getUTCFullYear()
  var date = day + '/' + month + '/' + year
  var hour = today.getUTCHours()
  var minute = today.getUTCMinutes()
  var second = today.getUTCSeconds()
  var time = hour + ':' + minute + ':' + second
  var utcDateTime = date + ' ' + time
  return utcDateTime
}
function dateTime() {
  var today = new Date()
  var day = today.getDate()
  var month = today.getMonth() + 1
  var year = today.getFullYear()
  var date = day + '/' + month + '/' + year
  var hour = today.getHours()
  var minute = today.getMinutes()
  var second = today.getSeconds()
  var time = hour + ':' + minute + ':' + second
  var dateTime = date + ' ' + time
  return dateTime
}
