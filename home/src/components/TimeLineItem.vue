<!--
 * 重新封装的自定义时间线item组件
 * Author: Mr1207
 * Date: 2021-03-27 23:59
 * LastEditors: Mr1207
 * LastEditTime: 2021-03-27 23:59
 -->
<template>
  <li class="el-timeline-item">
    <div class="el-timeline-item__tail"></div>

    <div v-if="!$slots.dot"
      class="el-timeline-item__node"
      :class="[
        `el-timeline-item__node--normal`,
        `el-timeline-item__node--${type || ''}`
      ]"
      :style="{
        backgroundColor: color
      }"
    >
      <i v-if="icon"
        class="el-timeline-item__icon"
        :class="icon"
      ></i>
    </div>
    <div v-if="$slots.dot" class="el-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="el-timeline-item__wrapper">
      <div v-if="!hideTimestamp && placement === 'top'"
        class="el-timeline-item__timestamp is-top">
        <span class="el-timeline-item__timestamp_span el-timeline-item__timestamp_span1">{{timestamp}}</span>
        <span class="el-timeline-item__timestamp_span el-timeline-item__timestamp_span2">{{title}}</span>
      </div>

      <div class="el-timeline-item__content">
        <slot></slot>
      </div>

      <div v-if="!hideTimestamp && placement === 'bottom'"
        class="el-timeline-item__timestamp is-bottom">
        {{timestamp}}
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'ElTimelineItem',

    inject: ['timeline'],

    props: {
      timestamp: String,

      title: String,

      hideTimestamp: {
        type: Boolean,
        default: false
      },

      placement: {
        type: String,
        default: 'top'
      },

      type: String,

      color: String,

      icon: String
    }
  };
</script>

<style lang='less' scoped>
.el-timeline-item__tail{
  border-left-width: 4px;
  left: 135px;
}
.el-timeline-item__node{
  width: 24px;
  height: 24px;
  left: 125px;
}
.el-timeline-item__wrapper{
  padding-left: 0;
}
.el-timeline-item__timestamp_span{
  position: absolute;
  top: 5px;
  font-size: 20px;
  font-weight: bold;
}
.el-timeline-item__timestamp_span1{
  left: -35px;
}
.el-timeline-item__timestamp_span2{
  left: 165px;
}
.el-timeline-item__timestamp.is-top{
  margin-bottom: 30px;
}
.el-timeline-item__content{
  margin-left: 158px;
}
</style>