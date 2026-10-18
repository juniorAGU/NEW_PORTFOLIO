import { useState } from "react";

export const ProjectDescription = ({ text }) => {
    const [expanded, setExpanded] = useState(false);

    const words = text.split(" ");
    const isLong = words.length > 62;

    const shownText =
        isLong && !expanded ? words.slice(0, 62).join(" ") + "..." : text;

    return (
        <p className="font-sans mt-4 text-[16px] sm:text-[15px] leading-normal text-[#C7C7C7]">
        {shownText}
        {isLong && (
            <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 bg-linear-to-l from-[#D8F25F] to-[#22C55E] bg-clip-text text-transparent hover:underline"
            >
            {expanded ? "Show less" : "Read more"}
            </button>
        )}
        </p>
    );
};