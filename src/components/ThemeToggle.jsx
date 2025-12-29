// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import { cn } from "../lib/ulits";

// export function Themetoggle(){
//   let [isDarkMode, setIsDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     if (isDarkMode) {
//       localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   let themeToggle = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   return (
//     <div>
//       <button onClick={themeToggle}
//       className={cn(
//         "fixed top-4 right-5 p-2 rounded-full cursor-pointer transition-colors duration-300",
//         "focus:outline-hidden z-50"
//         )}>
//         {isDarkMode ? (
//           <Sun className="h-6 w-6 text-yellow-300" />
//         ) : (
//           <Moon className="h-6 w-6 text-blue-900" />
//         )}
//       </button>
//     </div>
//   );
// };

// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import { cn } from "../lib/ulits";

// export function Themetoggle() {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) return storedTheme === "dark";
//     return window.matchMedia("(prefers-color-scheme: dark)").matches; // بررسی تم سیستم
//   });

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
//   }, [isDarkMode]);

//   const themeToggle = () => setIsDarkMode((prev) => !prev);

//   return (
//     <div>
//       <button
//         onClick={themeToggle}
//         className={cn(
//           " p-2 rounded-full cursor-pointer transition-colors duration-300",
//           "focus:outline-hidden z-50"
//         )}
//       >
//         {isDarkMode ? (
//           <Sun className="h-6 w-6 text-yellow-300" />
//         ) : (
//           <Moon className="h-6 w-6 text-blue-900" />
//         )}
//       </button>
//     </div>
//   );
// };
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/ulits"; // دقت کنید نام پوشه را چک کنید

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="group relative p-2 transition-transform duration-300 active:scale-90 cursor-pointer"
      aria-label="Toggle Theme"
    >
      <div className="relative h-6 w-6 flex items-center justify-center">
        {/* آیکون خورشید */}
        <Sun
          className={cn(
            "absolute h-6 w-6 transition-all duration-500 ease-in-out",
            isDarkMode 
              ? "scale-0 rotate-90 opacity-0 text-slate-400" 
              : "scale-100 rotate-0 opacity-100 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
          )}
          strokeWidth={1.5}
        />
        
        {/* آیکون ماه */}
        <Moon
          className={cn(
            "absolute h-6 w-6 transition-all duration-500 ease-in-out",
            isDarkMode 
              ? "scale-100 rotate-0 opacity-100 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]" 
              : "scale-0 -rotate-90 opacity-0 text-slate-400"
          )}
          strokeWidth={1.5}
        />
      </div>

      {/* یک درخشش بسیار محو و ظریف فقط برای آیکون (بدون باکس پس‌زمینه) */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-500 blur-md opacity-0 group-hover:opacity-100",
        isDarkMode ? "bg-blue-400/5" : "bg-amber-500/5"
      )} />
    </button>
  );
}