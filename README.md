# Markdown to PDF Converter

A web application that converts Markdown text to PDF. It also supports mathematical expressions.

## Use Online

You can use the application online at: [https://markdown-pdf-converter-7ra8ygzp2-hiromu-ushiharas-projects.vercel.app](https://markdown-pdf-converter-7ra8ygzp2-hiromu-ushiharas-projects.vercel.app)

## Features

- Real-time Markdown preview
- Mathematical expressions support (MathJax)
- PDF export
- File upload functionality
- Responsive design

## Tech Stack

- React
- TypeScript
- Vite
- MathJax
- Mantine UI

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/Hiromu-USHIHARA/MarkdownPdfConverter.git

# Move to the project directory
cd MarkdownPdfConverter

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

1. Enter Markdown text in the editor or upload a file
2. Check the content in the preview
3. Click the "Save as PDF" button to download the PDF

## Mathematical Expressions

- Inline math: `$...$` or `\(...\)`
- Display math: `$$...$$` or `\[...\]`

### Notes

- Pay attention to the order of subscripts and superscripts
  - `$x_1^2$` will be processed correctly, but `$x^2_1$` may not be processed correctly

