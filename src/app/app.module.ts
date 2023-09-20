import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { GroupInfoPageComponent } from './pages/group-info-page/group-info-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, GroupPageComponent, GroupInfoPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
