document.getElementById("calculateBtn").onclick = function zaka() {
  let p24 = Number(
    document.getElementById("price24").value.replaceAll(" ", ""),
  );
  let p21 = Number(
    document.getElementById("price21").value.replaceAll(" ", ""),
  );
  let p18 = Number(
    document.getElementById("price18").value.replaceAll(" ", ""),
  );
  let psilver = Number(
    document.getElementById("pricesilver").value.replaceAll(" ", ""),
  );
  let golg24 = Number(
    document.getElementById("input24").value.replaceAll(" ", ""),
  );
  let golg21 = Number(
    document.getElementById("input21").value.replaceAll(" ", ""),
  );
  let golg18 = Number(
    document.getElementById("input18").value.replaceAll(" ", ""),
  );
  let silver = Number(
    document.getElementById("inputSilver").value.replaceAll(" ", ""),
  );
  let cash = Number(
    document.getElementById("inputCash").value.replaceAll(" ", ""),
  );
  let total24 = golg24 * p24;
  let total21 = golg21 * p21;
  let total18 = golg18 * p18;
  let totalsilver = silver * psilver;
  let total = total24 + total21 + total18 + totalsilver + cash;
  let m = 85 * p21;
  let i = document.getElementById("span");
  if (p21 * p24 * p18 * psilver != 0) {
    if (total >= m) {
      let zakat = Math.ceil(total * 0.025);
      i.innerText = `زكاتك هي ${zakat} جنية مصري`;
      i.style.cssText = `
    color: green;
    opacity: 100%;
    fontSize: 25px;
    `;
    } else {
      i.innerText = "لا يوجد زكاة";
      i.style.cssText = `
    color: red;
    opacity: 100%;
    fontSize: 25px;
    `;
    }
    let ifSilver = document.getElementById("pricesilver");
    ifSilver.style.cssText = `
    border: none;
    `;
    let if18 = document.getElementById("price18");
    if18.style.cssText = `
    border: none;
    `;
    let if21 = document.getElementById("price21");
    if21.style.cssText = `
    border: none;
    `;
    let if24 = document.getElementById("price24");
    if24.style.cssText = `
    border: none;
    `;
  } else {
    i.innerText = "أكمل ادخل البيانات";
    i.style.cssText = `
    color: red;
    `;
    if (p24 == 0) {
      let if24 = document.getElementById("price24");
      if24.style.cssText = `
    border: 1px solid red;
    `;
    } else {
      let if24 = document.getElementById("price24");
      if24.style.cssText = `
    border: none;
    `;
    }
    if (p21 == 0) {
      let if21 = document.getElementById("price21");
      if21.style.cssText = `
    border: 1px solid red;
    `;
    } else {
      let if21 = document.getElementById("price21");
      if21.style.cssText = `
    border: none;
    `;
    }
    if (p18 == 0) {
      let if18 = document.getElementById("price18");
      if18.style.cssText = `
    border: 1px solid red;
    `;
    } else {
      let if18 = document.getElementById("price18");
      if18.style.cssText = `
    border: none;
    `;
    }
    if (psilver == 0) {
      let ifSilver = document.getElementById("pricesilver");
      ifSilver.style.cssText = `
    border: 1px solid red;
    `;
    } else {
      let ifSilver = document.getElementById("pricesilver");
      ifSilver.style.cssText = `
    border: none;
    `;
    }
  }
};
