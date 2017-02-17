import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import {TreeView} from "./tree-view/tree-view";
import {DirectoryListComponent} from "./tree-view/directory-list.component";
import {DirectoryService} from "./tree-view/directory.service";
import {PieComponent} from "./tree-view/piechart.component";
//import {nvD3} from 'ng2-nvd3'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'folders', component: DirectoryListComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    TreeView,
    DirectoryListComponent,
    PieComponent//,
    //nvD3
  ],
  providers: [DirectoryService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
