appGM
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider.

        when('/Dashboard', {
            templateUrl: 'App/Views/Dashboard/Dashboard.html',
            controller: 'DashboardCtrl'
        }).

        when('/NewDogs', {
            templateUrl: 'App/Views/Dog/NewDogs.html',
            controller: 'NewDogsCtrl'
        }).

        when('/DogPics', {
            templateUrl: 'App/Views/Dog/VerifyDogPictures.html',
            controller: 'DogPicsCtrl'
        }).
        //home page
        otherwise({
            redirectTo: '/',
            templateUrl: 'App/Views/Dashboard/Dashboard.html',
            controller: 'DashboardCtrl'
        });


}])