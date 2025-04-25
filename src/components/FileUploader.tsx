// src/components/FileUploader.tsx
import { Text, Center } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { Dropzone } from "@mantine/dropzone";

interface FileUploaderProps {
  setMarkdown: (markdown: string) => void;
}

export function FileUploader({ setMarkdown }: FileUploaderProps) {
  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setMarkdown(content);
    };
    reader.readAsText(file);
  };

  return (
    <Dropzone
      onDrop={(files: File[]) => handleFileUpload(files[0])}
      accept={["text/markdown", "text/plain"]}
      maxFiles={1}
    >
      <Center style={{ minHeight: 100, pointerEvents: "none" }}>
        <div>
          <Center>
            <IconUpload size={32} stroke={1.5} />
          </Center>
          <Text size="sm" color="dimmed" inline mt={7} ta="center">
            Drag and drop a markdown file here, or click to select
          </Text>
        </div>
      </Center>
    </Dropzone>
  );
}
