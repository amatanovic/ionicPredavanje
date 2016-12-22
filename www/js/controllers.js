angular.module('starter.controllers', [])
.controller('PocetnaCtrl', function($scope, podaci) {

    $scope.foaf = {
        svojstvo: ''
    };


    $scope.posalji = function() {
        podaci.get($scope.foaf.svojstvo)
            .success(function (response) {
                if (response.status === 'OK') {
                    $scope.foaf.odgovor = response.poruka;
                }
            })
            .error(function (response) {
                $scope.foaf.odgovor = 'Nisam vratio ništa';
            });
    };
});