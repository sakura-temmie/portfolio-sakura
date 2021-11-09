const Product = ({type, nom, url, title, contents, tech }) => {
  return (
    <div className="flex mt-4">
      <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
        <p>{type}</p>
        <p className="text-4xl">{nom}</p>
      </div>
      <div className="pt-5 ml-6 text-gray-500">
        <a
          href={url}
          className="text-2xl border-b-2 px-4 pb-1"
        >
          {title}
        </a>
        <div className="mt-4 pl-4">
          <p>{contents}</p>
          <p className="text-gray-400 text-xs">使用技術：{tech} </p>
        </div>
      </div>
    </div>
  );
}

export default Product
