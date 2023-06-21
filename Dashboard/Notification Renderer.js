const preview = document.querySelector("#preview");

const boldregex = /\*{2}[^\*{2}]*\*{2}/g;
const italicregex = /~[^~]*~/g;
const underlineregex = /_{2}[^_{2}]*_{2}/g;
const centeralignregex = />#{0,6}< *(?:[^\n]*\n)/g;
// const paragraphregex = /[^\n]+\n{1}/g;

window.onload = renderText;
textareabox.onfocus = renderText;
textareabox.oninput = renderText;
function renderText() {
    let value = textareabox.value;
    
    /* Rendering Headings */
    
    /* Rendering Paragraphs */

    // paragraphmatches = [...value.matchAll(paragraphregex)];
    // // console.log(paragraphmatches);
    // paragraphmatches.forEach(paragraphmatch => {
    //     len = paragraphmatch[0].length;
    //     str = `<p>${paragraphmatch[0].substring(0, len - 1)}</p>`;
    //     value = value.replaceAll(paragraphmatch[0], str);
    // });    
    
    /* Rendering Bold Texts */

    boldmatches = [...value.matchAll(boldregex)];
    // console.log(boldmatches);
    boldmatches.forEach(boldmatch => {
        len = boldmatch[0].length,
        str = `<b>${boldmatch[0].substring(2, len - 2)}</b>`;
        value = value.replaceAll(boldmatch[0], str);
    });

    /* Rendering Italic Texts */
    
    italicmatches = [...value.matchAll(italicregex)];
    // console.log(italicmatches);
    italicmatches.forEach(italicmatch => {
        len = italicmatch[0].length,
        str = `<i>${italicmatch[0].substring(1, len - 1)}</i>`;
        value = value.replaceAll(italicmatch[0], str);
    });

    /* Rendering Underline Texts */
    
    underlinematches = [...value.matchAll(underlineregex)];
    // console.log(underlinematches);
    underlinematches.forEach(underlinematch => {
        len = underlinematch[0].length;
        str = `<u>${underlinematch[0].substring(2, len - 2)}</u>`;
        value = value.replaceAll(underlinematch[0], str);
    });

    centeralignmatches = [...value.matchAll(centeralignregex)];
    // console.log(centeralignmatches);

    /* Removing Null Tags */

    value = value.replaceAll("<b></b>", "");
    value = value.replaceAll("<i></i>", "");
    value = value.replaceAll("<u></u>", "");
    value = value.replaceAll("<p></p>", "");
    
    // console.log(value);

    preview.innerHTML = value;
}

/* Setting relative scroll area */

textareabox.onscroll =  () => {
    preview.scrollTop = Math.round(textareabox.scrollTop * (preview.scrollHeight - preview.clientHeight) / (textareabox.scrollHeight - textareabox.clientHeight));
};
preview.onscroll =  () => {
    textareabox.scrollTop = Math.round(preview.scrollTop * (textareabox.scrollHeight - textareabox.clientHeight) / (preview.scrollHeight - preview.clientHeight));
};