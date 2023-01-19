var addTwoNumbers = function (l1, l2) {
  const a1 = l1.reverse();
  const a2 = l2.reverse();
  let res = [];
  let a1len = a1.length - 1,
    a2len = -1;

  let isTen = false;
  for (let i = 0; i <= Math.max(a1len, a2len); i++) {
    if (a1len - i >= 0 && a2len - i >= 0) {
      if (!isTen) {
        if (a1[a1len - i] + a2[a2len - i] < 10) {
          res.unshift(a1[a1len - i] + a2[a2len - i]);
          isTen = false;
        } else {
          res.unshift((a1[a1len - i] + a2[a2len - i]) % 10);
          isTen = true;
        }
      } else {
        if (a1[a1len - i] + a2[a2len - i] + 1 < 10) {
          res.unshift(a1[a1len - i] + a2[a2len - i] + 1);
          isTen = false;
        } else {
          res.unshift((a1[a1len - i] + a2[a2len - i] + 1) % 10);
          isTen = true;
        }
      }
    } else {
      const a3 = getLoner(a1, a2);
      if (isTen) {
        if (a3[a3.length - 1 - i] + 1 < 10) {
          res.unshift(a3[a3.length - 1 - i] + 1);
          isTen = false;
        } else {
          res.unshift((a3[a3.length - 1 - i] + 1) % 10);
          isTen = true;
        }
      } else {
        res.unshift(a3[a3.length - 1 - i]);
        isTen = false;
      }
    }
  }
  console.log(res);
};
var l1 = [9, 9, 9, 9, 9, 9, 9, 9, 9],
  l2 = [9, 9, 9, 9, 9, 9];
addTwoNumbers(l1, l2);

function getLoner(l1, l2) {
  return l1.length > l2.length ? l1 : l2;
}
