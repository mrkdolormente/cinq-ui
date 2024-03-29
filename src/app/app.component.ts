import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('headerEl') headerEl:ElementRef;

  team: Array<{
    id: number,
    name: string,
    image: string,
    position?: string
  }> = [
    {
      id: 1,
      name: 'Czarina Anzaldo',
      image: 'https://prod-cinq-assets.s3.ap-southeast-1.amazonaws.com/team/czarina.jpg'
    },
    {
      id: 2,
      name: 'Ma. Angelica De Jesus',
      image: 'https://prod-cinq-assets.s3.ap-southeast-1.amazonaws.com/team/lyka.jpg'
    },
    {
      id: 3,
      name: 'Via Anne Dela Vega',
      image: 'https://prod-cinq-assets.s3.ap-southeast-1.amazonaws.com/team/via.jpg'
    },
    {
      id: 4,
      name: 'Cedrick Simuangco',
      image: 'https://prod-cinq-assets.s3.ap-southeast-1.amazonaws.com/team/cedrick.jpg'
    },
    {
      id: 5,
      name: 'Mark Dolormente',
      image: 'https://prod-cinq-assets.s3.ap-southeast-1.amazonaws.com/team/mark.jpg'
    }
  ];

  isMenuShown: boolean;

  constructor() {}

  @HostListener('window:scroll', ['$event']) onScroll($event:any) {
    const headerNatEl = (this.headerEl.nativeElement as HTMLElement);
    
    this.isMenuShown = false;

    window.scrollY > 0 ? headerNatEl.classList.add('cinq-scroll') : headerNatEl.classList.remove('cinq-scroll');
  }

  scrollInto(el:HTMLElement) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 111;

    window.scrollTo({top: y, behavior: 'smooth'});
  }

  toggleMenu(el:HTMLElement) {
    this.isMenuShown = !this.isMenuShown;

    this.isMenuShown ? el.classList.add('cinq-scroll') : el.classList.remove('cinq-scroll');
  }
}
