//Premiere version//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//index.html
<div ng-app="articleApp">
  <article></article>
<div>
//app.js
angular.module('articleApp',[])
.directive('article',function(){
  return {
    controller: function(){
      this.person={firstName:'Jake'};
      this.title='Police plays';
      this.capitalize=function(){this.person.firstName=this.person.firstName.toUpperCase()};
    },
    controllerAs: 'articleCtrl',
    template:'
      <h1>{{articleCtrl.title}}</h1>
      <attribution author="articlectrl.person.firstName" upper-case-author="articleCtrl.capitalize()"></attribution>
    '
  };
})
.directive('attribution',function(){
  return {
    controller:function(){},
    controllerAs: 'attributionCtrl',
    bindToController: {author: '=', upperCaseAuthor: '&'},
    template: '
      <p ng-click="attributionCtrl.upperCaseAuthor()"> Written by : {{attributionCtrl.author}} </p>
    '
  };
});
//Deuxieme version/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//html
<div ng-app="articleApp">
  <article></article>
</div>
//app.js
angular.module('articleApp',[])
.component('article',{
  controller: function(){
    this.person={firstName: 'Jake'};
    this.title='Police plays';
    this.capitalize=function(){this.person.firstName=this.person.firstName.toUpperCase();};
  },
  controllerAs: 'articleCtrl',
  template: '
    <h1> {{articleCtrl.title}}</h1>
    <attribution author="articleCtrl.person.firstName" upper-case-author="articleCtrl.capitalize()"> </attribution>
  '
})
.component('attribution',{
  controller: function(){},
  controllerAs: 'attributionCtrl',
  bindings: {author:'=',upperCaseAuthor:'&'},
  template: '
    <p ng-click:"attributionCtrl.upperCaseAuthor()"> Written by : {{attributionctrl.author}} <p>
  '
});
//Troisieme version/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//index.html
<div ng-app="articleApp">
  <article> </article>
</div>
//app.js
angular.module('articleApp',[])
.component('article',{
  controller: function(){
    this.person={firstName:'Jake'};
    this.title='Police plays';
    this.capitalize=function(){this.person.firstName=this.person.firstName.toUpperCase();};
  },
  template: '
    <h1>{{$ctrl.title}}</h1>
    <attribution author="$ctrl.person.firstName" upper-case-author="$ctrl.capitalize()"> Written by ; {{$ctrl.author}} </attribution>
  '
})
.component('attribution',{
  controller: function(){},
  bindings: {author:'=',upperCaseAuthor:'&'},
  template: '
    <p ng-click="$ctrl.upperCaseAuthor()"> Written by : {{$ctrl.author}} </p>
  '
});
