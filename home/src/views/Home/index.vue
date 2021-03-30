<template>
	<div class="Home">
		<h4>Home</h4>
		<el-button type="primary" icon="el-icon-edit" circle @click="singUp"></el-button>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { SINGUP } from './store/types.js'
	
	export default {
		name: 'Home',
		components: {
			
		},
		methods: {
			singUp(){
				this.$store.dispatch(SINGUP, {
					username: '1207',
					password: '123',
					phone: '13298448865'
				})
			}
		},
		computed:{
			...mapGetters([
        // 'Lifes',
        ])
		}
	}
</script>
