// コードをここに挿入。
"use strict";

{

    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        const result = ["大吉", "中吉", "小吉", "末吉"];

        const n = Math.floor(Math.random() * result.length);
        btn.textContent = result[n];
       

    });




}
