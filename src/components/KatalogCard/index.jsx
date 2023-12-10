import { Box, Typography } from '@mui/material'
import React from 'react'
import './katalog.css'

export default function KatalogCard({image, text}) {
  return (
    <Box className={'CustomCard'}>
        <Box className={'CustomCardImage'}>
            <img width={'100%'} style={{maxWidth: '88.494px'}} src={image} alt={'CardImage'} />
        </Box>
        <Box className={'CustomCardText'}>
            <Typography className={'CustomText'}>
                {text}
            </Typography>
        </Box>
    </Box>
  )
}
