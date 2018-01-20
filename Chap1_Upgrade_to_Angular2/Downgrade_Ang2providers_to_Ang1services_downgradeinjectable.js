//app/article.services.ts
import {Injectable} from '@angular/core';
@Injectable()
export class ArticleService {
  article: Object = {
    title: 'Research blabla',
    author: "Jake Hsu"
  };
}
//app/article.component.ts
export const ng1Article = {
  template: '
    <h1> {{article.title}} </h1>
    <p> {{article.author}} </p>
  ',
  controller: (ArticleService, $scope) => {
    $scope.article = ArticleService.article;
  }
};
//app/ng2.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {RootComponent} from '@./root.component';
import {ArticleService} from './article.service';
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  declarations: [
    RootComponent
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [
    RootComponent
  ]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule) {}
}
//app/ng1.module.ts
import 'angular';
import {ng1Article} from './article.component';
import {ArticleService} from './article.service';
import {downgradeInjectable} from '@angular/upgrade/static';
export const Ng1AppModule = angular.module('Ng1AppModule',[])
.component('ng1Article',ng1Article)
.factory('ArticleService',downgradeInjectable(ArticleService))
