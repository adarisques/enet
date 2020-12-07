import PromotionInput from 'js/components/PromotionInput.js'
import AlumniMinicard from 'js/components/AlumniMinicard.js'
import AlumniVcard from 'js/components/AlumniVcard.js'

export default {
	components: {
		PromotionInput,
		AlumniMinicard,
		AlumniVcard,
	},
	data () {
		return {
			promotion: null,
			alumni: []
		}
	},
	created () {
		this.promotion = { year: 2010, major: 'MRI' };
		axios
		  .get('/api/alumni.json')
		  .then(response => (this.alumni = response.data.sort(
			  (a, b) => (a.lastname + ' ' + a.surname) > (b.lastname + ' ' + b.surname)
		  )))
	},
	template:`
	<main>
		<section class="mb-4">
			<h5>Rechercher un alumni</h5>
			<form>
				<div class="form-group" id="kanzan-alumni-search">
					<div class="input-group flex-nowrap">
						<input type="text" class="form-control" id="search-name" placeholder="Nom, prénom, information de la fiche contact...">
						<button class="btn btn-outline-secondary" type="button"><i class="fa fa-search"></i></button>
					</div>
				</div>
			</form>
		</section>
		<section class="mb-4" id="kanzan-annuaire">
			<div class="d-md-flex justify-content-between align-items-baseline mb-4">
				<h5>Annuaire par promotion</h5>
				<form class="form-inline">
					<promotion-input v-model="promotion"></promotion-input>
				</form>
			</div>

			<div class="row row-cols-3 row-cols-lg-5" id="alumni-directory" v-if="alumni">
				<alumni-minicard class="col mb-4" v-for="person in alumni" v-bind:key="person.username" v-bind:alumni="person"></alumni-minicard>
			</div>

			<div class="modal fade" id="alumni-vcard" tabindex="-1" role="dialog" aria-hidden="true" v-if="alumni[0]">
				<div class="modal-dialog modal-dialog-centered modal" role="document">
					<div class="modal-content">
						<alumni-vcard v-bind:alumni="alumni[0]"></alumni-vcard>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" data-dismiss="modal">Fermer</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	`
}