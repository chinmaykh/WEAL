// SCSCSCSCSCSCSCSCSC

// Angular App
var app = angular.module('wealApp', []).config(['$compileProvider',
function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|sms):/);
}
]);

// Globals
appName = 'WEAL'
providers = [
  {
    'name': 'Indane',
    'ph': 1234567890
  },
  {
    'name': 'HP',
    'ph': 1234567890
  },
  {
    'name': 'Aegis',
    'ph': 1234567890
  }
]

// Home Page
app.controller('home', function ($scope) {
  console.log('Home Controller loaded...');
  $scope.appName = appName
})

// Provider Page
app.controller('provider', function ($scope) {
  console.log('Provider Controller loaded...');
  $scope.appName = appName

  $scope.providers = providers



  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
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

