import { Component, OnInit } from '@angular/core';

import { MainStoreService } from '../../../services/main-store.service';
import { User } from './../../../types/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User | undefined;

  constructor(private mainStore: MainStoreService) {}

  ngOnInit(): void {
    this.user = this.mainStore.user;
    this.mainStore.$user.subscribe((user: User) => {
      this.user = user;      
    });
  }
}
