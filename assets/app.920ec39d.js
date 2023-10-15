import { s as inBrowser, a3 as useUpdateHead, a4 as RouterSymbol, a5 as initData, a6 as dataSymbol, a7 as Content, a8 as ClientOnly, a9 as siteDataRef, aa as createSSRApp, ab as createRouter, ac as pathToFile, S as __vitePreload, d as defineComponent, u as useData, j as onMounted, y as watchEffect, ad as usePrefetch, ae as useCopyCode, af as useCodeGroups, ag as h } from "./chunks/framework.1082274c.js";
import { t as theme } from "./chunks/theme.5e61b6fc.js";
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        base.enhanceApp && await base.enhanceApp(ctx), theme2.enhanceApp && await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(theme), VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    return onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang, document.documentElement.dir = site.value.dir;
      });
    }), usePrefetch(), useCopyCode(), useCodeGroups(), Theme.setup && Theme.setup(), () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter(), app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  return app.provide(dataSymbol, data), app.component("Content", Content), app.component("ClientOnly", ClientOnly), Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  }), Theme.enhanceApp && await Theme.enhanceApp({
    app,
    router,
    siteData: siteDataRef
  }), { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser, initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path), pageModule = null;
    return pageFilePath && (isInitialPageLoad && (initialPath = pageFilePath), (isInitialPageLoad || initialPath === pageFilePath) && (pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js")), pageModule = __vitePreload(() => import(
      /*@vite-ignore*/
      pageFilePath
    ), [])), inBrowser && (isInitialPageLoad = !1), pageModule;
  }, Theme.NotFound);
}
inBrowser && createApp().then(({ app, router, data }) => {
  router.go().then(() => {
    useUpdateHead(router.route, data.site), app.mount("#app");
  });
});
export {
  createApp
};
