export default {
	props: {
		alumni: {
			type: Object,
			required: true,
		}
	},
	emits: ['selectAlumni'],
	methods: {
		selectAlumni: function() {
			this.$emit('selectAlumni', this.alumni)
		}
	},
	template: `
		<div>
			<div class="card alumni-minicard">
				<img v-bind:src="alumni.avatar" class="card-img-top" alt="">
				<div class="card-body alumni-identity card-title text-center p-2 m-0">{{alumni.surname}} {{alumni.lastname}}</div>
				<a class="ml-auto stretched-link" data-bs-toggle="modal" href="#alumni-vcard" @click="selectAlumni"></a>
			</div>
		</div>
	`
}