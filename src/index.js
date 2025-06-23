import Button from "./components/Button";
import "./styles/common.css"; 

const root = document.getElementById("root");

const searchBtn = Button({
    label: "게스트하우스 검색하기",
    onClick: () => alert("검색 버튼 클릭됨!"),
    className: "main-btn"
});

root.append(searchBtn);