import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, IconButton, Typography, useTheme, useMediaQuery, Button } from '@mui/material'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { keyframes } from '@mui/system';
import Item from '@assets/Carrusel2.png'
import { useState } from 'react';
export const CarrouselTres = () => {
    const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
    const [indexStatus, setIndexStatus] = useState(0);
    const themeMui = useTheme();
    const isMdDown = useMediaQuery(themeMui.breakpoints.down('md'));

    const Elements = [
        {
            title: "Lorem ipsum dolor sit amet consectetur.",
            descriptions: "Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.",
            url: "google.com"
        },

        {
            title: "Lorem ipsum dolor sit amet consectetur.2",
            descriptions: "Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.2",
            url: "google.com"
        }
    ];
    return (
        <Box sx={{
            display: 'flex',
            position: 'relative',
            zIndex: 1
        }}>
            <Swiper
                effect="cube"
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev'
                }}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={(swiper) => { setIndexStatus(swiper?.activeIndex) }}
                onSwiper={(swiper) => setIndexStatus(swiper?.activeIndex)}
                style={{
                    width: '100%',
                    position: 'relative',
                }}
            >
                {Elements.map(element => (
                    <SwiperSlide>
                        <Box
                            src={Item}
                            component={'img'}
                            sx={{ width: '100%', height: '95vh', objectFit: 'cover' }}
                        />
                    </SwiperSlide>
                ))}

                <div className="custom-prev">
                    <IconButton
                        component="button"
                        sx={{
                            backgroundColor: '#0000007d',
                            color: 'white',
                            padding: '8px',
                            position: 'absolute',
                            bottom: '.5rem',
                            transform: 'translateY(-50%)',
                            right: '6rem',
                            zIndex: 10
                        }}
                    >
                        <ArrowBackIosNewIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
                    </IconButton>
                </div>

                <div className="custom-next">
                    <IconButton
                        sx={{
                            backgroundColor: '#0000007d',
                            color: 'white',
                            position: 'absolute',
                            transform: 'translateY(-50%)',
                            bottom: '.5rem',
                            right: '1rem',
                            zIndex: 10
                        }}
                    >
                        <ArrowForwardIosIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
                    </IconButton>
                </div>
            </Swiper>
            {Elements.map((item, index) => (
                <Box sx={(theme) => ({
                    display: index === indexStatus ? 'block' : 'none',
                    zIndex: 4,

                    backgroundColor: 'primary.main',
                    [theme.breakpoints.down('md')]: {
                        position: 'absolute',
                        top: '2rem',
                        width: '90%',
                        height: '80%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius: '.5rem',
                    },
                    [theme.breakpoints.up('md')]: {
                        position: 'absolute',
                        width: '45%',
                        top: '10%',
                        left: '5%'
                    }
                })}>
                    <Box
                        sx={{
                            opacity: index === indexStatus ? 1 : 0,
                            animation: index === indexStatus ? `${fadeIn} 0.5s ease` : 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            padding: '4rem',
                            gap: '3rem'
                        }}
                    >
                        <Typography variant='h3' color='secondary'>{item?.title}</Typography>
                        <Typography fontSize={'1.2rem'} color='text' textAlign={'justify'}>{item?.descriptions}</Typography>
                        <Button
                            color='text'
                            sx={{
                                borderRadius: '1rem',
                                borderWidth: '2px',
                                borderStyle: 'solid',
                                borderColor: 'primary'
                            }}>
                            <Typography variant='h5'>
                                Ir
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}