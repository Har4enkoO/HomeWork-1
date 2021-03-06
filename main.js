let apples = 15.678;
let oranges = 123.965;
let bananas = 90.2345;
document.writeln("Завдання категорії Base", "<br \/>");
document.writeln("Максимальне значення: ",Math.max(apples,oranges,bananas), ".", "<br \/>");
document.writeln("Мінімальне значення: ",Math.min(apples,oranges,bananas),".", "<br \/>");
let sum = apples+oranges+bananas;
document.writeln("Сума всіх товарів: ", sum , ".", "<br \/>");
document.writeln("Сума всіх цілих вартостей: ",(Math.floor(apples)+Math.floor(oranges)+Math.floor(bananas)), ".", "<br \/>");
document.writeln("Сума всіх товарів, заокруглена до сотень: ", (Math.ceil(sum/100)*100) , ".", "<br \/>");
document.writeln("Чи є ціла сума всіх вартостей парною: ", ((Math.floor(sum))%2===0), "<br \/>");
document.writeln("Здача при покупці на 500 грн.: ", 500-sum, ".", "<br \/>");
document.writeln("Середня ціна: ", (sum/3).toFixed(2),".", "<br \/>");
let discount = (Math.random().toFixed(2));
document.writeln("Сума до оплати: ", (sum-sum*discount).toFixed(2),", знижка складає: ", discount*100, "% - за умови покупки всіх трьох товарі", ".", "<br \/>");
let profit;
if (discount > 0.5) {
    profit = "Втрачена вигода: " + (sum * discount - sum / 2).toFixed(2) + "<br \/>";
} else if (discount < 0.5) {
    profit = "Прибуток склав: " + (sum - sum * discount - sum / 2).toFixed(2) + "<br \/>";
} else {
    profit = "Товар продано по собівартості" + "<br \/>";
}
document.writeln(profit);
document.writeln("Завдання категорії Advanced", "<br \/>");
document.writeln(`
    Максимальне значення: ${Math.max(apples,oranges,bananas)}.<br \/>
    Мінімальне значення: ${Math.min(apples,oranges,bananas)}.<br \/>
    Сума всіх товарів: ${sum}.<br \/>
    Сума всіх цілих вартостей: ${Math.floor(apples)+Math.floor(oranges)+Math.floor(bananas)}.<br \/>
    Сума всіх товарів, заокруглена до сотень: ${Math.ceil(sum/100)*100}.<br \/>
    Чи є ціла сума всіх вартостей парною: ${Math.floor(sum)%2===0}.<br \/>
    Здача при покупці на 500 грн.: ${500-sum}.<br \/>
    Середня ціна: ${(sum/3).toFixed(2)}.<br \/>
    Сума до оплати: ${(sum-sum*discount).toFixed(2)}.<br \/>
    Знижка складає: ${discount*100}% - за умови покупки всіх трьох товарі.<br \/>
    ${profit}
`);

