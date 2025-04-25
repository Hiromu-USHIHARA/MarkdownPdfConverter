import { Button, Group } from "@mantine/core";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface FileExporterProps {
  markdown: string;
}

export function FileExporter({ markdown }: FileExporterProps) {
    const handleExportPdf = async () => {
        const input = document.getElementById("preview");
        if (!input) return;

        const canvas = await html2canvas(input, {
            scale: 2, // 高解像度でキャプチャ
            useCORS: true,
            logging: false,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const imgProps = pdf.getImageProperties(imgData);
        const margin = 10; // 余白（mm）
        const pdfWidth = pdf.internal.pageSize.getWidth() - (margin * 2);
        const pdfHeight = pdf.internal.pageSize.getHeight() - (margin * 2);
        const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

        // 画像をページごとに分割して追加
        let heightLeft = imgHeight;
        let position = 0;
        let page = 1;

        while (heightLeft > 0) {
            if (page > 1) {
                pdf.addPage();
            }

            // 現在のページに表示できる高さを計算
            const pageHeight = Math.min(pdfHeight, heightLeft);
            
            // 画像の一部を表示
            pdf.addImage(
                imgData,
                margin,
                margin,
                pdfWidth,
                imgHeight,
                undefined,
                'FAST'
            );
            pdf.setPage(page);
            pdf.clip();
            pdf.addImage(
                imgData,
                margin,
                margin - position,
                pdfWidth,
                imgHeight,
                undefined,
                'FAST'
            );

            // 余白を追加
            pdf.setDrawColor(255, 255, 255);
            pdf.setFillColor(255, 255, 255);
            pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), margin, 'F');
            pdf.rect(0, pdf.internal.pageSize.getHeight() - margin, pdf.internal.pageSize.getWidth(), margin, 'F');

            heightLeft -= pageHeight;
            position += pageHeight;
            page++;
        }

        pdf.save("output.pdf");
    };

    const handleExportMarkdown = () => {
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <Group align="center" gap="md" mt="md">
            <Button 
                size="lg" 
                variant="filled" 
                style={{ 
                    minWidth: '200px',
                    height: '48px',
                    backgroundColor: '#f0abfc',
                    '&:hover': {
                        backgroundColor: '#e879f9',
                    },
                }}
                onClick={handleExportPdf}
            >
                Export as PDF
            </Button>
            <Button 
                size="lg" 
                variant="filled" 
                style={{ 
                    minWidth: '200px',
                    height: '48px',
                    backgroundColor: '#67e8f9',
                    '&:hover': {
                        backgroundColor: '#22d3ee',
                    },
                }}
                onClick={handleExportMarkdown}
            >
                Export as Markdown
            </Button>
        </Group>
    );
}
