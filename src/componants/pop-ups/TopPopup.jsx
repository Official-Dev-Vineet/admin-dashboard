import React from 'react'

const TopPopup = (msg,icon) => {
  return (
    <>
      <div className="popup top">
        <div className="text">
            <span className="icon">
                {<icon />}
            </span>
            <span className="msg">{msg}</span>
        </div>
      </div>
    </>
  )
}

export default TopPopup
