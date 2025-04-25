import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export function renderMarkdownToHtml(markdown: string): string {
  // displayMathモードの数式を中央揃えのinlineMathモードに変換
  const processedMarkdown = markdown.replace(
    /(\$\$|\\\[)([\s\S]*?)(\$\$|\\\])/g,
    (match, start, content, end) => {
      // 数式の前後に改行を追加
      return `\n<div style="text-align: center;">$${content}$</div>\n`;
    }
  );

  return md.render(processedMarkdown);
}
