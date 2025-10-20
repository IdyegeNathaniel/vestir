"use client"

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import { slides } from "@/components/assets/assets";


export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 10000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: { xs: '100vh', md: '500px' }, 
        overflow: 'hidden' 
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <Box 
        sx={{ 
          display: 'flex',
          height: '100%',
          transition: 'transform 0.7s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{ 
              minWidth: '100%', 
              height: '100%', 
              position: 'relative' 
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={slide.id === 1}
            />
            <Box 
              sx={{ 
                position: 'absolute', 
                inset: 0, 
                bgcolor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box sx={{ textAlign: 'center', color: 'white', px: 2 }}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.75rem' },
                    fontWeight: 700,
                    mb: 2
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    mb: 4
                  }}
                >
                  {slide.subtitle}
                </Typography>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    textTranform: "none",
                    bgcolor: '#8EB69B',
                    color: '#000',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: '#235347',
                      color: 'white'
                    }
                  }}
                >
                  {slide.cta}
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={goToPrevious}
        sx={{
          position: 'absolute',
          left: { xs: 1, md: 2 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.75)'
          }
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={goToNext}
        sx={{
          position: 'absolute',
          right: { xs: 1, md: 2 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.75)'
          }
        }}
        aria-label="Next slide"
      >
        <ChevronRight />
      </IconButton>

      {/* Dots Indicator */}
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: { xs: 2, md: 4 },
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            component="button"
            onClick={() => goToSlide(index)}
            sx={{
              width: index === currentIndex ? 32 : 12,
              height: 12,
              borderRadius: 6,
              bgcolor: index === currentIndex 
                ? '#235347'
                : '#8EB69B',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: index === currentIndex 
                  ? '#235347' 
                  : 'rgba(255, 255, 255, 0.75)'
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
}