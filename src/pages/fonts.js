import localFont from 'next/font/local';
import clsx from 'clsx';

export const Mognolia = localFont({
    src: [
        {
            path: '../fonts/Magnolia-Bold.woff2',
            weight: '700',
            style: 'bold',
        },
        {
            path: '../fonts/Magnolia-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Magnolia-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-mognolia',
})
