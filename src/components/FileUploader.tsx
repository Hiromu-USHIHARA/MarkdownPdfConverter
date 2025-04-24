import { Button, FileInput, Group, Text } from "@mantine/core";
import { useState } from "react";

interface FileUploaderProps {
    setMarkdown: (markdown: string) => void;
}

export function FileUploader({ setMarkdown }: FileUploaderProps) {
    const [file, setFile] = useState<File | null>(null);

    const handleReadFile = ()=>{
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target?.result as string;
            setMarkdown(content);
        };
        reader.readAsText(file);
    };
    
    return (
        <Group mt="md" grow>
            <FileInput
                label="Upload Markdown File"
                placeholder="Select or Drag file here"
                accept=".md, .markdown"
                value={file}
                onChange={(file) => setFile(file)}
            />
            <Button onClick={handleReadFile} disabled={!file}>Load File</Button>
        </Group>
    )
}