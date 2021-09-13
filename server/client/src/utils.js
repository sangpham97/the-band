import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined'
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import ComputerIcon from '@material-ui/icons/Computer'
import PermMediaIcon from '@material-ui/icons/PermMedia'
export const navLinks = [
  {
    name: 'feature',
    link: '/feature',
  },
  {
    name: 'example',
    link: '/examples',
  },
  {
    name: 'pricing',
    link: '/pricing',
  },
  {
    name: 'about us',
    link: '/about',
  },
  {
    name: 'blog',
    link: '/blog',
  },
  {
    name: 'help',
    link: '/help',
  },
]

export const features = [
  {
    icon: <DraftsOutlinedIcon style={{ fontSize: '2.5rem' }} />,
    title: 'Fan mailing list tools',
    sub: 'Add email signup forms to your website to grow your own fan email list. Design, schedule and send newsletters.',
  },
  {
    icon: <CalendarTodayOutlinedIcon style={{ fontSize: '2.5rem' }} />,
    title: 'Built-in tour calendar',
    sub: 'Add a tour calendar to your website in a few clicks, or sync with Bandsintown. Give fans detailed event info and sharing links.',
  },
  {
    icon: <FavoriteBorderOutlinedIcon style={{ fontSize: '2.5rem' }} />,
    title: 'Social media integrations',
    sub: 'Easily share music, tour dates and content to your social platforms. Pull your socials onto your website in a few clicks.',
  },
  {
    icon: <AlternateEmailOutlinedIcon style={{ fontSize: '2.5rem' }} />,
    title: 'Free domain name',
    sub: 'Get your own custom .com domain name free for as long as you are a member.',
  },
  {
    icon: <SearchOutlinedIcon style={{ fontSize: '2.5rem' }} />,
    title: 'SEO for musicians',
    sub: 'Bandzoogle websites are built with search engine optimization features designed to help fans find your music.',
  },
  {
    icon: <GridOnOutlinedIcon style={{ fontSize: '2.5rem' }} />,
    title: 'Fan data',
    sub: 'Integrated reporting tools let you know who your customers are, where they come from, and what they are buying.',
  },
]

export const OurJobs = [
  {
    title: 'Responsive templates',
    sub: 'Choose from dozens of modern mobile-ready templates for musicians. ',
  },
  {
    title: 'Visual design editing',
    sub: 'Customize your layout, fonts and colors without any coding. ',
    link: '/feature/design',
  },
  {
    title: 'EPK preset layouts',
    sub: 'Easily create a professional electronic press kit to share with media and industry.',
    link: '/feature/apk',
  },
]

export const sells = [
  {
    icon: <MusicNoteIcon style={{ fontSize: '2rem', color: 'orange' }} />,
    title: 'Sell Music',
    sub: 'Launch your own digital music store to sell single tracks and albums.',
    link: '/feature/sell-music',
  },
  {
    icon: <LocalMallIcon style={{ fontSize: '2rem', color: 'orange' }} />,
    title: 'Sell Merch',
    sub: 'Take online orders for band apparel, vinyl and other physical merch.',
    link: '/feature/sell-music',
  },
  {
    icon: (
      <ConfirmationNumberIcon style={{ fontSize: '2rem', color: 'orange' }} />
    ),
    title: 'Sell Tickets',
    sub: 'Manage live and virtual events with a calendar and built-in ticket sales.',
    link: '/feature/sell-music',
  },
  {
    icon: <VpnKeyIcon style={{ fontSize: '2rem', color: 'orange' }} />,
    title: 'Subscriptions',
    sub: 'Earn monthly income from fans who subscribe to your website.',
    link: '/feature/sell-music',
  },
  {
    icon: <MonetizationOnIcon style={{ fontSize: '2rem', color: 'orange' }} />,
    title: 'Crowdfunding',
    sub: 'Raise funds to bring your next fan-supported music project to life.',
    link: '/feature/sell-music',
  },
]

