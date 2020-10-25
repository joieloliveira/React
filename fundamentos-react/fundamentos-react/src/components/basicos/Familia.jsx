import React from 'react'

export default props =>{

    return(
        <div>
            {
                props.children.map((child, i) => {
                    return React.cloneElement(child,{...props,key:i})
                })
            }
        </div>
    )
}
/*
import React, {cloneElement} from 'react'

export default props =>{

    return(
        <div>
            {
                React.Children.map(props.children, (el) => {
                    return cloneElement(el,props)
                })
            }
        </div>
    )
}
*/