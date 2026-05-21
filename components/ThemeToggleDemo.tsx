"use client";

import { ThemeToggle } from "@/components/ui/curtain-theme-toggle";

export default function ThemeToggleDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[400px] gap-4">
       <p className="text-sm opacity-60 text-foreground">Click the button to see the animation.</p>
       
       <div className="bg-card p-4 rounded-2xl shadow-xl border border-border">
          <ThemeToggle variant="icon" defaultTheme="dark" duration={600} />
       </div>
    </div>
  );
}
