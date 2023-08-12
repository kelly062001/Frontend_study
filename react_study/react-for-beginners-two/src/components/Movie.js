import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return <div >
    <img src={coverImg}></img>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link></h2>
    <div>{summary}</div>
    <ul>
      {genres.map((g)=><li >{g}</li>)}
    </ul>
  </div>;

}

Movie.propTypes ={
    id : PropTypes.number.isRequired,
    medium_cover_image:PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired, 
    genres:PropTypes.arrayOf(PropTypes.string).isRequired, 
}

export default Movie;