// import { cn } from "@/utils"

import { cn } from "@/lib/utils";

interface CustomContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function CustomContainer({
  children,
  className,
}: CustomContainerProps) {
  return (
    <main className={cn("h-full w-full mx-auto max-w-screen-2xl", className)}>
      {children}
    </main>
  );
}
