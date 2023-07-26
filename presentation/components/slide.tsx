// @ts-ignore
import React from "react";

function Slide({
                   word = '',
                   separator = '',
                   size = '1em',
                   background = 'transparent',
                   innerHorizontalPadding = '100px',
                   sx,
                   children
}) {
    return (
        <div style={{
            height: "100%",
            width: "100%",
            background: background,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...sx
        }}>
            <div style={{maxWidth: "100%", maxHeight: "100%", margin: "0 " + innerHorizontalPadding}}>
                <b style={{fontSize: size}}>{word}</b>{separator}{children}
            </div>
        </div>
    )
}

export default Slide