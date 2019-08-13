import { Component, OnInit } from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-neat',
  templateUrl: './neat.component.html',
  styleUrls: ['./neat.component.sass']
})
export class NeatComponent implements OnInit {

  constructor(private translate: TranslocoService) {

  }

  ngOnInit() {
    const newTranslation = {
      title: 'New translation title'
    };
    this.translate.setTranslation('neat/en', newTranslation);
  }

}
