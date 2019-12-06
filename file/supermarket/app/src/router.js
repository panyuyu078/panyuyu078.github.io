import Vue from 'vue'
import Router from 'vue-router'
import no1 from './no1.vue'
import no2 from './no2.vue'
import no3 from './no3.vue'
import no4 from './no4.vue'
import no5 from './no5.vue'
import no6 from './no6.vue'
import no1_1 from './no1child/no1_1.vue'
import no2_1 from './no2child/no2_1.vue'

Vue.use(Router)

var routes = [{
	path:'/',
	name:'index',
	component:no1,
	
},
{
	path:'/no7/:name',
	name:'index7',
	component:no1_1
},
{
	path:'/no2',
	name:'index2',
	component:no2,
	children:[
	{
		path:':type',component:no2_1
	}
	]
},{
	path:'/no3',
	name:'index3',
	component:no3
},{
	path:'/no4',
	name:'index4',
	component:no4
},{
	path:'/no5',
	name:'index5',
	component:no5
},{
	path:'/no6',
	name:'index6',
	component:no6
},]
export default new Router({
	routes
})