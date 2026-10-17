import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Work from '@/pages/Work'

export const Routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'work',
        component: Work
    }

]