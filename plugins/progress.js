import NProgress from 'nprogress';
import Vue from 'vue';

const pageTemp = {
  template: `
	<div id="progressbar" class="progressing" style="background-color: #212529">
		<div class="bar" role="bar">
			<div class="peg"></div>
		</div>
		<div class="particlesdiv">
		<div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
		</div>
	</div>
	`
}

const loadTemp = {
  template: `
	<div id="progressbar">
		<div class="bar" role="bar">
			<div class="peg"></div>
		</div>
	</div>
	`
}

Vue.use({
  install: function(Vue, options) {
    Vue.prototype.$load = {
      start(state) {
        if (!state || state === "load") {
          NProgress.configure(loadTemp)
        } else if (state === "page") {
          NProgress.configure(pageTemp)
        }
        NProgress.start()
      },
      done() {
        NProgress.done()
      }
    }
  }
})