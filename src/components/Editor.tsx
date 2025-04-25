import { Textarea } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

interface EditorProps {
    markdown: string;
    setMarkdown: Dispatch<SetStateAction<string>>;
}

export function Editor({ markdown, setMarkdown }: EditorProps) {
    return (
      <Textarea
        label="Markdown Input"
        placeholder="Write your Markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.currentTarget.value)}
        autosize={false}
        styles={{
          root: { 
            height: '100%', 
            width: '100%',
            maxWidth: '50vw'
          },
          input: {
            minHeight: '60vh',
            fontFamily: 'monospace',
            fontSize: '14px',
            width: '90%'
          },
        }}
      />
    );
  }
  