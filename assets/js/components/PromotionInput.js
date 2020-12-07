export default {
	data () {
		return {
			years: Array.from((function*(start, stop) {
			  for (var i = start; i < stop; i++) yield i;
			})(2000, (new Date()).getFullYear() + 3)),
			majors: ['MRI', 'STI', 'ERE']
		}
	},
	props: {
		value: {
			type: Object,
			required: true,
		}
	},
	template: `
		<div class="input-group">
			<select class="form-select" v-model="value.year">
				<option v-for="year in years" v-bind:value="year">{{year}}</option>
			</select>
			<select class="form-select" v-model="value.major">
				<option v-for="major in majors" v-bind:value="major">{{major}}</option>
			</select>
		</div>
	`
}