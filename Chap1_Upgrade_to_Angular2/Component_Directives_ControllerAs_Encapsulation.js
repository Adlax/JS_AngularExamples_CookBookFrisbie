//index.html///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<div ng-app="articleApp">
  <article> </article>
</div>

//app.js premiere version///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
angular.module('articleApp',[])
.directive('article',function(){
  return {
    controller: function($scope){ $scope.articleDate = {person:{firstName: 'Jake'}, title: 'Lesotho Yacht Club'}; },
    template:'
      <h1> {{articleData.title}} </h1>
      <attribution author = "articleData.person.firstName"> </attribution>
    '
  };
})
.directive('attribution',function(){
  return {
    scope: { author: '='},
    template: '<p> Written by : {{author}} </p>'
  };
});

//app.js deuxieme version///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
angular.module('articleApp',[])
.directive('article',function(){
  return {
    controller: function(){ this.person = {firstName: 'Jake'}; this.title = 'Lesotho Yacht Club'; },
    controllerAs: 'articleCtrl',
    template: '
      <h1> {{articleCtrl.title}} </h1>
      <attribution> </attribution>
    '
  };
})
.directive('attribution',function(){
  return { template: '<p> written by : {{articleCtrl.author}}</p>' };
});

//app.js troisieme version///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
angular.module('articleApp',[])
.directive('article',function(){
  return {
    controller: function(){ this.person={firstName: 'Jake'}; this.title='Lesotho Yacht Club'; },
    controllerAs: 'articleCtrl',
    template: '
      <h1> {{articleCtrl}} </h1>
      <attribution author="articleCtrl.person.firstName"> </attribution>
    '
 };
})
.directive('attribution',function(){
  return {
    controller: function(){},
    controllerAs: 'attributionCtrl',
    bindToController: {author: '='},
    template: '
      <p> Written b y : {{attributionCtrl.author}} </p>
    '
  };
});

//app.js quatrieme version///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
angular.module('articleApp',[])
.directive('article',function(){
  return {
    controller: function(){ this.person={firstName: 'Jake'}; this.title='Lesotho Yacht Club'; },
    controllerAs: 'articleCtrl',
    template: '
      <h1> {{articleCtrl}} </h1>
      <attribution author="articleCtrl.person.firstName"> </attribution>
    '
 };
})
.directive('attribution',function(){
  return {
    controller: function(){ this.capitalize=function(){this.author=this.author.toUpperCase();} },
    controllerAs: 'attributionCtrl',
    bindToController: {author: '='},
    template: '
      <p ng-click="attributionCtrl.capitalize()">
      Written by : {{attributionCtrl.author}}
      </p>
    '
  };
});

//app.js cinquieme version///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
angular.module('articleApp',[])
.directive('article',function(){
  return {
    controller: function(){ this.person={firstName:'Jake'}; this.title='Lesotho Yacht Club'; this.capitalize=function(){this.person.firstName=this.person.firstName.toUpperCase()}; },
    controllerAs: 'articleCtrl',
    template: '
      <h1>{{articleCtrl.title}}</h1>
      <attribution author="articleCtrl.person.firstName" upper-case-author="articleCtrl.capitalize()"> </attribution>
    '
  };
})
.directive('attribution',function(){
  return {
    controller: function(){},
    controllerAs: 'attributionCtrl',
    bindToController: { author: '=', upperCaseAuthor: '&'},
    template: '
      <p ng-click="attributeCtrl.upperCaseAuthor()"> Written by : {{attributeCtrl.author}} </p>
    '
  };
});
