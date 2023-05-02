import React from 'react'

interface typing {
    children: React.ReactNode;
}

const TitleLayout = ({ children }: typing) => {
  return (
    <div>
        <div>부분 공통 레이아웃</div>
        {children}
    </div>
  )
}

export default TitleLayout