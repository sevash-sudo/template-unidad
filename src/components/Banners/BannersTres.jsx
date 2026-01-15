import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Item from '@assets/Carrusel2.png'
import Item2 from '@assets/Carrusel1.png'
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Box, useTheme, useMediaQuery, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const BannersTres = () => {

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
                    width: isMdDown ? '90%' : '70%'
                }}>

                <SwiperSlide >
                    <Box sx={{ display: 'flex', backgroundColor: 'white', flexDirection: 'column' }}>
                        <Box
                            component={'img'}
                            src={Item2}
                            sx={{
                                width: '100%',
                                objectFit: 'cover',
                                height: { xs: '20rem', md: '30rem' },
                                flexShrink: 0,
                            }}
                        />
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            gap: '1rem', alignItems: 'start',
                            backgroundColor: 'primary.main', padding: '1rem 2rem'
                        }}>
                            <Typography variant='h5' color='secondary'>
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                            <Box sx={{ display: 'flex', alignContent: 'start', gap: '1rem' }}>
                                <Typography color='white' textAlign={'justify'}>
                                    Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '30%' }}>
                                    <Button variant='outlined' color='secondary' sx={{ borderRadius: '1rem', marginInline: 'auto' }}>
                                        SEGUIR LEYENDO
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide >
                    <Box sx={{ display: 'flex', backgroundColor: 'white', flexDirection: 'column' }}>
                        <Box
                            component={'img'}
                            src={Item}
                            sx={{
                                width: '100%',
                                objectFit: 'cover',
                                height: { xs: '20rem', md: '30rem' },
                                flexShrink: 0,
                            }}
                        />
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            gap: '1rem', alignItems: 'start',
                            backgroundColor: 'primary.main', padding: '1rem 2rem'
                        }}>
                            <Typography variant='h5' color='secondary'>
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                            <Box sx={{ display: 'flex', alignContent: 'start', gap: '1rem' }}>
                                <Typography color='white' textAlign={'justify'}>
                                    Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '30%' }}>
                                    <Button variant='outlined' color='secondary' sx={{ borderRadius: '1rem', marginInline: 'auto' }}>
                                        SEGUIR LEYENDO
                                    </Button>
                                </Box>
                            </Box>
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