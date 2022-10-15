import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { CodemirrorComponent } from "@ctrl/ngx-codemirror";

declare var CodeMirror: any;

@Component({
    selector: 'editor',
    template: `
        <ngx-codemirror #codeMirror
            [(ngModel)]="code"
            [options] = "options"
        ></ngx-codemirror>
        <pre>{{code|json}}</pre>
    `,
    styleUrls: ['./editor.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class EditorComponent implements OnInit, AfterViewInit {


    options = {
        lineNumbers: true,
        // theme: 'material',
        mode: 'mylang'
    }
    code: string = ''

    @ViewChild(CodemirrorComponent, {static: false}) private cmComponent!: CodemirrorComponent;

    ngOnInit(): void {
    }


    ngAfterViewInit(): void {
        setTimeout(
            () => {
                // const codeMirror = this.cmComponent.codeMirrorGlobal.__zone_symbol__value.default;
                // codeMirror.defineSimpleMode('ppnext', {
                //     start: [
                //         {regex: /(?:IF|ELSE|ENDIF|WHILE|ENDWHILE|FOR|TO|NEXT)\b/, token: "keyword"},
                //         {regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i, token: "number"},
                //         {regex: /[-+\/*=<>!]+/, token: "operator"}
                //     ]
                // });
                // this.options = {
                //     lineNumbers: false,
                //     // theme: 'material',
                //     mode: 'ppnext'
                // }


                // const d = this.cmComponent.codeMirrorGlobal.__zone_symbol__value.default;
                // console.log('defineSimpleMode------>', d.defineSimpleMode);
                // console.log('------>', this.cmComponent.codeMirror);
                // var codeMirror = typeof CodeMirror !== 'undefined' ? CodeMirror : import('codemirror');
                // console.log('CodeMirror: ', codeMirror);
            }
        );

    }

}
