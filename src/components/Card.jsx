import "../index.css";
import star from "../assets/star.png"; // static import for the star icon

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  // Dynamically create image path for card images
  const coverImg = new URL(`../assets/${props.item.coverImg}`, import.meta.url).href;

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={coverImg}
        className="card--image"
        alt={props.item.title}
      />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
