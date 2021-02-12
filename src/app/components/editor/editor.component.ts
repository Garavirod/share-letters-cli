import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class EditorComponent implements OnInit {
  @Input() isEditable:string = "";
  @Output() passStoryContent:EventEmitter<string>;

  public value:string = '<p><b>hola soy goku bitch</b></p>';

  public tools: object = {
    items:['Undo', 'Redo', '|',
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
      readonly: ''
    },
  };
  public height: number = 500;


  constructor() {
    this.passStoryContent = new EventEmitter();
  }

  ngOnInit(): void {            
    if(this.isEditable === 'readonly'){
      this.tools = {
        items: []
      }
      this.iframe = {
        enable: true, 
        attributes: {
          readonly: this.isEditable
        },
      };
    }
  }  
  public emitStoryContent():void{
    this.passStoryContent.emit( this.value );    
  }
}


