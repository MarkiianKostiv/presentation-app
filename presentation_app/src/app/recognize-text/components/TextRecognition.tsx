"use client";
import { textRecognizeStore } from "../../stores/textRecognizeStore";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import { LoadingSpinner } from "../../../components/ui/Loader";

const TextRecognition = () => {
  const { recognizedText, loading } = textRecognizeStore();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (recognizedText) {
      try {
        await navigator.clipboard.writeText(recognizedText);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };

  return (
    <div className='mt-4 p-6 rounded-lg shadow-md max-w-[50%] w-full'>
      <h2 className='text-xl font-semibold mb-2'>Recognized Text:</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='flex flex-col'>
          <div className='flex items-center justify-between mb-2'>
            <span className='font-bold'>Text:</span>
            {recognizedText ? (
              <button
                className={`font-bold border-none bg-none text-[#000] cursor-pointer ${
                  isCopied
                    ? "text-green-500 hover:text-green-500 "
                    : "hover:text-yellow-500"
                }`}
                onClick={handleCopy}
              >
                <ClipboardCopy size={24} />
              </button>
            ) : null}
          </div>

          <pre className='whitespace-pre-wrap break-words'>
            {recognizedText}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TextRecognition;
