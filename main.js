var vm = new Vue({
	el: '#app',
	data: {
		brand: 'Mattazon',
		product: 'Socks',
		description: '100% Cotton American Made',
		selectedVariant: 0,
		sizes: ["small","medium","large"],
		variants: [
			{
				variantId: 1,
				color: 'Green',
				variantImage: './greenSocks.jpeg',
				onSale: true,
				quantity: 10
			},
			{
				variantId: 2,
				color: '#003568',
				variantImage: './blueSocks.jpeg',
				onSale: true,
				quantity: 0
			}
		],
		cart: 0
	},
	methods: {
		addToCart: function() {
			this.cart += 1
		},
		updateProduct: function(index) {
			this.selectedVariant = index
		}
	},
	computed: {
		title(){
			return this.brand + ' ' + this.product
		},
		image(){
			return this.variants[this.selectedVariant].variantImage
		},
		inStock(){
			return this.variants[this.selectedVariant].quantity
		},
		onSale(){
			return this.variants[this.selectedVariant].onSale
		}
	}
})


