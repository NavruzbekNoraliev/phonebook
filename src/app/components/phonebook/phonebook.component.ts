import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

const CONTACTS = [
  {
    id: 1,
    name: 'Navruzbek',
    phone: '+998979970321'
  },
  {
    id: 2,
    name: 'Jaloldin',
    phone: '+998979950321'
  },
  {
    id: 3,
    name: 'Abdulmalik',
    phone: '+998979970321'
  },
  {
    id: 4,
    name: 'Muhammadjon',
    phone: '+998979970321'
  }];

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  constructor() { }
  disabled = true;
  updating = false;
  newContact = false;
  dataSource = new MatTableDataSource(CONTACTS);
  displayedColumns = ['contact']
  filteredContacts = []
  contact = this.dataSource.data[0];

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelect($event) {
    this.contact = $event
  }
  onUpdate() {
    this.updating = true
    this.disabled = false
  }

  onAdd() {
    this.contact = null;
    console.log(this.contact)
    this.newContact = true;
    this.disabled = false;
  }

  onDelete() {
    const index = CONTACTS.findIndex(ctc => ctc.id === this.contact.id)
    CONTACTS.splice(index, 1);
    this.dataSource = new MatTableDataSource(CONTACTS);
    this.contact = this.dataSource.data[0];
  }

  onCancel() {
    this.updating = false;
    this.disabled = true;
    if (this.newContact) {
      this.contact = this.dataSource.data[0];
      this.newContact = false;
    }
  }

  submitUpdate(name, phone) {
    console.log(this.dataSource.data)
    const ctc = this.dataSource.data.find(ctc => ctc.id === this.contact.id)
    ctc.name = name
    ctc.phone = phone
    this.updating = false;
    this.disabled = true;
  }
  submit(name, phone) {
    this.contact = {id: this.dataSource.data.length + 1, name: name, phone: phone }
    CONTACTS.push(this.contact)
    this.dataSource = new MatTableDataSource(CONTACTS);
    this.newContact = false;
    this.disabled = true;
  }
}
