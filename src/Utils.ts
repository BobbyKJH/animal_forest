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
// 성격
export const Personality = (personality: string) => {
  switch (personality) {
    case "Lazy":
      return "먹보";
    case "Jock":
      return "운동광";
    case "Cranky":
      return "무뚝뚝";
    case "Smug":
      return "느끼함";
    case "Normal":
      return "친절함";
    case "Peppy":
      return "아이돌";
    case "Uchi":
      return "단순활발";
    default:
      break;
  }
};
// 취미
export const Hobby = (hobby: string) => {
  switch (hobby) {
    case "Education":
      return "교육";
    case "Play":
      return "놀이";
    case "Music":
      return "음악";
    case "Fashion":
      return "패션";
    case "Fitness":
      return "운동";
    case "Nature":
      return "자연";
    default:
      break;
  }
};
