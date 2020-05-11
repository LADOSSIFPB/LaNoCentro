/**
 * Configuração da rota com ui-router.
 */
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/visitante/home");

    // Estados
    $stateProvider
      .state('visitante', {
        abstract: true,
        data: {
          label: 'Visitante'
        },
        url: '/visitante',
        templateUrl: 'view/visitante/visitante.html'
      })
      // Home
      .state('visitante.home', {
        url: '/home',
        title: 'Página inicial',
        templateUrl: 'view/visitante/home.html',
        controller: 'HomeController'
      })
      // Subrota - Administrador
      .state('administrador', {
        abstract: true,
        controller: 'sideNavCtrl',
        controllerAs: 'sideNav',
        data: {
          label: 'Administrador'
        },
        url: '/administrador',
        templateUrl: 'view/administrador/administrador.html'
      })
      // Empresa
      .state('administrador.home', {
        url: '/home',
        title: 'Administrador',
        templateUrl: 'view/administrador/home.html'
      })
      // Empresa
      .state('administrador.empresa', {
        url: '/empresa',
        title: 'Cadastrar Empresa',
        templateUrl: 'view/administrador/empresa.html',
        controller: 'EmpresaController'
      })
      // Empresas
      .state('administrador.empresas', {
        url: '/empresas',
        title: 'Empresas',
        templateUrl: 'view/administrador/empresas.html',
        controller: 'EmpresasController'
      })
      // Empresa - Editar
      .state('administrador.empresa-editar', {
        url: '/empresa/:id',
        title: 'Editar Empresa',
        templateUrl: 'view/administrador/empresa-editar.html',
        controller: 'EmpresaEditarController',
        controllerAs: 'EmpresaEditar'
      })
      // Contatos
      .state('administrador.contatos', {
        url: '/contatos',
        title: 'Contatos',
        templateUrl: 'view/administrador/contatos.html',
        controller: 'ContatosController'
      })
      // Atividades
      .state('administrador.atividades', {
        url: '/atividades',
        title: 'Atividades',
        templateUrl: 'view/administrador/atividades.html',
        controller: 'AtividadesController'
      })
      // Atividade
      .state('administrador.atividade', {
        url: '/atividade',
        title: 'Cadastrar Atividade',
        templateUrl: 'view/administrador/atividade.html',
        controller: 'AtividadeController'
      })
      // Naturezas
      .state('administrador.naturezas', {
        url: '/naturezas',
        title: 'Naturezas',
        templateUrl: 'view/administrador/naturezas.html',
        controller: 'NaturezasController'
      })
      // Natureza
      .state('administrador.natureza', {
        url: '/natureza',
        title: 'Cadastrar Natureza',
        templateUrl: 'view/administrador/natureza.html',
        controller: 'NaturezaController'
      });
  })
  //take all whitespace out of string
  .filter('nospace', function() {
    return function(value) {
      return (!value) ? '' : value.replace(/ /g, '');
    };
  })
  //replace uppercase to regular case
  .filter('humanizeDoc', function() {
    return function(doc) {
      if (!doc) return;
      if (doc.type === 'directive') {
        return doc.name.replace(/([A-Z])/g, function($1) {
          return '-' + $1.toLowerCase();
        });
      }

      return doc.label || doc.name;
    }
  });
