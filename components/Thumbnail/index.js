import ThumbnailStyles from './styles'

const Thumbnail = ({imageUrl,caption}) => {
    return (
        <div>
            <img className="image" src={imageUrl} />
            <div className="text">{caption}</div>
            <style jsx>{ThumbnailStyles}</style>
        </div>
    )
}

export default Thumbnail;