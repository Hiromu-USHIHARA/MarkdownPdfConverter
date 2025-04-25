import { Paper, Text } from '@mantine/core';
import { useEffect } from 'react';
import { renderMarkdownToHtml } from '../utils/markdown';

interface PreviewProps {
  markdown: string;
}

export function Preview({ markdown }: PreviewProps) {
    const html = renderMarkdownToHtml(markdown);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise();
        }
      }, 100);
      return () => clearTimeout(timeout);
    }, [html]);
  
    return (
      <div>
        <Text size="sm" fw={500} mb="xs">PDF Preview</Text>
        <Paper
          withBorder
          p="md"
          style={{
            width: '100%',
            height: '60vh',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              width: '100%',
              minHeight: '100%',
            }}
          />
        </Paper>
      </div>
    );
  }
  