const dropZone = document.getElementById("dropZone");
const pdfFileInput = document.getElementById("pdfFile");
const convertBtn = document.getElementById("convertBtn");
const statusBox = document.getElementById("status");
const terminalBox = document.getElementById("terminalBox");
const resultPopup = document.getElementById("resultPopup");
const resultStats = document.getElementById("resultStats");
const statusBadge = document.querySelector(".status-badge");

function logTerminal(message){
    terminalBox.innerHTML += "<br>> " + message;
    terminalBox.scrollTop = terminalBox.scrollHeight;
}

function setRunStatus(label){
    if(statusBadge) statusBadge.textContent = label;
}

function showSelectedFile(file){
    if(!file) return;
    const title = dropZone.querySelector("p");
    const subtitle = dropZone.querySelector("span");
    if(title) title.textContent = file.name;
    if(subtitle) subtitle.textContent = `${(file.size / 1024 / 1024).toFixed(2)} MB attached • ready for conversion`;
    statusBox.innerText = "PDF attached. Ready to run conversion.";
    setRunStatus("Ready");
}

let uploadedFile = null;

dropZone.addEventListener("click", () => pdfFileInput.click());

pdfFileInput.addEventListener("change", (e) => {
    uploadedFile = e.target.files[0];
    showSelectedFile(uploadedFile);
});

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragging");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragging");
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragging");
    uploadedFile = e.dataTransfer.files[0];
    showSelectedFile(uploadedFile);
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
        statusBox.innerText = "No PDF attached. Add a file before running conversion.";
        setRunStatus("Blocked");
        return;
    }

    if (uploadedFile.type !== "application/pdf") {
        alert("Only PDF files are supported.");
        statusBox.innerText = "Blocked: selected file is not a PDF.";
        setRunStatus("Blocked");
        return;
    }

    resultPopup.style.display = "none";
    statusBox.innerText = "Reading PDF and preparing conversion pipeline...";
    setRunStatus("Running");
    terminalBox.innerHTML = "> starting document-agent session...";
    logTerminal("loading PDF.js extraction worker...");

    const fileReader = new FileReader();

    fileReader.onload = async function() {
        try {
            const typedarray = new Uint8Array(this.result);
            const pdf = await pdfjsLib.getDocument({data: typedarray}).promise;
            const { jsPDF } = window.jspdf;
            const newPdf = new jsPDF();
            const mode = document.getElementById("catMode").value;

            logTerminal(`detected ${pdf.numPages} page(s); mode=${mode}`);

            for (let i = 1; i <= pdf.numPages; i++) {
                statusBox.innerText = `Converting page ${i}/${pdf.numPages}...`;
                setRunStatus("Testing");
                logTerminal(`extracting text layer from page ${i}...`);

                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const textItems = textContent.items.map(item => item.str).join(" ");
                const meowText = translate(textItems, mode);

                if (i > 1) newPdf.addPage();
                const lines = newPdf.splitTextToSize(meowText, 180);
                newPdf.text(lines, 10, 20);
                newPdf.text("Certified by PDF2MEOW Document Agent", 10, 285);
            }

            statusBox.innerText = "Conversion complete. Output downloaded locally.";
            setRunStatus("Completed");
            resultStats.textContent = `${uploadedFile.name} processed successfully. Generated ${pdf.numPages} page(s) with ${mode} mode.`;
            resultPopup.style.display = "block";
            logTerminal("completed: output artifact generated and downloaded.");
            newPdf.save("PDF2MEOW_output.pdf");
        } catch (error) {
            console.error(error);
            statusBox.innerText = "Conversion failed. Check whether the PDF contains readable text.";
            setRunStatus("Blocked");
            logTerminal("error: conversion failed; PDF may be scanned, encrypted, or unreadable.");
        }
    };

    fileReader.readAsArrayBuffer(uploadedFile);
});
