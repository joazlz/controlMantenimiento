INSERT INTO area(id, nombre) VALUES (1, 'ccm tachos');
INSERT INTO area(id, nombre) VALUES (2, '3 marias');
ALTER SEQUENCE area_seq RESTART WITH 3;

INSERT INTO bateria(id, nombre) VALUES (1, 'aaa');
ALTER SEQUENCE bateria_seq RESTART WITH 2;

INSERT INTO capacidadbtu(id, nombre) VALUES (1, '60000');
INSERT INTO capacidadbtu(id, nombre) VALUES (2, '24000');
ALTER SEQUENCE capacidadbtu_seq RESTART WITH 3;

INSERT INTO estado(id, nombre) VALUES (1, 'trabajando');
ALTER SEQUENCE estado_seq RESTART WITH 2;

INSERT INTO marca(id, nombre) VALUES (1, 'GoddMan');
INSERT INTO marca(id, nombre) VALUES (2, 'YORK');
INSERT INTO marca(id, nombre) VALUES (3, 'CARRIE');
ALTER SEQUENCE marca_seq RESTART WITH 4;

INSERT INTO ph(id, nombre) VALUES (1, 'PH1');
INSERT INTO ph(id, nombre) VALUES (2, 'PH3');
ALTER SEQUENCE ph_seq RESTART WITH 3;

INSERT INTO presostato(id, nombre) VALUES (1, 'R-417');
INSERT INTO presostato(id, nombre) VALUES (2, 'R-410');
ALTER SEQUENCE presostato_seq RESTART WITH 3;

INSERT INTO tipocompresor(id, nombre) VALUES (1, 'R-410');
INSERT INTO tipocompresor(id, nombre) VALUES (2, 'R-417');
ALTER SEQUENCE tipocompresor_seq RESTART WITH 3;

INSERT INTO tipodesperfecto(id, nombre) VALUES (1, 'fuga');
INSERT INTO tipodesperfecto(id, nombre) VALUES (2, 'electrico');
INSERT INTO tipodesperfecto(id, nombre) VALUES (3, 'mecanico');
ALTER SEQUENCE tipodesperfecto_seq RESTART WITH 4;

INSERT INTO tipoequipo(id, nombre) VALUES (1, 'split');
INSERT INTO tipoequipo(id, nombre) VALUES (2, 'mini-split');
INSERT INTO tipoequipo(id, nombre) VALUES (3, 'paquete');
ALTER SEQUENCE tipoequipo_seq RESTART WITH 4;

INSERT INTO tipofiltrodeshidratador(id, nombre) VALUES (1, 'c-164');
INSERT INTO tipofiltrodeshidratador(id, nombre) VALUES (2, 'c-163');
ALTER SEQUENCE tipofiltrodeshidratador_seq RESTART WITH 3;

INSERT INTO tipogas(id, nombre) VALUES (1, 'r-410');
INSERT INTO tipogas(id, nombre) VALUES (2, 'r-417');
ALTER SEQUENCE tipogas_seq RESTART WITH 3;

INSERT INTO tipolimpieza(id, nombre) VALUES (1, 'condensador');
INSERT INTO tipolimpieza(id, nombre) VALUES (2, 'evaporador');
ALTER SEQUENCE tipolimpieza_seq RESTART WITH 3;

INSERT INTO tipomotor(id, nombre,capacidad) VALUES (1, 'motormanejadora','1/2');
INSERT INTO tipomotor(id, nombre, capacidad) VALUES (2, 'motorcondensador','3/4');
ALTER SEQUENCE tipomotor_seq RESTART WITH 3;

INSERT INTO tiponotificacion(id, nombre) VALUES (1, 'asignado');
INSERT INTO tiponotificacion(id, nombre) VALUES (2, 'completado');
ALTER SEQUENCE tiponotificacion_seq RESTART WITH 3;

INSERT INTO tipomantenimiento(id, nombre) VALUES (1, 'preventico');
INSERT INTO tipomantenimiento(id, nombre) VALUES (2, 'programado');
INSERT INTO tipomantenimiento(id, nombre) VALUES (3, 'correctivo');
INSERT INTO tipomantenimiento(id, nombre) VALUES (4, 'evaluacion');
ALTER SEQUENCE tipomantenimiento_seq RESTART WITH 5;

INSERT INTO rangopresion(id, minimo,maximo) VALUES (1, 0,10);
ALTER SEQUENCE rangopresion_seq RESTART WITH 2;

INSERT INTO limpieza(id, realizada,tipolimpieza_id) VALUES (1, True,1);
ALTER SEQUENCE limpieza_seq RESTART WITH 2;

INSERT INTO material(id, nombre,codigosap) VALUES (1, 'tornillo','1ASDOFKN19802');
ALTER SEQUENCE material_seq RESTART WITH 2;

INSERT INTO  equipo(id ,area_id ,tipogas_id ,capacidadbtu_id ,tipofiltrodeshidratador_id ,rangopresionalta_id ,rangopresionbaja_id ,marca_id ,ph_id ,tipoequipo_id ,modelo ,voltaje ,amperaje ,flipon ,cableAlimentacion ,tranformador ,contactor ,termostato ,tarjetaElectronica ,selectro ,retardor ,presostatoAlta_id ,presostatoBaja_id) VALUES (1,1,1,1,1,1,1,1,1,1,'modelo','voltaje','amperaje','flipon','cableAlimentacion','tranformador','contactor','termostato','tarjetaElectronica','selectro','retardor',1,1);
ALTER SEQUENCE equipo_seq RESTART WITH 2;

INSERT INTO equipo_tipo_motor(equipo_id, tipomotor_id)
VALUES (1, 1);


INSERT INTO equipo_tipo_compresor(equipo_id, tipocompresor_id)
VALUES (1, 1);

INSERT INTO equipo_bateria(equipo_id, bateria_id)
VALUES (1, 1);


INSERT INTO tag(id, nombre) VALUES (1, 'depaquete');
ALTER SEQUENCE tag_seq RESTART WITH 2;

INSERT INTO equipo_tag(equipo_id, tag_id)
VALUES (1, 1);


INSERT INTO duracion(id, horas,minutos) VALUES (1, 43,10);

INSERT INTO actividad(id, ordentrabajo,tipomantenimiento_id,fechainicioprogramado,fechaFinProgramado,equipo_id,fechaInicioActividad,fechaFinActividad,duracion_id,estado_id) VALUES (1, 'OT1385',2,'2023-09-07','2023-09-10',1,'2023-09-07','2023-09-12',1,1);
ALTER SEQUENCE actividad_seq RESTART WITH 2;