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

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/ulits";

export function Themetoggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches; // بررسی تم سیستم
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const themeToggle = () => setIsDarkMode((prev) => !prev);

  return (
    <div>
      <button
        onClick={themeToggle}
        className={cn(
          "fixed top-4 right-5 p-2 rounded-full cursor-pointer transition-colors duration-300",
          "focus:outline-hidden z-50"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </div>
  );
};
