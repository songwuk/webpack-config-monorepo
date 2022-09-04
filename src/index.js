document.body.innerHTML = '@songwuk/webpack-config-monorepo';

import('./test.txt').then(module => {
  console.log(module.default);
})
