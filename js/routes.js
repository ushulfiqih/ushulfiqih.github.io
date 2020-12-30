var routes = [  
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  {
    path: '/tab-home/',
    url: './pages/tab-home.html',
    name: 'home',
  },
  {
    path: '/tab-card/',
    url: './pages/tab-card.html',
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
     path: '/tab-home2/',
     componentUrl: './pages/tab-home2.html',
   },
  {
    path: '/ijtihad/',
    componentUrl: './teks/uf-ijtihad.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
