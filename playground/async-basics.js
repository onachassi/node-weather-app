console.log('Starting app')

setTimeout(() => {
  console.log('inside of callback')
}, 2000)

setTimeout(() => {
  console.log('second callback')
}, 0)

console.log('Finshing app')