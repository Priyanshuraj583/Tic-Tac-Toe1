
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Tic-Tac-Toe/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Tic-Tac-Toe"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 694, hash: '001066f6ef126799e9d7f0046d35f7f54773031ee40f99738ec03b352735ec81', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: '210985240c54a518653e4abe7e14571012f71a2ee5e010cc08996d88fd53b2e8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3135, hash: '0f524da4198da3aac41566a3cb049d2e02ded1a09bfc0d3ee95ae28ff0233513', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OSANY6X3.css': {size: 69, hash: 'I6N7siK1zW0', text: () => import('./assets-chunks/styles-OSANY6X3_css.mjs').then(m => m.default)}
  },
};
