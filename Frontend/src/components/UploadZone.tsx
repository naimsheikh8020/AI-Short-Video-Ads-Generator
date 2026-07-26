import { UploadIcon, XIcon } from "lucide-react";
import type { UploadZoneProps } from "../types";

const UploadZone = ({
  label,
  file,
  onClear,
  onChange,
}: UploadZoneProps) => {
  return (
    <div className="relative group">
      <div
        className={`relative h-64 rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center bg-white/2 p-6 overflow-hidden ${
          file
            ? "border-violet-600/50 bg-violet-500/5"
            : "border-white/10 hover:border-violet-500/30 hover:bg-white/5"
        }`}
      >
        {file ? (
          <>
            {/* Image Preview */}
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
              <button
                type="button"
                onClick={onClear}
                className="p-2 rounded-full bg-white/10 hover:bg-red-500/20 text-white hover:text-red-400 transition-colors"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {/* File Name */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10">
              <p className="text-white text-sm truncate">{file.name}</p>
            </div>
          </>
        ) : (
          <>
            {/* Upload Icon */}
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <UploadIcon className="w-8 h-8 text-gray-400 group-hover:text-violet-400 transition-colors" />
            </div>

            {/* Label */}
            <h3 className="text-white text-xl font-semibold mb-2 text-center">
              {label}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-center text-sm max-w-[220px] leading-6">
              Drag and drop your file here or click to browse
            </p>

            {/* Hidden Input */}
            <input
              type="file"
              accept="image/*"
              onChange={onChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default UploadZone;