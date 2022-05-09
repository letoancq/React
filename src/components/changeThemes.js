export const showChangeThemes =() =>  {
    const col = document.querySelectorAll(".col");
   if (col.style.display === "none") {
     col.style.display = "block";
   } else {
     col.style.display = "none";
   }
 }