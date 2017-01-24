import {MarkerService} from './services/marker-service'

export class App {
  constructor() {
    const meshbluConfig = {
      uuid: '5cf4dca1-8698-44fb-808a-f1a3166500f6',
      token: '8fb976697500d03537a4eec3c6fee1c9ab27a4a6'
    }
    this.gpsMarkers = []
    this.conn = meshblu.createConnection(meshbluConfig)
    this.conn.on('config', (data) => {
      this.gpsMarkers = data.asan.markers
    })
    this.message = 'ASAN Telemetry'
  }
}
