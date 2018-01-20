//Premiere version/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//index.html
<!DOCTYPE html>
  <head>
    <!-- Angular 1 scripts -->
    <script src="angular.js"> </script>
  </head>
  <body>
    <div ng-app="hybridApp" ng-init="val='Angular 1 bootstrapped successfully'"> {{val}} </div>
  </body>
<html>

//ng1.module.ts
import 'angular'
export const Ng1AppModule = angular.module('Ng1AppModule',[]);

//app/ng2.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {RootComponent} from './root.component';
@NgModule({
  imports: [BrowserModule,UpgradeModule],
  bootstrap: [RootComponent],
  declarations: [RootComponent]
})
exports class Ng2AppModule{constructor(public upgrade: UpgradeModule){}}
exports class AppModule {}

//app/root.component.ts
import {component} from '@angular/core';
@Component({
  selector: 'root',
  template: '
    <p> Angular 2 bootstrapped sucessfully </p>
  '
})
exports class RootComponent {}

//main.ts
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Ng1AppModule} from './app/ng1.module';
import {Ng2AppModule} from './app/ng2.module';
platformBrowserDynamic()
  .bootstrapModule(Ng2AppModule);

//main.ts
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Ng1AppModule} from './app/ng1.module';
import {Ng2AppModule} from './app/ng2.module';
platformBrowserDynamic()
  .bootstrapModule(Ng2AppModule)
  .then(ref=>{ ref.instance.upgrade.bootstrap(document.body,[Ng1AppModule.name]); });

//index.html
<!DOCTYPE html>
  <head>
    <!-- Angular 2 scripts -->
    <script src="zone.js"></script>
    <script src="reflect-metadata.js"></script>
    <script src="system.js"></script>
    <script src="system-config.js"></script>
  </head>
  <body>
    <div ng-init="val='Angular 1 bootstraped successfully'"> {{val}} </div>
    <root> </root>
  </body>
</html>
