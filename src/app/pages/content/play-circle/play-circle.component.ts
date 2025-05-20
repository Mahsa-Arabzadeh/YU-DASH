import { Component } from '@angular/core';

import { CdTimerModule } from 'angular-cd-timer';
import { ButtonModule } from 'primeng/button';
import { WidgetContainerComponent } from '../../../components/shared/widgetContainer/widget.component';

import html2canvas from 'html2canvas';

import { JalaliPipe } from '../../../pipes/jalali.pipe';
import { MomentFormatPipe } from '../../../pipes/moment-format.pipe';

import { jsPDF } from 'jspdf';

import * as ClassicEditor from '@ckeditor/ckeditor5-angular';

import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-play-circle',
  imports: [
    CdTimerModule,
    ButtonModule,
    WidgetContainerComponent,
    JalaliPipe,
    MomentFormatPipe,
    DialogModule,
  ],
  templateUrl: './play-circle.component.html',
  styleUrl: './play-circle.component.css',
})
export class PlayCircleComponent {
  public Editor = ClassicEditor;
  public editorData = '<p>mahsa</p>';
  visible: boolean = false;
  imageBase: string = '';

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
