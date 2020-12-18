routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/0/',
    url: './pages/0.html',
  },
  {
    path: '/1/',
    url: './pages/1.html',
  },
  {
    path: '/2/',
    url: './pages/2.html',
  },
  {
    path: '/3/',
    url: './pages/3.html',
  },
  {
    path: '/daftar/',
    url: './pages/daftar.html',
  },
  {
    path: '/antologi/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/antologi.html',
  },
  {
    path: '/biblio/',
    url: './pages/biblio.html',
  },
  {
    path: '/biblio-text/',
    url: './pages/biblio-text.html',
  },
  {
    path: '/biblio-anggota/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/biblio-anggota.html',
  },
 {
    path: '/chat/',
    url: './pages/chat.html',
  },
 {
    path: '/jam/',
    url: './pages/jam.html',
  },
 {
    path: '/literasi/',
    url: './pages/literasi.html',
  },
  {
    path: '/edu/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/edu.html',
  },
  {
    path: '/berita/',
    url: './pages/berita.html',
  },
  {
    path: '/galeri-kartu/',
    url: './pages/galeri-kartu.html',
  },
  {
    path: '/istilah/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/istilah.html',
  },
  {
    path: '/kalender/',
    url: './pages/kalender.html',
  },
  {
    path: '/one/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/one.html',
  },
  {
    path: '/profil/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/profil.html',
  },
  {
    path: '/pustakawan/',
    url: 'http://app.smpn21purworejo.sch.id/v7/pages/pustakawan.html',
  },
  {
    path: '/statistik/',
    url: './pages/statistik.html',
  },
  {
    path: '/koleksi-terlaris/',
    url: './pages/koleksi-terlaris.html',
  },
  {
    path: '/koleksi-terbaru/',
    url: './pages/koleksi-terbaru.html',
  },
  {
    path: '/koleksi-fiksi/',
    url: './pages/koleksi-fiksi.html',
  },
  {
    path: '/koleksi-pilihan/',
    url: './pages/koleksi-pilihan.html',
  },
  {
    path: '/koleksi-ebook/',
    url: './pages/koleksi-ebook.html',
  },
  {
    path: '/koleksi-referensi/',
    url: './pages/koleksi-referensi.html',
  },

  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
