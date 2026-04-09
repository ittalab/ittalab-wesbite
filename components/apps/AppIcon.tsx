import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppIconProps {
  emoji: string;
  logo?: string;
  size?: "sm" | "md" | "lg";
  isComingSoon?: boolean;
}

const sizeClasses = {
  sm: "w-10 h-10 text-xl",
  md: "w-14 h-14 text-2xl",
  lg: "w-20 h-20 text-3xl",
};

export default function AppIcon({
  emoji,
  logo,
  size = "md",
  isComingSoon = false,
}: AppIconProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full border border-[#F5F5DC]/15 bg-[#F5F5DC]/5 transition-all",
        sizeClasses[size],
        !isComingSoon && "group-hover:scale-110",
        isComingSoon && "opacity-50"
      )}
    >
      {logo ? (
        <span className="absolute inset-1 flex items-center justify-center pointer-events-none">
          <Image
            src={logo}
            alt=""
            fill
            className={cn("rounded-full z-10 object-contain")}
            style={{
              filter: isComingSoon ? "grayscale(100%) opacity(50%)" : "none",
              objectPosition: "center",
            }}
            sizes="80px"
          />
        </span>
      ) : (
        <span aria-hidden="true" className="font-medium leading-none">
          {emoji}
        </span>
      )}
    </div>
  );
}
