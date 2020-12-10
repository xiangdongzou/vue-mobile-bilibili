import Vue from 'vue'
import { Field, CellGroup, Cell, Icon, Button, Form, ActionSheet, Toast } from 'vant'

Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Field)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Form)
Vue.use(ActionSheet)
Vue.use(Toast)
Vue.prototype.$msg = Toast
