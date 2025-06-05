import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CKEditorModule,
  loadCKEditorCloud,
  CKEditorCloudResult,
} from '@ckeditor/ckeditor5-angular';
import type {
  ClassicEditor,
  EditorConfig,
} from 'https://cdn.ckeditor.com/typings/ckeditor5.d.ts';

@Component({
  selector: 'app-root',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
  imports: [CommonModule, CKEditorModule],
  standalone: true,
})
export class PlayComponent {
  Editor: typeof ClassicEditor | null = null;

  config: EditorConfig | null = null;

  ngOnInit(): void {
    loadCKEditorCloud({
      version: '45.1.0',
      premium: true,
    }).then(this._setupEditor.bind(this));
  }

  private _setupEditor(
    cloud: CKEditorCloudResult<{ version: '45.1.0'; premium: true }>
  ) {
    const { ClassicEditor, Essentials, Paragraph, Bold, Italic } =
      cloud.CKEditor;
    const { FormatPainter } = cloud.CKEditorPremiumFeatures;

    this.Editor = ClassicEditor;
    this.config = {
      licenseKey:
        'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Nzk0OTQzOTksImp0aSI6ImI3YjE4NjU4LWQ0NGMtNDI2MC1hMmU4LTgyN2ZlMjE2ZmE2ZCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJ2YyI6ImJlYmU5Njg3In0.4ONYuOFrs1hiZfdhdZnzcf2w1FbftjcHkyDiSyeVwk76JkO5ZSr_qq5uXTMU_hBwhTc2BrIOAoWWe3zZYlKJ_g',
      plugins: [Essentials, Paragraph, Bold, Italic, FormatPainter],
      toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter'],
    };
  }
}
