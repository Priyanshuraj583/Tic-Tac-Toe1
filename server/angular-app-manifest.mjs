
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Tic-Tac-Toe1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Tic-Tac-Toe1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 695, hash: '777fa5891ba9f470a1eb3716e04f139aa33ad185f1e5bcd01bb560ae43052184', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: 'c47d9b8844f1b51338f8ac09862afae258283f2887d86f68015f6191f95b15ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3136, hash: '3bf923bdb60a7ba6a0d80cb8d06f86a6e1ddc7c9234f06ac488526004580b962', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OSANY6X3.css': {size: 69, hash: 'I6N7siK1zW0', text: () => import('./assets-chunks/styles-OSANY6X3_css.mjs').then(m => m.default)}
  },
};
