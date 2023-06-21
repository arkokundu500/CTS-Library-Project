const textareabox = document.querySelector('textarea#textarea');
const bold = document.querySelector('#formatbox>#bold');
const italic = document.querySelector('#formatbox>#italic');
const underline = document.querySelector('#formatbox>#underline');
const lalign = document.querySelector('#formatbox>#lalign');
const calign = document.querySelector('#formatbox>#calign');
const ralign = document.querySelector('#formatbox>#ralign');

let first = 0, last = 0;

function getSelectionArea() {
    if (document.activeElement === textareabox) {
        first = textareabox.selectionStart;
        last = textareabox.selectionEnd;
        // console.log("Range (" + first + ", " + last + ")");
    }
}

function setToBold() {

    /* Unbold */

    if ((textareabox.value.substring(first - 2, first) == "**") && (textareabox.value.substring(last, last + 2) == "**")) {
        textareabox.value = textareabox.value.substring(0, first - 2) + textareabox.value.substring(first, last) + textareabox.value.substring(last + 2);
        first = first - 2;
        last = last - 2;
        textareabox.focus();
        textareabox.setSelectionRange(first, last);
    }

    /* Bold */

    else {
        if (first != last) {
            let text = textareabox.value.substring(first, last);
            let f = first + 2, l = last + 2;
            let newtext = textareabox.value.replace(text, "**"+text+"**");
            textareabox.value = newtext;
            textareabox.focus();
            textareabox.setSelectionRange(f, l);
        }
        else {
            let proxytext = "**Add a bold text**";
            let f = first + 2, l = last + proxytext.length - 2;
            textareabox.value = textareabox.value.substring(0, first) + proxytext + textareabox.value.substring(last);
            textareabox.focus();
            textareabox.setSelectionRange(f, l);
        }
    }
}

function setToItalic() {
    
    /* Unitalic */

    if ((textareabox.value.substring(first - 1, first) == "~") && (textareabox.value.substring(last, last + 1) == "~")) {
        textareabox.value = textareabox.value.substring(0, first - 1) + textareabox.value.substring(first, last) + textareabox.value.substring(last + 1);
        first = first - 1;
        last = last - 1;
        textareabox.focus();
        textareabox.setSelectionRange(first, last);
    }

    /* Italic */

    else {
        if (first != last) {
            let text = textareabox.value.substring(first, last);
            let f = first + 1, l = last + 1;
            let newtext = textareabox.value.replace(text, "~"+text+"~");
            textareabox.value = newtext;
            textareabox.focus();
            textareabox.setSelectionRange(f, l);
        }
        else {
            let proxytext = "~Add an italic text~";
            let f = first + 1, l = last + proxytext.length - 1;
            textareabox.value = textareabox.value.substring(0, first) + proxytext + textareabox.value.substring(last);
            textareabox.focus();
            textareabox.setSelectionRange(f, l);
        }
    }
}

function setToUnderline() {

    /* Unbold */

    if ((textareabox.value.substring(first - 2, first) == "__") && (textareabox.value.substring(last, last + 2) == "__")) {
        textareabox.value = textareabox.value.substring(0, first - 2) + textareabox.value.substring(first, last) + textareabox.value.substring(last + 2);
        first = first - 2;
        last = last - 2;
        textareabox.focus();
        textareabox.setSelectionRange(first, last);
    }

    /* Bold */

    else {
        if (first != last) {
            let text = textareabox.value.substring(first, last);
            let f = first + 2, l = last + 2;
            let newtext = textareabox.value.replace(text, "__"+text+"__");
            textareabox.value = newtext;
            textareabox.focus();
            textareabox.setSelectionRange(f, l);
        }
        else {
            let proxytext = "__Add a bold text__";
            let f = first + 2, l = last + proxytext.length - 2;
            textareabox.value = textareabox.value.substring(0, first) + proxytext + textareabox.value.substring(last);
            textareabox.focus();
            textareabox.setSelectionRange(f, l);
        }
    }
}

function alignToCenter() {
    
    /* Searching new line character before the selection range */

    let f;
    for (f = first; f >= 0; f--) {
        c = textareabox.value.charAt(f);
        if (c == '\n') {
            f++;
            break;
        }
    }

    /* Searching new line character after the selection range */

    let l;
    for (l = last; l < textareabox.value.length; l++) {
        c = textareabox.value.charAt(l);
        if (c == '\n') {
            break;
        }
    }

    let string = textareabox.value.substring(f, l), nstring = "";
    let strarr = string.split("\n");

    /* If Right align is present remove it */
    
    for (let i = 0; i < strarr.length; i++) {  
        if (strarr[i].match(/>>#{0,6} *(?:.*)/)) {
            // console.log("Contains right align");
            strarr[i] = strarr[i].substring(2);
        }
    }

    strarr.forEach(str => {
        
        /* If Center align is already there ignore it */

        if (str.match(/>#{0,6}< *(?:.*)/)) {
            // console.log("Already contains center align");
        }
        
        /* Else add Center align */
        
        else {
            // console.log("Contains left align");
            c = `>${str.match(/#{0,6}(?=.*)/)}< `;
            str = str.replace(str.match(/#{0,6} *(?=.*)/), c);
        }

        nstring = nstring + str + "\n";
    });
    // console.log(nstring);
    textareabox.value = textareabox.value.substring(0, f) + nstring + textareabox.value.substring(l);
}

/* Mouse click handling */

bold.onclick = setToBold;
italic.onclick = setToItalic;
underline.onclick = setToUnderline;


// textarea.onfocus = getSelectionArea;
document.onselectionchange = getSelectionArea;

/* Disabling window shortcuts, if present */

document.onkeydown = function(f) { 
    if (document.activeElement == textareabox) {
        if (f.ctrlKey && f.key == 'b') { // Bold
            return false;
        }
        if (f.ctrlKey && f.key == 'i') { // Italic
            return false;
        }
        if (f.ctrlKey && f.key == 'u') { // Underline
            return false;
        }
        if (f.ctrlKey && f.key == 'l') { // Left align
            return false;
        }
        if (f.ctrlKey && f.key == 'e') { // Center align
            return false;
        }
        if (f.ctrlKey && f.key == 'r') { // Right align
            return false;
        }
    }
};

/* Adding custom shortcuts to textarea */

textareabox.onkeydown = function(e) {
    if (e.ctrlKey && e.key == 'b') { // Bold
        setToBold();
        // console.log("Bolded");
    }
    if (e.ctrlKey && e.key == 'i') { // Italic
        setToItalic();
        // console.log("Italic");
    }
    if (e.ctrlKey && e.key == 'u') { // Underline
        setToUnderline();
        // console.log("Underline");
    }
    if (e.ctrlKey && e.key == 'l') { // Left align
        alignToLeft();
        // console.log("Left align");
    }
    if (e.ctrlKey && e.key == 'e') { // Center align
        alignToCenter();
        // console.log("Center align");
    }
    if (e.ctrlKey && e.key == 'r') { // Right align
        aligntoRight();
        // console.log("Right align");
    }
};