import { Box, Button, Grid, Typography, useTheme, useMediaQuery, IconButton } from "@mui/material";
import Logo from '@assets/Logo.png'
import ItemImg from '@assets/Carrusel2.png'
import { keyframes } from '@mui/system';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import Item from '@assets/Carrusel1.png'
export const InfoGeneralDos = () => {
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
    const isMdUp = useMediaQuery(themeMui.breakpoints.up('md'));
    const isMdDown = useMediaQuery(themeMui.breakpoints.down('md'));

    const Elements = [
        {
            type:"Misión",
            title: "Lorem ipsum dolor sit amet consectetur.",
            descriptions: "Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.",
            url: "google.com"
        },

        {
            type:"Visión",
            title: "Lorem ipsum dolor sit amet consectetur.2",
            descriptions: "Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.2",
            url: "google.com"
        },
        
        {
            type:"Funciones",
            title: "Lorem ipsum dolor sit amet consectetur.2",
            descriptions: "Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.2",
            url: "google.com"
        }
    ];

    return (
        <Box sx={{ display: 'flex', paddingBlock: '5rem', backgroundColor: 'white', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
            <Box
                component={'img'}
                src={Logo}
                sx={{ width: '14rem', marginInline: 'auto' }}
            />
            <Typography variant="h4" color="secondary" textAlign={'justify'} marginInline={'auto'}>
                NOMBRE DE LA SECRETARÍA NOMBRE DE LA SECRETARÍA
            </Typography>
            <Box sx={{
                width: '100%',
                display: 'flex',
                position: 'relative',
                zIndex: 1,
                
            }}>

                <Swiper
                    loop={true}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev'
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={(swiper) => { setIndexStatus(swiper?.realIndex) }}
                    onSwiper={(swiper) => setIndexStatus(swiper?.realIndex)}
                    style={{
                        width: isMdDown ? '100%' : '50%',
                        zIndex: 2
                    }}
                >

                    {Elements.map((item, index) => (
                        <SwiperSlide>
                            <Box sx={{
                                backgroundColor: '#e3e3e3',
                                height: '100%',
                                padding: '4rem'
                            }}>
                                <Typography variant="h5" color="primary" marginBlock={'1.5rem'}>{item.type}</Typography>
                                <Typography textAlign={'justify'}>
                                    Lorem ipsum dolor sit amet consectetur. Adipiscing amet pharetra lectus at congue eget. Tristique vel elementum purus fermentum est purus turpis a interdum. In vitae bibendum pretium placerat imperdiet nam. Aenean parturient non sed nisi. Donec nibh.
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}

                    <div className="custom-prev">
                        <IconButton
                            component="button"
                            sx={{

                                color: 'primary.main',
                                padding: '8px',
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                left: '10px',
                                zIndex: 10
                            }}
                        >
                            <ArrowBackIosNewIcon sx={{ width: '2rem', height: '2rem' }} />
                        </IconButton>
                    </div>

                    <div className="custom-next">
                        <IconButton
                            sx={{
                                color: 'primary.main',
                                position: 'absolute',
                                transform: 'translateY(-50%)',
                                top: '50%',
                                right: '10px',
                                zIndex: 10
                            }}
                        >
                            <ArrowForwardIosIcon sx={{ width: '2rem', height: '2rem' }} />
                        </IconButton>
                    </div>
                </Swiper>
                {Elements.map((item, index) => (
                    <Box

                        sx={{
                            display: index === indexStatus ? 'block' : 'none',
                            width: '50%'

                        }}>
                        <Box
                            component={'img'}
                            src={Item}
                            sx={{
                                width: '100%', opacity: index === indexStatus ? 1 : 0,
                                animation: index === indexStatus ? `${fadeIn} 1s ease` : 'none',
                            }}
                        />
                    </Box>
                ))}
            </Box>

         
        </Box>
    );
}