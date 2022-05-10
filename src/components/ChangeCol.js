const col2 = document.getElementById("col2");
const col3 = document.getElementById("col3");
const col6 = document.getElementById("col6");

export function ChangeCol2() {
  for (var i = 0; i < col2.length; i++) {
    col2[i].style.width = "calc(100% / 6)";
  }
}
export function ChangeCol3() {
  for (var i = 0; i < col2.length; i++) {
    col3[i].style.width = "30%";
  }
}
export function ChangeCol6() {
  col6.style.width = "50%";
}
