import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-lateral-navbar',
  templateUrl: './lateral-navbar.component.html',
  styleUrls: ['./lateral-navbar.component.css']
})
export class LateralNavbarComponent implements OnInit {

  constructor(public tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

}
