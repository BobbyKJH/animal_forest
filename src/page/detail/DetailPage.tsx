// React
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Componenets
import Villager from "../../components/detail/Villager";
import Fish from "../../components/detail/Fish";
import Bug from "../../components/detail/Bug";
import Sea from "../../components/detail/Sea";
import Art from "../../components/detail/Art";
import Fossil from "../../components/detail/Fossil";
// Style
import {
  BugStyle,
  DetailStyle,
  FossilStyle,
  SongStyle,
  VillagerStyle,
} from "../../style/detail/DetailStyle";
// Axios
import instance from "../../api/instance";
import Song from "../../components/detail/Song";

const DetailPage = () => {
  const { id, link } = useParams();
  const [list, setList] = useState([]);

  const List: any = list.find(
    (item: { id: number | undefined }) => item.id === Number(id)
  );

  const API = async () => {
    try {
      const res = await instance.get(`${link}.json`);
      setList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    API();
  }, []);

  // 주민 상세 페이지
  const VillagerDetail = List && link === "villagers" && (
    <VillagerStyle bubble={List.bubble_color} text={List.text_color}>
      <Villager
        image={List.image_uri}
        name={List.name_KRko}
        gender={List.gender}
        personality={List.personality}
        hobby={List.hobby}
        talk={List.catch_KRko}
        birth={List.birthday_string}
      />
    </VillagerStyle>
  );

  // 물고기 상세 페이지
  const FishDetail = List && link === "fish" && (
    <DetailStyle>
      <Fish
        image={List.icon_uri}
        name={List.name_KRko}
        take={List.catch_phrase}
        museum={List.museum_phrase}
        location={List.availability.location}
        time={List.availability.time}
        size={List.shadow}
        price={List.price}
      />
    </DetailStyle>
  );

  // 곤충 상세 페이지
  const BugDetail = List && link === "bugs" && (
    <BugStyle>
      <Bug
        image={List.icon_uri}
        name={List.name_KRko}
        take={List.catch_phrase}
        museum={List.museum_phrase}
        location={List.availability.location}
        time={List.availability.time}
        price={List.price}
      />
    </BugStyle>
  );

  // 해산물 상세 페이지
  const SeaDetail = List && link === "sea" && (
    <DetailStyle>
      <Sea
        image={List.icon_uri}
        name={List.name_KRko}
        take={List.catch_phrase}
        museum={List.museum_phrase}
        speed={List.speed}
        time={List.availability.time}
        size={List.shadow}
        price={List.price}
      />
    </DetailStyle>
  );

  // 예술작품 상세 페이지
  const ArtDetail = List && link === "art" && (
    <BugStyle>
      <Art
        image={List.image_uri}
        name={List.name_KRko}
        museum={List.museum_desc}
        fake={List.hasFake}
        buy={List.buy_price}
        sell={List.sell_price}
      />
    </BugStyle>
  );

  //화석 상세 페이지
  const FossilDetail = List && link === "fossils" && (
    <FossilStyle>
      <Fossil
        image={List.image_uri}
        name={List.name_KRko}
        museum={List.museum_phrase}
        price={List.price}
      />
    </FossilStyle>
  );

  // 노래 상세 페이지
  const SongDetail = List && link === "songs" && (
    <SongStyle>
      <Song
        image={List.image_uri}
        name={List.name_KRko}
        audio={List.music_uri}
        orderable={List.isOrderable}
        buy={List.buy_price}
        sell={List.sell_price}
      />
    </SongStyle>
  );

  return (
    <>
      {VillagerDetail}
      {FishDetail}
      {BugDetail}
      {SeaDetail}
      {ArtDetail}
      {FossilDetail}
      {SongDetail}
    </>
  );
};

export default DetailPage;
