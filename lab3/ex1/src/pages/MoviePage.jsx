import MovieCard from '../component/Movie/MovieCard.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {movies} from '../data/movie.js';
import Filter from '../component/Filter.jsx';
  
export default function MoviePage() {
  return (
    <div>
        <Filter />
        <Row xs={1} md={3} className="g-4"> 
        {movies.map((movie) => (
        <Col key={movie.id} className='d-flex justify-content-center'>

          <MovieCard
            key={movie.id} 
            img={movie.poster}
            title={movie.title}
            text={movie.description} 
            genre={movie.genre} 
          />
        </Col>
        ))}
        </Row>  
    </div>
  );
}
