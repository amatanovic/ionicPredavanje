angular.module('starter.services', [])
.service('podaci', function ($http, server) {
    return {
        get: function (svojstvo) {
            return $http.get(server.getPutanja() + svojstvo);
        }

    }
})

    .service('server', function () {
        return {
            getPutanja: function () {
            return 'http://it.ffos.hr/nastava20162017/oms/P3/ontologijaAPI/foaf:';
        }

    }
    });
