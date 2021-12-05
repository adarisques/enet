import PromotionInput from './components/PromotionInput.js'

window.addEventListener('load', function() {
	const auth = Vue.createApp({
		components: {
			'promotion-input': PromotionInput,
		},
		data () {
			return {
				alumni: {
					"surname": null,
					"lastname": null,
					"email": null,
					"mailing": {
						"alumni": true,
						"members": true,
					},
					"promotion": {
						"year": (new Date()).getFullYear(),
						"major": 'MRI'
					}
				}
			}
		}
	})
	auth.mount('#kanzan-signon')
})