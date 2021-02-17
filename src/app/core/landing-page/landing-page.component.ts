import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const checkpoint = 300;
    const maxMargin = 300;
    let opacity = 1;
    let marginTop = 0;
    let prevVerticalPos = 0;
    window.addEventListener('scroll', () => {
      const verticalPos = window.pageYOffset;
      if (checkpoint >= verticalPos) {
        opacity = 1 - (verticalPos / checkpoint);
      } else {
        opacity = 0;
      }
      if (verticalPos >= prevVerticalPos && marginTop > -1) {
        marginTop = marginTop < maxMargin ? verticalPos : maxMargin;
      } else {
        marginTop = verticalPos > 0 ? verticalPos : 0;
      }
      prevVerticalPos = verticalPos;
      document.getElementById('scroll-text-effect').style.opacity = opacity.toString();
      document.getElementById('scroll-text-effect').style.marginTop = `${marginTop.toString()}px`;
    });
  }
}
