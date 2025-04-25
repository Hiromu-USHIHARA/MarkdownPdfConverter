import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export function renderMarkdownToHtml(markdown: string): string {
  // ディスプレイ数式の処理
  const processedMarkdown = markdown.replace(
    /(\$\$|\\\[)([\s\S]*?)(\$\$|\\\])/g,
    (_, __, content) => {
      return `\n<div style="text-align: center;">$${content}$</div>\n`;
    }
  );

  return md.render(processedMarkdown);
}
