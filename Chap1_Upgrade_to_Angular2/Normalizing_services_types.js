//Premiere version////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//index.html
<div ng-app="articleCtrl">
  <article> </article>
</div>
//app.js
angular.module('articleApp',[])
.factory('ArticleData',function(){
  var title='Incumbent';
  return {
    getTitle: function(){return title;}
    author: 'Jake';
  };
})
.component('article',{
  controller: function(ArticleData){this.title=ArticleData.getTitle();this.author=ArticleData.author;},
  template: '
    <h1>{{$ctrl.title}}</h1>
    <p> Written by ; {{$ctrl.author}}
  '
});
//Deuxiemee version////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//index.html
<div ng-app="articleApp">
  <article> </article>
</div>
//app.js
angular.module('articleApp',[])
.service('ArticleData',function(){
  var title='Incumbent';
  this.getTitle=function(){return title;};
  this.author='Jake';
})
.component('article',{
  controller: function(ArticleData){this.title=ArticleData.getTitle();this.author=ArticleData.author;},
  template: '
    <h1>{{$ctrl.title}}</h1>
    <p> Written by : {{$ctrl.author}} </p>
  '
});
