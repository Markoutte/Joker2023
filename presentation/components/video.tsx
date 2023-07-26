// @ts-ignore
import React from "react";

function Video({source, background='transparent', borderRadius='0px', boxShadow = '0 0 15em black'}) {
    return (
        <>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "3%", background: background}}
                dangerouslySetInnerHTML={{
                    __html: `
                      <video
                        style="max-width: 100%; max-height: 100%; box-shadow: ${boxShadow}; border-radius: ${borderRadius}"
                        controls
                        muted
                        src="${source}"
                      />
                    `,
                }}
            />
        </>
    )
}

export default Video