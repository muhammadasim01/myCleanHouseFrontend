import { BsFillEmojiSmileFill } from "react-icons/bs";
function LargeButton({ Text, customCode, color, Emoji, font }) {
  return (
    <div
      className={`border-2 border-secondaryColor bg-secondaryColor py-2 my-5 rounded-lg flex items-center px-4 ${customCode}`}
    >
      {Emoji && (
        <BsFillEmojiSmileFill className="text-secondaryColor text-2xl border-2 rounded-full" />
      )}

      <p className={`font-text text-xl ${color} ${font}`}>{Text}</p>
    </div>
  );
}

export default LargeButton;
