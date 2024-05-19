export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/user' || to.path === '/user/') {
    return navigateTo('/user/list');
  }
});
