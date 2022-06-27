import "./public-path";
import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

let instance: Vue.App<Element>;

// 需要定义该接口，否则`/src/router/index.ts`无法使用`Window.__POWERED_BY_QIANKUN__`
declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: string;
  }
}

interface IRenderProps {
  container: Element | string;
}

function render(props: IRenderProps) {
  const { container } = props;
  instance = createApp(App);
  instance
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount(
      container instanceof Element
        ? (container.querySelector("#app") as Element)
        : (container as string)
    );
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: "#app" });
}
//暴露主应用生命周期钩子
export async function bootstrap() {
  console.log("subapp bootstraped");
}

export async function mount(props: any) {
  console.log("mount subapp");
  render(props);
}

export async function unmount() {
  console.log("unmount college app");
  instance.unmount();
}
