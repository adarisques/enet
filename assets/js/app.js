import AccountMain from './components/AccountMain.js'
import AlumniDirectory from './components/AlumniDirectory.js'
import EventsMain from './components/EventsMain.js'

const TODO = { template: `<div class="text-center"><h1 class="d-inline px-3 border rounded bg-warning">TODO !</h1></div>` }

const DEFAULT_TITLE = document.title;
const router = VueRouter.createRouter({
	linkExactActiveClass: 'active',
	history: VueRouter.createWebHashHistory(),
	routes: [
		{ path: '/', redirect: '/mon-compte' },
		{ path: '/mon-compte', meta: {title: "Mon compte"}, component: AccountMain },
		{ path: '/ada', meta: {title: "L'AdA"}, component: TODO },
		{ path: '/annuaire', meta: {title: "Annuaire"}, component: AlumniDirectory },
		{ path: '/emplois', meta: {title: "Emplois"}, component: TODO },
		{ path: '/evenements', meta: {title: "Evenements"}, component: EventsMain },
		
		// Gestion des membres
		{ path: '/alumni/validation', meta: {title: "Valider des membres"}, component: TODO },
		{ path: '/alumni/adhesion', meta: {title: "Adhésions"}, component: TODO },
		
		// Gestion du CA
		{ path: '/ca/membres', meta: {title: "Membres du CA"}, component: TODO },
		{ path: '/ca/roles', meta: {title: "Rôles au CA"}, component: TODO },
	]
})
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = (to.meta.title) ? (DEFAULT_TITLE + ' · ' + to.meta.title) : DEFAULT_TITLE;
    });
})

window.addEventListener('load', function() {
	const app = Vue.createApp({})
	app.use(router)
	app.mount('#kanzan-app')
})
