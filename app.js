// SCSCSCSCSCSCSCSCSC

// Angular App
var app = angular.module('wealApp', [])

// Globals
appName = 'WEAL'

// Home Page
app.controller('home', function ($scope) {
  console.log('Home Controller loaded...');
  $scope.appName = appName
})

// Provider Page
app.controller('provider', function ($scope) {
  console.log('Provider Controller loaded...');
})

// Check LPG Page
app.controller('lpg', function ($scope) {
  console.log('Check Controller loaded...');

  $scope.appName = appName
  $scope.remDays = 12;

  $scope.usedPer = 50;

  $scope.total = 14.7;

  $scope.avgRate = 20;
})
