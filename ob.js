import { render } from "./test.vue?vue&type=template&id=31f78525"
const script = {}

import exportComponent from "C:\\Users\\songwen\\Desktop\\bangdaocode\\webpack-config-monorepo\\node_modules\\.pnpm\\vue-loader@17.0.0_webpack@4.46.0\\node_modules\\vue-loader\\dist\\exportHelper.js"       
const __exports__ = /*#__PURE__*/exportComponent(script, [['render',render],['__file',"example/test.vue"]])
/* hot reload */
if (module.hot) {
  __exports__.__hmrId = "31f78525"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('31f78525', __exports__)) {
    api.reload('31f78525', __exports__)
  }

  module.hot.accept("./test.vue?vue&type=template&id=31f78525", () => {
    api.rerender('31f78525', render)
  })

}
