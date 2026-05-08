import { Document, Packer, Paragraph, TextRun } from "docx";

export const useDownload = () => {
  const downloadAsDocx = async (summary: string, title: string) => {
    const paragraphs = summary
      .split("\n")
      .filter((paragraph) => paragraph.trim());

    const doc = new Document({
      title: title,
      sections: [
        {
          properties: {},
          children: paragraphs.map(
            (paragraph) =>
              new Paragraph({
                children: [
                  new TextRun({
                    text: paragraph,
                    font: "Arial",
                    size: 24,
                  }),
                ],
                spacing: {
                  after: 200,
                },
              })
          ),
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return { downloadAsDocx };
};
