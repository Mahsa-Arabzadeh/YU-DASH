import { Component, inject, OnInit } from '@angular/core';

import html2canvas from 'html2canvas';

import { jsPDF } from 'jspdf';

import { CommonModule } from '@angular/common';
import { CdTimerModule } from 'angular-cd-timer';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { WidgetContainerComponent } from '../../../components/shared/widgetContainer/widget.component';
import { JalaliPipe } from '../../../pipes/jalali.pipe';
import { MomentFormatPipe } from '../../../pipes/moment-format.pipe';

import { QeydarDatePickerModule } from '@qeydar/datepicker';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { LightboxModule, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-play-circle',
  templateUrl: './play-circle.component.html',
  styleUrl: './play-circle.component.css',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CdTimerModule,
    ButtonModule,
    DialogModule,
    WidgetContainerComponent,
    JalaliPipe,
    MomentFormatPipe,
    QeydarDatePickerModule,
    NgSelectComponent,
    NgSelectModule,
    LightboxModule,
  ],
  providers: [Lightbox],
})
export class PlayCircleComponent implements OnInit {
  visible: boolean = false;
  imageBase: string = '';
  selectedDate: Date | string = '1404';
  selectedCar: any;
  _album: any = [];
  _lightbox = inject(Lightbox);

  ngOnInit(): void {
    for (let i = 1; i <= 4; i++) {
      const src = `https://picsum.photos/800/600?random=${i}`;
      const caption = 'Image ' + i + ' caption here';
      const thumb = `https://picsum.photos/100/75?random=${i}`;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };

      this._album.push(album);
    }
  }

  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  handleCapture() {
    const element = document.getElementById('capture');
    if (element) {
      html2canvas(element).then((canvas) => {
        this.imageBase = canvas.toDataURL('image/png');
        this.visible = true;
      });
    }
  }

  async generateImage() {
    const element = document.getElementById('capture');
    if (element) {
      const canvas = await html2canvas(element);
      // base64
      const image = canvas.toDataURL('image/png');
      this.imageBase = image;
      return image;
    }
    return '';
  }

  async pdfGenerator() {
    const imageBase64 = await this.generateImage();
    const doc = new jsPDF();
    doc.addImage(imageBase64, 'PNG', 10, 0, 40, 10);
    doc.save('IMAGE.pdf');
  }
}
