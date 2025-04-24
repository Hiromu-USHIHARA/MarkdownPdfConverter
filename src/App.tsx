import { Container, Title, Group, Center, Flex } from "@mantine/core";
import { useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { PdfExporter } from "./components/PdfExporter";
import { FileUploader } from "./components/FileUploader";

function App() {
    const [markdown, setMarkdown] = useState<string>("");

    return (
      <Container size="md" p="md">
        <Title order={2} align="center" mb="md">Markdown to PDF Converter</Title>
        <Center>
          <FileUploader setMarkdown={setMarkdown} />
        </Center>

        <Flex
          mt="lg"
          gap="lg"
          justify="center"
          align="start"
          direction={{ base: 'column', md: 'row' }} // ← モバイルで縦, md以上で横
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <Editor markdown={markdown} setMarkdown={setMarkdown} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Preview markdown={markdown} />
          </div>
        </Flex>

        <Center mt="lg">
          <PdfExporter />
        </Center>
      </Container>
    );
}

export default App;