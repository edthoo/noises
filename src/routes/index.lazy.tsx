import { createLazyFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  // to handle  upload with button
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const handleClick = () => {
    ref?.current?.click();
  };

  // handle file drop
  const handleOnDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    // if (e.dataTransfer.items.length > 1) {
    //   toast.error("Only one file is allowed");
    //   return;
    // } else if (
    //   !acceptedFileTypes.includes(e.dataTransfer.files[0].name.split(".").pop())
    // ) {
    //   toast.error("File type not supported");
    //   return;
    // }
    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          setFile(e.dataTransfer.files[i]);
        }
      }
    }
  };

  // handle file upload
  const [file, setFile] = useState<File | null | undefined>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    setFile(uploadedFile);
  };

  return (
    <div className="w-full h-full">
      <div className="bg-red-100">
        <h1>Website name</h1>
        <h3>welcome message</h3>
      </div>
      <div className="bg-blue-100 py-20">
        <div
          className="bg-white rounded-lg shadow-md mx-auto w-[90%]"
          onDrop={handleOnDrop}
          onDragOver={(e: React.DragEvent) => {
            e.preventDefault();
          }}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold">Upload</h2>
            {file ? (
              <>
                <p>{file.name}</p>
                <button onClick={() => setFile(null)}>Remove</button>
              </>
            ) : (
              <button onClick={handleClick}>Upload your song here!</button>
            )}
            <input
              ref={ref}
              type="file"
              className="hidden"
              accept="audio/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
