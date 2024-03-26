import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 50 }: Props) => {
  const [expand, setExpand] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const textLength = expand ? children : children.substring(0, maxChars);

  return (
    <p>
      {textLength}...
      <button onClick={() => setExpand(!expand)}>
        {expand ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
