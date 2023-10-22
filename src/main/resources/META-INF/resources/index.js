var app = angular.module("InventarioManagement", []);
app.controller("InventarioManagementController", ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.lista = [
        { "nombre": "equipos", "cantidad": 0 },
        { "nombre": "actividades", "cantidad": 0 },
        { "nombre": "catalogos", "cantidad": 0 }
    ];
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
    $scope.tiposNotificacion = [];
    $scope.tiposMantenimientos = [];
    $scope.tiposLimpieza = [];
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
    function getTiposLimpieza() {
        $http({
            method: 'GET',
            url: '/actividad/tipolimpieza/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.tiposLimpieza = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getTiposMantenimiento() {
        $http({
            method: 'GET',
            url: '/actividad/tipomantenimiento/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.tiposMantenimiento = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function getTiposNotificacion() {
        $http({
            method: 'GET',
            url: '/alerta/tiponotificacion/buscar?pattern=' + $scope.pattern
        }).then(function successCallback(response) {
            $scope.tiposNotificacion = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }
    function _actualizarDatos() {
        getEquipos();
        getActividades();
        getTiposNotificacion();
        getTiposLimpieza();
        getTiposMantenimiento();
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
        $("#tipoCompresor").hide()
        $("#tipoEquipo").hide()
        $("#tipoFiltroDeshidratador").hide()
        $("#tipoGas").hide()
        $("#tipoMotor").hide()
        $("#tipoLimpieza").hide()
        $("#tipoMantenimiento").hide()
        $("#tipoNotificacion").hide()
                $("#tag").hide()
        $("#tipoLimpieza").hide()
        $("#tipoMantenimiento").hide()
        $("#tipoNotificacion").hide()
                $("#tag").hide()
        $('#contenidoInicio').show();
        $('#rangoPresion').dropdown();
        _actualizarDatos()

    }
    function httpMetodo(method, url, data) {
        $http({
            method: method,
            url: url,
            data: $httpParamSerializerJQLike(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then($scope._correcto, $scope._error)
    }

    $scope.actualizar = function () {
        _actualizarDatos();
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

        // ELIMINAR
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
        if (!Array.isArray(formulario.eliminarCompresores)) {
            formulario.eliminarCompresores = [];
        }
        formulario.eliminarCompresores.forEach(function (tipoCompresor) {
            if (tipoCompresor.id > 0) {
                data = {};
                method = 'DELETE';
                url = 'equipo/actualizar/' + formulario.id + '/tiposcompresores';
                data.tipoCompresor_id = tipoCompresor.id;
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
        if (!Array.isArray(formulario.eliminarBaterias)) {
            formulario.eliminarBaterias = [];
        }
        formulario.eliminarBaterias.forEach(function (bateria) {
            if (bateria.id > 0) {
                data = {};
                method = 'DELETE';
                url = 'equipo/actualizar/' + formulario.id + '/baterias';
                data.bateria_id = bateria.id;
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
        if (!Array.isArray(formulario.eliminarTags)) {
            formulario.eliminarTags = [];
        }
        formulario.eliminarTags.forEach(function (tag) {
            if (tag.id > 0) {
                data = {};
                method = 'DELETE';
                url = 'equipo/actualizar/' + formulario.id + '/tags';
                data.tag_id = tag.id;
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

        // AGREGAR
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
            }
        });
        if (!Array.isArray(formulario.agregarCompresores)) {
            formulario.agregarCompresores = [];
        }
        formulario.agregarCompresores.forEach(function (tipoCompresor) {
            if (tipoCompresor.id > 0) {
                data = {};
                method = 'POST';
                url = 'equipo/actualizar/' + formulario.id + '/tiposcompresores';
                data.tipoCompresor_id = tipoCompresor.id;
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
        if (!Array.isArray(formulario.agregarBaterias)) {
            formulario.agregarBaterias = [];
        }
        formulario.agregarBaterias.forEach(function (bateria) {
            if (bateria.id > 0) {
                data = {};
                method = 'POST';
                url = 'equipo/actualizar/' + formulario.id + '/baterias';
                data.bateria_id = bateria.id;
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
        if (!Array.isArray(formulario.agregarTags)) {
            formulario.agregarTags = [];
        }
        formulario.agregarTags.forEach(function (tag) {
            if (tag.id > 0) {
                data = {};
                method = 'POST';
                url = 'equipo/actualizar/' + formulario.id + '/tags';
                data.tag_id = tag.id;
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
                        $('#contenidoEquipos').show();
                        $('#contenidoInicio').hide();
                        $('#contenidoCatalogos').hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#capacidadBtu").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        break;
                    case "catalogos":
                        $('#contenidoEquipos').hide();
                        $('#contenidoInicio').hide();
                        $('#contenidoCatalogos').show();
                        $('#contenidoEquipos').hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#capacidadBtu").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        break;
                    default:
                        break;
                }
                switch (item) {
                    case "inicio":
                        $('#contenidoInicio').show();
                        $('#contenidoCatalogos').hide();
                        $("#areas").hide();
                        $("#baterias").hide();
                        $("#capacidadBtu").hide();
                        $("#estado").hide()
                        $("#marca").hide()
                        $("#ph").hide()
                        $("#presostato").hide()
                        $("#rangoPresion").hide()
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        break;
                    case "configuracion":
                        $('#contenidoConfiguracion').modal('show');
                        break;
                    case "notificacion":
                        $('#contenidoNotificacion').modal('show');
                        break;
                    case "modal-tipoMotor":
                        $('#modal-tipoMotor').modal('show');
                        break;
                    case "modal-tipoCompresor":
                        $('#modal-tipoCompresor').modal('show');
                        break;
                    case "modal-bateria":
                        $('#modal-bateria').modal('show');
                        break;
                    case "modal-tag":
                        $('#modal-tag').modal('show');
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
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
            case "capacidadbtu":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        $scope.catalogoSeleccionado = 'capacidadbtu'
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_capacidadBtu").text("Agregar Capacidad BTU");
                        $('#editar_agregar_capacidadBtu').modal('show');
                        break;
                    case "editar":
                        $scope.formulario.capacidadBtu = item
                        $("#tituloModal_editar_agregar_capacidadBtu").text("Editar Capacidad BTU");
                        $('#editar_agregar_capacidadBtu').modal('show');
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_estado").text("Agregar Estado");
                        $('#editar_agregar_estado').modal('show');
                        break;
                    case "editar":
                        $scope.formulario.estado = item
                        $("#tituloModal_editar_agregar_estado").text("Editar Estado");
                        $('#editar_agregar_estado').modal('show');
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_marca").text("Agregar Marca");
                        $('#editar_agregar_marca').modal('show');
                        break;
                    case "editar":
                        $scope.formulario.marca = item
                        $("#tituloModal_editar_agregar_marca").text("Editar Marca");
                        $('#editar_agregar_marca').modal('show');
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_ph").text("Agregar PH");
                        $('#editar_agregar_ph').modal('show');
                        break;
                    case "editar":
                        $scope.formulario.ph = item
                        $("#tituloModal_editar_agregar_ph").text("Editar PH");
                        $('#editar_agregar_ph').modal('show');
                        break;
                }
                break;
            case "presostato":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        $scope.catalogoSeleccionado = 'presostato'
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_presostato").text("Agregar Presostato");
                        $('#editar_agregar_presostato').modal('show');
                        break;
                    case "editar":
                        $scope.formulario.presostato = item
                        $("#tituloModal_editar_agregar_presostato").text("Editar Presostato");
                        $('#editar_agregar_presostato').modal('show');
                        break;
                }
                break;
            case "rangopresion":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        $scope.catalogoSeleccionado = 'rangopresion'
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;

                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_rangoPresion").text("Agregar Rango Presion");
                        $('#editar_agregar_rangoPresion').modal('show');

                        break;

                    case "editar":
                        $scope.formulario.rangoPresion = item
                        $("#tituloModal_editar_agregar_rangoPresion").text("Agregar Rango Presion");
                        $('#editar_agregar_rangoPresion').modal('show');
                        break;
                }
                break;
            case "tipocompresor":
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
                        $("#tipoCompresor").show()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        $scope.catalogoSeleccionado = 'tipocompresor'
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;

                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_tipocompresor").text("Agregar Tipo Compresor");
                        $('#editar_agregar_tipocompresor').modal('show');

                        break;

                    case "editar":
                        $scope.formulario.tipoCompresor = item
                        $("#tituloModal_editar_agregar_tipocompresor").text("Agregar Tipo Compresor");
                        $('#editar_agregar_tipocompresor').modal('show');
                        break;
                }
                break;
            case "tipoequipo":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").show()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        $scope.catalogoSeleccionado = 'tipoequipo'
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;

                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_tipoequipo").text("Agregar Tipo Equipo");
                        $('#editar_agregar_tipoequipo').modal('show');

                        break;

                    case "editar":
                        $scope.formulario.tipoEquipo = item
                        $("#tituloModal_editar_agregar_tipoequipo").text("Agregar Tipo Equipo");
                        $('#editar_agregar_tipoequipo').modal('show');
                        break;
                }
                break;
            case "tipofiltrodeshidratador":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").show()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        $scope.catalogoSeleccionado = 'tipofiltrodeshidratador'
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_tipofiltrodeshidratador").text("Agregar Tipo Equipo");
                        $('#editar_agregar_tipofiltrodeshidratador').modal('show');

                        break;

                    case "editar":
                        $scope.formulario.tipoFiltroDeshidratador = item
                        $("#tituloModal_editar_agregar_tipofiltrodeshidratador").text("Agregar Tipo Equipo");
                        $('#editar_agregar_tipofiltrodeshidratador').modal('show');
                        break;
                }
                break;
            case "tipogas":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").show()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        $scope.catalogoSeleccionado = 'tipogas'
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break;
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_tipogas").text("Agregar Tipo Gas");
                        $('#editar_agregar_tipogas').modal('show');

                        break;
                    case "editar":
                        $scope.formulario.tipoGas = item
                        $("#tituloModal_editar_agregar_tipogas").text("Agregar Tipo Gas");
                        $('#editar_agregar_tipogas').modal('show');
                        break;
                }
                break;
            case "tipomotor":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").show()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                                $("#tag").hide()
                        $scope.catalogoSeleccionado = 'tipomotor'
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
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_tipomotor").text("Agregar Tipo Motor");
                        $('#editar_agregar_tipomotor').modal('show');

                        break;

                    case "editar":
                        $scope.formulario.tipoMotor = item
                        $("#tituloModal_editar_agregar_tipomotor").text("Agregar Tipo Motor");
                        $('#editar_agregar_tipomotor').modal('show');
                        break;
                }
                break;
            case "tipolimpieza":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").show()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                        $("#tag").hide()

                        $scope.catalogoSeleccionado = 'tipolimpieza'
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
                        $('#itemTipoMotor').removeClass('active')
                        $('#itemTipoLimpieza').addClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_tipolimpieza").text("Agregar Tipo Limpieza");
                        $('#editar_agregar_tipolimpieza').modal('show');

                        break;

                    case "editar":
                        $scope.formulario.tipoLimpieza = item
                        $("#tituloModal_editar_agregar_tipolimpieza").text("Agregar Tipo Limpieza");
                        $('#editar_agregar_tipolimpieza').modal('show');
                        break;
                }
                break;
            case "tipomantenimiento":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").show()
                        $("#tipoNotificacion").hide()
                        $("#tag").hide()

                        $scope.catalogoSeleccionado = 'tipomantenimiento'
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
                        $('#itemTipoMotor').removeClass('active')
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').addClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('itemTag').removeClass('active')
                        break
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_tipomantenimiento").text("Agregar Tipo Mantenimiento");
                        $('#editar_agregar_tipomantenimiento').modal('show');

                        break;

                    case "editar":
                        $scope.formulario.tipoMantenimiento = item
                        $("#tituloModal_editar_agregar_tipomantenimiento").text("Agregar Tipo Mantenimiento");
                        $('#editar_agregar_tipomantenimiento').modal('show');
                        break;
                }
                break;
            case "tiponotificacion":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").show()
                        $("#tag").hide()

                        $scope.catalogoSeleccionado = 'tiponotificacion'
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
                        $('#itemTipoMotor').removeClass('active')
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').addClass('active')
                        $('itemTag').removeClass('active')
                        break
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_tiponotificacion").text("Agregar Tipo Notificacion");
                        $('#editar_agregar_tiponotificacion').modal('show');

                        break;

                    case "editar":
                        $scope.formulario.tipoNotificacion = item
                        $("#tituloModal_editar_agregar_tiponotificacion").text("Agregar Tipo Notificacion");
                        $('#editar_agregar_tiponotificacion').modal('show');
                        break;
                }
                break;
            case "tag":
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
                        $("#tipoCompresor").hide()
                        $("#tipoEquipo").hide()
                        $("#tipoFiltroDeshidratador").hide()
                        $("#tipoGas").hide()
                        $("#tipoMotor").hide()
                        $("#tipoLimpieza").hide()
                        $("#tipoMantenimiento").hide()
                        $("#tipoNotificacion").hide()
                        $("#tag").show()

                        $scope.catalogoSeleccionado = 'tag'
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
                        $('#itemTipoMotor').removeClass('active')
                        $('#itemTipoLimpieza').removeClass('active')
                        $('#itemTipoMantenimiento').removeClass('active')
                        $('#itemTipoNotificacion').removeClass('active')
                        $('#itemTag').addClass('active')
                        break
                    case "agregar":
                        $scope.metodo = metodo
                        if (item === 'agregar') {
                            $scope.formulario = {}
                        } else {
                            $scope.formulario = item
                        }
                        $("#tituloModal_editar_agregar_tag").text("Agregar Tag");
                        $('#editar_agregar_tag').modal('show');

                        break;

                    case "editar":
                        $scope.formulario.tipoNotificacion = item
                        $("#tituloModal_editar_agregar_tag").text("Agregar Tag");
                        $('#editar_agregar_tag').modal('show');
                        break;
                }
                break;
            default:
                break;
        }
    }
    $scope.buscar=function(tipo) {
        switch (tipo) {
            case 'equipo':
                getEquipos()
                break;
            case 'actividad':
                getActividades()
                break;
        
            default:
                break;
        }
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
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.area.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.area.id;
                    data.nombre = formulario.area.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "bateria":
                if ($scope.formulario.bateria.id == -1 || $scope.formulario.bateria.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.bateria.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.bateria.id;
                    data.nombre = formulario.bateria.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "capacidadbtu":
                if ($scope.formulario.capacidadBtu.id == -1 || $scope.formulario.capacidadBtu.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.capacidadBtu.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.capacidadBtu.id;
                    data.nombre = formulario.capacidadBtu.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "estado":
                if ($scope.formulario.estado.id == -1 || $scope.formulario.estado.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.estado.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.estado.id;
                    data.nombre = formulario.estado.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "marca":
                if ($scope.formulario.marca.id == -1 || $scope.formulario.marca.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.marca.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.marca.id;
                    data.nombre = formulario.marca.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "ph":
                if ($scope.formulario.ph.id == -1 || $scope.formulario.ph.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.ph.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.ph.id;
                    data.nombre = formulario.ph.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "presostato":
                if ($scope.formulario.presostato.id == -1 || $scope.formulario.presostato.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.presostato.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.presostato.id;
                    data.nombre = formulario.presostato.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "rangopresion":
                if ($scope.formulario.rangoPresion.id == -1 || $scope.formulario.rangoPresion.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.minimo = formulario.rangoPresion.minimo;
                    data.maximo = formulario.rangoPresion.maximo;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.rangoPresion.id;
                    data.minimo = formulario.rangoPresion.minimo;
                    data.maximo = formulario.rangoPresion.maximo;
                    httpMetodo(method, url, data)
                }
                break;
            case "tipocompresor":
                if ($scope.formulario.tipoCompresor.id == -1 || $scope.formulario.tipoCompresor.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.tipoCompresor.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.tipoCompresor.id;
                    data.nombre = formulario.tipoCompresor.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "tipoequipo":
                if ($scope.formulario.tipoEquipo.id == -1 || $scope.formulario.tipoEquipo.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.tipoEquipo.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.tipoEquipo.id;
                    data.nombre = formulario.tipoEquipo.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "tipofiltrodeshidratador":
                if ($scope.formulario.tipoFiltroDeshidratador.id == -1 || $scope.formulario.tipoFiltroDeshidratador.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.tipoFiltroDeshidratador.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.tipoFiltroDeshidratador.id;
                    data.nombre = formulario.tipoFiltroDeshidratador.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "tipogas":
                if ($scope.formulario.tipoGas.id == -1 || $scope.formulario.tipoGas.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.tipoGas.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.tipoGas.id;
                    data.nombre = formulario.tipoGas.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "tipomotor":
                if ($scope.formulario.tipoMotor.id == -1 || $scope.formulario.tipoMotor.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.tipoMotor.nombre;
                    data.capacidad = formulario.tipoMotor.capacidad;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.tipoMotor.id;
                    data.nombre = formulario.tipoMotor.nombre;
                    data.capacidad = formulario.tipoMotor.capacidad;
                    httpMetodo(method, url, data)
                }
                break;
            case "tipolimpieza":
                if ($scope.formulario.tipoLimpieza.id == -1 || $scope.formulario.tipoLimpieza.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/actividad/' + tipo;
                    data.nombre = formulario.tipoLimpieza.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/actividad/' + tipo + '/' + formulario.tipoLimpieza.id;
                    data.nombre = formulario.tipoLimpieza.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "tipomantenimiento":
                if ($scope.formulario.tipoMantenimiento.id == -1 || $scope.formulario.tipoMantenimiento.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.tipoMantenimiento.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.tipoMantenimiento.id;
                    data.nombre = formulario.tipoMantenimiento.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "tiponotificacion":
                if ($scope.formulario.tipoNotificacion.id == -1 || $scope.formulario.tipoNotificacion.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/alerta/' + tipo;
                    data.nombre = formulario.tipoNotificacion.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/alerta/' + tipo + '/' + formulario.tipoNotificacion.id;
                    data.nombre = formulario.tipoNotificacion.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            case "tag":
                if ($scope.formulario.tag.id == -1 || $scope.formulario.tag.id === undefined) {
                    data = {};
                    method = 'PUT';
                    url = '/equipo/' + tipo;
                    data.nombre = formulario.tag.nombre;
                    httpMetodo(method, url, data)
                } else {
                    data = {};
                    method = 'POST';
                    url = '/equipo/' + tipo + '/' + formulario.tag.id;
                    data.nombre = formulario.tag.nombre;
                    httpMetodo(method, url, data)
                }
                break;
            default:
                break;
        }

    }
    $scope.eliminar = function (tipo, formulario) {
        switch (tipo) {
            case "area", "bateria", "capacidadbtu", "estado", "marca", "ph", "presostato", "rangopresion", "tipocompresor", "tipoequipo", "tipofiltrodeshidratador", "tipogas", "tipomotor", "tipolimpieza", "tipomantenimiento", "tiponotificacion":
                data = {};
                method = 'DELETE';
                url = '/equipo/' + tipo + '/' + formulario.id;
                httpMetodo(method, url, data)
                break;

            default:
                break;
        }

    }
    $scope.existe = function (tipo, clase) {
        switch (tipo) {
            case "tipomotor":
                if ($scope.formulario.tiposMotor && Array.isArray($scope.formulario.tiposMotor)) {
                    var index = $scope.formulario.tiposMotor.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        return false
                    }
                }
                return true
            case "tipocompresor":
                if ($scope.formulario.tiposCompresor && Array.isArray($scope.formulario.tiposCompresor)) {
                    var index = $scope.formulario.tiposCompresor.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        return false
                    }
                }
                return true
            case "bateria":
                if ($scope.formulario.baterias && Array.isArray($scope.formulario.baterias)) {
                    var index = $scope.formulario.baterias.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        return false
                    }
                }
                return true
            case "tag":
                if ($scope.formulario.tags && Array.isArray($scope.formulario.tags)) {
                    var index = $scope.formulario.tags.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        return false
                    }
                }
                return true

            default:
                break;
        }
    }
    $scope.seleccionar = function (tipo, elemento) {
        switch (tipo) {
            case "tipomotor":
                if (!Array.isArray($scope.formulario.tiposMotor)) {
                    $scope.formulario.tiposMotor = [];
                }
                if (!Array.isArray($scope.formulario.agregarMotores)) {
                    $scope.formulario.agregarMotores = [];
                }
                $scope.formulario.agregarMotores.push(elemento);
                $scope.formulario.tiposMotor.push(elemento);
                $scope.ver($scope.formulario, 'equipo', $scope.metodo)
                break;
            case "tipocompresor":
                if (!Array.isArray($scope.formulario.tiposCompresor)) {
                    $scope.formulario.tiposCompresor = [];
                }
                if (!Array.isArray($scope.formulario.agregarCompresores)) {
                    $scope.formulario.agregarCompresores = [];
                }
                $scope.formulario.agregarCompresores.push(elemento);
                $scope.formulario.tiposCompresor.push(elemento);
                $scope.ver($scope.formulario, 'equipo', $scope.metodo)
                break;
            case "bateria":
                if (!Array.isArray($scope.formulario.baterias)) {
                    $scope.formulario.baterias = [];
                }
                if (!Array.isArray($scope.formulario.agregarBaterias)) {
                    $scope.formulario.agregarBaterias = [];
                }
                $scope.formulario.agregarBaterias.push(elemento);
                $scope.formulario.baterias.push(elemento);
                $scope.ver($scope.formulario, 'equipo', $scope.metodo)
                break;
            case "tag":
                if (!Array.isArray($scope.formulario.tags)) {
                    $scope.formulario.tags = [];
                }
                if (!Array.isArray($scope.formulario.agregarTags)) {
                    $scope.formulario.agregarTags = [];
                }
                $scope.formulario.agregarTags.push(elemento);
                $scope.formulario.tags.push(elemento);
                $scope.ver($scope.formulario, 'equipo', $scope.metodo)
                break;

            default:
                break;
        }
    }
    $scope.unSeleccionar = function (tipo, clase) {
        switch (tipo) {
            case "tipomotor":
                if ($scope.formulario.tiposMotor && Array.isArray($scope.formulario.tiposMotor)) {
                    var index = $scope.formulario.tiposMotor.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        $scope.formulario.tiposMotor.splice(index, 1);
                    }
                }
        
                if ($scope.formulario.agregarMotores && Array.isArray($scope.formulario.agregarMotores)) {
                    var index = $scope.formulario.agregarMotores.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        $scope.formulario.agregarMotores.splice(index, 1);
                    }
                }
        
                if (!Array.isArray($scope.formulario.eliminarMotores)) {
                    $scope.formulario.eliminarMotores = [];
                }
                $scope.formulario.eliminarMotores.push(clase)
                $scope.ver($scope.formulario, 'equipo', $scope.metodo)
                break;
            case "tipocompresor":
                if ($scope.formulario.tiposCompresor && Array.isArray($scope.formulario.tiposCompresor)) {
                    var index = $scope.formulario.tiposCompresor.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        $scope.formulario.tiposCompresor.splice(index, 1);
                    }
                }
        
                if ($scope.formulario.agregarCompresores && Array.isArray($scope.formulario.agregarCompresores)) {
                    var index = $scope.formulario.agregarCompresores.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        $scope.formulario.agregarCompresores.splice(index, 1);
                    }
                }
        
                if (!Array.isArray($scope.formulario.eliminarCompresores)) {
                    $scope.formulario.eliminarCompresores = [];
                }
                $scope.formulario.eliminarCompresores.push(clase)
                $scope.ver($scope.formulario, 'equipo', $scope.metodo)
                break;
            case "bateria":
                if ($scope.formulario.baterias && Array.isArray($scope.formulario.baterias)) {
                    var index = $scope.formulario.baterias.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        $scope.formulario.baterias.splice(index, 1);
                    }
                }
        
                if ($scope.formulario.agregarBaterias && Array.isArray($scope.formulario.agregarBaterias)) {
                    var index = $scope.formulario.agregarBaterias.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        $scope.formulario.agregarBaterias.splice(index, 1);
                    }
                }
        
                if (!Array.isArray($scope.formulario.eliminarBaterias)) {
                    $scope.formulario.eliminarBaterias = [];
                }
                $scope.formulario.eliminarBaterias.push(clase)
                $scope.ver($scope.formulario, 'equipo', $scope.metodo)
                break;
            case "tag":
                if ($scope.formulario.tags && Array.isArray($scope.formulario.tags)) {
                    var index = $scope.formulario.tags.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        $scope.formulario.tags.splice(index, 1);
                    }
                }
        
                if ($scope.formulario.agregarTags && Array.isArray($scope.formulario.agregarTags)) {
                    var index = $scope.formulario.agregarTags.findIndex(function (elemento) {
                        return elemento.id === clase.id;
                    });
                    if (index !== -1) {
                        $scope.formulario.agregarTags.splice(index, 1);
                    }
                }
        
                if (!Array.isArray($scope.formulario.eliminarTags)) {
                    $scope.formulario.eliminarTags = [];
                }
                $scope.formulario.eliminarTags.push(clase)
                $scope.ver($scope.formulario, 'equipo', $scope.metodo)
                break;

            default:
                break;
        }
    }


    // $scope.agregarRangoPresion = function (rangoPresion, tipo) {
    //     $('#modal-rangoPresion').modal('show');
    //     if (!$scope.formulario.rangoPresion || typeof $scope.formulario.rangoPresion !== 'object') {
    //         $scope.formulario.rangoPresion = {};
    //     }
    //     if (!rangoPresion || typeof rangoPresion !== 'object') {
    //         rangoPresion = {};
    //     }

    //     $scope.formulario.rangoPresion = rangoPresion;
    //     if (tipo == 'rangoPresionAlta') {
    //         $scope.formulario.rangoPresion.id = -1
    //         $scope.formulario.rangoPresionAlta = rangoPresion;
    //         $scope.formulario.rangoPresion.tipo = 'alta';
    //     } else {
    //         $scope.formulario.rangoPresion.id = -2
    //         $scope.formulario.rangoPresionBaja = rangoPresion;
    //         $scope.formulario.rangoPresion.tipo = 'baja';
    //     }
    // }
    // $scope.guardarRangoPresion = function () {
    //     var nuevoRango = $scope.formulario.rangoPresion;
    //     if ($scope.formulario.rangoPresion.id == -1) {
    //         $scope.formulario.rangoPresionAlta = nuevoRango;
    //     }
    //     if ($scope.formulario.rangoPresion.id == -2) {
    //         $scope.formulario.rangoPresionAlta = nuevoRango;
    //     }
    //     $scope.rangosPresion.push(nuevoRango)
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }
    // $scope.agregarTipoMotor = function () {
    //     $scope.esAgregarTipoMotor = !$scope.esAgregarTipoMotor
    // }
    // $scope.guardarTipoMotor = function () {
    //     if (!Array.isArray($scope.formulario.tiposMotor)) {
    //         $scope.formulario.tiposMotor = [];
    //     }

    //     if (!Array.isArray($scope.formulario.agregarMotores)) {
    //         $scope.formulario.agregarMotores = [];
    //     }

    //     $scope.formulario.agregarMotores.push($scope.formulario.tipoMotor);
    //     $scope.formulario.tiposMotor.push($scope.formulario.tipoMotor);
    //     $scope.formulario.tipoMotor = {}
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }


    // $scope.eliminarTipoMotor = function (tipoMotor) {
    //     if ($scope.formulario.tiposMotor && Array.isArray($scope.formulario.tiposMotor)) {

    //         var index = $scope.formulario.tiposMotor.findIndex(function (elemento) {
    //             return elemento.id === tipoMotor.id;
    //         });
    //         if (index !== -1) {
    //             $scope.formulario.tiposMotor.splice(index, 1);
    //         }
    //     }

    //     if ($scope.formulario.agregarMotores && Array.isArray($scope.formulario.agregarMotores)) {

    //         var index = $scope.formulario.agregarMotores.findIndex(function (elemento) {
    //             return elemento.id === tipoMotor.id;
    //         });
    //         if (index !== -1) {
    //             $scope.formulario.agregarMotores.splice(index, 1);
    //         }
    //     }

    //     if (!Array.isArray($scope.formulario.eliminarMotores)) {
    //         $scope.formulario.eliminarMotores = [];
    //     }
    //     $scope.formulario.eliminarMotores.push(tipoMotor)

    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }
    // $scope.eliminarTipoCompresor = function (tipoCompresor) {
    //     if ($scope.formulario.tiposCompresor && Array.isArray($scope.formulario.tiposCompresor)) {

    //         var index = $scope.formulario.tiposCompresor.findIndex(function (elemento) {
    //             return elemento.id === tipoCompresor.id;
    //         });
    //         if (index !== -1) {
    //             $scope.formulario.tiposCompresor.splice(index, 1);
    //         }
    //     }
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }

    // $scope.mostrarModalTipoCompresor = function () {
    //     $('#modal-tipoCompresor').modal('show');
    // }
    // $scope.agregarTipoCompresor = function () {
    //     $scope.esAgregarTipoCompresor = !$scope.esAgregarTipoCompresor
    // }
    // $scope.existeTipoCompresor = function (tipoCompresor) {
    //     if ($scope.formulario.tiposCompresor && Array.isArray($scope.formulario.tiposCompresor)) {
    //         var index = $scope.formulario.tiposCompresor.findIndex(function (elemento) {
    //             return elemento.id === tipoCompresor.id;
    //         });
    //         if (index !== -1) {
    //             return false
    //         }
    //     }
    //     return true
    // }
    // $scope.seleccionarTipoCompresor = function (tipoCompresor) {
    //     if (!Array.isArray($scope.formulario.tiposCompresor)) {
    //         $scope.formulario.tiposCompresor = [];
    //     }
    //     $scope.formulario.tiposCompresor.push(tipoCompresor);
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }
    // $scope.guardarTipoCompresor = function () {
    //     if (!Array.isArray($scope.formulario.tiposCompresor)) {
    //         $scope.formulario.tiposCompresor = [];
    //     }
    //     $scope.formulario.tiposCompresor.push($scope.formulario.tipoCompresor);
    //     $scope.formulario.tipoCompresor = {}
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }
    // $scope.eliminarBateria = function (bateria) {
    //     if ($scope.formulario.baterias && Array.isArray($scope.formulario.baterias)) {

    //         var index = $scope.formulario.baterias.findIndex(function (elemento) {
    //             return elemento.id === bateria.id;
    //         });
    //         if (index !== -1) {
    //             $scope.formulario.baterias.splice(index, 1);
    //         }
    //     }
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }
    // $scope.mostrarModalBateria = function () {
    //     $('#modal-bateria').modal('show');
    // }
    // $scope.agregarBateria = function () {
    //     $scope.esAgregarBateria = !$scope.esAgregarBateria
    // }
    // $scope.existeBateria = function (bateria) {
    //     if ($scope.formulario.baterias && Array.isArray($scope.formulario.baterias)) {
    //         var index = $scope.formulario.baterias.findIndex(function (elemento) {
    //             return elemento.id === bateria.id;
    //         });
    //         if (index !== -1) {
    //             return false
    //         }
    //     }
    //     return true
    // }
    // $scope.seleccionarBateria = function (bateria) {
    //     if (!Array.isArray($scope.formulario.baterias)) {
    //         $scope.formulario.baterias = [];
    //     }
    //     $scope.formulario.baterias.push(bateria);
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }
    // $scope.guardarBateria = function () {
    //     if (!Array.isArray($scope.formulario.baterias)) {
    //         $scope.formulario.baterias = [];
    //     }
    //     $scope.formulario.baterias.push($scope.formulario.bateria);
    //     $scope.formulario.bateria = {}
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }
    // $scope.eliminarTag = function (tag) {
    //     if ($scope.formulario.tags && Array.isArray($scope.formulario.tags)) {

    //         var index = $scope.formulario.tags.findIndex(function (elemento) {
    //             return elemento.id === tag.id;
    //         });
    //         if (index !== -1) {
    //             $scope.formulario.tags.splice(index, 1);
    //         }
    //     }
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }
    // $scope.mostrarModalTag = function () {
    //     $('#modal-tag').modal('show');
    // }
    // $scope.agregarTag = function () {
    //     $scope.esAgregarTag = !$scope.esAgregarTag
    // }
    // $scope.existeTag = function (tag) {
    //     if ($scope.formulario.tags && Array.isArray($scope.formulario.tags)) {
    //         var index = $scope.formulario.tags.findIndex(function (elemento) {
    //             return elemento.id === tag.id;
    //         });
    //         if (index !== -1) {
    //             return false
    //         }
    //     }
    //     return true
    // }
    // $scope.seleccionarTag = function (tag) {
    //     if (!Array.isArray($scope.formulario.tags)) {
    //         $scope.formulario.tags = [];
    //     }
    //     $scope.formulario.tags.push(tag);
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }
    // $scope.guardarTag = function () {
    //     if (!Array.isArray($scope.formulario.tags)) {
    //         $scope.formulario.tags = [];
    //     }
    //     $scope.formulario.tags.push($scope.formulario.tag);
    //     $scope.formulario.tag = {}
    //     $scope.ver($scope.formulario, 'equipo', $scope.metodo)
    // }

    $scope._error = function (response) {
        alert(response.data.message || response.statusText);
    }
    $scope._correcto = function (response) {
        $scope.pattern = '';
        _actualizarDatos();
    }

}]);