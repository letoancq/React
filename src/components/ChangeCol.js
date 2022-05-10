


const col2 = document.getElementById('col2');
const col3 = document.getElementById('col3');
const col6 = document.getElementById('col6');

export function ChangeCol2() {
    col2.style={width:'calc(100% / 6)'};
}
export function ChangeCol3() {
    col3.style={width:'30%'};
}
export function ChangeCol6() {
    getComputedStyle(col6).width ="50%";
}