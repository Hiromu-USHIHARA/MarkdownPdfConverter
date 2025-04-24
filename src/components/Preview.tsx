import { Paper } from '@mantine/core';
import { useEffect } from 'react';
import { renderMarkdownToHtml } from '../utils/markdown';

interface PreviewProps {
  markdown: string;
}

export function Preview({ markdown }: PreviewProps) {
  const html = renderMarkdownToHtml(markdown);

  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [html]);

  return (
    <Paper withBorder p="md" mt="md">
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Paper>
  );
}
