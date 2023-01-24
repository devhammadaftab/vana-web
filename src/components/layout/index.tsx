import React, { useState } from 'react';

export interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='app'>
            {children}
        </div>
    )
}

export default Layout;
