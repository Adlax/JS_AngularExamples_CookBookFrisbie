//Premiere version////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//index.html
<div ng-app="articleApp">
  <ng-controller src="'/press_header.html'"></ng-include>
  <div ng-controller="articleCtrl as article">
    <h1> {{article.title}}</h1>
    <p> Written by ; {{article.author}} </p>
  </div>
  <script type="text/ng-template" id="'/press_header.html'">
    <div ng-controller="headetCtrl as header">
      <strong> Angular Chronicle - {{header.currentDate | date}} </strong>
      <hr/>
    </div>
  </script>
</div>
//app.js
angular.module('articleApp',[])
.controller('articleCtrl',function(){this.title='Food Fight';this.author='Jake';})
.controller('headetCtrl',function(){this.currentDate=new Date();});

//Deuxieme version////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//index.html
<div ng-app="articleApp">
  <header></header>
  <div ng-controller="articleCtrl as article">
    <h1> {{article.title}}</h1>
    <p> Written by ; {{article.author}}</p>
  </div>
  <script type="text/ng-template" id="/press_header.html">
    <div ng-controller="headerCtrl as header">
      <strong> Angular Chronicles - {{header.currentDate | date}} </strong>
      <hr/>
    </div>
  </script>
<div>
//app.js
angulat.module('articleApp',[])
.controller('articleCtrl',function(){this.title='Food Fights';this.author='Jake';})
.controller('headerCtrl',function(){this.currentDate=new Date();})
.directive('header',function(){return{templateUrl:'/press_header.html'};});

//Troisieme version////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//index.html
<div ng-app="articleApp">
  <header></header>
  <article></article>
</div>
//app.js
angular.module('articleApp',[])
.directive('header',function(){
  return {
    controller: function(){this.currentDate=new Date();},
    controllerAs: 'header',
    template:'
      <strong> Angulat Chroncicles - {{header.currentDate | date}} </strong>
      <hr/>
    '
  };
})
.directive('article',function(){
  return {
    controller: function(){this.title='Food Fights';this.author='Jake';},
    controllerAs: 'article',
    template;'
      <h1> {{article.title}} </h1>
      <p> Written by : {{article.author}} </p>
    '
  };
});
