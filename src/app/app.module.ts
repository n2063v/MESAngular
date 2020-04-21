import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
