import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Item1 from '@assets/Carrusel2.png'
import Item2 from '@assets/Carrusel1.png'
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Box, useTheme, useMediaQuery, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const BannersDos = () => {

    const themeMui = useTheme();
    const isMdDown = useMediaQuery(themeMui.breakpoints.down('md'));

    return (
        <Box sx={{
            backgroundColor: 'white',
            paddingTop: '2rem'
        }}>
            <Swiper
                effect='fade'
                loop={true}

                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev'
                }}
                scrollbar={{ draggable: true }}
                modules={[Navigation, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                className="mySwiper"
                style={{
                    width: isMdDown ? '90%' : '80%'
                }}>

                <SwiperSlide >
                    <Box sx={{ display: 'flex', backgroundColor: 'white',flexDirection:{xs:'column', md:'row'}  }}>
                        <Box
                            component={'img'}
                            src={Item2}
                            sx={{
                                width: { xs: '100%', md: '70%' },
                                objectFit: 'cover',
                                height: {xs:'20rem', md:'30rem'},
                                flexShrink: 0,
                            }}
                        />
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            gap: '1rem', padding: '1rem 2rem', alignItems: 'start',
                            width: { xs: '100%', md: '30%' }
                        }}>
                            <Typography variant='h6' color='secondary'>
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                            <Typography>
                                Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.
                            </Typography>
                            <Button variant='outlined' color='primary' sx={{ borderRadius: '1rem' }}>
                                SEGUIR LEYENDO
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide >
                    <Box sx={{ display: 'flex', backgroundColor: 'white',flexDirection:{xs:'column', md:'row'}  }}>
                        <Box
                            component={'img'}
                            src={Item1}
                            sx={{
                                width: { xs: '100%', md: '70%' },
                                objectFit: 'cover',
                                height: {xs:'20rem', md:'30rem'},
                                flexShrink: 0,
                            }}
                        />
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            gap: '1rem', padding: '1rem 2rem', alignItems: 'start',
                            width: { xs: '100%', md: '30%' }
                        }}>
                            <Typography variant='h6' color='secondary'>
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                            <Typography>
                                Descripcion Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.
                            </Typography>
                            <Button variant='outlined' color='primary' sx={{ borderRadius: '1rem' }}>
                                SEGUIR LEYENDO
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>
               


                <div className="custom-prev">
                    <IconButton
                        component="button"
                        sx={{
                            backgroundColor: '#ffffffb6',
                            color: 'gray',
                            padding: '8px',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            left: '10px',
                            zIndex: 10,
                            overflow: 'visible'
                        }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                </div>
                <div className="custom-next">
                    <IconButton
                        sx={{
                            backgroundColor: '#ffffffb6',
                            color: 'gray',
                            position: 'absolute',
                            transform: 'translateY(-50%)',
                            top: '50%',
                            right: '10px',
                            zIndex: 99
                        }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
            </Swiper>

        </Box>
    );
}