 "use client";

 import { useEffect, useState } from "react";

 export default function ScrollToTop() {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       setIsVisible(window.scrollY > 200);
     };

     handleScroll();
     window.addEventListener("scroll", handleScroll, { passive: true });

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   };

   if (!isVisible) {
     return null;
   }

   return (
     <button
       type="button"
       onClick={scrollToTop}
       aria-label="Scroll to top"
       className="cursor-pointer fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-black/30 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:bottom-8 md:right-8"
     >
       <span className="text-xl leading-none">↑</span>
     </button>
   );
 }
