window.addEventListener('load', function() {
    new Vue({
        el: '#kanzan-account',
        data: {
            alumni: {
                "avatar": null,
                "surname": null,
                "lastname": null,
                "promotion": {
                    "year": null,
                    "major": null
                }
            }
        },
        mounted () {
            axios
              .get('/api/account.json')
              .then(response => (this.alumni = response.data))
        }
    });
});
