var app = angular.module("InventarioManagement", []);
app.controller("InventarioManagementController", ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {
    $scope.lista = [{ "nombre": "equipos", "cantidad": 0 }, { "nombre": "actividades", "cantidad": 0 }];
    $scope.areas = [];
    $scope.estados = [];
    $scope.tiposGas = [];
    $scope.capacidadesBTU = [];
    $scope.tiposFiltroDeshidratador = [];
    $scope.pHs = [];
    $scope.tiposEquipo = [];
    $scope.presostatos = [];
    $scope.rangosPresion = [];
    $scope.tiposMotor = [];
    $scope.tiposCompresor = [];
    $scope.baterias = [];
    $scope.tags = [];
    $scope.equipos = [];
    $scope.actividades = [];
    $scope.pattern = '';
    $scope.nuevoTipo = '';
    $scope.esAgregarTipoMotor = false;
    $scope.esAgregarTipoCompresor = false;
    $scope.esAgregarBateria = false;
    $scope.esAgregarTag = false;
    $scope.formulario = {};
    iniciar()
    function getArea() {
        $http({
            method: 'GET',
            url: '/equipo/area/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.areas = response.data;
        }, function errorCallback(response) {
            alert(response.statusText);
        });
    }
    function getEstado() {
        $http({
            method: 'GET',
            url: '/equipo/estado/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.estados = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getTipoGas() {
        $http({
            method: 'GET',
            url: '/equipo/tipogas/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.tiposGas = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getCapacidadBTU() {
        $http({
            method: 'GET',
            url: '/equipo/capacidadbtu/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.capacidadesBTU = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getTipoFiltroDeshidratador() {
        $http({
            method: 'GET',
            url: '/equipo/tipofiltrodeshidratador/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.tiposFiltroDeshidratador = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getPH() {
        $http({
            method: 'GET',
            url: '/equipo/ph/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.pHs = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getTipoEquipo() {
        $http({
            method: 'GET',
            url: '/equipo/tipoequipo/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.tiposEquipo = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getPresostatos() {
        $http({
            method: 'GET',
            url: '/equipo/presostato/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.presostatos = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getPresostatos() {
        $http({
            method: 'GET',
            url: '/equipo/presostato/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.presostatos = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getRangosPresion() {
        $http({
            method: 'GET',
            url: '/equipo/rangopresion/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.rangosPresion = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getTiposCompresor() {
        $http({
            method: 'GET',
            url: '/equipo/tipocompresor/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.tiposCompresor = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getBaterias() {
        $http({
            method: 'GET',
            url: '/equipo/bateria/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.baterias = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getTags() {
        $http({
            method: 'GET',
            url: '/equipo/tag/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.tags = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getTiposMotor() {
        $http({
            method: 'GET',
            url: '/equipo/tipomotor/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.tiposMotor = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getEquipos() {
        $http({
            method: 'GET',
            url: '/equipo/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.equipos = response.data;
            $scope.lista[0].cantidad = $scope.equipos.length
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getActividades() {
        $http({
            method: 'GET',
            url: '/actividad/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.actividades = response.data;
            $scope.lista[1].cantidad = $scope.actividades.length
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function _actualizarDatos() {
        getEquipos();
        getActividades();

        getArea();
        getEstado();
        getTipoGas();
        getCapacidadBTU();
        getTipoFiltroDeshidratador();
        getPH();
        getTipoEquipo();
        getPresostatos();
        getRangosPresion();
        getTiposMotor();
        getTiposCompresor();
        getBaterias();
        getTags();

    }
    function iniciar() {
        $('#contenidoAreas').hide();
        $('#contenidoEquipos').hide();
        $('#rangoPresion').dropdown();
        _actualizarDatos()
    }
    $scope.actualizar = function () {
        _actualizarDatos();
    }
    $scope.verConfiguracion = function () {
        $('#contenidoConfiguracion').modal('show');
    }
    $scope.verInicio = function () {
        $('#contenidoEquipos').hide();
        $('#contenidoInicio').show();
    }
    $scope.ver = function (item, tipo) {
        switch (tipo) {
            case "contenido":
                switch (item.nombre) {
                    case "equipos":
                        $('#contenidoEquipos').show();
                        $('#contenidoInicio').hide();
                        break;
                    default:
                        break;
                }

                break;
            case "equipo":
                $scope.formulario = item
                $("#modalHeaderVer").text("Ver Equipo");
                $('#modal-ver').modal('show');
                break;
            default:
                break;
        }
    }
    $scope.editar = function (item, tipo) {
        switch (tipo) {
            case "equipo":
                $scope.formulario = item;
                $("#modalHeaderEditar").text("Editar Equipo");
                $('#modal-editar').modal('show');
                break;
            default:
                break;
        }
    }
    $scope.agregarRangoPresion = function (rangoPresion, tipo) {
        $('#modal-rangoPresion').modal('show');
        $scope.formulario.rangoPresion = rangoPresion;
        if (tipo == 'rangoPresionAlta') {
            $scope.formulario.rangoPresion.id = -1;
        } else {
            $scope.formulario.rangoPresion.id = -2;
        }
    }
    $scope.guardarRangoPresion = function () {
        // data = {};
        // if ($scope.formulario.rangoPresion.id == -1 || $scope.formulario.rangoPresion.id === undefined) {
        //     method = 'PUT';
        //     url = '/equipo/rangopresion';
        //     data.minimo = $scope.formulario.rangoPresion.minimo;
        //     data.maximo = $scope.formulario.rangoPresion.maximo;
        // } else {
        //     method = 'POST';
        //     url = '/equipo/rangopresion/' + $scope.formulario.rangoPresion.id;
        //     data.minimo = $scope.formulario.rangoPresion.minimo;
        //     data.maximo = $scope.formulario.rangoPresion.maximo;
        // }
        // $http({
        //     method: method,
        //     url: url,
        //     data: $httpParamSerializerJQLike(data),
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }).then($scope._correcto, $scope._error);

        var nuevoRango = $scope.formulario.rangoPresion;

        // Verificar si el id ya existe en el array
        var indiceExistente = $scope.rangosPresion.findIndex(function (elemento) {
            return elemento.id === nuevoRango.id;
        });

        if (indiceExistente !== -1) {
            // Si el id ya existe, reemplazar el elemento en esa posición
            $scope.rangosPresion[indiceExistente] = nuevoRango;
        } else {
            // Si el id no existe, simplemente agregar el nuevo elemento
            $scope.rangosPresion = $scope.rangosPresion.concat(nuevoRango);
        }
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.mostrarModalTipoMotor = function () {
        $('#modal-tipoMotor').modal('show');
    }
    $scope.agregarTipoMotor = function () {
        $scope.esAgregarTipoMotor = !$scope.esAgregarTipoMotor
    }
    $scope.guardarTipoMotor = function () {
        $scope.formulario.tiposMotor.push($scope.formulario.tipoMotor);
        $scope.formulario.tipoMotor = {}
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.seleccionarTipoMotor = function (tipoMotor) {
        $scope.formulario.tiposMotor.push(tipoMotor);
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.existeTipoMotor = function (tipoMotor) {
        if ($scope.formulario.tiposMotor && Array.isArray($scope.formulario.tiposMotor)) {

            var index = $scope.formulario.tiposMotor.findIndex(function (elemento) {
                return elemento.id === tipoMotor.id;
            });
            if (index !== -1) {
                return true
            }
        }
        return false
    }
    $scope.eliminarTipoMotor = function (tipoMotor) {
        if ($scope.formulario.tiposMotor && Array.isArray($scope.formulario.tiposMotor)) {

            var index = $scope.formulario.tiposMotor.findIndex(function (elemento) {
                return elemento.id === tipoMotor.id;
            });
            if (index !== -1) {
                $scope.formulario.tiposMotor.splice(index, 1);
            }
        }
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.eliminarTipoCompresor = function (tipoCompresor) {
        if ($scope.formulario.tiposCompresor && Array.isArray($scope.formulario.tiposCompresor)) {

            var index = $scope.formulario.tiposCompresor.findIndex(function (elemento) {
                return elemento.id === tipoCompresor.id;
            });
            if (index !== -1) {
                $scope.formulario.tiposCompresor.splice(index, 1);
            }
        }
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.mostrarModalTipoCompresor = function () {
        $('#modal-tipoCompresor').modal('show');
    }
    $scope.agregarTipoCompresor = function () {
        $scope.esAgregarTipoCompresor = !$scope.esAgregarTipoCompresor
    }
    $scope.existeTipoCompresor = function (tipoCompresor) {
        if ($scope.formulario.tiposCompresor && Array.isArray($scope.formulario.tiposCompresor)) {
            var index = $scope.formulario.tiposCompresor.findIndex(function (elemento) {
                return elemento.id === tipoCompresor.id;
            });
            if (index !== -1) {
                return false
            }
        }
        return true
    }
    $scope.seleccionarTipoCompresor = function (tipoCompresor) {
        $scope.formulario.tiposCompresor.push(tipoCompresor);
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.guardarTipoCompresor = function () {
        $scope.formulario.tiposCompresor.push($scope.formulario.tipoCompresor);
        $scope.formulario.tipoCompresor = {}
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.eliminarBateria = function (bateria) {
        if ($scope.formulario.baterias && Array.isArray($scope.formulario.baterias)) {

            var index = $scope.formulario.baterias.findIndex(function (elemento) {
                return elemento.id === bateria.id;
            });
            if (index !== -1) {
                $scope.formulario.baterias.splice(index, 1);
            }
        }
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.mostrarModalBateria = function () {
        $('#modal-bateria').modal('show');
    }
    $scope.agregarBateria = function () {
        $scope.esAgregarBateria = !$scope.esAgregarBateria
    }
    $scope.existeBateria = function (bateria) {
        if ($scope.formulario.baterias && Array.isArray($scope.formulario.baterias)) {
            var index = $scope.formulario.baterias.findIndex(function (elemento) {
                return elemento.id === bateria.id;
            });
            if (index !== -1) {
                return false
            }
        }
        return true
    }
    $scope.seleccionarBateria = function (bateria) {
        $scope.formulario.baterias.push(bateria);
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.guardarBateria = function () {
        $scope.formulario.baterias.push($scope.formulario.bateria);
        $scope.formulario.bateria = {}
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.eliminarTag = function (tag) {
        if ($scope.formulario.tags && Array.isArray($scope.formulario.tags)) {

            var index = $scope.formulario.tags.findIndex(function (elemento) {
                return elemento.id === tag.id;
            });
            if (index !== -1) {
                $scope.formulario.tags.splice(index, 1);
            }
        }
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.mostrarModalTag = function () {
        $('#modal-tag').modal('show');
    }
    $scope.agregarTag = function () {
        $scope.esAgregarTag = !$scope.esAgregarTag
    }
    $scope.existeTag = function (tag) {
        if ($scope.formulario.tags && Array.isArray($scope.formulario.tags)) {
            var index = $scope.formulario.tags.findIndex(function (elemento) {
                return elemento.id === tag.id;
            });
            if (index !== -1) {
                return false
            }
        }
        return true
    }
    $scope.seleccionarTag = function (tag) {
        $scope.formulario.tags.push(tag);
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope.guardarTag = function () {
        $scope.formulario.tags.push($scope.formulario.tag);
        $scope.formulario.tag = {}
        $scope.editar($scope.formulario, 'equipo')
    }
    $scope._error = function (response) {
        alert(response.data.message || response.statusText);
    }
    $scope._correcto = function (response) {
        $scope.pattern = '';
        _actualizarDatos();
    }
}]);