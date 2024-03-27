import {CiStar} from "react-icons/ci";

const StarRatingAndReviews = ({stars, reviews}) => {
  const totalRating = 5;
  const rating = stars;

  const starArr = [];

  const fullStar = Math.floor(rating);

  for (let i = 0; i <= fullStar; i++) {
    starArr.push(1);
  }

  if (rating < 5) {
    const diffStar = rating - fullStar;
    starArr.push(diffStar);

    const emptyStars = totalRating - starArr.length;

    for (let i = 0; i <= emptyStars; i++) {
      starArr.push(0);
    }
  }

  return (
    <div style={{display: "flex", gap: "2px"}}>
      {starArr.map((e, i) => {
        return (
          <div
            key={i}
            style={{
              borderRadius: "2px",
              padding: "4px",
              background: `linear-gradient(90deg, #ff643d ${e * 100}%, 
              #bbbac0 ${(e - 1) * 100}%)`,
            }}
          >
            <CiStar style={{width: "15px", height: "15px"}} />
          </div>
        );
      })}
      &nbsp;
      <p> {"(" + reviews + " customer review )"}</p>
    </div>
  );
};

export default StarRatingAndReviews;
