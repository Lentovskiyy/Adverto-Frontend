import {LucideIcon} from "lucide-react";

interface IProps {
  title: string;
  url: string;
  icon: LucideIcon;
  onClick: () => void;
}

export default function HeaderBurgerMenuButtons({title, url = "/", icon: Icon, onClick}: IProps) {
  return (
    <a
      href={url}
      onClick={onClick}
      className="flex items-center gap-3 p-3 rounded-xl text-gray-800  transition-colors font-medium"
    >
      <Icon className="w-5 h-5 " />
      <span className="text-lg">{title}</span>
    </a>
  )
}