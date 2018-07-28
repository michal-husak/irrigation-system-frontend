export class Irrigation {
    pump: boolean;
    valve: boolean;
    waterLevel: boolean;

    constructor(pump?: boolean, valve?: boolean, waterLevel?: boolean) {
        this.pump = pump || false;
        this.valve = valve || false;
        this.waterLevel = waterLevel || false;
    }
  }