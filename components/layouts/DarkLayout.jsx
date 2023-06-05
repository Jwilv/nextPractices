

export const DarkLayout = ({children}) => {
  return (
    <div style={{
        backgroundColor : "rgba(105, 49, 49, 0.926)",
        borderRadius : "5px",
        padding : "10px"
    }}>
        <h3>Dark Layaout</h3>

        <div>
            { children }
        </div>

    </div>
  )
}
