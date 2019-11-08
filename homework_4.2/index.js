const spiralMatrix = (R, C, r0, c0) => {

  if (R < 1 || R > 100 || C < 1 || C > 100) {
    throw 'Invalid R or C';
  }

  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  const result = [[r0, c0]];

  if (R * C === 1) return result;

  for (let k = 1; k < 2 * (R + C) && result.length < (R * C); k += 2) {
    for (let i = 0; i < 4; i++) {
      let dk = Math.floor(k + i / 2);
      for (let j = 0; j < dk; j++) {
        r0 += dr[i];
        c0 += dc[i];
        if (r0 >= 0 && r0 < R && c0 >= 0 && c0 < C) {
          result.push([r0, c0]);
        }
      }
    }
  }
  return result;
};

console.log(spiralMatrix(1, 4, 0, 0));
console.log(spiralMatrix(5, 6, 1, 4));
