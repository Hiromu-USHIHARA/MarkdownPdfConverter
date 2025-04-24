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
            placeholder="Write your markdown here..."
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            minRows={10}
            autosize
        />
    );
}
