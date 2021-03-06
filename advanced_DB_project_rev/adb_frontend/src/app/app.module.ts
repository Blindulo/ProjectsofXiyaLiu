import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/Forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Query1Component } from './components/query1/query1.component';
import { Query2Component } from './components/query2/query2.component';
import { Query3Component } from './components/query3/query3.component';
import { Query4Component } from './components/query4/query4.component';
import { Query5Component } from './components/query5/query5.component';
import { Query6Component } from './components/query6/query6.component';
import { Query7Component } from './components/query7/query7.component';
import { Query8Component } from './components/query8/query8.component';
import { Query9Component } from './components/query9/query9.component';
import { Query10Component } from './components/query10/query10.component';
import { Query11Component } from './components/query11/query11.component';

@NgModule({
  declarations: [
    AppComponent,
    Query1Component,
    Query2Component,
    Query3Component,
    Query4Component,
    Query5Component,
    Query6Component,
    Query7Component,
    Query8Component,
    Query9Component,
    Query10Component,
    Query11Component,
    NavbarComponent,
    SidebarComponent,
    Query1Component,
    Query2Component,
    Query3Component,
    Query4Component,
    Query5Component,
    Query6Component,
    Query10Component,
    Query7Component,
    Query8Component,
    Query9Component,
    Query11Component,
  ],
  imports: [
    FlashMessagesModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
