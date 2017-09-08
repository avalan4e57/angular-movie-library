var app = angular.module("myApp", ["ngRoute"]);
app.config($routeProvider => {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/fiction", {
        templateUrl : "album.html",
        controller: "fictionCtrl"
    })
    .when("/documentary", {
        templateUrl : "album.html",
        controller: "documentaryCtrl"
    })
    .when("/porn", {
        templateUrl : "album.html",
        controller: "pornCtrl"
    });
});
app.controller("mainCtrl", function($scope) {
    $scope.addMovie = (album, title, url) => {
        album.movies.push({
            title: title,
            url: "https://www.youtube.com/embed/" + YouTubeGetID(url)
        })
    }
})
app.controller("fictionCtrl", function($scope, $http) {
    $http.get('library.json')
    .then(res => $scope.album = res.data.fiction)
})
app.controller("documentaryCtrl", function($scope, $http) {
    $http.get('library.json')
    .then(res => $scope.album = res.data.documentary)
})
app.controller("pornCtrl", function($scope, $http) {
    $http.get('library.json')
    .then(res => $scope.album = res.data.porn)
})

.filter('trustUrl', function ($sce) {
    return url => $sce.trustAsResourceUrl(url)
})
