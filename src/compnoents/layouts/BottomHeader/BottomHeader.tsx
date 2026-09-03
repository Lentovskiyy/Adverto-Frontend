import BottomNavigationButton from "@/compnoents/ui/BottomNavigationButton/BottomNavigationButton";
import { House, Heart, PlusCircle, MessageSquare, User } from "lucide-react";

export default function BottomHeader () {
  return (
    <div className="flex lg:hidden fixed bottom-0 left-0 right-0 z-50 max-h-30 bg-gray-100 border-t border-gray-200">
      <ul className="w-full grid grid-cols-5">
        <li className="flex justify-center items-center">
          <BottomNavigationButton
            icon={House}
            text="Главная"
            url="/"
          />
        </li>
        <li className="flex justify-center items-center">
          <BottomNavigationButton
            icon={Heart}
            text="Избранное"
            url="/"
          />
        </li>
        <li className="flex justify-center items-center">
          <BottomNavigationButton
            icon={PlusCircle}
            text="Обьявления"
            url="/"
          />
        </li>
        <li className="flex justify-center items-center">
          <BottomNavigationButton
            icon={MessageSquare}
            text="Сообщения"
            url="/"
          />
        </li>
        <li className="flex justify-center items-center">
          <BottomNavigationButton
            icon={User}
            text="Профиль"
            url="/"
          />
        </li>
      </ul>
    </div>
  )
}