import { ArrowCircleRight } from "@phosphor-icons/react";

// eslint-disable-next-line react/prop-types
function CardCategoria({ titulo, bgColor, spanCols, spanRows }) {
  return (
    <div
      className={`flex flex-col items-center justify-between rounded-lg shadow-lg p-4 ${bgColor} ${spanCols} ${spanRows}`}
    >
      <h4 className="text-lg md:text-xl font-bold text-gray mb-4">{titulo}</h4>
      <button className="self-end mt-auto px-1 py-1 bg-black text-D_Gray text-sm rounded hover:text-primaryColor transition-colors">
        <ArrowCircleRight size={25} weight="bold"/>
      </button>
    </div>
  );

}

export default CardCategoria;
