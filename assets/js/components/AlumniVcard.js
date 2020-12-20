export default {
	props: {
		alumni: {
			type: Object,
			required: true,
		}
	},
	methods: {
		faIcon (contact) {
			switch(contact.type) {
				case 'email': return 'fa fa-envelope';
				case 'postal': return 'fa fa-map-marker';
				case 'phone': return 'fa fa-phone';

				// Réseaux sociaux
				case 'twitter': return 'fab fa-twitter';
				case 'linkedin': return 'fab fa-linkedin';
				case 'facebook': return 'fab fa-facebook-square';
				case 'instagram': return 'fab fa-instagram';
				case 'slack': return 'fab fa-slack-hash';

				// Developement
				case 'github': return 'fab fa-github';
				case 'gitlab': return 'fab fa-gitlab';
				case 'bitbucket': return 'fab fa-bitbucket';

				// Par défaut
				default: return 'fa fa-share-alt';
			}
		}
	},
	template: `
		<div class="card">
			<div class="card-body alumni-vcard">
				<img v-bind:src="alumni.avatar" class="alumni-avatar" alt="">
				<div class="alumni-identity">
					<h5 class="card-title">{{ alumni.surname }} {{ alumni.lastname }}</h5>
					<h6 class="card-subtitle text-muted">Promo {{ alumni.promotion.year }} {{ alumni.promotion.major }}</h6>
				</div>
				<ul class="card-text list-unstyled alumni-contacts">
					<li class="d-flex position-relative my-1" v-bind:key="contact.value" v-for="contact in alumni.social">
						<span><i class="fa-fw me-1" v-bind:class="faIcon(contact)"></i></span>
						<span>{{ contact.value }}</span>
						<a class="ms-auto stretched-link" href="#"><i class="fa fa-fw fa-edit small"></i></a>
					</li>
					<li class="d-flex position-relative mb-1 text-muted">
						<a class="stretched-link text-muted" href="#"><i class="fa fa-fw fa-plus-square mr-1"></i></a>
						<span>Ajouter une information</span>
					</li>
				</ul>
			</div>
		</div>
	`
}