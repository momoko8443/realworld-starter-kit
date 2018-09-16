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
    route.onRouteChange = function(page){
        uku.handleElement(page.page);
    }
})

var route = new UkuRouter.UkuRouter('viewContainer')
    .default('#/', './pages/home.html')
    .when('#/login', './pages/login.html')
    .when('#/register', './pages/register.html')
    .when('#/settings', './pages/settings.html')
    .when('#/editor', './pages/edit_article.html')
    .when('#/editor/:articleId', './pages/edit_article.html')
    .when('#/article/:articleId', './pages/view_article.html')
    .when('#/profile/:username', './pages/profile.html')
    .when('#/profile/:username/favorites', './pages/profile.html')
    .otherwise("pages/404.html")
    //.work();
