import AlumniVcard from './AlumniVcard.js'

export default {
	components: {
		AlumniVcard,
	},
	data () {
		return {
			alumni: {
				"avatar": null,
				"surname": null,
				"lastname": null,
				"email": null,
				"membership": false,
				"mailing": {
					"alumni": false,
					"members": false,
				},
				"promotion": {
					"year": null,
					"major": null
				},
				"contacts": []
			}
		}
	},
	created () {
		axios
			.get('/api/account.json')
			.then(response => (this.alumni = response.data))
	},
	update () {
		HTMLFormControlsCollection.log(this.alumni.mailing)
	},
	watch: {
		alumni(value) {
			console.log(value)
		}
	},
	template: `
	<main>
		<section class="mb-4" id="kanzan-account" v-if="alumni">
			<h5>Ma fiche contact</h5>
			<alumni-vcard v-bind:alumni="alumni" v-bind:editable="true"></alumni-vcard>
			<p class="text-center text-muted">Ma fiche contact est visible par les autres membres dans l'annuaire de l'AdA Risques </p>
		</section>

		<section class="mb-4">
			<h5>Mes informations</h5>
			<div class="card">
				<div class="card-body">
					<span class="badge rounded-pill border border-success bg-white text-success" v-if="alumni.membership">
						<i class="fa fa-sm fa-check"></i>
						Adhérent
					</span>
					<span class="badge rounded-pill border border-warning bg-warning text-dark" v-else>Non-adhérent</span>
					<span class="ms-2">{{ alumni.email }}</span>
				</div>
			</div>
		</section>

		<section class="mb-4">
			<h5>Mes préférences de communication</h5>
			<form>
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" value="" v-model="alumni.mailing.alumni">
					<label class="form-check-label" for="mailing-alumni">
						J’accepte de recevoir quelques courriels d’information sur la vie de l’association ou de l’école (liste de diffusion <samp>alumni</samp>)
					</label>
				</div>
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" value="" v-model="alumni.mailing.members">
					<label class="form-check-label" for="mailing-members">
						J’accepte de recevoir quelques courriels d’information réservés aux adhérents (liste de diffusion <samp>adherents</samp>)
					</label>
				</div>
			</form>
		</section>
	</main>
	`
}