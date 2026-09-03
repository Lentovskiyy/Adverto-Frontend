"use client"

import {Heart, Search, Menu, X, Grid, PlusCircle, User} from "lucide-react";
import {useEffect, useState} from "react";
import HeaderBurgerMenuButtons from "@/compnoents/ui/HeaderBurgerMenuButtons/HeaderBurgerMenuButtons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="px-2 md:px-4  py-2 md:py-4 flex flex-col  bg-gray-50 sticky gap-2 md:gap-4 top-0 z-50 ">
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center bg-gray-50 w-full">
        <a href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-1">
          Adverto
        </a>

        <ul className="hidden lg:flex items-center justify-center  gap-3 md:gap-4 lg:gap-8 font-medium text-gray-600   px-6 py-3 rounded-2xl ">
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

        <div className="hidden lg:flex items-center gap-2 lg:gap-4">
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

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex lg:hidden p-2 text-gray-700 hover:text-primary-normal transition-colors"
        >
          <Menu className="w-8 h-8" />
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="hidden [@media(min-width:480px)]:flex fixed inset-0 bg-black/50 transition-opacity"
              onClick={() => setIsOpen(false)}
            />

            <div className="relative w-full min-[480px]:max-w-[50%] sm:max-w-md   bg-white h-full shadow-2xl z-10 flex flex-col p-3 sm:p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold text-gray-900">Меню</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                <HeaderBurgerMenuButtons
                  title="Каталог"
                  url="/"
                  icon={Grid}
                  onClick={() => setIsOpen(false)}
                />
                <HeaderBurgerMenuButtons
                  title="Избранное"
                  url="/"
                  icon={Heart}
                  onClick={() => setIsOpen(false)}
                />
                <HeaderBurgerMenuButtons
                  title="Разместить объявление"
                  url="/"
                  icon={PlusCircle}
                  onClick={() => setIsOpen(false)}
                />
                <HeaderBurgerMenuButtons
                  title="Профиль"
                  url="/"
                  icon={User}
                  onClick={() => setIsOpen(false)}
                />
              </nav>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-[1600px] mx-auto w-full flex items-center h-[50px] md:h-[60px] gap-2 md:gap-4 ">
        <button type="button" className="hidden min-[500px]:inline-block hover:bg-primary-dark h-full px-2 md:px-4 bg-primary-normal rounded-2xl whitespace-nowrap text-gray-50 font-medium">
          Все категорий
        </button>

        <div className="flex h-full max-w-[1000px] w-full bg-primary-normal border-2 border-primary-normal rounded-xl">
          <div className="relative h-full w-full flex items-center bg-gray-50 border border-gray-200 rounded-xl  transition-all">
            <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-400 shrink-0 mx-1 md:mx-2" />
            <input
              type="text"
              placeholder="Поиск по объявлениям..."
              className="w-full bg-transparent h-full text-lg focus:outline-none text-gray-900 placeholder:text-gray-400"
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