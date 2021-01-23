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
  path: '/tab-forum/',
  url: './pages/tab-forum.html',
  name: 'home',
},
{
  path: '/tab-forum-discuss/',
  url: './pages/tab-forum-discuss.html',
  name: 'home',
},
{
  path: '/tab-forum-akun/',
  componentUrl: './pages/tab-forum-akun.html',
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
// Features
{
 path: '/quran/',
 componentUrl: './pages/quran.html',
},
{
 path: '/hadis/',
 componentUrl: './pages/hadis.html',
},
{
path: '/hijri/',
componentUrl: './pages/hijri.html',
},
{
 path: '/praytimes/',
 componentUrl: './pages/praytimes.html',
},
// Components
{
  path: '/akun/',
  componentUrl: './pages/akun.html',
},
{
  path: '/profil/',
  componentUrl: './pages/profil.html',
},
{
   path: '/about/',
   componentUrl: './pages/about.html',
 },
{
  path: '/welcome/',
  componentUrl: './pages/welcome.html',
},
{
  path: '/lock/',
  componentUrl: './pages/lock.html',
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
  path: '/linimasa/',
  componentUrl: './teks/linimasa.html',
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
{
  path: '/kehujahan-istihsan/',
  componentUrl: './teks/kehujahan-istihsan.html',
},
{
  path: '/pengertian-maslahah-mursalah/',
  componentUrl: './teks/pengertian-maslahah-mursalah.html',
},
{
  path: '/pengertian-istishab/',
  componentUrl: './teks/pengertian-istishab.html',
},
{
  path: '/pengertian-istishab/',
  componentUrl: './teks/pengertian-istishab.html',
},
{
  path: '/kehujahan-istishab/',
  componentUrl: './teks/kehujahan-istishab.html',
},
{
  path: '/pengertian-urf/',
  componentUrl: './teks/pengertian-urf.html',
},
{
  path: '/macam-macam-urf/',
  componentUrl: './teks/macam-macam-urf.html',
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
