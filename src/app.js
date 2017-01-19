import {MarkerService} from './services/marker-service'

export class App {
  constructor() {
    this.message = 'ASAN Telemetry'
    this.markerService = new MarkerService()
    this.gpsMarkers = this.markerService.returnMarkers()
  }
}
