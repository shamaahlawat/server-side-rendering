// import ThumbnailStyles from './styles'
import './styles.scss'

const Thumbnail = ({imageUrl,caption}) => {
    return (
        <div>
            <img className="image" src={imageUrl} />
            <div className="text">{caption}</div>
            {/* <style jsx>{ThumbnailStyles}</style> */}
        </div>
    )
}

export default Thumbnail;