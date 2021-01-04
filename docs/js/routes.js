var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  {
    path: '/tab-search/',
    url: './pages/tab-search.html',
    name: 'home',
  },
  {
    path: '/tab-search-form/',
    url: './pages/tab-search-form.html',
    name: 'home',
  },
  {
    path: '/tab-forum/',
    url: './pages/tab-forum.html',
    name: 'home',
  },
{
    path: '/tab-forum-login/',
    url: './pages/tab-forum-login.html',
    name: 'home',
  },
{
    path: '/tab-forum-register/',
    url: './pages/tab-forum-register.html',
    name: 'home',
  },
{
    path: '/tab-forum-reset/',
    url: './pages/tab-forum-reset.html',
    name: 'home',
  },
{
    path: '/tab-forum-out/',
    url: './pages/tab-forum-out.html',
    name: 'home',
  },
{
    path: '/tab-forum-dashboard/',
    url: './pages/tab-forum-dashboard.html',
    name: 'home',
  },
  // Components
 {
    path: '/tab-about/',
    componentUrl: './pages/tab-about.html',
  },
  {
     path: '/tab-kaidah/',
     componentUrl: './pages/tab-kaidah.html',
   },
   {
      path: '/dialog/',
      componentUrl: './pages/dialog.html',
    },
   {
      path: '/tab-home/',
      componentUrl: './pages/tab-home.html',
    },
  {
    path: '/pengertian-ijtihad/',
    componentUrl: './teks/pengertian-ijtihad.html',
  },
  {
    path: '/dasar-hukum-ijtihad/',
    componentUrl: './teks/dasar-hukum-ijtihad.html',
  },
  {
    path: '/macam-macam-ijtihad/',
    componentUrl: './teks/macam-macam-ijtihad.html',
  },
  {
    path: '/syarat-ijtihad/',
    componentUrl: './teks/syarat-ijtihad.html',
  },
  {
    path: '/objek-ijtihad/',
    componentUrl: './teks/objek-ijtihad.html',
  },
  {
    path: '/hukum-melakukan-ijtihad/',
    componentUrl: './teks/hukum-melakukan-ijtihad.html',
  },
  {
    path: '/tingkatan-mujtahid/',
    componentUrl: './teks/tingkatan-mujtahid.html',
  },
  {
    path: '/pengertian-istihsan/',
    componentUrl: './teks/pengertian-istihsan.html',
  },
  // Privacy
  {
    path: '/privacy/',
    componentUrl: './pages/privacy.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
