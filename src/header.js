import headerHTML from './header.html';
document.getElementById("header").innerHTML = headerHTML;
// 이미지 import (Webpack이 해시 경로로 처리해줌)
import logo from './images/logo_color.jpg';
// <img> 태그 생성
const img = document.createElement('img');
img.src = logo;
img.alt = '로고';
// 원하는 위치에 삽입 (예: id="header-left"인 div)
document.getElementById('header-left').appendChild(img);