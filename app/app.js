var myPortfolio = angular.module("myPortfolio", ['ui.router']);
myPortfolio.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
                .state("structure", {
                    url: "/structure",
                    templateUrl: 'test.html'
                })
                .state("home", {
                    url: "/home",
                    templateUrl: 'home.html'
                });
    }]);