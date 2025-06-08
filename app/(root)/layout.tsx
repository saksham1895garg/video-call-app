import React from "react";


const RootLayout = ({ children }: {
    children: React.ReactNode;
}) => {
  return (
    <div>
        
      {children}
      footer
    </div>
  )
}

export default RootLayout;
