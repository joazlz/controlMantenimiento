var app = angular.module("InventarioManagement", []);
app.controller("InventarioManagementController", ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {
    $scope.lista = [{ "nombre": "equipos", "cantidad": 0 }, { "nombre": "actividades", "cantidad": 0 }, { "nombre": "catalogos", "cantidad": 0 }];
    $scope.areas = [];
    $scope.estados = [];
    $scope.tiposGas = [];
    $scope.capacidadesBTU = [];
    $scope.tiposFiltroDeshidratador = [];
    $scope.marcas = [];
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
    $scope.metodo = '';
    $scope.catalogoSeleccionado = '';
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
    function getMarcas() {
        $http({
            method: 'GET',
            url: '/equipo/marca/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.marcas = response.data;
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
        getMarcas();

    }
    function iniciar() {
        $('#contenidoAreas').hide();
        $('#contenidoEquipos').hide();
        $('#contenidoCatalogos').hide();
        $("#baterias").hide();
        $("#areas").hide();
        $("#capacidadBtu").hide();
        $("#estado").hide()
        $("#marca").hide()
        $("#ph").hide()
        $("#presostato").hide()
        $("#rangoPresion").hide()
        $("#tipoCompresos").hide()
        $("#tipoEquipo").hide()
        $("#tipoFiltroDeshidratador").hide()
        $("#tipoGas").hide()
        $("#tipoMotor").hide()
        $('#contenidoInicio').show();
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
    function httpMetodo(method,url,data){
        $http({
            method: method,
            url: url,
            data: $httpParamSerializerJQLike(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then($scope._correcto, $scope._error)
    }

    $scope.guardar = function (tipo, formulario) {
        switch (tipo) {
            case "equipo":
                data = {};
                // if ($scope.formulario.id == -1 || $scope.formulario.id === undefined) {
                method = 'PUT';
                url = '/equipo/agregar';
                data.area_id = formulario.area.id;
                data.tipoGas_id = formulario.tipoGas.id;
                data.capacidadBTU_id = formulario.capacidadBTU.id;
                data.tipoFiltroDeshidratador_id = formulario.tipoFiltroDeshidratador.id;
                data.rangoPresionAlta_id = formulario.rangoPresionAlta.id;
                data.rangoPresionBaja_id = formulario.rangoPresionBaja.id;
                data.marca_id = formulario.marca.id;
                data.pH_id = formulario.pH.id;
                data.tipoEquipo_id = formulario.tipoEquipo.id;
                data.presostatoAlta_id = formulario.presostatoAlta.id;
                data.presostatoBaja_id = formulario.presostatoBaja.id;
                data.modelo = formulario.modelo;
                data.voltaje = formulario.voltaje;
                data.amperaje = formulario.amperaje;
                data.flipon = formulario.flipon;
                data.cableAlimentacion = formulario.cableAlimentacion;
                data.tranformador = formulario.tranformador;
                data.contactor = formulario.contactor;
                data.termostato = formulario.termostato;
                data.tarjetaElectronica = formulario.tarjetaElectronica;
                data.selector = formulario.selector;
                data.retardor = formulario.retardor;
                // } else {
                //     method = 'POST';
                //     url = '/equipo/rangopresion/' + $scope.formulario.rangoPresion.id;
                //     data.minimo = $scope.formulario.rangoPresion.minimo;
                //     data.maximo = $scope.formulario.rangoPresion.maximo;
                // }
                $http({
                    method: method,
                    url: url,
                    data: $httpParamSerializerJQLike(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then($scope._correcto, $scope._error)
                break;
            case "area":
                if ($scope.formulario.area.id == -1 || $scope.formulario.area.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/'+tipo;
                    data.nombre = formulario.area.nombre;
                    httpMetodo(method,url,data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/'+tipo+'/' + formulario.area.id;
                    data.nombre = formulario.area.nombre;
                    httpMetodo(method,url,data)
                }
                break;
            case "bateria":
                if ($scope.formulario.bateria.id == -1 || $scope.formulario.bateria.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/'+tipo;
                    data.nombre = formulario.bateria.nombre;
                    httpMetodo(method,url,data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/'+tipo+'/' + formulario.bateria.id;
                    data.nombre = formulario.bateria.nombre;
                    httpMetodo(method,url,data)
                }
                break;
            default:
                break;
        }

    }
    $scope.eliminar = function (tipo, formulario) {
        switch (tipo) {
            case "area","bateria":
                data = {};
                method = 'DELETE';
                url = '/equipo/'+tipo+'/' + formulario.id;
                httpMetodo(method,url,data)
                break;

            default:
                break;
        }

    }
    $scope.editar = function (tipo, formulario) {
        data = {};
        // if ($scope.formulario.id == -1 || $scope.formulario.id === undefined) {
        method = 'POST';
        url = '/equipo/actualizar/' + formulario.id;
        data.area_id = formulario.area.id;
        data.tipoGas_id = formulario.tipoGas.id;
        data.capacidadBTU_id = formulario.capacidadBTU.id;
        data.tipoFiltroDeshidratador_id = formulario.tipoFiltroDeshidratador.id;
        data.rangoPresionAlta_id = formulario.rangoPresionAlta.id;
        data.rangoPresionBaja_id = formulario.rangoPresionBaja.id;
        data.marca_id = formulario.marca.id;
        data.pH_id = formulario.pH.id;
        data.tipoEquipo_id = formulario.tipoEquipo.id;
        data.presostatoAlta_id = formulario.presostatoAlta.id;
        data.presostatoBaja_id = formulario.presostatoBaja.id;
        data.modelo = formulario.modelo;
        data.voltaje = formulario.voltaje;
        data.amperaje = formulario.amperaje;
        data.flipon = formulario.flipon;
        data.cableAlimentacion = formulario.cableAlimentacion;
        data.tranformador = formulario.tranformador;
        data.contactor = formulario.contactor;
        data.termostato = formulario.termostato;
        data.tarjetaElectronica = formulario.tarjetaElectronica;
        data.selector = formulario.selector;
        data.retardor = formulario.retardor;
        $http({
            method: method,
            url: url,
            data: $httpParamSerializerJQLike(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then($scope._correcto, $scope._error)

        if (!Array.isArray(formulario.eliminarMotores)) {
            formulario.eliminarMotores = [];
        }
        formulario.eliminarMotores.forEach(function (tipoMotor) {
            if (tipoMotor.id > 0) {
                data = {};
                method = 'DELETE';
                url = 'equipo/actualizar/' + formulario.id + '/tiposmotores';
                data.tipomotor_id = tipoMotor.id;
                $http({
                    method: method,
                    url: url,
                    data: $httpParamSerializerJQLike(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then($scope._correcto, $scope._error)
            }
        });

        if (!Array.isArray(formulario.agregarMotores)) {
            formulario.agregarMotores = [];
        }
        formulario.agregarMotores.forEach(function (tipoMotor) {
            if (tipoMotor.id > 0) {
                data = {};
                method = 'POST';
                url = 'equipo/actualizar/' + formulario.id + '/tiposmotores';
                data.tipomotor_id = tipoMotor.id;
                $http({
                    method: method,
                    url: url,
                    data: $httpParamSerializerJQLike(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then($scope._correcto, $scope._error)
            } else if (tipoMotor.id === undefined) {
                data = {};
                method = 'PUT';
                url = 'equipo/tipomotor';
                data.nombre = tipoMotor.nombre
                data.capacidad = tipoMotor.capacidad;
                $http({
                    method: method,
                    url: url,
                    data: $httpParamSerializerJQLike(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then($scope._correcto, $scope._error)
            }
        });
    }
    $scope.ver = function (item, tipo, metodo) {

        switch (tipo) {
            case "contenido":
                switch (item.nombre) {
                    case "equipos":
                        // $('#contenidoEquipos').show();
                        // $('#contenidoInicio').hide();
                        // $('#contenidoCatalogos').hide();
                        break;
                    case "catalogos":
                        // $('#contenidoEquipos').hide();
                        $('#contenidoInicio').hide();
                        $('#contenidoCatalogos').show();
                        break;
                    default:
                        break;
                }

                break;
            case "equipo":
                switch (metodo) {
                    case "ver":
                        $scope.metodo = metodo
                        $scope.formulario = item
                        $("#modalHeaderVer").text("Ver Equipo");
                        $('#modal-ver').modal('show');
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#modalHeaderAgregar").text("Agregar Equipo");
                        $('#modal-agregar').modal('show');
                        break;
                    case "editar":
                        $scope.metodo = metodo
                        $scope.formulario = item;
                        $("#modalHeaderEditar").text("Editar Equipo");
                        $('#modal-editar').modal('show');
                        break;
                    default:
                        break;
                }
                break;
            case "area":
                switch (metodo) {
                    case "ver":
                        $("#areas").show();
                        $("#baterias").hide();
                        $("#capacidadBtu").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'area'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').addClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_area").text("Agregar Area");
                        $('#editar_agregar_area').modal('show');
                        break;
                    case "editar":
                        $scope.formulario.area = item
                        $("#tituloModal_editar_agregar_area").text("Editar Area");
                        $('#editar_agregar_area').modal('show');
                        break;
                    default:
                        break;
                }
                break;
            case "bateria":
                switch (metodo) {
                    case "ver":
                        $("#areas").hide();
                        $("#baterias").show();
                        $("#capacidadBtu").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'bateria'
                        $('#itemBateria').addClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_bateria").text("Agregar Bateria");
                        $('#editar_agregar_bateria').modal('show');
                        break;
                    case "editar":
                        $scope.formulario.bateria = item
                        $("#tituloModal_editar_agregar_bateria").text("Editar Bateria");
                        $('#editar_agregar_bateria').modal('show');
                        break;
                    default:
                        break;
                }
                break;
            case "capacidadBTU":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").show();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'capacidadBTU'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').addClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "estado":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").show()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'estado'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').addClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "marca":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").show()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'marca'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').addClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "ph":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").show()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'ph'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').addClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "presostado":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").show()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'presostado'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').addClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "rangoPresion":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").show()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'rangoPresion'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').addClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "tipoCompresor":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").show()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'tipoCompresor'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').addClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "tipoEquipo":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").show()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'tipoEquipo'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').addClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "tipoFiltroDeshidratador":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").show()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'tipoFiltroDeshidratador'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').addClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "tipoGas":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").show()
                        $("#tipoMotor").hide()
                        $scope.catalogoSeleccionado = 'tipoGas'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').addClass('active')
                        $('#itemTipoMotor').removeClass('active')
                        break;
                }
                break;
            case "tipoMotor":
                switch (metodo) {
                    case "ver":
                        $("#capacidadBtu").hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresos").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").show()
                        $scope.catalogoSeleccionado = 'tipoMotor'
                        $('#itemBateria').removeClass('active');
                        $('#itemArea').removeClass('active');
                        $('#itemCapacidadBtu').removeClass('active')
                        $('#itemEstado').removeClass('active')
                        $('#itemMarca').removeClass('active')
                        $('#itemPh').removeClass('active')
                        $('#itemPresostato').removeClass('active')
                        $('#itemRangoPresion').removeClass('active')
                        $('#itemTipoCompresor').removeClass('active')
                        $('#itemTipoEquipo').removeClass('active')
                        $('#itemTipoFiltroDeshidratador').removeClass('active')
                        $('#itemTipoGas').removeClass('active')
                        $('#itemTipoMotor').addClass('active')
                        break;
                }
                break;
            default:
                break;
        }
    }
    $scope.agregarRangoPresion = function (rangoPresion, tipo) {
        $('#modal-rangoPresion').modal('show');
        if (!$scope.formulario.rangoPresion || typeof $scope.formulario.rangoPresion !== 'object') {
            $scope.formulario.rangoPresion = {};
        }
        if (!rangoPresion || typeof rangoPresion !== 'object') {
            rangoPresion = {};
        }

        $scope.formulario.rangoPresion = rangoPresion;
        if (tipo == 'rangoPresionAlta') {
            $scope.formulario.rangoPresion.id = -1
            $scope.formulario.rangoPresionAlta = rangoPresion;
            $scope.formulario.rangoPresion.tipo = 'alta';
        } else {
            $scope.formulario.rangoPresion.id = -2
            $scope.formulario.rangoPresionBaja = rangoPresion;
            $scope.formulario.rangoPresion.tipo = 'baja';
        }
    }
    $scope.guardarRangoPresion = function () {
        var nuevoRango = $scope.formulario.rangoPresion;
        if ($scope.formulario.rangoPresion.id == -1) {
            $scope.formulario.rangoPresionAlta = nuevoRango;
        }
        if ($scope.formulario.rangoPresion.id == -2) {
            $scope.formulario.rangoPresionAlta = nuevoRango;
        }
        $scope.rangosPresion.push(nuevoRango)
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    }
    $scope.mostrarModalTipoMotor = function () {
        $('#modal-tipoMotor').modal('show');
    }
    $scope.agregarTipoMotor = function () {
        $scope.esAgregarTipoMotor = !$scope.esAgregarTipoMotor
    }
    $scope.guardarTipoMotor = function () {
        if (!Array.isArray($scope.formulario.tiposMotor)) {
            $scope.formulario.tiposMotor = [];
        }

        if (!Array.isArray($scope.formulario.agregarMotores)) {
            $scope.formulario.agregarMotores = [];
        }

        $scope.formulario.agregarMotores.push($scope.formulario.tipoMotor);
        $scope.formulario.tiposMotor.push($scope.formulario.tipoMotor);
        $scope.formulario.tipoMotor = {}
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    }
    $scope.seleccionarTipoMotor = function (tipoMotor) {
        if (!Array.isArray($scope.formulario.tiposMotor)) {
            $scope.formulario.tiposMotor = [];
        }
        if (!Array.isArray($scope.formulario.agregarMotores)) {
            $scope.formulario.agregarMotores = [];
        }
        $scope.formulario.agregarMotores.push(tipoMotor);
        $scope.formulario.tiposMotor.push(tipoMotor);
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    }
    $scope.existeTipoMotor = function (tipoMotor) {
        if ($scope.formulario.tiposMotor && Array.isArray($scope.formulario.tiposMotor)) {

            var index = $scope.formulario.tiposMotor.findIndex(function (elemento) {
                return elemento.id === tipoMotor.id;
            });
            if (index !== -1) {
                return false
            }
        }
        return true
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

        if ($scope.formulario.agregarMotores && Array.isArray($scope.formulario.agregarMotores)) {

            var index = $scope.formulario.agregarMotores.findIndex(function (elemento) {
                return elemento.id === tipoMotor.id;
            });
            if (index !== -1) {
                $scope.formulario.agregarMotores.splice(index, 1);
            }
        }

        if (!Array.isArray($scope.formulario.eliminarMotores)) {
            $scope.formulario.eliminarMotores = [];
        }
        $scope.formulario.eliminarMotores.push(tipoMotor)

        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
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
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
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
        if (!Array.isArray($scope.formulario.tiposCompresor)) {
            $scope.formulario.tiposCompresor = [];
        }
        $scope.formulario.tiposCompresor.push(tipoCompresor);
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    }
    $scope.guardarTipoCompresor = function () {
        if (!Array.isArray($scope.formulario.tiposCompresor)) {
            $scope.formulario.tiposCompresor = [];
        }
        $scope.formulario.tiposCompresor.push($scope.formulario.tipoCompresor);
        $scope.formulario.tipoCompresor = {}
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
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
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
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
        if (!Array.isArray($scope.formulario.baterias)) {
            $scope.formulario.baterias = [];
        }
        $scope.formulario.baterias.push(bateria);
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    }
    $scope.guardarBateria = function () {
        if (!Array.isArray($scope.formulario.baterias)) {
            $scope.formulario.baterias = [];
        }
        $scope.formulario.baterias.push($scope.formulario.bateria);
        $scope.formulario.bateria = {}
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
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
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
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
        if (!Array.isArray($scope.formulario.tags)) {
            $scope.formulario.tags = [];
        }
        $scope.formulario.tags.push(tag);
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    }
    $scope.guardarTag = function () {
        if (!Array.isArray($scope.formulario.tags)) {
            $scope.formulario.tags = [];
        }
        $scope.formulario.tags.push($scope.formulario.tag);
        $scope.formulario.tag = {}
        $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    }
    $scope._error = function (response) {
        alert(response.data.message || response.statusText);
    }
    $scope._correcto = function (response) {
        $scope.pattern = '';
        _actualizarDatos();
    }
}]);