export const team = [
  {
    name: 'Hailey',
    job: 'Support/Guitar',
  },
  {
    name: 'Wes',
    job: 'Marketing/Guitar',
  },
  {
    name: 'Luis',
    job: 'Support/Drums',
  },
  {
    name: 'Sinead',
    job: 'Support/Vocals',
  },
  {
    name: 'Collin',
    job: 'Support/Guitars & Keys',
  },
]

export const Standard = [
  {
    info: {
      type: 'standard',
      priceMonth: 12.46,
      corePrice: 14.95,
    },
    utils: 'For bands growing a fan base',
    basics: ['20 pages, 50 tracks, 500 photos', 'SSL security', 'Fan data'],
    designs: ['All themes', 'Custom design tools', 'x', 'x'],
    tools: [
      '0% commission fees',
      'Crowdfunding',
      'Subscriptions',
      'Sell music downloads',
      'Sell merch',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
    ],
    promote: [
      'Mailing list (1000 fan subscribers)',
      'Electronic press kits (EPK)',
      'SEO tools',
      'Tour calendar',
      'x',
    ],
  },
]

export const Pro = [
  {
    info: {
      type: 'pro',
      priceMonth: 16.63,
      corePrice: 19.95,
    },
    utils: 'For bands growing a fan base',
    basics: ['Unlimited pages, tracks, and photos', 'SSL security', 'Fan data'],
    designs: [
      'All themes',
      'Custom design tools',
      'Custom fonts',
      'Video headers',
    ],
    tools: [
      '0% commission fees',
      'Crowdfunding',
      'Subscriptions',
      'Sell music downloads',
      'Sell merch',
      'Sell tickets',
      'Sell video and media files',
      'Tip jar',
      'Print-on-demand merch',
      'Product bundling',
      'Facebook pixel',
      'Download codes',
      'Inventory tracking',
      'Album pre-orders',
      'Discount codes',
      'Sale pricing',
      'Soundscan reporting',
    ],
    promote: [
      'Mailing list (unlimited fan subscribers)',
      'Electronic press kits (EPK)',
      'SEO tools',
      'Tour calendar',
      'Advanced mailout reports',
    ],
  },
]

export const Lite = [
  {
    info: {
      type: 'lite',
      priceMonth: 8.29,
      corePrice: 9.59,
    },
    utils: 'For bands starting out',
    basics: ['10 pages, 10 tracks, 100 photos', 'SSL security', 'Fan data'],
    designs: ['All themes', 'Custom design tools', 'x', 'x'],
    tools: [
      '0% commission fees',
      'Crowdfunding',
      'Subscriptions',
      'Sell music downloads',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
      'x',
    ],
    promote: [
      'Mailing list (100 fan subscribers)',
      'Electronic press kits (EPK)',
      'SEO tools',
      'Tour calendar',
      'x',
    ],
  },
]

export const plans = [
  {
    icon: <InsertEmoticonIcon style={{ fontSize: '3rem', color: 'orange' }} />,
    sub: 'Unlimited award-winning support',
  },
  {
    icon: <AlternateEmailIcon style={{ fontSize: '3rem', color: 'orange' }} />,
    sub: 'Free domain name',
  },
  {
    icon: <CloudQueueIcon style={{ fontSize: '3rem', color: 'orange' }} />,
    sub: 'Premium hosting',
  },
  {
    icon: <AccessAlarmIcon style={{ fontSize: '3rem', color: 'orange' }} />,
    sub: '100s of mobile-ready themes',
  },
  {
    icon: <ComputerIcon style={{ fontSize: '3rem', color: 'orange' }} />,
    sub: 'Unlimited bandwidth',
  },
  {
    icon: <PermMediaIcon style={{ fontSize: '3rem', color: 'orange' }} />,
    sub: 'Blog, music player, and more',
  },
]

