import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";
import useAttorneys from "../../hooks/useAttorneys";
import AttorneyDiv from "../../components/AttorneyDiv";
import PageLoader from "../../components/PageLoader";

const TopRatedAttorneys = () => {
  const [attorneysData, loading] = useAttorneys();
  if (loading) return <PageLoader />
  const approvedAttorneys= attorneysData.filter(data=> data.status === "approved")
  const sortedAttorneys = approvedAttorneys.slice().sort((a, b) => {
    // Calculate average rating for attorney 'a'
    const averageRatingA = a.reviews.reduce((accumulator, review) => accumulator + review.rating, 0) / a.reviews.length;

    // Calculate average rating for attorney 'b'
    const averageRatingB = b.reviews.reduce((accumulator, review) => accumulator + review.rating, 0) / b.reviews.length;

    // Sort in descending order based on average rating
    return averageRatingB - averageRatingA;
  });
  return (
    <section className="container mb-20">
      <SectionTitle
        title="Top Rated"
        redTitle="Lawyers"
        para="Meet expert lawyers from across the country."
      />
      {
        sortedAttorneys?.slice(0,3).map((attorney) => <AttorneyDiv key={attorney._id} attorney={attorney}></AttorneyDiv>)
      }
      <Link className="flex justify-center  w-fit mx-auto" to="/attorneys">
        <button className="text-center px-3 md:px-5 py-1 md:py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white mt-5">
          Show more
        </button>
      </Link>
    </section>
  );
};

export default TopRatedAttorneys;