import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrl: './newpass.component.css'
})
export class NewpassComponent implements OnInit {
  ngOnInit(): void {
  }
  firstName: String = "ghalia";
  lastName: String = "ashr";
}
