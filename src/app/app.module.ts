import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ReportboxComponent } from './components/reportbox/reportbox.component';
import { PerformanceBoxComponent } from './components/performance-box/performance-box.component';
import { PerBoxOneeComponent } from './components/performanceComponents/per-box-onee/per-box-onee.component';
import { PerBoxTwoComponent } from './components/performanceComponents/per-box-two/per-box-two.component';
import { PerBoxThreeComponent } from './components/performanceComponents/per-box-three/per-box-three.component';
import { PerBoxFourComponent } from './components/performanceComponents/per-box-four/per-box-four.component';
import { PreBoxFiveComponent } from './components/performanceComponents/pre-box-five/pre-box-five.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { PagetwoComponent } from './pages/pagetwo/pagetwo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ReportboxComponent,
    PerformanceBoxComponent,
    PerBoxOneeComponent,
    PerBoxTwoComponent,
    PerBoxThreeComponent,
    PerBoxFourComponent,
    PreBoxFiveComponent,
    OrdersComponent,
    MainpageComponent,
    PageoneComponent,
    PagetwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
