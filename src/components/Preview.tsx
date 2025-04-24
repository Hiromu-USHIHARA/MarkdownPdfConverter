import { Paper } from '@mantine/core';
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
      <Paper
        withBorder
        p="md"
        style={{
          width: '100%',
          minHeight: '60vh',
          overflowX: 'auto',
        }}
      >
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Paper>
    );
  }
  