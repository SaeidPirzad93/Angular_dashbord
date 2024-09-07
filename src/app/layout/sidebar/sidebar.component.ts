import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 SizeSideBar : boolean = true
  @Output() FixeSide = new EventEmitter()


 ResizeSideBar(){

  this.SizeSideBar = (! this.SizeSideBar)

}
}
