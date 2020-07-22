var empresaEditarController = function($scope, $mdToast, $state, $stateParams,
  empresaApi, enderecoApi, cidadeApi, estadoApi, naturezaApi, toastUtil, atividadeApi, produtoApi,
  serviceCfg) {

  $scope.empresa = {};
  $scope.endereco = {};
  $scope.cidades = [];
  $scope.estados = [];
  $scope.naturezas = [];
  $scope.atividades = [];
  $scope.produtos = [];

  $scope.atualizar = function() {
    // Criar uma cópia da empresa e endereco do $scope.
    let endereco = angular.copy($scope.endereco);

    enderecoApi.atualizar(endereco)
      .then(function(response) {
        // Atualizar empresa
        atualizarEmpresa();
      })
      .catch(function(error) {
        // Exibir erros de validação do serviço.
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });
  };

  let atualizarEmpresa = function() {

    let empresa = angular.copy($scope.empresa);

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

    empresaApi.atualizar(empresa)
      .then(function(response) {

        redirecionarListagemEmpresas();

        // Mensagem
        toastUtil.showSuccessToast('A empresa foi atualizada com sucesso.');
      })
      .catch(function(error) {
        // Exibir erros de validação do serviço.
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });
  }

  $scope.adicionarProduto = function () {

        var _idEmpresa = $scope.empresa.id;

        if (!(stringUtil.isEmpty(_idEmpresa))) {
            $state.transitionTo('administrador.adicionar-produto', {
                id: _idEmpresa
            }, {
                reload: true,
                inherit: false,
                notify: true
            });
        } else {
            toastUtil.showToast("Impossível carregar os dados da Empresa para cadastrar o Produto.");
        }
    }

  function carregamentoInicial() {
    let id = $stateParams.id;

    if (id <= 0) {
      redirecionarListagemEmpresas();
    } else {
      // Recuperar Empresa para edição.
      empresaApi.pesquisarPorId(id)
        .then(function(response) {
          let empresa = response.data;
          $scope.empresa = empresa;
          $scope.endereco = empresa.endereco;
        })
        .catch(function(error) {
          toastUtil.showErrorToast(error);
        });

      produtoApi.listarEmpresaId(id)
        .then(function(response) {
          let produtos = response.data;
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

  function redirecionarListagemEmpresas() {
    // Redirecionamento de página.
    $state.transitionTo('administrador.empresas', {
      reload: true,
      inherit: false,
      notify: true
    });
  }

  // Inicializar listagem de Empresa.
  carregamentoInicial();
}

app.controller('EmpresaEditarController', empresaEditarController);
