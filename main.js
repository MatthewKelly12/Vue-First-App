new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		description: '100% Cotton American Made',
		image: './socks.jpeg',
		inStock: true,
		onSale: true,
		sizes: ["small","medium","large"],
		variants: [
			{variantId: 1, color: 'Green'},
			{variantId: 2, color: 'Blue'}
		]
	}
})

// console.log(variants)