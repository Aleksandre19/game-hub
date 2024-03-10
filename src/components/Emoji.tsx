import { Image, ImageProps } from "@chakra-ui/react";
import bullsEay from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "15px" },
    4: { src: thumbsUp, alt: "thumbs-up", boxSize: "15px" },
    5: { src: bullsEay, alt: "bulls-eye", boxSize: "20px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
