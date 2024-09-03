import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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

}
