import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menuitem/menuitem.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MainComponent,MenuComponent]
})
export class AppModule { }
