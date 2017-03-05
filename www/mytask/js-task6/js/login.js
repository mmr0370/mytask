/**
 * Created by qiangxl on 2017/1/24.
 */

// controller
myApp.controller('LoginController', function($scope, $rootScope, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        username : '',
        password : ''
    };
    $scope.login = function(credentials) {
        console.log('login', credentials);
        AuthService.login(credentials).then(function(user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.$parent.setCurrentUser(user);
        }, function() {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };
})