// @ts-ignore
import React from "react";

function Screenshot({
                        source,
                        background = 'transparent',
                        borderRadius = '0px',
                        boxShadow = '0 0 15em black',
                        padding = '3%',
                        width = '100%',
                        height = '100%',
                    }) {
    return (
        <>
            <div style={{width: width, height: height, display: "flex", justifyContent: "center", alignItems: "center", padding: padding}}
                 dangerouslySetInnerHTML={{
                     __html: `
                      <img
                        style="max-width: 100%; max-height: 100%; box-shadow: ${boxShadow}; background-color: ${background}; border-radius: ${borderRadius}"
                        src="${source}"
                      />
                    `,
                 }}
            />
        </>
    )
}

export default Screenshot