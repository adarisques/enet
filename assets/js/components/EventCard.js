export default {
	props: {
		event: {
			type: Object,
			required: true,
		}
	},
	computed: {
		image () {
			switch(this.event.type) {
				case 'afterwork': return '--ratio:16/9;--bg-image:url("/img/afterworks.jpg")';
				case 'mon-rex': return '--ratio:16/9;--bg-image:url("/img/mon-rex.jpg")';
				case 'noel': return '--ratio:16/9;--bg-image:url("/img/santa.jpg");background-position:top';
				default: return '';
			}
		},
		isPast () {
			var eventDate = new Date(this.event.date);
			var now = new Date();
			return (eventDate <= now) ? 'event-past' : '';
		},
		date () {
			var eventDate = new Date(this.event.date);
			var dateOptions = {weekday: "short", year: "numeric", month: "short", day: "numeric"};
			var timeOptions = {hour: "2-digit", minute: "2-digit"};
			return {
				"datetime": eventDate.toJSON(),
				"date": new Intl.DateTimeFormat("fr-FR", dateOptions).format(eventDate),
				"time": new Intl.DateTimeFormat("fr-FR", timeOptions).format(eventDate)
			}
		}
	},
	template: `
		<div class="event-card">
			<div class="card" v-bind:class="isPast">
				<div class="card-img-top"><div class="img" v-bind:style="image"></div></div>
				<div class="card-body">
					<h5 class="card-title">{{ event.title }}</h5>
					<h6 class="card-subtitle mb-2 text-black-50">
						<i class="text-muted fa fa-calendar-alt"></i> <time v-bind:datetime="date.datetime">{{ date.date }}</time>
						<i class="text-muted fa fa-clock ms-3"></i> {{ date.time }}
					</h6>
					<p class="card-text">{{ event.description }}</p>
					<a v-if="event.links" v-for="link in event.links" v-bind:key="link.href" v-bind:href="link.href" target="_blank" class="card-link">{{ link.text }}</a>
				</div>
			</div>
		</div>
	`
}