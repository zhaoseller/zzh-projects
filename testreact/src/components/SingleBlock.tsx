interface IProps  {
    pictureSrc: string,
    smell: string,
    size: string,
    comment: string,
}

const SingleBlock: React.FC<IProps> = (props) => {
    const {
        pictureSrc,
        smell,
        size,
        comment} = props
    return (
    <div>
        <img src={pictureSrc}></img>
        <div>
            <div>{smell}</div>
            <div>{size}</div>
            <div>{comment}</div>
        </div>
    </div>)
}

export default SingleBlock