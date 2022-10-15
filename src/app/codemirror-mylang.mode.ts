import * as CodeMirror from "codemirror";

export function initCodeMirrorMyLang(){

    CodeMirror.defineSimpleMode('mylang', {
        start: [
            {regex: /(?:IF|ELSE|ENDIF|WHILE|ENDWHILE|FOR|TO|NEXT|PROVAA)\b/, token: "keyword"},
            {regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i, token: "number"},
            {regex: /[-+\/*=<>!]+/, token: "operator"}
        ]
    });



}





