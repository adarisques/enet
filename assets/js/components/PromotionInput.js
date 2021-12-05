export default {
	data () {
		return {
			years: Array.from((function*(start, stop) {
			  for (var i = start; i < stop; i++) yield i;
			})(2000, (new Date()).getFullYear() + 3)),
			majors: ['MRI', 'STI', 'ERE']
		}
	},
	emits: ['update:modelValue'],
	props: {
		modelValue: {
			type: Object,
			validator(value) {
				return value.hasOwnProperty('year') && value.hasOwnProperty('major')
			}
		},
	},
	computed: {
		year: {
			get() {
				return this.modelValue.year
			},
			set(value) {
				this.$emit('update:modelValue', { year: value, major: this.modelValue.major })
			}
		},
		major: {
			get() {
				return this.modelValue.major
			},
			set(value) {
				this.$emit('update:modelValue', { year: this.modelValue.year, major: value })
			}
		}
	},
	template: `
		<div class="input-group">
			<select class="form-select" v-model="year">
				<option v-for="val in years" v-bind:value="val">{{val}}</option>
			</select>
			<select class="form-select" v-model="major">
				<option v-for="val in majors" v-bind:value="val">{{val}}</option>
			</select>
		</div>
	`
}