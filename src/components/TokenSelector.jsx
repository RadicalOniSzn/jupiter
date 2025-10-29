import { ChevronDownIcon } from "lucide-react";

export const TokenSelector = ({ token, iconColor = "white", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-[#1c2230] cursor-pointer rounded-full px-3 py-1.5 hover:bg-[#252e40]"
    >
      {token.src ? (
        <img
          src={token.src}
          alt={token.name}
          className="w-6 h-6 rounded-full object-cover"
        />
      ) : (
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center  text-xs"
          style={{
            backgroundColor: iconColor === "orange" ? "#f97316" : "white",
            color: iconColor === "orange" ? "white" : "black",
          }}
        >
          {token[0]}
        </div>
      )}
      <span>{token}</span>
      <ChevronDownIcon size={16} />
    </button>
  );
};