export const questions = [
  {
    title: 'Can I move my existing website design to Bandzoogle?',
    sub: 'In many cases, yes, but it depends on the design. Contact us and we will let you know for sure.',
  },
  {
    title: 'What types of payments do you accept?',
    sub: 'We accept online payments by credit or debit card, or prepaid gift cards affiliated with credit card companies.',
  },
  {
    title: 'What currency will I be charged for my membership?',
    sub: 'All Bandzoogle plans are in USD.',
  },
  {
    title: 'Do you offer any discounts for yearly payments?',
    sub: 'Yes. Pay annually and get a discount equalling 2 free months.',
  },
  {
    title: 'Do your websites work on mobile devices?',
    sub: 'Yes. Bandzoogle websites work great on mobile devices.',
  },
  {
    title: 'Will I own the free domain name you register?',
    sub: 'Yes. After 60 days of membership you can move your domain anywhere you like.',
  },
  {
    title: 'What types of payments do you accept?',
    sub: 'We accept online payments by credit or debit card, or prepaid gift cards affiliated with credit card companies.',
  },
  {
    title:
      'I have a domain registered somewhere else. Can I use it on Bandzoogle?',
    sub: 'Yes. It is easy to set up existing domains. Once you upgrade to a paid plan we will guide you through the process.',
  },
  {
    title: 'Can I sign up right away to a paid plan?',
    sub: 'Yes, you can upgrade to a paid plan right after creating your free account.',
  },
  {
    title: 'Can I change plans in the future?',
    sub: 'Yes. You can upgrade/downgrade anytime.',
  },
  {
    title: 'Does Bandzoogle offer a non-profit discount?',
    sub: 'Yes. We offer free accounts to registered charitable organizations focused solely on music, with 100% of the proceeds going back to the community. Just sign up for a free account, then send us an email that includes information about your organization.',
  },
  {
    title: 'More questions?',
    link: '/help',
  },
]

export const teamJob = [
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/e2be544f100facb33962ca8a4c3384c53863142c/square/stacey-face-good.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: 'Stacey Bedford',
    location: 'Ottawa, ON',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/b82b71834723eeecef26b70a4e5dab35c2008ca0/square/chris.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: 'Chris Vinson',
    location: 'Montreal, QC',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/2a83d1408b27c9a2789fe79280297110f1510145/square/dave-c.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: 'Dave Cool',
    location: 'Montreal, QC',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/63aa8e6b20ac76ca4b4c6a672da0a65373f656eb/square/eli.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: 'Eli Gordon',
    location: 'Halifax, NS',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/a6b8039bd9a21427705f43ab248ed5a8221c0511/square/colin.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: 'Colin Mitchell',
    location: 'Montague, MA',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/84ef1a805138724793d7d099e8e0bbce9f9a9b03/square/mel.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: 'Melanie Kealey',
    location: 'Ottawa, ON',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/d9fbb91f638b2356d528a6d68fe6a1b6c753767e/square/david-e.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: 'David English',
    location: 'Chelsea, QC',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/8ea43f1cc52a77d66997c77b801cf4235d87bbca/square/dave-s.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: 'Dave Spurr',
    location: 'Leeds, UK',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/d88d2011bb89cfdd6bab6eea8535582de8e45e6c/square/josh.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Josh Turner ',
    location: 'Montpelier, VT',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/cfb1caaf3fe71e92676bab3c31edf3091f0098ae/square/adam.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Adam Percy ',
    location: 'Denman Island, BC',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/406f616dbf0e77195b2bb3e44dda540cfc52d789/square/joe-headshot.png/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png',
    name: ' Joseph Longo ',
    location: 'Montreal, QC',
  },
  {
    img: 'https://d1z39p6l75vw79.cloudfront.net/system/748ddb98e9a493ee1d6931ad083f045c6ca07e8a/square/desi.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Desi Thorne ',
    location: 'Chicago, IL',
  },
]

export const Articles = [
  {
    title: 'Domain and email',
    services: ['Domain Names', 'Transferring a Domain', 'Customize DNS'],
  },
  {
    title: 'Mailing List Tools ',
    services: [
      'Email Campaigns and Newsletters',
      'Mailing List Members',
      'Mailing List Best Practices',
    ],
  },
  {
    title: 'Design ',
    services: [
      'Changing Templates or Themes',
      'Styled Website Sections',
      'Creating Layouts and Columns',
    ],
  },
  {
    title: 'Account and billing ',
    services: [
      'Login and Password',
      'Updating Your Payment Method',
      'Changing Your Plan',
    ],
  },
  {
    title: 'Content and organization ',
    services: ['Adding Features', 'Adding Pages', 'Adding Music'],
  },
  {
    title: 'Promotion',
    services: [
      'SEO and Google Listing for your Website',
      'Using the Reports Tab',
      'Creating an EPK',
    ],
  },
  {
    title: 'Selling Tools',
    services: [
      'Bandzoogle Selling Tools',
      'Integrating Printful Into Your Website Store',
      'Selling Music',
    ],
  },
  {
    title: 'Template customization guides',
    services: [
      'Template Customization Guide: Nadia',
      'Template Customization Guide: Empire',
      'Template Customization Guide: Signal',
    ],
  },
]

