import * as CodeMirror from "codemirror";


export function initCodeMirrorMyLang(){

    const start = [
        {regex: /;.*/, token: "comment"},
        {regex: /'(?:[^\\]|\\.)*?(?:'|$)/, token: "string"},
        {regex: /(?:IF|ELSE|ENDIF|WHILE|ENDWHILE|FOR|TO|NEXT)\b/, token: "keyword", sol:true},
        {regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i, token: "number"},
        {regex: /[-+\/*=<>!]+/, token: "operator"},
        
    ]
    
    const states = { start };

    CodeMirror.defineSimpleMode( 'mylang', states );

}





