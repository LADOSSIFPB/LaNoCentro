var empresaController = function($scope, $mdToast, $state,
  empresaApi, enderecoApi, cidadeApi, estadoApi, naturezaApi, toastUtil, serviceCfg) {

  $scope.empresa = {};
  $scope.endereco = {};
  $scope.cidades = [];
  $scope.estados = [];
  $scope.naturezas = [];

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

        // Cadastrar empresa com o endereço
        cadastrarEmpresa(empresa);
      })
      .catch(function(error) {
        // Exibir erros de validação do serviço.
        let errors = error.data.errors;
        toastUtil.showErrosValidation(errors);
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
        let errors = error.data.errors;
        toastUtil.showErrosValidation(errors);
      });
  }

  function carregamentoInicial() {

        // Carregar Estados e Cidades para seleção no cadastro da Empresa.
        naturezaApi.listar()
            .then(function(response) {
                $scope.naturezas = response.data;
            })
            .catch(function (error) {
                toastUtil.showErrorToast(error);
            });

        estadoApi.listar()
            .then(function(response) {
                $scope.estados = response.data;
            })
            .catch(function (error) {
                toastUtil.showErrorToast(error);
            });

        cidadeApi.listar()
            .then(function(response) {
                $scope.cidades = response.data;
            })
            .catch(function (error) {
                toastUtil.showErrorToast(error);
            });
    }

    // Inicializar listagem de campi.
    carregamentoInicial();
}

app.controller('EmpresaController', empresaController);
