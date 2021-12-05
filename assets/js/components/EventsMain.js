import EventCard from './EventCard.js'

export default {
	components: {
		EventCard
	},
	data () {
		return {
			events: null,
			masonry: null
		}
	},
	created () {
		axios
			.get('/api/events.json')
			.then(response => (this.events = response.data.sort(
				(a,b) => (a.date < b.date)
			)))
	},
	updated () {
		if (this.masonry === null) {
			this.masonry = new Masonry( '.events-list', {
				"percentPosition": true,
				"itemSelector": ".event-card"
			});
		} else {
			this.masonry.layout();
		}
	},
	template: `
		<main>
			<section>
				<div class="row row-cols-1 row-cols-sm-2 events-list">
					<event-card class="col" v-for="event in events" v-bind:key="event.date" v-bind:event="event"></event-card>
				</div>
			</section>
		</main>
	`
}
