let istiZnakovi = (string) => {
  let br = 0;
  for (let p = 0, k = 1; k < string.length; k++) {
    if (string[k] === string[p]) {
      if (br < k - p + 1) {
        br = k - p + 1;
      }
    } else p = k;
  }
  return br;
};

console.log(istiZnakovi("baaaccd")) 
console.log(istiZnakovi("ba2dll"))
