import { 
	ElButton,
	ElHeader,
	ElContainer,
	ElAside,
	ElMain,
	ElFooter
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
}
