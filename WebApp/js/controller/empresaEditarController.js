var empresaController = function($scope, $mdToast, $state, $stateParams,
  empresaApi, enderecoApi, cidadeApi, estadoApi, naturezaApi, toastUtil, serviceCfg) {

  $scope.empresa = {};
  $scope.endereco = {};
  $scope.cidades = [];
  $scope.estados = [];
  $scope.naturezas = [];

  function carregamentoInicial() {
    let id = $stateParams.id;

    if (id <= 0) {
      redirecionarListagem();
    } else {
      // Recuperar Edital para edição.
      empresaApi.pesquisarPorId(id)
        .then(function(response) {
          let empresa = response.data;
          $scope.empresa = empresa;
          $scope.endereco = empresa.endereco;
        })
        .catch(function(error) {
          toastUtil.showErrorToast(error);
        });

      // Carregar Estados e Cidades para seleção no cadastro da Empresa.
      naturezaApi.listar()
        .then(function(response) {
          $scope.naturezas = response.data;
        })
        .catch(function(error) {
          toastUtil.showErrorToast(error);
        });

      estadoApi.listar()
        .then(function(response) {
          $scope.estados = response.data;
        })
        .catch(function(error) {
          toastUtil.showErrorToast(error);
        });

      cidadeApi.listar()
        .then(function(response) {
          $scope.cidades = response.data;
        })
        .catch(function(error) {
          toastUtil.showErrorToast(error);
        });
    }
  }

  // Inicializar listagem de campi.
  carregamentoInicial();
}

app.controller('EmpresaEditarController', empresaController);
