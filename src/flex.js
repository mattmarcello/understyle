
import assign from 'object-assign'

const flex = ({
  wrap,
  align,
  justify,
  flexColumn,
  flexAuto,
  flexNone,
  order,
  // Deprecated in favor of flexColumn
  column
} = {}) => {
  const style = assign({},
    wrap ? { flexWrap: 'wrap' } : null,
    align ? { alignItems: align } : null,
    justify ? { justifyContent: justify } : null,
    (flexColumn || column) ? { flexDirection: 'column' } : null,
    flexAuto ? { flex: '1 1 auto' } : null,
    flexNone ? { flex: 'none' } : null,
    typeof order === 'number' ? { order } : null
  )

  return style
}

export default flex

