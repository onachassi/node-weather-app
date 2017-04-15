var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) =>{
		setTimeout(()=>{
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b)
			} else{
				reject('Arguments must be numbers')
			}
		}, 1500)
	})
}

asyncAdd(5, '10').then((res)=>{
	console.log('Result: ', res)
	return asyncAdd(res, 33);
}).then((res)=>{
	console.log('should be 48: ', res)
}).catch((errorMsg)=>{
	console.log(errorMsg)
})

// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 	resolve('Hey. It worked!')
// 	// reject('dickhead')
// 	}, 2500)
// })

// somePromise.then((msg) => {
// 	console.log('Success: ', msg)
// }, (errorMsg) => {
// 	console.log(errorMsg)
// })