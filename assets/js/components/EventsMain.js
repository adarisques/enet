import EventCard from 'js/components/EventCard.js'

export default {
	components: {
		EventCard
	},
	data () {
		return {
			events: null
		}
	},
	created () {
		axios
			.get('/api/events.json')
			.then(response => (this.events = response.data.sort(
				(a,b) => (a.date > b.date)
			)))
	},
	template: `
		<main>
			<section class="mb-4" id="kanzan-evenements">
				<div class="row row-cols-2" id="events-list">
					<event-card class="col mb-4" v-for="event in events" v-bind:key="event.date" v-bind:event="event"></event-card>
				</div>
			</section>
		</main>
	`
}
