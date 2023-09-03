INSERT INTO area(id, nombre) VALUES (1, 'ccm tachos');
ALTER SEQUENCE area_seq RESTART WITH 2;

INSERT INTO bateria(id, nombre) VALUES (1, 'aaa');
ALTER SEQUENCE bateria_seq RESTART WITH 2;

INSERT INTO capacidadbtu(id, nombre) VALUES (1, '60000');
ALTER SEQUENCE capacidadbtu_seq RESTART WITH 2;

INSERT INTO marca(id, nombre) VALUES (1, 'GoddMan');
ALTER SEQUENCE marca_seq RESTART WITH 2;

INSERT INTO ph(id, nombre) VALUES (1, '3');
ALTER SEQUENCE ph_seq RESTART WITH 2;

INSERT INTO presostato(id, nombre) VALUES (1, 'R-417');
ALTER SEQUENCE presostato_seq RESTART WITH 2;

INSERT INTO tipocompresor(id, nombre) VALUES (1, '1');
ALTER SEQUENCE tipocompresor_seq RESTART WITH 2;

INSERT INTO tipodesperfecto(id, nombre) VALUES (1, 'fuga');
ALTER SEQUENCE tipodesperfecto_seq RESTART WITH 2;

INSERT INTO tipoequipo(id, nombre) VALUES (1, 'split');
INSERT INTO tipoequipo(id, nombre) VALUES (2, 'mini-split');
INSERT INTO tipoequipo(id, nombre) VALUES (3, 'paquete');
ALTER SEQUENCE tipoequipo_seq RESTART WITH 4;

INSERT INTO tipofiltrodeshidratador(id, nombre) VALUES (1, 'c-164');
ALTER SEQUENCE tipofiltrodeshidratador_seq RESTART WITH 2;

INSERT INTO tipogas(id, nombre) VALUES (1, 'r-410');
ALTER SEQUENCE tipogas_seq RESTART WITH 2;

INSERT INTO tipolimpieza(id, nombre) VALUES (1, 'condensador');
ALTER SEQUENCE tipolimpieza_seq RESTART WITH 2;

INSERT INTO tipomotor(id, nombre) VALUES (1, '')1/2;
ALTER SEQUENCE tipomotor_seq RESTART WITH 2;

INSERT INTO tiponotificacion(id, nombre) VALUES (1, 'asignado');
INSERT INTO tiponotificacion(id, nombre) VALUES (2, 'completado');
ALTER SEQUENCE tiponotificacion_seq RESTART WITH 3;

INSERT INTO tipomantenimiento(id, nombre) VALUES (1, 'preventico');
INSERT INTO tipomantenimiento(id, nombre) VALUES (2, 'programado');
INSERT INTO tipomantenimiento(id, nombre) VALUES (3, 'correctivo');
INSERT INTO tipomantenimiento(id, nombre) VALUES (4, 'evaluacion');
ALTER SEQUENCE tipomantenimiento_seq RESTART WITH 5;

