window.addEventListener('load', function() {
    new Vue({
        el: '#kanzan-evenements',
        data: {
            events: null
        },
        mounted () {
            axios
              .get('/api/events.json')
              .then(response => (this.events = response.data.sort(
                  (a,b) => (a.date > b.date)
              )))
        }
    });
});
