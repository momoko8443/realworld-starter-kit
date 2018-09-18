import * as Ukulele from 'ukulelejs';
import * as UkuRouter from 'uku-routejs';

var Ukulelejs = Ukulele.Ukulele;
var uku = new Ukulelejs();
uku.registerComponent('my-footer','./components/footer.html');
uku.registerComponent('my-navigator', './components/navigator.html');
uku.registerComponent('home-view', './components/home-view.html');
uku.registerComponent('tags-view', './components/tags-view.html');
uku.registerComponent('article-item', './components/article-item.html');
uku.registerComponent('login-form', './components/login-form.html');
uku.registerComponent('register-form', './components/register-form.html');
uku.init();

uku.addListener(Ukulelejs.INITIALIZED, (e)=> {
    route.work();
    // route.onRouteChange = function(page){
    //     uku.handleElement(page.page);
    // }
});

uku.addListener(Ukulelejs.HANDLE_ELEMENT_COMPLETED, (e)=> {
    console.log(e);
});

var route = new UkuRouter.UkuRouter('viewContainer')
    .default('#/', './pages/home.html', routeHomeHandler)
    .when('#/login', './pages/login.html', routeLoginHandler)
    .when('#/register', './pages/register.html', routeRegisterHandler)
    .when('#/settings', './pages/settings.html', routeSettingsHandler)
    .when('#/editor', './pages/edit_article.html', routeCreateArticleHandler)
    .when('#/editor/:articleId', './pages/edit_article.html', routeEditArticleHandler)
    .when('#/article/:articleId', './pages/view_article.html', reouteViewArticleHandler)
    .when('#/profile/:username', './pages/profile.html' , routeUserProfileHandler)
    .when('#/profile/:username/favorites', './pages/profile.html',routeUserProfileHandler)
    .otherwise("pages/404.html");

function routeHomeHandler(page){
    uku.handleElement(page.page);
}
function routeLoginHandler(pages){
    uku.handleElement(page.page);
}
function routeRegisterHandler(pages){
    uku.handleElement(page.page);
}
function routeSettingsHandler(pages){
    uku.handleElement(page.page);
}
function routeCreateArticleHandler(pages){
    uku.handleElement(page.page);
}
function routeEditArticleHandler(pages,params){
    uku.handleElement(page.page);
}
function reouteViewArticleHandler(pages,params){
    uku.handleElement(page.page);
}

function routeUserProfileHandler(page, username){
    uku.handleElement(page.page);
    if(username){
        console.log(username);
    }
}
