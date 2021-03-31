<template>
	<div class="Life">
		<div class="timelineWrapper">
			<el-timeline>
				<TimeLineItem  v-for="(life, index) in Lifes"
					:key="index"
					:timestamp="life.timestamp"
					:title="life.title"
				>
					<el-card>
						<p>{{life.content}}</p>
					</el-card>
				</TimeLineItem>
			</el-timeline>
		</div>
		<el-button type="primary" icon="el-icon-edit" circle @click="addLife"></el-button>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { GET_LIFEs, ADD_LIFEs } from './store/types.js'

	import TimeLineItem from "components/TimeLineItem.vue"
	export default {
		name: 'Life',
		components: {
			TimeLineItem
		},
		data(){
			return {  }
		},
		mounted(){
			this.$store.dispatch(GET_LIFEs)
		},
		methods: {
			addLife(){
				this.$store.dispatch(ADD_LIFEs, {
					title: '上班',
					content: '挣钱啦~~',
					timestamp: '2020年7月10日',
				})
			}
		},
		computed:{
			...mapGetters([
				'Lifes',
			])
		}
	}
</script>

<style scoped lang="less">
.timelineWrapper{
	margin: 0 auto;
	width: 65%;
	text-align: left;
}
	
</style>
