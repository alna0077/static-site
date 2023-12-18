import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-CA',
    title: 'CSS Styling',
    description: 'Just playing around',
    theme: defaultTheme({
     //    default theme config
        navbar: [
          {
              text: 'Home',
              link: '/',
          },
          {
               text: 'Styling Lists',
               link: '/lists',
           },
           {
               text: 'Styling Links',
               link: '/links',
           },
           {
               text: 'Web Fonts',
               link: '/webfonts',
           } , 
           {
               text: 'Contact',
               link: '/contact/contact.md',
           }        
        ],
        logo: '/images/AdobeStock_497856677.svg',
    }),

    base: '/nft-minting-app-main/'
}