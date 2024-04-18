import localFont from 'next/font/local';
import cn from 'clsx';

export const Magnolia = localFont({
    src: [
        {
            path: './Magnolia-Bold.woff2',
            weight: '700',
            style: 'bold',
        },
        {
            path: './Magnolia-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './Magnolia-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-magnolia',
})
