/* 가격 */
export const PriceCommas = (num: number | null) => {
  if (num === null) {
    return "구매불가";
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
/* 랜덤 카드 리스트 */
export const RandomSort = (array: never[]) =>
  array.sort(() => Math.random() - 0.5);

/* 성별 */
export const Gender = (gender: string) => {
  if (gender === "Male") {
    return "남성";
  } else {
    return "여성";
  }
};

/* 성격 */
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
    case "Snooty":
      return "성숙함";
    default:
      break;
  }
};

/* 취미 */
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

/* 물고기 출현 장소 */
export const FishLocation = (location: string) => {
  switch (location) {
    case "River":
      return "강";
    case "Pond":
      return "연못";
    case "River (Clifftop)":
      return "절벽 위";
    case "River (Mouth)":
      return "하구";
    case "Pier":
      return "부둣가";
    case "Sea":
      return "바다";

    default:
      break;
  }
};

/* 곤충 출현 장소 */
export const BugLocation = (location: string) => {
  switch (location) {
    case "Flying":
      return "공중";
    case "Flying by light":
      return "공중(불빛 근처)";
    case "On trees":
      return "나무";
    case "On the ground":
      return "풀밭";
    case "Shaking trees":
      return "나무 (흔들기)";
    case "Underground":
      return "땅 속";
    case "On ponds and rivers":
      return "물 위";
    case "Flying (near water)":
      return "물가";
    case "On flowers":
      return "꽃 위";
    case "On tree stumps":
      return "그루터기";
    case "On palm trees":
      return "야자수";
    case "On rotten food":
      return "썩은 무, 사탕";
    case "On the beach":
      return "해변";
    case "On villagers":
      return "주민의 몸";
    case "On rocks and bush (when raining)":
      return "바위 및 낡은 묘목";
    case "Hitting rocks":
      return "바위치기";
    case "On white flowers":
      return "흰 꽃 위";
    case "Under trees":
      return "나무 밑";
    case "Near trash":
      return "쓰레기";
    case "On beach rocks":
      return "해벽 암반";
    default:
      break;
  }
};

/* 물고기 크기 */
export const Shadow = (size: string) => {
  switch (size) {
    case "Smallest (1)":
      return "작음";
    case "Small (2)":
      return "조금 작음";
    case "Medium (3)":
      return "중간";
    case "Medium (4)":
      return "중간";
    case "Large (5)":
      return "큼";
    case "Largest (6)":
      return "특대";
    case "Medium with fin (4)":
      return "중간\n(등지느러미)";
    case "Largest with fin (6)":
      return "특대\n(등지느러미)";
    case "Narrow":
      return "길다";
    default:
      break;
  }
};

/* 해산물 크기 */
export const SeaShadow = (size: string) => {
  switch (size) {
    case "Smallest":
      return "매우 작다";
    case "Small":
      return "작다";
    case "Medium":
      return "중간";
    case "Large":
      return "크다";
    case "Largest":
      return "매우 크다";
    default:
      break;
  }
};

/* 등장 시간 */
export const Time = (appear: string) => {
  if (appear === "") {
    return "항상";
  }
  return appear;
};

/* 속도 */
export const Speed = (speed: string) => {
  switch (speed) {
    case "Stationary":
      return "정지";
    case "Very slow":
      return "매우느림";
    case "Slow":
      return "느림";
    case "Medium":
      return "보통";
    case "Fast":
      return "빠름";
    case "Very fast":
      return "매우빠름";
    default:
      break;
  }
};

/* 가품 */
export const FakeHas = (fake: boolean) => {
  if (fake) {
    return "있음";
  } else {
    return "없음";
  }
};

/* 주문 */
export const isOrderable = (orderable: boolean) => {
  if (orderable) {
    return "가능";
  }
  return "불가능";
};
