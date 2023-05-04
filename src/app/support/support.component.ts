import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 2400,
      once: false,
    });
  }
}
