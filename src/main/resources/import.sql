INSERT INTO area(id, nombre) VALUES (1, 'ccm tachos');
ALTER SEQUENCE area_seq RESTART WITH 2;

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

