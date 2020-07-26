window.addEventListener('load', function() {
    new Vue({
        el: '#kanzan-annuaire',
        data: {
            promotion: defaultPromotion,
            alumni: null
        },
        mounted () {
            axios
              .get('/api/alumni.json')
              .then(response => (this.alumni = response.data))
        }
    });
});
