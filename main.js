var vm = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		description: '100% Cotton American Made',
		inStock: true,
		onSale: true,
		sizes: ["small","medium","large"],
		variants: [
			{variantId: 1, color: 'Green', variantImage = './greenSocks.jpeg'},
			{variantId: 2, color: 'Blue', variantImage = './blueSocks.jpeg'}
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