export const blogLinks = [
  {
    name: 'ALL POSTS',
  },
  {
    name: 'BEAUTIFUL BAND AND WEBSITE TEMPLATES',
  },
  {
    name: 'MUSIC CAREER ADVICE',
  },
  {
    name: 'MUSIC MARKETING & PROMOTION',
  },
  {
    name: 'SELLING MUSIC ONLINE',
  },
]

export const blogs = [
  {
    image:
      'https://d1z39p6l75vw79.cloudfront.net/u/1/fb56b3603909cf505944b21d9678107ff8777f29/large/bzblog-how-to-create-bundles-your-music-fans-will-love-main.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg',
    category: ' Music Marketing & Promotion, Selling Music Online ',
    title: 'How to create bundles your music fans will love',
    avatar:
      'https://d1z39p6l75vw79.cloudfront.net/system/0e8e998f99a75eb281f8ac43bc7bf964648905c5/square/hailey-bandzoogle.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Hailey McCarthy',
    date: 'Aug 31, 2021',
  },
  {
    image:
      'https://d1z39p6l75vw79.cloudfront.net/u/1/e108a3e5820e9312c3cbaf56c7128471860f92c3/large/bzblog-music-seo-know-your-serps-main.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg',
    title: 'Music SEO: Know Your SERPs',
    category: ' Music Marketing & Promotion, Selling Music Online ',
    avatar:
      'https://d1z39p6l75vw79.cloudfront.net/system/0e8e998f99a75eb281f8ac43bc7bf964648905c5/square/hailey-bandzoogle.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Hailey McCarthy',
    date: 'Aug 31, 2021',
  },
  {
    image:
      'https://d1z39p6l75vw79.cloudfront.net/u/1/19fc395f3344d57c77d7efc1d9b6aec9786c1f7d/large/bzblog-the-10-areas-where-your-band-needs-to-stand-out-main2.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg',
    category: ' Music Marketing & Promotion, Selling Music Online ',
    title:
      '3 modern tips for achieving a professional quality recording on a budget',
    avatar:
      'https://d1z39p6l75vw79.cloudfront.net/system/0e8e998f99a75eb281f8ac43bc7bf964648905c5/square/hailey-bandzoogle.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Hailey McCarthy',
    date: 'Aug 31, 2021',
  },
  {
    image:
      'https://d1z39p6l75vw79.cloudfront.net/u/1/fb56b3603909cf505944b21d9678107ff8777f29/large/bzblog-how-to-create-bundles-your-music-fans-will-love-main.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg',
    category: ' Music Marketing & Promotion, Selling Music Online ',
    title: 'How to create bundles your music fans will love',
    avatar:
      'https://d1z39p6l75vw79.cloudfront.net/system/0e8e998f99a75eb281f8ac43bc7bf964648905c5/square/hailey-bandzoogle.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Hailey McCarthy',
    date: 'Aug 31, 2021',
  },
  {
    image:
      'https://d1z39p6l75vw79.cloudfront.net/u/1/79ff421b40ba73f609181bc822216fd83b63fe92/large/bandzoogle-blog-music-gear-2021.png/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png',
    category: ' Music Marketing & Promotion, Selling Music Online ',
    title: 'How to create bundles your music fans will love',
    avatar:
      'https://d1z39p6l75vw79.cloudfront.net/system/7abca76e49fbc00da3af06da8a6b377c762a3d06/square/collin-steinz.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Hailey McCarthy',
    date: 'Aug 31, 2021',
  },
  {
    image:
      'https://d1z39p6l75vw79.cloudfront.net/u/1/fb56b3603909cf505944b21d9678107ff8777f29/large/bzblog-how-to-create-bundles-your-music-fans-will-love-main.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg',
    category: ' Music Marketing & Promotion, Selling Music Online ',
    title: 'How to create bundles your music fans will love',
    avatar:
      'https://d1z39p6l75vw79.cloudfront.net/system/0e8e998f99a75eb281f8ac43bc7bf964648905c5/square/hailey-bandzoogle.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Hailey McCarthy',
    date: 'Aug 31, 2021',
  },
  {
    image:
      'https://d1z39p6l75vw79.cloudfront.net/u/1/484d026c87a2b428b60b22e2cedf48c53d24727e/large/bzblog-15-podcasts-musicians-should-be-listening-to-in-2021.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg ',
    category: ' Music Marketing & Promotion, Selling Music Online ',
    title: 'How to create bundles your music fans will love',
    avatar:
      'https://d1z39p6l75vw79.cloudfront.net/system/2a83d1408b27c9a2789fe79280297110f1510145/square/dave-c.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Hailey McCarthy',
    date: 'Aug 31, 2021',
  },
  {
    image:
      'https://d1z39p6l75vw79.cloudfront.net/u/1/fb56b3603909cf505944b21d9678107ff8777f29/large/bzblog-how-to-create-bundles-your-music-fans-will-love-main.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg',
    category: ' Music Marketing & Promotion, Selling Music Online ',
    title: 'How to create bundles your music fans will love',
    avatar:
      'https://d1z39p6l75vw79.cloudfront.net/system/0e8e998f99a75eb281f8ac43bc7bf964648905c5/square/hailey-bandzoogle.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJjb250ZW50LnNpdGV6b29nbGUuY29tIn0%3D.jpg',
    name: ' Hailey McCarthy',
    date: 'Aug 31, 2021',
  },
]

