"use client";

import { InlineWidget } from "react-calendly";
import { X } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  url: string;
  onClose: () => void;
}

export default function CalendlyModal({
  isOpen,
  url,
  onClose,
}: CalendlyModalProps) {
  if (!isOpen || !url) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-[95%] max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-white p-2 shadow-md"
        >
          <X className="h-5 w-5" />
        </button>

        <InlineWidget url={url} styles={{ height: "700px" }} />
      </div>
    </div>
  );
}
