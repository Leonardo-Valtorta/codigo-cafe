const IconButton = (props) => {
    return (
    <>
        <button onClick={props.onClick}>
        {props.icon}
        </button>
    </>
    )
}
export default IconButton