/**
 * Created by qiangxl on 2017/1/23.
 */
var routerApp=angular.module('routerApp','ui.router');
routerApp.run(function($rootScope,$state,$stateParams){
    $rootScope.$state=$state;
    $rootScope.$stateParams=$stateParams;
});
routerApp.config(function($stateProvider,$urlRouterProvider){
 /*   $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index',{
        url:'/index',
        views:{
            'login':{
                templateUrl:'tpls/login.html'
            }
        }

    });*/
    $urlRouterProvider.when("", "/login");

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "tpls/login.html"
        })
        .state("PageTab.Page1", {
            url:"/page1",
            templateUrl: "tpls/Page01.html"
        })
        .state("PageTab.Page2", {
            url:"/page2",
            templateUrl: "tpls/Page02.html"
        })
        .state("PageTab.Page3", {
            url:"/page3",
            templateUrl: "tpls/Page3.html"
        });
});