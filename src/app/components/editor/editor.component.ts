import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class EditorComponent implements OnInit {
  @Output() passStoryContent:EventEmitter<string>;
  @Input() contenido:string = "Aui deberia haber historias ...";
  @Input() isEditable:string = "";

  public value:string ="";

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
    this.value = this.contenido;
    if(this.isEditable === 'readonly'){
      console.log("contendio es ", this.contenido);
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


