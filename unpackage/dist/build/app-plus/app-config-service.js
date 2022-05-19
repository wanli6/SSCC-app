
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/in","pages/shouye/shouye","pages/community/community","pages/shop/shop","pages/user/user","pages/dengluzhuce/download","pages/dengluzhuce/register","pages/shouye/xueya","pages/community/chat","pages/community/chat","pages/community/chat","pages/community/chat","pages/shouye/xuetang","pages/user/set","pages/user/personal","pages/user/question","pages/community/chat","pages/user/vip","pages/user/collect","pages/shop/goodsDetail","pages/shop/smartDevice","pages/user/myorder"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7a7e83","selectedColor":"#FFD305","backgroundColor":"#ffffff","borderStyle":"block","list":[{"pagePath":"pages/shouye/shouye","text":"健康主页","iconPath":"static/home.jpg","selectedIconPath":"static/home.jpg"},{"pagePath":"pages/community/community","text":"社区","iconPath":"static/tab_icon_4.png","selectedIconPath":"static/tab_icon_3.png"},{"pagePath":"pages/shop/shop","text":"商城","iconPath":"static/tab_icon_7.png","selectedIconPath":"static/tab_icon_6.png"},{"pagePath":"pages/user/user","text":"个人主页","iconPath":"static/tab_icon_9.png","selectedIconPath":"static/tab_icon_8.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"寿寿长春","compilerVersion":"3.4.9","entryPagePath":"pages/in","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/in","meta":{"isQuit":true},"window":{"navigationStyle":"custom","navigationBarTitleText":"进入界面"}},{"path":"/pages/shouye/shouye","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationStyle":"custom"}},{"path":"/pages/community/community","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"社区","navigationStyle":"custom"}},{"path":"/pages/shop/shop","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商城","navigationStyle":"custom"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","navigationStyle":"custom"}},{"path":"/pages/dengluzhuce/download","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"登陆界面"}},{"path":"/pages/dengluzhuce/register","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"注册界面"}},{"path":"/pages/shouye/xueya","meta":{},"window":{"navigationBarTitleText":"血压详情"}},{"path":"/pages/community/chat","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"消息","enablePullDownRefresh":false}},{"path":"/pages/shouye/xuetang","meta":{},"window":{"navigationBarTitleText":"血糖详情"}},{"path":"/pages/user/set","meta":{},"window":{"navigationBarTitleText":"基础设置"}},{"path":"/pages/user/personal","meta":{},"window":{"navigationBarTitleText":"个人资料"}},{"path":"/pages/user/question","meta":{},"window":{"navigationBarTitleText":"每日问答"}},{"path":"/pages/user/vip","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"会员服务","enablePullDownRefresh":false}},{"path":"/pages/user/collect","meta":{},"window":{"navigationBarTitleText":"个人收藏","enablePullDownRefresh":false}},{"path":"/pages/shop/goodsDetail","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false}},{"path":"/pages/shop/smartDevice","meta":{},"window":{"navigationBarTitleText":"智能设备","enablePullDownRefresh":false}},{"path":"/pages/user/myorder","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"个人订单","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
