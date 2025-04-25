import { Container, Title, Center, Flex } from "@mantine/core";
import { useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { FileExporter } from "./components/PdfExporter";
import { FileUploader } from "./components/FileUploader";

function App() {
    const [markdown, setMarkdown] = useState<string>("");

    return (
      <Container size="xl" p="md" style={{ maxWidth: '100%' }}>
        <Center>
          <Title order={2} ta="center" mb="md">Markdown to PDF Converter</Title>
        </Center>
        <Center>
          <FileUploader setMarkdown={setMarkdown} />
        </Center>

        <Flex
          mt="lg"
          gap="lg"
          justify="space-between"
          align="stretch"
          direction={{ base: 'column', md: 'row' }}
          style={{ width: '100%', display: 'flex' }}
        >
          <div style={{ flex: '110', minWidth: 0, width: '100%' }}>
            <Editor markdown={markdown} setMarkdown={setMarkdown} />
          </div>
          <div style={{ flex: '110', minWidth: 0, width: '100%' }}>
            <Preview markdown={markdown} />
          </div>
        </Flex>

        <Center mt="lg">
          <FileExporter markdown={markdown} />
        </Center>

        <a
          href="https://github.com/Hiromu-USHIHARA/MarkdownPdfConverter.git"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub Repository
        </a>
      </Container>
    );
}

export default App;