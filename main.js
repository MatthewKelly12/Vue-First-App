var vm = new Vue({
	el: '#app',
	data: {
		brand: 'Mattazon',
		product: 'Socks',
		description: '100% Cotton American Made',
		selectedVariant: 0,
		inStock: true,
		onSale: true,
		sizes: ["small","medium","large"],
		variants: [
			{
				variantId: 1,
				color: 'Green',
				variantImage: './greenSocks.jpeg'
			},
			{
				variantId: 2,
				color: '#003568',
				variantImage: './blueSocks.jpeg'
			}
		],
		cart: 0
	},
	methods: {
		addToCart: function() {
			this.cart += 1
		},
		updateProduct: function(variantImage) {
			this.image = variantImage
		}
	},
	computed: {
		title(){
			return this.brand + ' ' + this.product
		}
	}
})

// console.log(variants)
//variantImage = './greenSocks.jpeg'
//variantImage = './blueSocks.jpeg'
//

