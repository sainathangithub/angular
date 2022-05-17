import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'video';

  ngAfterViewInit() {
    const marketingVideo: any = document.getElementById('marketingVideo');

    let detectTap: boolean;
    if (marketingVideo) {
      // marketingVideo.addEventListener('play', () => {
      //   this.gaService.event('marketing_video_viewed');
      //   // console.log("played");
      //         if(carouselVideo) {
      //           carouselVideo.pause();
      //         }
      // });
      // // debugger;
      marketingVideo.addEventListener('touchstart', () => {
        if (marketingVideo.played) {
          marketingVideo.pause();
        } else {
          marketingVideo.play();
        }
      });
      /*   marketingVideo.addEventListener('touchmove', () => {
        detectTap = true;
      });
      marketingVideo.addEventListener('touchend', () => {
        if (detectTap) {
          marketingVideo.pause();
        } else {
          if (marketingVideo.paused) {
            marketingVideo.play();
          } else {
            marketingVideo.pause();
          }
        }
      }); */
    }
  }
}