export const books = [
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/ebook-SEO-for-Musicians-01-9ff7eeb792d84803be1bdbb995faa75b2262a108c46dadda6fbe30d77c4c4503.jpg',
    title: 'A Complete Guide to SEO for Musicians [PDF Download]',
    link: 'https://try.bandzoogle.com/complete-guide-to-seo-for-musicians-ebook/',
  },
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/ebook-unbelievable-beats-d0052b43e7363f763b0a1a67c1eeddf980e88e9c703fecec5c891ddf1f5fcd51.jpg',
    title: 'How Unbelievable Beats Makes Money From Free Beats [PDF Download]',
    link: 'https://try.bandzoogle.com/how-unbelievablebeats-com-makes-money-from-free-beats/',
  },
]

export const webinars = [
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/blog/webinar-design-tips-0f9566f0ca5bd6d7b4afa9f94585cba8ef1a7c5f9e40fc5ef2586ac07d72d239.jpg',
    title: 'Customizing Your Site: Design Tips & Tricks from a Pro [VIDEO]',
    link: 'https://try.bandzoogle.com/customizing-your-site-design-tips-tricks-from-a-pro/',
  },
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/blog/webinar-book-tour-846a9cab126501c00e64d4dab6cff02be7af2b406f7be343918a7d6aa7f05191.jpg',
    title: 'How to Book a Tour Without a Booking Agent [VIDEO]',
    link: 'https://try.bandzoogle.com/how-to-book-a-tour-webinar/',
  },
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/blog/webinar-SEO-c92a05c0e0d2e5fd0153dc33eec6dc63dbe8af5738fe5d048f025b12e9725b1c.jpg',
    title: 'How to Use SEO to Promote Your Music [VIDEO]',
    link: 'https://try.bandzoogle.com/how-to-use-seo-to-promote-your-music-webinar/',
  },
]

