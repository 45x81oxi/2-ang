import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brand = 'Personal info';
  infoIsShow: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleInfoBlock(e) {
    this.infoIsShow = !this.infoIsShow;
    let form1 = document.getElementById("form");
    let table = document.getElementById("table");

    if (e.target.text === 'Add client') {
      form1.hidden = false;
      table.hidden = true;
    } else {
      form1.hidden = true;
      table.hidden = false;
    }


  }


}
