// src/components/FileUploader.tsx
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Text, Button, Group, Paper } from '@mantine/core';

interface FileUploaderProps {
  setMarkdown: (text: string) => void;
}

export function FileUploader({ setMarkdown }: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setMarkdown(text);
    };
    reader.readAsText(file);
  }, [setMarkdown]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/markdown': ['.md'],
      'text/plain': ['.txt'],
    },
    multiple: false,
  });

  return (
    <Paper
      withBorder
      p="lg"
      mt="md"
      {...getRootProps()}
      sx={{
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#f1f3f5' : 'white',
        borderStyle: 'dashed',
        textAlign: 'center',
      }}
    >
      <input {...getInputProps()} />
      <Text>
        {isDragActive
          ? 'Drop your file here...'
          : 'Click or drag-and-drop a Markdown file (.md or .txt) here'}
      </Text>
    </Paper>
  );
}
