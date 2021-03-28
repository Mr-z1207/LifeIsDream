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
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { GET_LIFEs } from './store/types.js'

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
