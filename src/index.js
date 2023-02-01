module.exports = function reverse (n) {
   const num = Math.abs(n)+''
   const res = num.split("").reverse().join("")
   return +res
}
