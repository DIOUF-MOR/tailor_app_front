/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    // {
    //     id   : 'example',
    //     title: 'Example',
    //     type : 'basic',
    //     icon : 'heroicons_outline:chart-pie',
    //     link : '/example'
    // },
    {
        id   : 'dashboard',
        title: 'Accueil',
        type : 'basic',
        // icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id   : 'sinistres',
        title: 'Sinistres',
        type : 'basic',
        // icon : 'heroicons_outline:chart-pie',
        link : '/sinistres'
    },
    {
        id   : 'equipes',
        title: 'Equipes',
        type : 'basic',
        // icon : 'heroicons_outline:chart-pie',
        link : '/equipes'
    }
];

// export const horizontalNavigation: FuseNavigationItem[] = [
//     {
//         id   : 'example',
//         title: 'Example',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     }
// ];
