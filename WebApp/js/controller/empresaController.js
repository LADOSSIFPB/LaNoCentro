var empresaController = function($scope, $mdToast, $state,
  empresaApi, enderecoApi, cidadeApi, estadoApi, naturezaApi, atividadeApi,
  toastUtil, serviceCfg) {

  $scope.empresa = {};
  $scope.endereco = {};
  $scope.cidades = [];
  $scope.estados = [];
  $scope.naturezas = [];
  $scope.atividades = [];

  $scope.cadastrar = function() {
    // Criar uma cópia da empresa e endereco do $scope.
    let endereco = angular.copy($scope.endereco);

    enderecoApi.cadastrar(endereco)
      .then(function(response) {

        let empresa = angular.copy($scope.empresa);

        // Id do endereco
        enderecoResponse = response.data;
        let endereco = {};
        endereco.id = enderecoResponse.id;
        empresa.endereco = endereco;

        if (!(empresa.isDelivery)) {
          empresa.isDelivery = false;
        }

        if (!(empresa.isTempoRealMaps)) {
          empresa.isTempoRealMaps = false;
        }

        if (!(empresa.isPrefeitura)) {
          empresa.isPrefeitura = false;
        }

        if (!(empresa.isVisivel)) {
          empresa.isVisivel = false;
        }

        // Cadastrar empresa com o endereço
        cadastrarEmpresa(empresa);
      })
      .catch(function(error) {
        // Exibir erros de validação do serviço.
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });
  };

  let cadastrarEmpresa = function(empresa) {
    empresaApi.cadastrar(empresa)
      .then(function(response) {

        // Redirecionamento de página.
        $state.transitionTo('administrador.empresas', {
          reload: true,
          inherit: false,
          notify: true
        });

        // Mensagem
        toastUtil.showSuccessToast('A empresa foi cadastrada com sucesso.');
      })
      .catch(function(error) {
        // Exibir erros de validação do serviço.
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });
  }

  function carregamentoInicial() {

    // Carregar Estados, Cidades, Natureza, Atividade para seleção no cadastro da Empresa.
    naturezaApi.listar()
      .then(function(response) {
        $scope.naturezas = response.data;
      })
      .catch(function(error) {
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });

    atividadeApi.listar()
      .then(function(response) {
        $scope.atividades = response.data;
      })
      .catch(function(error) {
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });

    estadoApi.listar()
      .then(function(response) {
        $scope.estados = response.data;
      })
      .catch(function(error) {
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });

    cidadeApi.listar()
      .then(function(response) {
        $scope.cidades = response.data;
      })
      .catch(function(error) {
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });
  }

  // Inicializar listagem de campi.
  carregamentoInicial();
}

app.controller('EmpresaController', empresaController);
