import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule }  from '@angular/material/toolbar'
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from './modules/core/core.module';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatToolbarModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
