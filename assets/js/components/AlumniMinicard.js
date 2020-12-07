export default {
	props: {
		alumni: {
			type: Object,
			required: true,
		}
	},
	template: `
		<div>
			<div class="card">
				<img v-bind:src="alumni.avatar" class="card-img-top" alt="">
				<div class="card-body h6 card-title text-center p-2 m-0">{{alumni.surname}} {{alumni.lastname}}</div>
				<a class="ml-auto stretched-link" href="#" data-toggle="modal" data-target="#alumni-vcard"></a>
			</div>
		</div>
	`
}