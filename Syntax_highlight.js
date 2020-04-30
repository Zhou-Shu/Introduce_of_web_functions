
//There is no Syntax highlight in HTML, so I write one
//the first function is for HTML and css
//the other one is for js 

//what's sad is it only works on chrome
//This is because different browsers treat a same regular experssion on different ways.
//which I didn't expact.
//In short, IE and firefox will not complie the souce code 
//if it's RE contents "look behind assertion", while chorme will.
//To make up, I used prism module to highlight my js code 

function Syntax_highlight() {
    var code = document.getElementsByClassName("intextcode");
     // re for key words
    var html_re = /(?<=\&lt\;)\s*\/?\w*/gmi;
    var css_selector_re = /(?<!<[^>]*)(\s*)?.*?(?={)(?![^<]*>)/gmi;
    var css_attr_re = /(?<!<[^>]*)(?<=;|{)(\s*)?.*?(?=:)(?![^<]*>)/gmi;
    var css_pseudo_classes_re = /(?<!<[^>]*)(?<=:)(\s*)?.*?(?={)(?![^<]*>)/gmi;
    var css_value_re = /(?<!<[^>]*)(?<=:)(\s*)\w*\b(?=;)(?![^<]*>)/gmi;
    var quto_re = /(?<!<[^>]*)(\").*?(\")(?![^<]*>)/gmi;
    
    //add <span color=""><span> for every key words
    for (let i = 0; i < code.length; i++) {
        code[i].innerHTML = code[i].innerHTML.replace(css_selector_re, function (word) { return "<span style='color:#6dc7ec;'>" + word + "</span>" });

        code[i].innerHTML = code[i].innerHTML.replace(css_pseudo_classes_re, function (word) { return "<span style='color:mediumpurple;'>" + word + "</span>" });

        code[i].innerHTML = code[i].innerHTML.replace(css_value_re, function (word) { return "<span style='color:burlywood;'>" + word + "</span>" });

        code[i].innerHTML = code[i].innerHTML.replace(css_attr_re, function (word) { return "<span style='color:lightcoral;'>" + word + "</span>" });

        code[i].innerHTML = code[i].innerHTML.replace(quto_re, function (word) { return "<span style='color: brown;'>" + word.replace(/<[^>]*>/gmi, "") + "</span>" });

        code[i].innerHTML = code[i].innerHTML.replace(html_re, function (word) { return "<span style='color: lightcoral;'>" + word + "</span>" });

        code[i].innerHTML = code[i].innerHTML.replace(/(\&lt\;)/gmi, "<span style='color: green;'>\&lt\;</span>");

        code[i].innerHTML = code[i].innerHTML.replace(/(\&gt\;)/gmi, "<span style='color: green;'>\&gt\;</span>");
    }
}

function Js_Syntax_highlight() {

    // re for key words
    var code = document.getElementsByClassName("js_code");
    var html_re = /(?<=\&lt\;)\s*\/?\w*/gmi;
    var Js_key_words_re = /(?<!<[^>]*)\b(abstract|arguments|boolean|break|byte|case|catch|char|class\*|const|continue|debugger|default|delete|do|double|else|enum\*|eval|export\*|extends\*|false|final|finally|float|for|function|goto|if|implements|import\*|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super\*|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)\b(?![^<]*>)/gmi;
    var number_re = /(?<!<[^>]*)\b\d+\b(?![^<]*>)/gmi;
    var quto_re = /(?<!<[^>]*)((\").*?(\"))|((\').*?(\'))(?![^<]*>)/gmi;
    // add Enumerator for every line and
    // add <span color=""><span> for every key words
    for (let i = 0; i < code.length; i++) {
        var line_enum = 1;
        if (code[i].innerText.slice(0, 5) != "  1: ") {

            code[i].innerText = "  1:  " + code[i].innerText;
            code[i].innerText = code[i].innerText.replace(/\n/gmi, function (word) { line_enum++; Enum = line_enum < 10 ? (" " + line_enum) : ("" + line_enum); return "\n " + Enum + ":  " })

        }
        code[i].innerHTML = code[i].innerHTML.replace(html_re, function (word) { return "<span style='color: brown;'>" + word + "</span>" });
        code[i].innerHTML = code[i].innerHTML.replace(Js_key_words_re, function (word) { return "<span style='color:blue;'>" + word + "</span>" });
        code[i].innerHTML = code[i].innerHTML.replace(number_re, function (word) { return "<span style='color: green;'>" + word + "</span>" });
        code[i].innerHTML = code[i].innerHTML.replace(quto_re, function (word) { return "<span style='color: brown;'>" + word.replace(/<[^>]*>/gmi,"") + "</span>" });

    }
}
