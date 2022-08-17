interface CardType {
  image?: string | undefined;
  title: string | undefined;
  audio?: string;
}

const Card = ({ image, title, audio }: CardType) => (
  <>
    {image && <img src={image} className="image" />}
    <span className="title">{title}</span>
    {audio && <audio src={audio} controls />}
  </>
);

export default Card;
