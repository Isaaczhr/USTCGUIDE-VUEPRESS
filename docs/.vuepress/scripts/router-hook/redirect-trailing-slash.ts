import { Router } from 'vue-router'

export function setupRedirectTrailingSlash(router: Router) {
  router.beforeEach((to, _from, next) => {
    if (!to.path.endsWith('/')) {
      next({ path: to.path + '/', replace: true })
    } else {
      next()
    }
  })
}