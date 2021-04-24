var vm = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		description: '100% Cotton American Made',
		image: './greenSocks.jpeg',
		inStock: true,
		onSale: true,
		sizes: ["small","medium","large"],
		variants: [
			{variantId: 1, color: 'Green'},
			{variantId: 2, color: 'Blue'}
		],
		cart: 0

	},
	methods: {
		addToCart: function() {
			this.cart += 1
		}
	}
})

// console.log(variants)