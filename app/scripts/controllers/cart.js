'use strict';


angular.module('demoApp')
    .controller('CartCtrl', ['$scope', 'shoppingCart', '$http', function ($scope, shoppingCart, $http) {
        $scope.shoppingCart = shoppingCart;

        $scope.updateCart = function (shoppingCart, stock) {
            console.log("*********************************stck"+stock);
            $scope.shoppingCart = {};
            if ($scope.shoppingCart.stock = stock == null) {
                $scope.shoppingCart.stock = shoppingCart.stock;
            } else {
                $scope.shoppingCart.stock = stock;
            }
            $http.put('http://radiant-brook-97312.herokuapp.com/shoppingCart/' + shoppingCart.id, $scope.shoppingCart);
            return '/cart';
        }

        $scope.deleteProduct = function (shoppingCart) {
            $scope.shoppingCart = {};
            $http.delete('http://radiant-brook-97312.herokuapp.com/shoppingCart/' + shoppingCart.id);
            return '/cart';
        }


        $scope.clearCart = function (shoppingCart) {
            $http.delete('http://radiant-brook-97312.herokuapp.com/shoppingCart/');
            return '/cart';
        }


        $scope.purchaseProducts = function (shoppingCart) {
            var i = 0;
            for (i = 0; i < shoppingCart.length; i++) {
                $http.post('http://radiant-brook-97312.herokuapp.com/shoppingCart/purchase/' + shoppingCart[i].id);
            }
            return '/history';
        }
    }]);