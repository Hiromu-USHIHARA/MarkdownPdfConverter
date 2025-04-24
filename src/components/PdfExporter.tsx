import { Button } from "@mantine/core";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function PdfExporter() {
    const handleExport = async () => {
        const input = document.getElementById("preview");
        if (!input) return;

        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, "", "FAST");
        pdf.save("output.pdf");
    };

    return (
        <Button fullWidth mt="md" onClick={handleExport}>Export as PDF</Button>
    );
}
