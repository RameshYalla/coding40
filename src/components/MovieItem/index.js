// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {each} = props

  return (
    <Popup
      model
      trigger={<img src={each.thumbnailUrl} alt="thumbnail" className="im" />}
      position="bottom-center"
    >
      {close => (
        <div className="pop">
          <button
            type="button"
            data-testid="closeButton"
            className="trigger"
            onClick={() => close()}
          >
            .<IoMdClose className="x" />
          </button>
          <div>
            <ReactPlayer
              url={each.videoUrl}
              className="re"
              controls
              height="30vh"
              width="30vw"
            />
          </div>
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
