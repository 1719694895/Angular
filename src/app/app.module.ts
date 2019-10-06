import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VarbarComponent } from './varbar/varbar.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { TestComponent } from './test/test.component';
import {routing} from './app.routes';
import { FilterPipe } from './filter.pipe';
import {LoggingService} from './logging.service';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    VarbarComponent,
    HomeComponent,
    DirectoryComponent,
    TestComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoggingService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
