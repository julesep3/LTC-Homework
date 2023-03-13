import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
  contacts?: Contact[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.getAllContacts().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
