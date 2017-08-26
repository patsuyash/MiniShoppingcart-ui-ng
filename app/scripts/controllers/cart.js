'use strict';


angular.module('demoApp')
    .controller('CartCtrl', ['$scope', 'shoppingCart','$location', '$http', function ($scope, shoppingCart,$location, $http) {
        $scope.shoppingCart = shoppingCart;

        $scope.updateCart = function (shoppingCart, stock) {
            console.log("*********************************stck"+stock);
            $scope.shoppingCart = {};
            if ($scope.shoppingCart.stock = stock == null) {
                $scope.shoppingCart.stock = shoppingCart.stock;
            } else {
                $scope.shoppingCart.stock = stock;
            }
            $http.put('https://radiant-brook-97312.herokuapp.com/shoppingCart/' + shoppingCart.id, $scope.shoppingCart);
            return '/cart';
        }

        $scope.deleteProduct = function (shoppingCart) {
            $scope.shoppingCart = {};
            $http.delete('https://radiant-brook-97312.herokuapp.com/shoppingCart/' + shoppingCart.id);
            $location.path('/cart');
            return '/cart';
        }


        $scope.clearCart = function (shoppingCart) {
            $http.delete('https://radiant-brook-97312.herokuapp.com/shoppingCart/');
            $location.path('/cart');
            return '/cart';
        }


        $scope.purchaseProducts = function (shoppingCart) {
            var i = 0;
            for (i = 0; i < shoppingCart.length; i++) {
                $http.post('https://radiant-brook-97312.herokuapp.com/shoppingCart/purchase/' + shoppingCart[i].id);
            }
            $location.path('/history');
            return '/history';
        }
    }]);