import ThumbnailStyles from './styles'
import Link from 'next/link';
const Thumbnail = ({imageUrl='https://via.placeholder.com/150',caption,href="",as=""}) => {
    return (
        <div>
            <Link href={href} as={as}>
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