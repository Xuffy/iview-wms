import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
// import './assets/style/theme.less';
import './assets/style/main.less';

Vue.use(iView);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
