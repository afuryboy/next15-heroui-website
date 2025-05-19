"use client"
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import clsx from 'clsx';
// const ButtonContainer = styled.span`
//   position: fixed;
//   bottom: 32px;
//   right: 32px;
//   align-items: center;
//   height: 32px;
//   width: 32px;
//   justify-content: center;
//   z-index: 1000;
//   cursor: pointer;
//   animation: fadeIn 0.3s;
//   opacity: 0.5;
//   background: #3b3b98;
//   border-radius: 4px;
//   transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
//   display: ${({ isScrollButtonVisible }) =>
//     isScrollButtonVisible ? 'flex' : 'none'};

//   &:hover {
//     opacity: 1;
//   }
// `;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <span style={{display: showButton ? "flex" : "none"}} className='dark:bg-white bg-black text-white dark:text-black rounded-full fixed bottom-8 right-8 w-8 h-8 justify-center items-center z-50 cursor-pointer opacity-50 hover:opacity-100' onClick={scrollToTop}>
        <FaArrowUp />
    </span>
  )
  
};

export default BackToTopButton;