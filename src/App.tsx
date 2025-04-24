import { Container, Title, Group } from "@mantine/core";
import { useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { PdfExporter } from "./components/PdfExporter";
import { FileUploader } from "./components/FileUploader";

function App() {
    const [markdown, setMarkdown] = useState<string>("");

    return (
      <Container size="md" p="md">
        <Title order={2} mb="md">Markdown to PDF Converter</Title>
        <Group>
          <FileUploader setMarkdown={setMarkdown} />
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
          <Preview markdown={markdown} />
        </Group>
        <PdfExporter />
        </Container>
    );
}

export default App;