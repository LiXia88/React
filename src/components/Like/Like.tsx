import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <FaHeart size="40" color="red" onClick={toggle} />;
  else return <FaRegHeart size="40" onClick={toggle} />;
}

export default Like;
