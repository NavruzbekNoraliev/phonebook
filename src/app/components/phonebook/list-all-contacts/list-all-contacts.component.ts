import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all-contacts',
  templateUrl: './list-all-contacts.component.html',
  styleUrls: ['./list-all-contacts.component.css']
})
export class ListAllContactsComponent implements OnInit {

  constructor() { }
  contacts = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  ngOnInit() {
  }
  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(event)
  }

}
