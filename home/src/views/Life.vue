<template>
	<div class="Life">
		<div class="timelineWrapper">
			<el-timeline>
				<TimeLineItem  v-for="(life, index) in lifes"
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
	import TimeLineItem from "components/TimeLineItem.vue"
	export default {
		name: 'Life',
		components: {
			TimeLineItem
		},
		data(){
			return {
				lifes: [
				{
					title: "出生",
					timestamp: "1998/6/5",
					content: "第一眼见到这个世界，会是什么养的心情呢？"
				},
				{
					title: "上小学",
					timestamp: "2006/9/1",
					content: "开学啦，不知道会不会交到好朋友？"
				}
				]
			}
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
