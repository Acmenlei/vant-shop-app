import { App } from 'vue';
// import "vant/lib/index.css"
import {
    Form, Field, CellGroup, Button, Tabbar, TabbarItem, NavBar, Swipe, SwipeItem, Grid, GridItem, Icon,
    Image, Search, Col, Row, Sticky
}
    from "vant"

const components = [
    Form, Field, CellGroup, Button, Tabbar, TabbarItem, NavBar, Swipe, SwipeItem, Grid, GridItem, Icon,
    Image, Search, Col, Row, Sticky
]

function componentRegister(Vue: App) {
    components.forEach(component => {
        Vue.use(component);
    })
}

export default {
    install: (Vue: App) => {
        componentRegister(Vue);
    }
}