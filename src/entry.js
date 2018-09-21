import * as Ukulele from 'ukulelejs';
import * as UkuRouter from 'uku-routejs';

var Ukulelejs = Ukulele.Ukulele;
var uku = new Ukulelejs();
uku.registerController('appCtrl', new ApplicationController(uku));
uku.registerComponent('my-footer','./components/footer.html');
uku.registerComponent('my-navigator', './components/navigator.html');
uku.registerComponent('home-view', './components/home-view.html');
uku.registerComponent('tags-view', './components/tags-view.html');
uku.registerComponent('article-item', './components/article/article-item.html');
uku.registerComponent('login-form', './components/login-form.html');
uku.registerComponent('register-form', './components/register-form.html');
uku.registerComponent('article-detail', './components/article/article-detail.html');
uku.registerComponent('article-banner', './components/article/article-banner.html');
uku.registerComponent('comment-form', './components/comment/comment-form.html');
uku.registerComponent('comment-item', './components/comment/comment-item.html');
uku.init();

uku.addListener(Ukulelejs.INITIALIZED, (e)=> {
    route.work();
});

uku.addListener(Ukulelejs.HANDLE_ELEMENT_COMPLETED, (e)=> {
    console.log(e);
});
var loginUser;
var route = new UkuRouter.UkuRouter('viewContainer')
    .default('#/', './pages/home.html', routeHomeHandler)
    .when('#/login', './pages/login.html', routeLoginHandler)
    .when('#/register', './pages/register.html', routeRegisterHandler)
    .when('#/settings', './pages/settings.html', routeSettingsHandler)
    .when('#/editor', './pages/edit_article.html', routeCreateArticleHandler)
    .when('#/editor/:articleId', './pages/edit_article.html', routeEditArticleHandler)
    .when('#/article/:articleId', './pages/view_article.html', reouteArticleDetailHandler)
    .when('#/profile/:username', './pages/profile.html' , routeUserProfileHandler)
    .when('#/profile/:username/favorites', './pages/profile.html',routeUserProfileHandler)
    .otherwise("pages/404.html");

function ApplicationController(uku){
    let self = this;
    this.islogin = false;
    this.onLoginSuccess = function(e){
        self.islogin = true;
        route.goto('#/');
    };
}

function routeHomeHandler(page){
    uku.handleElement(page.page, function(){
        var homeView = uku.getComponentController('homeView');;
        homeView.init();
    });
}
function routeLoginHandler(page){
    uku.handleElement(page.page);
}
function routeRegisterHandler(page){
    uku.handleElement(page.page);
}
function routeSettingsHandler(page){
    uku.handleElement(page.page);
}
function routeCreateArticleHandler(page){
    uku.handleElement(page.page);
}
function routeEditArticleHandler(page,params){
    uku.handleElement(page.page);
}
function reouteArticleDetailHandler(page,params){
    var articleId = params[0];
    uku.handleElement(page.page, function(){
        var articleDetail = uku.getComponentController('articleDetail');;
        articleDetail.init(articleId);
    });
}

function routeUserProfileHandler(page, username){
    uku.handleElement(page.page);
    if(username){
        console.log(username);
    }
}
