import {Heart, Search} from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col px-12 py-4 bg-gray-50 sticky gap-4 top-0 z-50 ">
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center bg-gray-50 w-full">
        <a href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-1">
          Adverto
        </a>

        <ul className="flex items-center justify-center gap-8 font-medium text-gray-600   px-6 py-3 rounded-2xl ">
          <li>
            <a href="/" className="flex items-center justify-center gap-1 hover:text-primary-bright ">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="">Каталог</span>
            </a>
          </li>
          <li>
            <a href="/favorites" className="flex items-center justify-center gap-1 hover:text-primary-bright ">
              <Heart className="w-5 h-5"/>
              <span>Избранное</span>
            </a>
          </li>
          <li>
            <a href="/support" className="flex items-center justify-center gap-1 hover:text-primary-bright">
              <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>support</title>
                <rect width="24" height="24" fill="none"/>
                <path fill="currentColor" d="M12,2a8,8,0,0,0-8,8v1.9A2.92,2.92,0,0,0,3,14a2.88,2.88,0,0,0,1.94,2.61C6.24,19.72,8.85,22,12,22h3V20H12c-2.26,0-4.31-1.7-5.34-4.39l-.21-.55L5.86,15A1,1,0,0,1,5,14a1,1,0,0,1,.5-.86l.5-.29V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v5H13.91a1.5,1.5,0,1,0-1.52,2H20a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V10A8,8,0,0,0,12,2Z"/>
              </svg>
              <span className="">Поддержка</span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/create"
            className="bg-accent-normal hover:text-white font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            Разместить объявление
          </a>
          <a

            href="/profile"
            className="border-2 hover:border-primary-normal border-primary-border text-primary-normal hover:bg-primary-normal hover:text-gray-50 font-medium px-5 py-2 rounded-xl transition-colors"
          >
            Профиль
          </a>
        </div>
      </nav>

      <div className="max-w-[1600px] mx-auto w-full flex items-center h-[52px] gap-4">
        <button type="button" className="hover:bg-primary-dark h-full px-4 bg-primary-normal rounded-2xl whitespace-nowrap text-gray-50 font-medium">
          Все категорий
        </button>

        <div className="flex h-full max-w-[1000px] w-full bg-primary-normal border-2 border-primary-normal rounded-xl">
          <div className="h-full w-full ">
            <input
              type="text"
              placeholder="Поиск по объявлениям..."
              className="w-full bg-white  h-full py-3 rounded-xl    text-sm focus:outline-none focus:border-primary-normal focus:ring-2 focus:ring-primary-normal/20 transition-all text-gray-900 placeholder:text-gray-400 shadow-2xs"
            />
          </div>

          <button className="px-2 hover:bg-primary-dark rounded-xl text-gray-50 whitespace-nowrap font-medium">
            Найти
          </button>
        </div>
      </div>
    </header>
  )
}