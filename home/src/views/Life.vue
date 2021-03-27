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
						<p>王小虎 提交于 2018/4/2 20:46</p>
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
					timestamp: "2018/4/12",
				},
				{
					title: "叫爸爸",
					timestamp: "2018/4/18",
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
