 // 跳转登录
export function doLogin(){
      window.location.href = '#/login?redirect=' + encodeURIComponent(window.location.hash);
}