import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name.component';
import { TaskScreenComponent } from './screens/task-screen/task-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    TaskScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NameComponent]
})
export class AppModule { }
