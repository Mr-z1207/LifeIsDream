<template>
	<div class="Life">
		<div class="timelineWrapper">
			<el-timeline>
				<TimeLineItem  v-for="(life) in Lifes" :key="life._id" :timestamp="life.timestamp" :title="life.title">
					<el-card>
						<span class="LifeContent">{{life.content}}</span>
						<span class="rmBtnWrapper">
							<el-button class="rmBtn" type="danger" icon="el-icon-close" circle @click="rmLife(life._id)"></el-button>
						</span>
					</el-card>
				</TimeLineItem>
			</el-timeline>
		</div>

		<el-affix position="bottom" :offset="100" target=".Life">
			<el-button class="addBtn" type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true"></el-button>
		</el-affix>

		<el-dialog title="记事" v-model="dialogFormVisible" center>
			<el-form :model="form" status-icon :rules="rules" ref="LifeForm">
				<el-form-item label="名称" :label-width="formLabelWidth" prop="title">
					<el-input v-model="form.title" autocomplete="off" placeholder="这天发生了什么？" maxlength="15" show-word-limit clearable></el-input>
				</el-form-item>
				<el-form-item label="时间" :label-width="formLabelWidth" prop="timestamp">
					<el-date-picker v-model="form.timestamp" type="date" placeholder="选择日期"></el-date-picker>
				</el-form-item>
				<el-form-item label="内容" :label-width="formLabelWidth" prop="content">
					<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.content"></el-input>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="cancel('LifeForm')">取 消</el-button>
					<el-button type="primary" @click="onSubmit('LifeForm')">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script>
	import moment from 'moment'
	import { mapGetters } from 'vuex'
	import { GET_LIFEs, ADD_LIFEs, RM_LIFEs } from './store/types.js'

	import TimeLineItem from "components/TimeLineItem.vue"
	export default {
		name: 'Life',
		components: {
			TimeLineItem
		},
		data(){
			return {
				dialogFormVisible: false,
				formLabelWidth: '120px',
				form: {
					title: '',
					timestamp: '',
					content: ''
				},
				rules: {
					title: [
						{ required: true, message: '请输入名称', trigger: 'blur' }
					],
					content: [
						// { required: true, message: '请输入内容', trigger: 'blur' }
					],
					timestamp: [
						{ required: true, message: '请选择时间', trigger: 'blur' }
					],
				}
			}
		},
		mounted(){
			this.$store.dispatch(GET_LIFEs)
		},
		methods: {
			onSubmit(formName){
				this.$refs[formName].validate(value=>{
					if(value){
						this.form.timestamp = moment(this.form.timestamp).valueOf()
						this.addLife(this.form)
						this.$refs[formName].resetFields()
						this.dialogFormVisible = false
					}else{
						return false;
					}
				})
			},
			cancel(formName){
				this.$refs[formName].resetFields()
				this.dialogFormVisible = false
			},
			addLife(newLife){
				this.$store.dispatch(ADD_LIFEs, newLife)
			},
			// 删除lifes
			rmLife(id){
				this.$store.dispatch(RM_LIFEs, id)
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
	position: absolute;
	width: 0px;
	right: 150px;
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
		visibility: hidden;

		.rmBtn{
			min-height: 0px;
			padding: 2px;
			font-size: 25px;
		}
	}

	&:hover{
		.rmBtnWrapper{
			visibility: visible;
		}
	}
}
.el-form-item{
	padding: 0 50px;
}
</style>
