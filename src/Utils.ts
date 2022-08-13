// 가격
export const PriceCommas = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// 성별
export const Gender = (gender: string) => {
  if (gender === "Male") {
    return "남성";
  } else {
    return "여성";
  }
};
