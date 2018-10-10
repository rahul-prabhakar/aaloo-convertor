import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConvertorComponent } from './convertor/convertor.component';
import { FontsComponent } from './fonts/fonts.component';
import { FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {MaterialModule} from './material';
import { FormsModule } from '@angular/forms';
import { CharViewComponent } from './fonts/char-view/char-view.component';
import { NgxElectronModule } from 'ngx-electron';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ConvertorComponent,
    FontsComponent,
    CharViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MaterialModule,
    FormsModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
