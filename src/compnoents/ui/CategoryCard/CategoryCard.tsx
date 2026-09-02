export default function CategoryCard() {
  return (
    <a href="/"
       className="relative w-full h-full group col-span-1 min-h-[80px] max-h-[100px] bg-gray-200 rounded-2xl flex flex-col items-center text-center">
      <div className="bottom-0 right-0 absolute  rounded-xl flex items-center justify-center overflow-hidden">
        <img src="/" alt="Электроника"
             className=" object-cover"/>
      </div>
      <span
        className="absolute top-2 left-4 text-sm font-medium text-gray-800 line-clamp-1">
                  Электроника
              </span>
    </a>
  )
}