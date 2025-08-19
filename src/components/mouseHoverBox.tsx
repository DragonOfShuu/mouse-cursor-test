type Props = {
    property: string
    displayName: string
}

const MouseHoverDiv = (props: Props) => {
  return (
    <div className={"mouse-hover-div"} style={{cursor: props.property}}>
        <p>{props.displayName}</p>
    </div>
  )
}

export default MouseHoverDiv
