function solution(strArr) {
  return strArr.map((str, index) => {
    if (index % 2) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}