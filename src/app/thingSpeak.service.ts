import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Rx'

import {Reading} from './reading'
import {IPageResponse} from './app.component'

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ReadingsService{
  private baseURL = 'https://api.thingspeak.com/channels/'
  private
  constructor(private http:Http){
  }

  getReadings(channelID : number): Observable<IPageResponse>{

    return this.http.get(this.baseURL + channelID + '/feeds.json').map(this.parseData);

  }

  parseData(res: Response){
    let data = res.json();
    console.log(data)
    // console.log(res)
    return data;
  }
}
