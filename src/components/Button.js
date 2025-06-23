export default function Button({ label = "확인", onClick, type = "button", className = "" }) {
    const btn = document.createElement("button");
    btn.innerText = label;
    btn.type = type;
    btn.className = className;
    if (onClick) btn.addEventListener("click", onClick);
    return btn;
}