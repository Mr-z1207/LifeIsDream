import { 
	ElButton,
	ElHeader,
	ElContainer,
	ElAside,
	ElMain,
	ElFooter,
	ElAffix,
	ElTimeline,
	ElTimelineItem,
	ElCard
  } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  locale.use(lang)
  app.use(ElButton)
  app.use(ElHeader)
  app.use(ElContainer)
  app.use(ElAside)
  app.use(ElMain)
  app.use(ElFooter)
  app.use(ElAffix)
  app.use(ElTimeline)
  app.use(ElTimelineItem)
  app.use(ElCard)
}
