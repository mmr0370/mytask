/**
 * Created by qiangxl on 2017/1/23.
 */
var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "tpls/PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "tpls/page01.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "tpls/page02.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "tpls/page03.html"
        });
});