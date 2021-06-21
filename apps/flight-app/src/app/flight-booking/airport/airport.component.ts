/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AirportService } from '@flight-workspace/flight-lib';

@Component({
  selector: 'flight-workspace-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {
  airports: string[] = [];

  constructor(private airportService: AirportService) {
    this.airportService.findAll().subscribe(airports => {
      this.airports = airports
    })
  }

  ngOnInit(): void {
  }

}
