import { Component, ViewEncapsulation, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  loadCKEditorCloud,
  CKEditorModule,
  type CKEditorCloudResult,
  type CKEditorCloudConfig,
} from '@ckeditor/ckeditor5-angular';
import type { ClassicEditor } from 'https://cdn.ckeditor.com/typings/ckeditor5.d.ts';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';

import { LICENSE_KEY } from '../../../../const/constants';

import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

const cloudConfig = {
  version: '45.2.0',
} satisfies CKEditorCloudConfig;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CKEditorModule,
    CardModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PlayComponent implements OnInit {
  public Editor: typeof ClassicEditor | null = null;
  public config: EditorConfig | null = null;
  items: string = '';
  savedNote: string[] = [];

  public ngOnInit(): void {
    loadCKEditorCloud(cloudConfig).then(this._setupEditor.bind(this));

    const storedNote = localStorage.getItem('note');
    if (storedNote) {
      this.savedNote = JSON.parse(storedNote);
    }
  }

  convertText(text: string) {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element.innerText;
  }

  handleSaveNote(event: Event) {
    event.preventDefault();
    if (this.items) {
      this.savedNote.push(this.items);
      this.items = '';

      localStorage.setItem('note', JSON.stringify(this.savedNote));
    }
  }

  private _setupEditor(cloud: CKEditorCloudResult<typeof cloudConfig>) {
    const {
      ClassicEditor,
      AutoLink,
      Autosave,
      Bold,
      Essentials,
      Italic,
      Paragraph,
    } = cloud.CKEditor;

    this.Editor = ClassicEditor;
    this.config = {
      toolbar: {
        items: ['undo', 'redo', '|', 'bold', 'italic'],
        shouldNotGroupWhenFull: false,
      },
      plugins: [AutoLink, Autosave, Bold, Essentials, Italic, Paragraph],
      licenseKey: LICENSE_KEY,

      placeholder: 'Type or paste your notes here!',
    };
  }
}
