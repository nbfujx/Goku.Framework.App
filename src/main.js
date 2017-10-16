import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './pages/Index.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'
import New from './components/New.vue'
import Scan from './components/Scan.vue'

// Routes
const routes = {
    '/index': {
        component: Index,
        subRoutes: {
            '/home': {
                component: Home
            },
            '/about': {
                component: About
            }
        }
    },
    '/New': {
        component: New
    },
    '/Scan': {
        component: Scan
    }
}

Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/index/home'})



