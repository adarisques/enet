Vue.component('EventCard', {
    props: {
        event: {
            type: Object,
            required: true,
        }
    },
    computed: {
        image: function () {
            switch(this.event.type) {
                case 'afterwork': return '--aspect-ratio:16/9;background-image:url("/img/afterworks.jpg")';
                case 'mon-rex': return '--aspect-ratio:16/9;background-image:url("/img/mon-rex.jpg")';
                case 'noel': return '--aspect-ratio:16/9;background-position:top;background-image:url("/img/santa.jpg")';
                default: return '';
            }
        },
        date: function () {
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
        <div>
            <div class="card event-card">
                <div class="card-img-top" v-bind:style="image" alt="Afterwork"></div>
                <div class="card-body">
                    <h5 class="card-title">{{ event.title }}</h5>
                    <h6 class="card-subtitle mb-2 text-black-50">
                        <i class="text-primary fa fa-calendar-alt"></i> <time v-bind:datetime="date.datetime">{{ date.date }}</time>
                        <i class="text-primary fa fa-clock"></i> {{ date.time }}
                    </h6>
                    <p class="card-text">{{ event.description }}</p>
                    <a v-if="event.links" v-for="link in event.links" v-bind:key="link.href" v-bind:href="link.href" target="_blank" class="card-link">{{ link.text }}</a>
                </div>
            </div>
        </div>
    `
})
