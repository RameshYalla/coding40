// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime"
      />

      <div className="card">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movies={actionMovies} />
      </div>
      <div className="card">
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
