const dropZone = document.getElementById("dropZone");
const pdfFileInput = document.getElementById("pdfFile");
const convertBtn = document.getElementById("convertBtn");
const statusBox = document.getElementById("status");
const terminalBox = document.getElementById("terminalBox");
const resultPopup = document.getElementById("resultPopup");
const resultStats = document.getElementById("resultStats");

function logTerminal(message){
    terminalBox.innerHTML += "<br>> " + message;
    terminalBox.scrollTop = terminalBox.scrollHeight;
}

let uploadedFile = null;

dropZone.addEventListener("click", () => pdfFileInput.click());

pdfFileInput.addEventListener("change", (e) => {
    uploadedFile = e.target.files[0];
    dropZone.innerHTML = `<p>${uploadedFile.name}</p>`;
});

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadedFile = e.dataTransfer.files[0];
    dropZone.innerHTML = `<p>${uploadedFile.name}</p>`;
});

const CLASSIC = ["meow", "mrow", "nyaa", "miau", "prrr"];
const ANGRY = ["HISS!", "MRRROW!", "GRRR", "MEOW!", "RAWRR"];
const CUTE = ["miau~", "nyaa~", "meoww~", "purin~", "nya~"];
const ANCIENT = ["meowth", "felinara", "whiskerus", "tunae", "purrion"];

function randomize(text, bank) {
    return text.split(/\s+/).map(() => bank[Math.floor(Math.random() * bank.length)]).join(" ");
}

function translate(text, mode) {
    if (mode === "classic") return randomize(text, CLASSIC);
    if (mode === "angry") return randomize(text, ANGRY);
    if (mode === "cute") return randomize(text, CUTE);
    if (mode === "ancient") return randomize(text, ANCIENT);
    return randomize(text, CLASSIC);
}

convertBtn.addEventListener("click", async () => {
    if (!uploadedFile) {
        alert("Upload PDF first.");
        return;
    }

    statusBox.innerText = "Reading your deeply serious document...";
    terminalBox.innerHTML = "> initiating feline protocol...";
    logTerminal("extracting bureaucratic suffering...");

    const fileReader = new FileReader();

    fileReader.onload = async function() {
        const typedarray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument({data: typedarray}).promise;
        const { jsPDF } = window.jspdf;
        const newPdf = new jsPDF();

        const mode = document.getElementById("catMode").value;

        for (let i = 1; i <= pdf.numPages; i++) {
            statusBox.innerText = `Meowifying page ${i}/${pdf.numPages}...`;

            logTerminal(`injecting feline intelligence into page ${i}...`);

            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const textItems = textContent.items.map(item => item.str).join(" ");

            const meowText = translate(textItems, mode);

            if (i > 1) newPdf.addPage();

            const lines = newPdf.splitTextToSize(meowText, 180);
            newPdf.text(lines, 10, 20);
            newPdf.text("Certified by Feline Translation Bureau 🐾", 10, 285);
        }

        statusBox.innerText = "Document is now understandable by cats.";
        newPdf.save("PDF2MEOW_output.pdf");
    };

    fileReader.readAsArrayBuffer(uploadedFile);
});
