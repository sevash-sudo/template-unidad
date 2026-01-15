import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Item1 from '@assets/Carrusel1.png'
import Item2 from '@assets/Carrusel2.png'
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Box, useTheme, useMediaQuery, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const BannersUno = () => {

    const themeMui = useTheme();
    const isMdDown = useMediaQuery(themeMui.breakpoints.down('md'));

    return (

        <Box sx={{
            /*Esta modificacion son estilos para modificar, la paginación de Swiper,  */
            /*"& .swiper-pagination": {
                width: '60%', position: 'absolute',
                left: '50%', transform: 'translateX(-50%)',
            },*/
            "& .swiper-pagination-bullet-active": {
                backgroundColor: (theme) => theme.palette.primary.main,
            },
            "& .swiper-pagination-bullet": {
                width: '.8rem',
                height: '.8rem',

            },
            backgroundColor: 'white',
            paddingTop: '2rem'
        }}>
            <Swiper
                effect='fade'
                pagination={{
                    clickable: true
                }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev'
                }}
                loop={true}
                scrollbar={{ draggable: true }}
                modules={[Pagination, Navigation, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                className="mySwiper"
                style={{
                    width: isMdDown ? '90%' : '80%'
                }}>
                <SwiperSlide >
                    <Box sx={{
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <Box
                            component={'img'}
                            src={Item1}
                            sx={{
                                width: '100%',
                                height: {xs:'20rem', md:'40rem'},
                                borderRadius: '.5rem',
                                zIndex: 2
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                right: '3rem',
                                backgroundColor: 'white',
                                maxWidth: '40%',
                                padding: '2rem',
                                borderRadius: '.5rem',

                            }}
                        >
                            <Typography variant='h4' color='primary' textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur.</Typography>
                            <Typography sx={{ marginBlock: '1rem' }}>Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.</Typography>
                            <Button color='secondary' variant='outlined' >
                                Seguir Leyendo
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>

<SwiperSlide >
                    <Box sx={{
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <Box
                            component={'img'}
                            src={Item2}
                            sx={{
                                width: '100%',
                                height: {xs:'20rem', md:'40rem'},
                                borderRadius: '.5rem',
                                zIndex: 2
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                right: '3rem',
                                backgroundColor: 'white',
                                maxWidth: '40%',
                                padding: '2rem',
                                borderRadius: '.5rem',

                            }}
                        >
                            <Typography variant='h4' color='primary' textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur.</Typography>
                            <Typography sx={{ marginBlock: '1rem' }}>Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.</Typography>
                            <Button color='secondary' variant='outlined' >
                                Seguir Leyendo
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
                            right: '5px',
                            zIndex: 99
                        }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
            </Swiper>

        </Box >
    );
}