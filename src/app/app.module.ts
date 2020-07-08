import { PhoneBookModule } from './components/phonebook/phonebook.module';
import { SidebarComponent } from './components/layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './components/layouts/full/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    ErrorComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PhoneBookModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
