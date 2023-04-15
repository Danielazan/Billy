import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import bannerImage from 'Assets/Images/banner.jpg';



function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const spring = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100px)' },
    config: { duration: 1020 },
  });
  return (
    <animated.div style={spring}>
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          
        </div>
  </animated.div>
  )
}

export default Header
