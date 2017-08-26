'use strict';


angular
    .module('demoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main',
                resolve: {
                    products: function ($http) {
                        return $http.get("https://radiant-brook-97312.herokuapp.com/products").then(function (response) {
                            return response.data;
                        })
                    }
                }
            })

            .when('/cart', {
                templateUrl: 'app/views/cart.html',
                controller: 'CartCtrl',
                controllerAs: 'cart',
                resolve: {
                    shoppingCart: function ($http) { //  data assign to shoppingCart list
                        return $http.get("https://radiant-brook-97312.herokuapp.com/shoppingCart").then(function (response) {
                            return response.data;
                        })
                    }
                }
            })

            .when('/history', {
                templateUrl: 'app/views/history.html',
                controller: 'HistoryCtrl',
                controllerAs: 'history',
                resolve: {
                    history: function ($http) {
                        return $http.get("https://radiant-brook-97312.herokuapp.com/history").then(function (response) {
                            return response.data;
                        })
                    }
                }
            })

            .otherwise({
                redirectTo: '/'
            });
    });
