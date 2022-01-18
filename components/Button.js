export default function Button({ children, onClick, step }) {
  const handleClick = () => {
    step === 1 ? onClick(2) : onClick(1);
  };

  return (
    <button
      onClick={handleClick}
      className="text-white bg-black text-center uppercase py-2 px-2 h-14 rounded w-full flex gap-3 justify-center items-center mx-auto shadow-xl"
    >
      {children}
    </button>
  );
}
