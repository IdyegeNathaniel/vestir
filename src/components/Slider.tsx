import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ChevronRight, ArrowForward } from '@mui/icons-material';
import { slides } from './assets/assets';

const HeroSlider = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: true,
        arrows: true,
        cssEase: "ease-in-out",
    };


    return (
        <Box sx={{
            width: "100%",
            overflow: "hidden",
            '& .slick-slider': {
                position: 'relative',
            },
            '& .slick-dots': {
                bottom: '30px',
                '& li button:before': {
                    fontSize: '12px',
                    color: 'white',
                    opacity: 0.5,
                },
                '& li.slick-active button:before': {
                    opacity: 1,
                    color: 'white',
                },
            },
            '& .slick-arrow': {
                zIndex: 10,
                width: '50px',
                height: '50px',
                '&:before': {
                    fontSize: '50px',
                },
            },
            '& .slick-prev': {
                left: '30px',
            },
            '& .slick-next': {
                right: '30px',
            },
        }}>
            <Slider {...sliderSettings}>
                {slides.map((slide) => (
                    <Box key={slide.id}>
                        <Box
                            sx={{
                                backgroundColor: slide.bgColor,
                                color: slide.textColor,
                                minHeight: { xs: '500px', md: '600px', lg: '700px' },
                                display: 'flex !important',
                                alignItems: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <Container maxWidth="lg">
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                        gap: 4,
                                        alignItems: 'center',
                                        py: { xs: 6, md: 8 },
                                    }}
                                >
                                    {/* Text Content */}
                                    <Box
                                        sx={{
                                            zIndex: 2,
                                            animation: 'fadeInLeft 0.8s ease-out',
                                            '@keyframes fadeInLeft': {
                                                '0%': {
                                                    opacity: 0,
                                                    transform: 'translateX(-30px)',
                                                },
                                                '100%': {
                                                    opacity: 1,
                                                    transform: 'translateX(0)',
                                                },
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="overline"
                                            sx={{
                                                color: slide.accentColor,
                                                fontWeight: 600,
                                                letterSpacing: 2,
                                                mb: 2,
                                                display: 'block',
                                            }}
                                        >
                                            {slide.subtitle}
                                        </Typography>

                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                                                fontWeight: 700,
                                                lineHeight: 1.2,
                                                mb: 3,
                                            }}
                                        >
                                            {slide.title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.125rem' },
                                                mb: 4,
                                                maxWidth: '500px',
                                                opacity: 0.9,
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {slide.description}
                                        </Typography>

                                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                endIcon={<ArrowForward />}
                                                href={slide.buttonLink}
                                                sx={{
                                                    backgroundColor: slide.accentColor,
                                                    color: slide.bgColor === '#051F20' ? '#FFFFFF' : '#051F20',
                                                    px: 4,
                                                    py: 1.5,
                                                    borderRadius: '50px',
                                                    textTransform: 'none',
                                                    fontSize: '1rem',
                                                    fontWeight: 600,
                                                    '&:hover': {
                                                        backgroundColor: slide.accentColor,
                                                        opacity: 0.9,
                                                        transform: 'translateY(-2px)',
                                                    },
                                                    transition: 'all 0.3s ease',
                                                }}
                                            >
                                                {slide.buttonText}
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                size="large"
                                                href="/contact"
                                                sx={{
                                                    borderColor: slide.textColor,
                                                    color: slide.textColor,
                                                    px: 4,
                                                    py: 1.5,
                                                    borderRadius: '50px',
                                                    textTransform: 'none',
                                                    fontSize: '1rem',
                                                    fontWeight: 600,
                                                    borderWidth: 2,
                                                    '&:hover': {
                                                        borderWidth: 2,
                                                        borderColor: slide.textColor,
                                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                    },
                                                }}
                                            >
                                                Contact Us
                                            </Button>
                                        </Stack>
                                    </Box>

                                    {/* Image/Visual Element */}
                                    <Box
                                        sx={{
                                            display: { xs: 'none', md: 'flex' },
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'relative',
                                            animation: 'fadeInRight 0.8s ease-out',
                                            '@keyframes fadeInRight': {
                                                '0%': {
                                                    opacity: 0,
                                                    transform: 'translateX(30px)',
                                                },
                                                '100%': {
                                                    opacity: 1,
                                                    transform: 'translateX(0)',
                                                },
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                                maxWidth: '500px',
                                                height: '500px',
                                                borderRadius: '20px',
                                                background: `linear-gradient(135deg, ${slide.accentColor}20 0%, transparent 100%)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '12rem',
                                                position: 'relative',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    inset: 0,
                                                    borderRadius: '20px',
                                                    border: `2px solid ${slide.accentColor}40`,
                                                    animation: 'pulse 2s ease-in-out infinite',
                                                },
                                                '@keyframes pulse': {
                                                    '0%, 100%': {
                                                        transform: 'scale(1)',
                                                        opacity: 1,
                                                    },
                                                    '50%': {
                                                        transform: 'scale(1.05)',
                                                        opacity: 0.8,
                                                    },
                                                },
                                            }}
                                        >
                                            {/* Replace with actual Image component */}
                                            {slide.image}
                                            {/* <Image 
                        src={slide.image} 
                        alt={slide.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      /> */}
                                        </Box>
                                    </Box>
                                </Box>
                            </Container>

                            {/* Decorative Elements */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-10%',
                                    right: '-5%',
                                    width: '400px',
                                    height: '400px',
                                    borderRadius: '50%',
                                    background: `radial-gradient(circle, ${slide.accentColor}10 0%, transparent 70%)`,
                                    pointerEvents: 'none',
                                    display: { xs: 'none', lg: 'block' },
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default HeroSlider;