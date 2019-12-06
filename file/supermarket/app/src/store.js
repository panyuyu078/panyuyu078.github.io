import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 5个
var state={

//相当于data存放变量
	a:10,
	arr:[{
		uid:1,
		name:'女士新款单肩背提包1',
		type:'包包',
		price:'2300',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvMGRmMDdmN2YzMzM3NDQwMDczN2M5YTBkYmZmYzllYTQtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvZmNmZWNjODRjYzBhMTBkMWM1ZDY0MTVkYTNkZjNkYjUtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
	},{
		uid:2,
		name:'女款简约单肩小圆包',
		type:'包包',
		price:'1700',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvYjA0NDc5Y2M3ZGY4NGU3NzQzYTU5NDc0NGEyOWRiNDgtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvZjM3ZGJkNTY2ODA0NGVlY2Y3NzNmMzk4N2NhMGNkNzItMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
	},{
		uid:3,
		name:'女士新款单肩背提包',
		type:'包包',
		price:'1500',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvOTVhZWVlZGJjMzU0MTE0ZmI3ZDk0ZmUyMmZlN2JkMTktMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvYzVmMmUyYWVkMDliNDE0YmZkNzgzODZjMjg3MmVmZTItMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
	},{
		uid:4,
		name:'女士新款大容量手提包',
		type:'包包',
		price:'2500',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cDovLzVkMTQ1NjZiMDQ0ZDIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS80MmQzYjRmNWM3ZTcyMjRjZTA5ZDJiZTFjODdhNWUzMS0xMDAweDEzMzMuanBn.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNzgzN2Y2OTBkYzc0MTFhMDA2NzllNzJiMDhjOWJjNmUtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
	},{
		uid:5,
		name:'女士新款简约手拿包',
		type:'包包',
		price:'2500',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvMzI3MWJjY2E5OGY3Nzc5NDI4MjQ0MTYwODUzNjAyOGMtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNjg3NmUxOGQzYTllOTA2YTE4NWI2NjQ1MjdjMjk3ZGQtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
	},{
		uid:6,
		name:'女士新款漆面手拿包',
		type:'包包',
		price:'4500',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvZmFmYjRlYThjNWFjNDQwOGJmNmZmNGRlYWQzZGJkY2EtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNGIxMGE4OTU4MTE5OTZjNmY2NTdjMDc3NTllOTEyOTYtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
	},{
		uid:7,
		name:'女士新款软皮长款票夹',
		type:'配饰',
		price:'4500',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cDovLzVkMTQ1NjZiMDQ0ZDIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9kNTdiMzcyMWYyMDRhM2M4YzJmYzBjNTkyMDA0NTE1ZS0xMDAweDEzMzMuanBn.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cDovLzVkMTQ1NjZiMDQ0ZDIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS83MzNjM2YyM2Q0NmVlOTMxMzc3OGZkM2M4NGUxYTU1Yi0xMDAweDEzMzMuanBn.jpg']
	},{
		uid:8,
		name:'女士新款短款票夹卡包',
		type:'配饰',
		price:'2500',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cDovLzVkMTQ1NjZiMDQ0ZDIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9mNDdmOGZiYjA1MTFjYTg4M2I0NTAxYjk4MzY3ZGJkOS0xMDAweDEzMzMuanBn.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cDovLzVkMTQ1NjZiMDQ0ZDIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS8zZTNiMmE3YmYwODk3OThkYmZiYTc4NDQxYWM2NzM3NC0xMDAweDEzMzMuanBn.jpg']
	},{
		uid:9,
		name:'女士新款撞色牛皮腰带',
		type:'配饰',
		price:'2300',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvZTM5OTg1NTNjZWQyMTUzZjhmZjNhMWQ1NGU3OWJlMWEtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvMDU3MTIxMzlhMjQ1MWVmYzg2MGQ0MzRkOWRkZTIwMGQtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
	},{
		uid:10,
		name:'女款LOGO牛皮革皮带',
		type:'配饰',
		price:'3000',
		img:['https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNWI3NjExOWQ1OTA0NDU3MGMyZjI0YzFmYjBmYzQxYTQtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvOTZmMjUxMmQ4MmI4N2U0NGU5ZjAyYTQ4MDBhZjc2MWYtMTAwMHgxMzMzLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
	}]
		
	
}
var getters={
	a(){
		var a=10
		var b=22
		return a+b
	}
	//相当于计算属性
}
var mutations={

	// 这个属性只能更改state 里的东西
	p_btn(state){
		console.log(state.a++)
	},
	aa(state,aa){
		console.log(aa,'aaaaaaaaaaaaaaa')
		state.a=state.a+aa
//		console.log(aa,'eeeeeeeeeeeeeeeeee')
alert('ss')
	}
}
var actions={
	//事件
	btn({commit}){
		commit('p_btn')
	},
	aa({commit}){
		commit('aa')
	}
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
