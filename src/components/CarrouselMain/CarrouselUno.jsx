import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Box, IconButton, Typography, Button } from '@mui/material'
import Item from '@assets/Carrusel1.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const CarrouselUno = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev'
            }}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            <SwiperSlide>
                <Box sx={{
                    position: 'relative',
                    "&::before": {
                        content: "' '",
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        bottom: 0,
                        background: (theme) => theme.gradients.vertical,
                        zIndex: 9
                    }
                }}>
                    <Box
                        src={Item}
                        component={'img'}
                        sx={{
                            width: '100%'
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                            zIndex: 10,
                            display: 'flex',
                            flexDirection: 'column', gap: '1rem'
                        }}
                    >
                        <Typography
                            color='text'
                            textAlign={'center'}
                            sx={(theme) => ({
                                [theme.breakpoints.up('xs')]: {
                                    fontSize: theme.typography.h5.fontSize
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: theme.typography.h3.fontSize
                                }
                            })}
                        >
                            Lorem ipsum dolor sit amet consectetur.
                        </Typography>
                        <Typography sx={{
                            textAlign: 'center',
                            color: 'white',
                            display: { xs: 'none', md: 'block' }
                        }}>
                            Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.
                        </Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                marginInline: 'auto',
                                borderRadius: '1rem'
                            }}>
                            Action
                        </Button>
                    </Box>
                </Box>
            </SwiperSlide>

            <div className="custom-prev">
                <IconButton
                    component="button"
                    sx={{
                        color: 'white',
                        padding: '8px',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        left: '10px',
                        zIndex: 10,
                    }}>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </div>
            <div className="custom-next">
                <IconButton
                    sx={{
                        color: 'white',
                        position: 'absolute',
                        transform: 'translateY(-50%)',
                        top: '50%',
                        right: '10px',
                        zIndex: 10
                    }}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>


        </Swiper>
    );
}