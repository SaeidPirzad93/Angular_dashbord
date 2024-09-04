import { Component, HostListener, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  variable =false
  @HostListener('document:scroll')
  scrollFun(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      this.variable = true
    }
    else{
      this.variable =false
    }
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
