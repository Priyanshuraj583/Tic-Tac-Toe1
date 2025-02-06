
export default {
  basePath: '/Tic-Tac-Toe1',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
