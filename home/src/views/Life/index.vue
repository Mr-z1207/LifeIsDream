<template>
	<div class="Life">
		<div class="timelineWrapper">
			<el-timeline>
				<TimeLineItem  v-for="(life, index) in Lifes" :key="index" :timestamp="life.timestamp" :title="life.title">
					<el-card>
						<span class="LifeContent">{{life.content}}</span>
						<span class="rmBtnWrapper">
							<el-button class="rmBtn" type="danger" icon="el-icon-close" circle @click="rmLife"></el-button>
						</span>
					</el-card>
				</TimeLineItem>
			</el-timeline>
		</div>
		<el-affix position="bottom" :offset="100" target=".Life">
			<el-button class="addBtn" type="primary" icon="el-icon-plus" circle @click="addLife"></el-button>
		</el-affix>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { GET_LIFEs, ADD_LIFEs, RM_LIFEs } from './store/types.js'

	import TimeLineItem from "components/TimeLineItem.vue"
	export default {
		name: 'Life',
		components: {
			TimeLineItem
		},
		data(){
			return {}
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
			},
			rmLife(){
				this.$store.dispatch(RM_LIFEs)
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
.el-affix{
	text-align: right;
}
.addBtn{
	margin-right: 40px;
	font-size: 40px;
}
.el-card{
	span{
		display: inline-block;
		vertical-align: middle;
	}
	.LifeContent{
		width: 85%;
		font-size: 14px;
	}
	.rmBtnWrapper{
		margin-left: 5%;
		.rmBtn{
			min-height: 0px;
			padding: 2px;
			font-size: 25px;
		}
	}
}
</style>
