document.querySelector("#copyEmail").addEventListener("click", (event) => {
    console.log("Copied email to clipboard");
    navigator.clipboard.writeText("buchanlw@rose-hulman.edu");
    document.querySelector("#copyEmail").innerHTML = "(Copied!)"
});

document.querySelector("#resumeDownloadBtn").addEventListener("click", (event) => {
    console.log("Requested resume download");
    download("Resume.pdf", "resume")
})

// https://www.geeksforgeeks.org/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript/
function download(file, text) {
             
    var element = document.createElement('a');
    element.setAttribute('href', 
    'data:text/plain;charset=utf-8, '
    + encodeURIComponent(text));
    element.setAttribute('download', file);
 
    document.body.appendChild(element);
 
    element.click();
 
    document.body.removeChild(element);
}