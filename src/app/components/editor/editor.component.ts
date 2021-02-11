import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class EditorComponent implements OnInit {
  public tools: object = {
    items: ['Undo', 'Redo', '|',
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'SubScript', 'SuperScript', '|',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|',
      '|', 'ClearFormat', 'Print', '|', 'FullScreen']
  };
  //source code 'SourceCode'
  public iframe: object = {
    enable: true, 
    attributes: {
      readonly: 'readonly'
    },
  };
  public height: number = 500;
  constructor() { }

  ngOnInit(): void {
  }

}
