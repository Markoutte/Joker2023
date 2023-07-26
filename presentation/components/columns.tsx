// @ts-ignore
import React from "react";

function Column({sx, children}) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                ...sx
            }}
        >
            {children}
        </div>
    )
}

export default Column