import "./styles/main.scss";
import Alpine from "alpinejs";
import lozad from 'lozad';
import * as tocbot from "tocbot";
import dropdown from "./alpine-data/dropdown";

window.Alpine = Alpine;

Alpine.data("dropdown", dropdown);
Alpine.start();

window.addEventListener("DOMContentLoaded", (event) => {
  // lazy image
  const images = document.querySelectorAll('img[loading="lazy"]');
  for(let i = 0; i< images.length; i++) {
    const item = images[i];
    item.setAttribute('data-src', item.src);
    item.setAttribute('src', 'data:image/gif;base64,R0lGODlhCAAIAJEAAOnp6eTk5O7m8AAAACH5BAEAAAIALAAAAAAIAAgAAAINjAMJh2q6DnxOVsqmLQA7');
  }
  const observer = lozad(images);
  observer.observe();
});

export function generateToc() {
  const content = document.getElementById("content");
  const titles = content?.querySelectorAll("h1, h2, h3, h4");
  if (!titles || titles.length === 0) {
    const tocContainer = document.querySelector(".toc-container");
    tocContainer?.remove();
    return;
  }
  tocbot.init({
    tocSelector: ".toc",
    contentSelector: "#content",
    headingSelector: "h1, h2, h3, h4",
    extraListClasses: "space-y-1",
    extraLinkClasses: "py-1 hover:text-blue-500 hover:underline",
    collapseDepth: 6,
    headingsOffset: 100,
    scrollSmooth: true,
    scrollSmoothOffset: -100,
    tocScrollOffset: 50,
  });
}
