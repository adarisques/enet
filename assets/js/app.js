import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'
import VueRouter from 'https://cdn.jsdelivr.net/npm/vue-router@3.4.9/dist/vue-router.esm.browser.min.js'

Vue.use(VueRouter)

const TODO = { template: `<div class="text-center"><h1 class="d-inline px-3 border rounded bg-warning">TODO !</h1></div>` }

import AccountMain from 'js/components/AccountMain.js'
import AlumniMain from 'js/components/AlumniMain.js'
import EventsMain from 'js/components/EventsMain.js'
import PromotionInput from 'js/components/PromotionInput.js'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
	{ path: '/', redirect: '/mon-compte' },
	{ path: '/mon-compte', component: AccountMain },
	{ path: '/ada', component: TODO },
	{ path: '/annuaire', component: AlumniMain },
	{ path: '/emplois', component: TODO },
	{ path: '/evenements', component: EventsMain },
	
	// Gestion des membres
	{ path: '/alumni/validation', component: TODO },
	{ path: '/alumni/adhesion', component: TODO },
	
	// Gestion du CA
	{ path: '/ca/membres', component: TODO },
	{ path: '/ca/roles', component: TODO },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
	linkExactActiveClass: 'active',
	routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
window.addEventListener('load', function() {
	const app = new Vue({
		router
	}).$mount('#kanzan-app')

	const auth = new Vue({
		components: { PromotionInput },
		data () {
			return {
				promotion: { year: 2010, major: 'MRI' }
			}
		}
	}).$mount('#kanzan-signon')
})
