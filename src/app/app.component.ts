import { Component, OnInit } from '@angular/core';
import { Irrigation } from './irrigation';
import { IrrigationService } from './irrigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  irrigation: Irrigation = new Irrigation();

  constructor(private irrigationService: IrrigationService) {}

  ngOnInit() {
    this.getAll();
    setInterval(x => {
      this.getAll();
    }, 5000);
  }

  pumpChanged() {
    this.irrigationService.togglePump().subscribe(
      result => this.irrigation.pump = this.bin2Boolean(result.pump)
    )
  }

  valveChanged() {
    this.irrigationService.toggleValve().subscribe(
      result => this.irrigation.valve = this.bin2Boolean(result.valve)
    )
  }

  getAll(): void {
    this.irrigationService.getAll().subscribe(
      irrigation => {
        this.irrigation.pump = this.bin2Boolean(irrigation.pump);
        this.irrigation.valve = this.bin2Boolean(irrigation.valve);
        this.irrigation.waterLevel = this.bin2Boolean(irrigation.waterLevel);
      }
    )
  }
  
  private bin2Boolean(bin: number): boolean {
    return bin === 1;
  }
}
