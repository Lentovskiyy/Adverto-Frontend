import {Heart, Star, MessageCircle} from "lucide-react"

export default function ProductCard() {
  return (
    <div className=" rounded-2xl overflow-hidden  bg-gray-50 flex flex-col">
      <div className="relative bg-gray-100 h-48 flex items-center justify-center text-gray-400">
        <a href="/" className="w-full h-full flex items-center justify-center">
          <span>Фото товара</span>
          <button className="absolute top-3 right-3 w-8 h-8 bg-gray-50/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-red-500  shadow-sm">
            <Heart className="w-5 h-5"/>
          </button>
        </a>
      </div>

      <div className="p-4 flex flex-col grow justify-between">
        <div>
          <a href="" className="w-full h-full hover:text-primary-normal">
            <h3 className="font-semibold  text-lg mb-1 line-clamp-2">Видеокарта RTX 4060 Видеокарта RTX 4060 Видеокарта RTX 4060 Видеокарта RTX 4060 Видеокарта RTX 4060 Видеокарта RTX 4060Видеокарта RTX 4060 Видеокарта RTX 4060 v</h3>
          </a>
          <div className="flex items-center justify-between gap-2 ">
            <p className="text-xl font-bold text-gray-950 mb-2">35 000 ₽</p>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                <span className="font-bold text-sm">4.5</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <MessageCircle className="w-4 h-4 text-gray-400 fill-gray-400"/>
                <span className="font-bold text-sm text-gray-500">42 отзыва</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">Москва, сегодня в 12:40</p>
        </div>
        {/*<a href="/" className="text-center mt-4 w-full bg-primary-bright hover:bg-primary-dark text-gray-50 font-medium py-2.5 rounded-xl  text-sm">*/}
        {/*  Подробнее*/}
        {/*</a>*/}
      </div>
    </div>
  )
}