export const APKbuild = [
  {
    title: 'How to build an artist EPK in 10 easy steps',
    sub: 'Here’s how to build your own electronic press kit for your band.',
    steps: [
      'Sign up for a free Bandzoogle trial.',
      'Choose a mobile-friendly template.',
      'Apply a preset EPK page layout.',
      'Customize theme design, colors, and fonts.',
      'Add your music, content, and media.',
      'Add a tour calendar to list your shows.',
      'Set up your contact form.',
      'Add links to your social media profiles.',
      'Choose a domain name for your EPK.',
      'Launch your electronic press kit online!',
    ],
  },
]

export const designCompliments = [
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/features/design/testimonials/boycut-b407564968760ddf3241cf0642a4ced43e46581be29bc86c8a80e40e68a6d8fc.png',
    comment:
      '“Bandzoogle makes it easy to create a great looking site. Their interface helps you work quickly and efficiently. Great customer support is the icing on the cake!”',
    avatar:
      'https://assets-production.bzzgl.com/assets/frontend/bz/features/design/testimonials/boycut-photo-0f3a389fe7f68281ae28e030cbae9396cfa0a57c2568ce814bd06d4788bb8c77.png',
    name: 'BOYCUT',
  },
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/features/design/testimonials/pin-up-de44383f504bd9c05d25d58995c1f498925c9f8879b0067ce193cdb8e0b37a20.png',
    comment:
      '“Bandzoogle made it so easy to build my bands online presence. Their design features made it simple to create a site with my own personal image and ideas.”',
    avatar:
      'https://assets-production.bzzgl.com/assets/frontend/bz/features/design/testimonials/pin-up-photo-b31314d8d3aefe765c79c2f2d095ed49be62183c94b7f23cc436e959669e3fca.png',
    name: 'Pin up',
  },
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/features/design/testimonials/lyris-hung-c02574d028f0a45bdc88712199ad56e9f49499048103c5f10f0991848bdef0e5.png',
    comment:
      '“As an independent artist, I don not have tons of time or resources to spend fussing over a website. Bandzoogle makes building and maintaining a customized site intuitive and easy.”',
    avatar:
      'https://assets-production.bzzgl.com/assets/frontend/bz/features/design/testimonials/boycut-photo-0f3a389fe7f68281ae28e030cbae9396cfa0a57c2568ce814bd06d4788bb8c77.png',
    name: 'LYRus Hung',
  },
]

export const apkCompliments = [
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/features/epk/testimonials/duane-eubanks-e8c510e2a338cca6dab30d03bc1c03c85216f171dc1ef66bcc3f5cd8d70777c0.png',
    comment:
      '“Bandzoogles preset EPK page option, as well as features for quotes and hi-res image downloads, makes my press page easy to maintain. And it looks great.”',
    avatar:
      'https://assets-production.bzzgl.com/assets/frontend/bz/features/epk/testimonials/duane-eubanks-photo-2ba0cf6e8e38f8231de020613eb834e3c8090c451f4554bd93f6af5cc3db3629.png',
    name: 'Duane Eubanks',
  },
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/features/epk/testimonials/redwood-son-c44ce6a81b30fd910e418c1b22f6449c30722bafa84b0006b3842a3bf0b7d9a1.png',
    comment:
      '“Bandzoogle is one of the most user-friendly, easy-to-update website builders around. Even the most inexperienced designer (such as myself) can create an EPK that authentically represents them.”',
    avatar:
      'https://assets-production.bzzgl.com/assets/frontend/bz/features/design/testimonials/pin-up-photo-b31314d8d3aefe765c79c2f2d095ed49be62183c94b7f23cc436e959669e3fca.png',
    name: 'Redwood Son',
  },
  {
    img: 'https://assets-production.bzzgl.com/assets/frontend/bz/features/epk/testimonials/brad-perry-9573af0998b72576432ba1740a88d666bd42f5fc4266ee5723e8369c9b36b45f.png',
    comment:
      '“I thought making an EPK would be hard until Bandzoogle introduced an easy way to make one that flows with my website. Now bookers have a quicker way to book me.”',
    avatar:
      'https://assets-production.bzzgl.com/assets/frontend/bz/features/epk/testimonials/brad-perry-photo-bea6aef9edd40cb79ca4fceafdaf3631bec0bbc8331ad34ab518b31d4cd7ed82.png',
    name: 'Brad Perry',
  },
]
