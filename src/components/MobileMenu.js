import { gsap } from 'gsap';

// Mobile menu functionality
export const toggleMobileMenu = (isOpen, navRef, toggleRef) => {
  if (isOpen) {
    // Open menu animation
    gsap.to(navRef.current, {
      right: '0%',
      duration: 0.5,
      ease: 'power3.out'
    });
    
    // Animate hamburger to X
    gsap.to(toggleRef.current.children[0], {
      rotate: 45,
      y: 9,
      duration: 0.3
    });
    gsap.to(toggleRef.current.children[1], {
      opacity: 0,
      duration: 0.3
    });
    gsap.to(toggleRef.current.children[2], {
      rotate: -45,
      y: -9,
      duration: 0.3
    });
    
    // Animate nav items
    gsap.fromTo(
      navRef.current.children,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        delay: 0.2,
        ease: 'power3.out'
      }
    );
  } else {
    // Close menu animation
    gsap.to(navRef.current, {
      right: '-100%',
      duration: 0.5,
      ease: 'power3.in'
    });
    
    // Animate X back to hamburger
    gsap.to(toggleRef.current.children[0], {
      rotate: 0,
      y: 0,
      duration: 0.3
    });
    gsap.to(toggleRef.current.children[1], {
      opacity: 1,
      duration: 0.3
    });
    gsap.to(toggleRef.current.children[2], {
      rotate: 0,
      y: 0,
      duration: 0.3
    });
  }
};

// Header scroll effect
export const handleHeaderScroll = (headerRef, logoRef) => {
  const scrollY = window.scrollY;
  
  if (scrollY > 100) {
    gsap.to(headerRef.current, {
      padding: '10px 0',
      background: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      duration: 0.3
    });
    
    gsap.to(logoRef.current, {
      height: '40px',
      duration: 0.3
    });
  } else {
    gsap.to(headerRef.current, {
      padding: '',
      background: '',
      boxShadow: '',
      duration: 0.3
    });
    
    gsap.to(logoRef.current, {
      height: '',
      duration: 0.3
    });
  }
};
