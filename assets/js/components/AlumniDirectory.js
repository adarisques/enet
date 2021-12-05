import PromotionInput from './PromotionInput.js'
import AlumniMinicard from './AlumniMinicard.js'
import AlumniVcard from './AlumniVcard.js'

export default {
	components: {
		PromotionInput,
		AlumniMinicard,
		AlumniVcard,
	},
	data () {
		return {
			promotion: { year: 2010, major: 'MRI' },
			alumni: [],
			selectedAlumni: null,
			search: "",
			results: [],
		}
	},
	created () {
		this.alumniByPromotion()
	},
	watch: {
		search(val, oldVal) {
			if (val.length >= 3) {
				axios.post('/api/search.json', {search: this.search})
					.then(response => (this.results = response.data.sort(
						(a, b) => (a.lastname + ' ' + a.surname) > (b.lastname + ' ' + b.surname)
					)))
			} else {
				this.results = []
			}
		},
		promotion(val, oldVal) {
			this.alumniByPromotion()
		}
	},
	methods: {
		alumniByPromotion() {
			axios.post('/api/alumni.json', {promotion: this.promotion})
				.then(response => (this.alumni = response.data.sort(
					(a, b) => (a.lastname + ' ' + a.surname) > (b.lastname + ' ' + b.surname)
				)))
		}
	},
	template:`
	<main>
		<section class="mb-4">
			<h5>Rechercher un alumni</h5>
			<form class="form-group mb-4">
				<div class="input-group flex-nowrap">
					<input type="text" class="form-control" v-model="search" placeholder="Nom, prénom, information de la fiche contact...">
					<button class="btn btn-outline-secondary" type="button"><i class="fa fa-search"></i></button>
				</div>
			</form>
			
			<div class="row row-cols-3 row-cols-lg-5 alumni-directory" v-if="results">
				<alumni-minicard class="col mb-4" v-for="person in results" v-bind:key="person.username" v-bind:alumni="person" @select-alumni="selectedAlumni = $event"></alumni-minicard>
			</div>
		</section>
		<section class="mb-4">
			<div class="d-md-flex justify-content-between align-items-baseline mb-4">
				<h5>Annuaire par promotion</h5>
				<form class="form-inline">
					<promotion-input v-model.lazy="promotion" v-model:year="promotion.year" v-model:major="promotion.major"></promotion-input>
				</form>
			</div>

			<div class="row row-cols-3 row-cols-lg-5 alumni-directory" v-if="alumni">
				<alumni-minicard class="col mb-4" v-for="person in alumni" v-bind:key="person.username" v-bind:alumni="person" @select-alumni="selectedAlumni = $event"></alumni-minicard>
			</div>

			<div class="modal fade" id="alumni-vcard" tabindex="-1" role="dialog" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered modal" role="document">
					<div class="modal-content">
						<alumni-vcard v-if="selectedAlumni" v-bind:alumni="selectedAlumni"></alumni-vcard>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-target="#alumni-vcard">Fermer</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	`
}