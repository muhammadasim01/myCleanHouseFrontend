import { BsFillEmojiSmileFill } from "react-icons/bs";
function LargeButton({ Text, customCode, color, Emoji, font, toggle }) {
  return (
    <button
      onClick={toggle}
      className={`w-full border-secondaryColor py-2 my-5 rounded-lg flex items-center px-4 ${customCode}`}
    >
      {Emoji && (
        <BsFillEmojiSmileFill className="text-secondaryColor text-2xl border-2 rounded-full" />
      )}

      <p className={`font-text text-xl ${color} ${font}`}>{Text}</p>
    </button>
  );
}

export default LargeButton;
