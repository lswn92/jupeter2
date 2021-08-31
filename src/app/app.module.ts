import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { RouterModule, Routes } from '@angular/router';
import { SwbtnComponent } from './swbtn/swbtn.component';
import { TwowayComponent } from './twoway/twoway.component';
import { TimestampComponent } from './timestamp/timestamp.component';

const routes: Routes = [
  {
    path: 'servers',
    component: ServersComponent
  },
  {
    path: 'swbtn',
    component: SwbtnComponent
  },
  {
    path: 'twoway',
    component: TwowayComponent
  },
  {
    path: 'timestamp',
    component: TimestampComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    SwbtnComponent,
    TwowayComponent,
    TimestampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
