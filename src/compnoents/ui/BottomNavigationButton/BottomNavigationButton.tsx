import {LucideIcon} from "lucide-react";

interface IProps {
  text: string;
  url: string;
  icon: LucideIcon
}

export default function BottomNavigationButton({text, url, icon: Icon}: IProps) {
  return (
    <a href={url} className="w-full px-2 py-2 flex flex-col justify-center items-center">
      <Icon
        className="h-6 w-6"
      />
      <span className="text-sm font-medium">
        {text}
      </span>
    </a>
  )
}