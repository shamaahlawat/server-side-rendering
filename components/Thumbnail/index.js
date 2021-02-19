import ThumbnailStyles from './styles'
import Link from 'next/link';
const Thumbnail = ({imageUrl='https://via.placeholder.com/150',caption}) => {
    return (
        <div>
            <Link href="/us/5617" as="/us/5617">
            <a>
            <img className="image" src={imageUrl} />
            <div className="text">{caption}</div>
            </a>
            </Link>
            <style jsx>{ThumbnailStyles}</style>
        </div>
    )
}

export default Thumbnail;