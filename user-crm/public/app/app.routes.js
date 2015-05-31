angular.module('app.routes', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {

    $routeProvider

    // route to home page
    .when('/', {
      templateUrl: '/app/views/home.html'
    })

    // Login page
    .when('/login', {
      templateUrl: '/app/views/pages/login.html',
      controller: 'mainController',
      controllerAs: 'login'
    })

    // show all users
    .when('/users', {
      templateUrl: '/app/views/pages/users/all.html',
      controller: 'userController',
      controllerAs: 'user'
    })

    //create a new user
    .when('/users/create', {
      templateUrl: '/app/views/pages/users/single.html',
      controller: 'userCreateController',
      controllerAs: 'user'
    })

    // route to edit user
    .when('/users/:user_id', {
      templateUrl: '/app/views/pages/users/single.html',
      controller: 'userEditController',
      controllerAs: 'user'
    });

    // get rid of the hash in the url
    $locationProvider.html5Mode(true);

  });
