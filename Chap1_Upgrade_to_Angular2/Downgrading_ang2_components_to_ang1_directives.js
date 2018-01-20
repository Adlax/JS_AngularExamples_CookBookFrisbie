//app/article.component.ts
import {Component, Input} from '@angular/core';
@Component({
  selector: 'ng2-article',
  template: '
    <h1>{{title}}<h1>
    <p> Written by : {{author}} </p>
  '
})
export class ArticleComponent{
  @Input() author:string
  title: string = 'Unicycle Jousting blabla';
}

//app/app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {RootComponent} from './root.component';
import {ArticleComponent} from './article.component';
@NgModule({
  imports: [BrowserModule,UpgradeModule],
  declarations: [RootComponent,ArticleComponent],
  Bootstrap: [RootComponent]
})
export class Ng2AppModule{
  constructor(public upgrade: UpgradeModule){}
}

//main.ts
import {Component, Input} from '@angular/core';
import {downgradeComponent} from '@angular/upgrade/static';
import {Ng1AppModule} from './ng1.module';
@Component({
  selector: 'ng2-article',
  template: '
    <h1>{{title}}</h1>
    <p> Written by : {{author}} </p>
  '
})
export class ArticleComponent{
  @Input() author:string
  title:string = 'Unicycle Jousting blablabla';
}
Ng1AppModule.directive('ng1Article',downgradeComponent({component: ArticleComponent}));

//index.html
<!DOCTYPE html>
<html>
  <head>
    <!-- Angular 2 scripts -->
    <script src="zone.js"></script>
    <script src="reflect-metadata.js"></script>
    <script src="system.js"></script>
    <script src="system-config.js"></script>
  </head>
  <body>
    <div ng-init="authorName='Jake Hsu'">
      <ng1-article [author]="authorName"> </ng1-article>
    </div>
    <root></root>
  <body>
<html>

//app/article.component.ts
import {Component, Input} from '@angular/core';
import {downgradeComponent} from '@angular/upgrade/static';
import {Ng1AppModule} from './ng1.module';
@Component({
  selector 'ng2-article',
  template: '
    <h1> {{title}} </h1>
    <p> Written by : {{author}} </p>
  '
})
export class ArticleComponent {
  @Input() author:string
  title:string = 'Unicycle Jousting blabla'
}
Ng1AppModule.directive('ng1Article',downgradeComponent({component: ArticleComponent, inputs: ['author']}));
