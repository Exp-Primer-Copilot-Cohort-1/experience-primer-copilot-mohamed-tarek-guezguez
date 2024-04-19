function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/skills-member.html'
  };
}

// Path: member.js
function skillsMemberCtrl($scope, $http) {
  $http.get('data/skills.json').success(function(data) {
    $scope.skills = data;
  });
}

// Path: member.js
function member() {
  return {
    restrict: 'E',
    templateUrl: 'views/member.html'
  };
}

// Path: member.js
function memberCtrl($scope, $http) {
  $http.get('data/members.json').success(function(data) {
    $scope.members = data;
  });
}

// Path: member.js
function memberDetail() {
  return {
    restrict: 'E',
    templateUrl: 'views/member-detail.html'
  };
}

// Path: member.js
function memberDetailCtrl($scope, $http) {
  $http.get('data/members.json').success(function(data) {
    $scope.members = data;
  });
}

// Path: member.js
function memberDetailRoute($routeProvider) {
  $routeProvider.when('/member/:id', {
    template: '<member-detail></member-detail>',
    controller: 'memberDetailCtrl'
  });
}

// Path: member.js
angular.module('app.member', ['ngRoute'])
  .directive('member', member)
  .controller('memberCtrl', memberCtrl)
  .directive('memberDetail', memberDetail)
  .controller('memberDetailCtrl', memberDetailCtrl)
  .config(memberDetailRoute);

// Path: member.js
function memberFilter() {
  return function(members, id) {
    var filtered = [];
    angular.forEach(members, function(member) {
      if (member.id === id) {
        filtered.push(member);
      }
    });
    return filtered;
  };
}

// Path: member.js
angular.module('app.member')
  .filter('memberFilter', memberFilter);

// Path: member.js
function memberSkills() {
  return {
    restrict: 'E',
    templateUrl: 'views/member-skills.html'
  };
}

// Path: member.js
function memberSkillsCtrl($scope, $http, $routeParams) {
  $http.get('data/skills.json').success(function(data) {
    $scope.skills = data;
  });
  $http.get('data/members.json').success(function(data) {
    $scope.members = data;
  });
}

// Path: member.js
angular.module('app.member')
  .directive('memberSkills', member