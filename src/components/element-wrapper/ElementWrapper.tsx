
const ElementWrapper = (props: any) => {
  return (
    <div style={{
      position: 'relative',
      right: props.right,
      top: props.top,
      bottom: props.bottom,
      display: 'flex',
      flexDirection: 'column',
      width: props.width,
      height: props.height,
      backgroundColor: 'purple',
      margin: '10px',
      padding: '5px',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {props.children}
    </div>
  )
}

export default ElementWrapper