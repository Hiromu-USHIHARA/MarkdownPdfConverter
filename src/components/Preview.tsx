import { Paper, Text } from '@mantine/core';
import { useEffect } from 'react';
import { renderMarkdownToHtml } from '../utils/markdown';

interface PreviewProps {
  markdown: string;
}

declare global {
  interface Window {
    MathJax: {
      typesetPromise: () => Promise<void>;
      startup: {
        promise: Promise<void>;
      };
    };
  }
}

export function Preview({ markdown }: PreviewProps) {
    const html = renderMarkdownToHtml(markdown);
  
    useEffect(() => {
      const renderMath = async () => {
        if (window.MathJax) {
          try {
            await window.MathJax.startup.promise;
            await window.MathJax.typesetPromise();
          } catch (error) {
            console.error('MathJax rendering error:', error);
          }
        }
      };

      const timeout = setTimeout(renderMath, 100);
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
  