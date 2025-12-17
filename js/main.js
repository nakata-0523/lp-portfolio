// ハンバーガーメニュー
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// フォームバリデーション
const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    error.textContent = "すべて入力してください";
    return;
  }

  error.textContent = "送信されました（ダミー）";
});
