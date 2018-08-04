import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientListItem} from "../../models/ClientListItem";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  item: ClientListItem = {
    name: '',
    email: '',
    age: 0,
    phone: '',
    commentary: ''
  };

  clientlist: ClientListItem[];
  @ViewChild('form') form: NgForm;

  constructor() {
  }

  ngOnInit() {
    this.clientlist = [
      {
        id: 0,
        name: 'Olga Malysheva',
        email: 'olga@gmail.com',
        age: 18,
        phone: '+38066555234',
        commentary: 'text'
      },
      {
        id: 1,
        name: 'Katya Ivanova',
        email: 'katya@gmail.com',
        age: 18,
        phone: '+38063555231',
        commentary: 'text2'
      }
    ];

  }

  onSubmit(form) {
    if (form.invalid) return;
    const newItem: ClientListItem = {
      name: this.item.name,
      email: this.item.email,
      age: this.item.age,
      phone: this.item.phone,
      commentary: this.item.commentary,
      id: this.clientlist.length
    };
    this.clientlist.push(newItem);

    this.form.resetForm();
  }

  itemDelete(index) {
    this.clientlist.splice(index, 1);
  }

}
