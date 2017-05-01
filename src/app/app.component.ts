import { Component, OnInit } from '@angular/core';
import {ReadingsService} from "./thingSpeak.service"
import {Channel} from './channel.component'
import {Feed} from './feed.component'


const channelID: number = 256225;

export interface IPageResponse{
  channel: Channel;
  feeds: Feed[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReadingsService]
})

export class AppComponent implements OnInit{
  title = 'Smartchef';
  public channel : Channel;
  public feeds : Feed[];

  constructor(private thingSpeakService: ReadingsService){
    this.channel = new Channel(null,null);
    this.feeds = []
  }

  getReadings(){
    this.thingSpeakService.getReadings(channelID).subscribe(
      channel => {
         this.channel.id = channel.channel.id;
         this.channel.name = channel.channel.name;
         this.feeds = channel.feeds
       }
      // function(response){
      //   console.log(response)
      //   this.channel.id = response.channel.id;
      //   this.channel.name = response.channel.name;
      // }
      ,function(){console.log('Something went wrong'),function(){console.log('completed...')}}
    );
    // console.log(this.feeds);

  }
  ngOnInit():void{
    this.getReadings();
  }
  errorHandler(){
    console.log('Something went wrong')
  }
}
