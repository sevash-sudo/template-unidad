import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Item from '@assets/Carrusel1.png'
import { Pagination, Navigation } from 'swiper/modules';
import { Box, useTheme, useMediaQuery, IconButton } from '@mui/material';
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
                modules={[Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                className="mySwiper"
                style={{
                    width: isMdDown ? '90%' : '80%'
                }}>
                <SwiperSlide >
                    <Box
                        component={'img'}
                        src={Item}
                        sx={{
                            width: '100%',
                            borderRadius: '.5rem',


                        }}
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <Box
                        component={'img'}
                        src={Item}
                        sx={{
                            width: '100%',
                            borderRadius: '.5rem',

                        }}
                    />
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