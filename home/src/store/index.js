import { createStore } from 'vuex'

import Home from 'views/Home/store'
import Life from 'views/Life/store'
import Mood from 'views/Mood/store'
import Blog from 'views/Blog/store'

export default createStore({
  modules: {
  	Home,
  	Life,
  	Mood,
  	Blog
  }
})
