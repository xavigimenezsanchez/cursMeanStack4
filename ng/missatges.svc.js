angular.module('appLearn')
    .service("MissatgesService", function($http) {
        console.error("patata")
        this.fetch = function() {
            return $http.get("/api/missatges");
        };
        this.create = function(missatge) {
            return $http.post("/api/post");
        };
    });
