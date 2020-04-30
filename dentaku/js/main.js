// コードをここに挿入。
"use strict"

{
    let price = document.getElementById("price");
    let num = document.getElementById("num");
    let unit = document.getElementById("unit");
    let btn = document.getElementById("btn");
    let result = document.getElementById("result");
    let reset = document.getElementById("reset");

    function checkinput() {
        if (
            price.value.match(/^[1-9][0-9]*$/) != null &&
            num.value.match(/^[1-9][0-9]*$/) != null
        ) {
            btn.classList.remove("disabled");
        } else {
            btn.classList.add("disabled");
        }

    }


    btn.addEventListener("click", function() {
        let payLess, short, payMore, over, str;
        if (this.classList.contains("disabled") === true) {
            result.textContent = "sssss";
            return;
        } else {
            payLess = Math.floor(price.value / num.value / unit.value) * unit.value;
            short = price.value - payLess * num.value;
            payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;
            over = Math.abs(payMore * num.value - price.value);
            if (over === 0 && short === 0) {
                str = "一人" + price.value / num.value + "円ちょうどです";
            } else {
                str = "一人" + payLess + "円だと" + short + "円足りません" +
                    "一人" + payMore + "円だと" + over + "円余る";

            }
            result.textContent = str;
            reset.classList.remove("hidden");
        }
    });

    price.addEventListener("keyup", checkinput);

    num.addEventListener("keyup", checkinput);

    reset.addEventListener("click", function () {
        result.textContent = "ここに結果を表示します";
        price.value = "";
        num.value = "";
        unit.value = "100";
        btn.classList.add("disabled");
        reset.classList.add("hidden");
        price.focus();
    })
    price.focus();

}