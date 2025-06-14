"use client";

import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";

interface AutoResizeTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxHeight?: number;
}

export const Textarea = ({
  maxHeight = 80,
  className = "",
  ...props
}: AutoResizeTextareaProps) => {
  const [textareaValue, setTextareaValue] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const adjustHeight = () => {
      textarea.style.height = "44px";
      const newHeight = Math.min(textarea.scrollHeight, maxHeight);
      textarea.style.height = `${newHeight}px`;
    };

    textarea.addEventListener("input", adjustHeight);
    adjustHeight(); // Initialize

    return () => {
      textarea.removeEventListener("input", adjustHeight);
    };
  }, [maxHeight]);

  return (
    <div className="flex items-center gap-x-4">
      <textarea
        ref={textareaRef}
        onChange={(e) => setTextareaValue(e.target.value)}
        placeholder="Type here..."
        className="w-full px-4 text-brand-black-1 border rounded-full py-1.5 min-h-9 focus:outline-none overflow-y-auto no-scrollbar resize-none"
        style={{ height: "44px" }}
        {...props}
      />
      {textareaValue && (
        <button className="">
          <IoSend className="size-6 text-brand-primary" />
        </button>
      )}
    </div>
  );
};
