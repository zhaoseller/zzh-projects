
interface menuListType {
    label: string,
    url: string
}

interface menuContain {
    'SHOP BY SCENT': menuListType[]
    'SHOP BY PRODUCT': menuListType[]
    'ABOUT': menuListType[]
    'STORE': menuListType[]
    'WHOLESALE': menuListType[]
}

const menuTotal: menuContain = {
    'SHOP BY SCENT': [
        {
            label: 'Jasmine',
            url: '/shop_by_scent/Jasmine'
        },
        {
            label: 'Gardenia',
            url: '/shop_by_scent/Gardenia'
        },
        {
            label: 'Violet',
            url: 'Violet'
        },
        {
            label: 'Reverse Paris',
            url: '/shop_by_scent/Reverse_Paris'
        },
        {
            label: 'vanilla',
            url: '/shop_by_scent/vanilla'
        },
        {
            label: 'fig',
            url: '/shop_by_scent/fig'
        },
        {
            label: 'camellia',
            url: '/shop_by_scent/camellia'
        },
        {
            label: 'peony',
            url: '/shop_by_scent/peony'
        },
        {
            label: 'Wolfbarry blood orange',
            url: '/shop_by_scent/Wolfbarry_blood_orange'
        },
        {
            label: 'Rose',
            url: '/shop_by_scent/Rose'
        },
        {
            label: 'cocoa',
            url: '/shop_by_scent/cocoa'
        },
        {
            label: 'Gardenia',
            url: '/shop_by_scent/Gardenia'
        },
        {
            label: 'lavender',
            url: '/shop_by_scent/lavender'
        },
        {
            label: 'Lemon',
            url: '/shop_by_scent/lemon'
        },
        {
            label: 'Japanese persimmons',
            url: '/shop_by_scent/Japanese_persimmons'
        },
        {
            label: 'Blue wind chimes',
            url: '/shop_by_scent/Blue_wind_chimes'
        },
        {
            label: 'citronella',
            url: '/shop_by_scent/citronella'
        },
        {
            label: 'mint',
            url: '/shop_by_scent/mint'
        },
        {
            label: 'English pear with freesia',
            url: '/shop_by_scent/English pear with freesia'
        },
        {
            label: 'Chamomile',
            url: '/shop_by_scent/Chamomile'
        },
        {
            label: 'Evening jade',
            url: '/shop_by_scent/Evening_jade'
        }
    ],
    'SHOP BY PRODUCT': [
        {
            label: '2.2oz',
            url: '/shop_by_product/2.2oz'
        },
        {
            label: '4.4oz',
            url: '/shop_by_product/4.4oz'
        },
        {
            label: 'bronze bottle',
            url: '/shop_by_product/bronze_bottle'
        }
    ],
    'ABOUT': [
        {
            label: 'About Us',
            url: '/about'
        }
    ],
    'STORE': [
        {
            label: 'store',
            url: '/store'
        }
    ],
    'WHOLESALE': [
        {
            label: 'wholesale',
            url: '/wholesale'
        }
    ],
}
export default menuTotal