INSERT INTO area(id, nombre) VALUES (1, 'ccm tachos');
INSERT INTO area(id, nombre) VALUES (2, '3 marias');
ALTER SEQUENCE area_seq RESTART WITH 3;

INSERT INTO bateria(id, nombre) VALUES (1, 'aaa');
INSERT INTO bateria(id, nombre) VALUES (2, 'aa');
INSERT INTO bateria(id, nombre) VALUES (3, 'a');
ALTER SEQUENCE bateria_seq RESTART WITH 4;

INSERT INTO capacidadbtu(id, nombre) VALUES (1, '60000');
INSERT INTO capacidadbtu(id, nombre) VALUES (2, '24000');
ALTER SEQUENCE capacidadbtu_seq RESTART WITH 3;

INSERT INTO estado(id, nombre) VALUES (1, 'trabajando');
INSERT INTO estado(id, nombre) VALUES (2, 'finalizado');
INSERT INTO estado(id, nombre) VALUES (3, 'leido');
INSERT INTO estado(id, nombre) VALUES (4, 'no leido');
INSERT INTO estado(id, nombre) VALUES (5, 'asignado');
INSERT INTO estado(id, nombre) VALUES (6, 'nuevo');
INSERT INTO estado(id, nombre) VALUES (7, 'modificado');
INSERT INTO estado(id, nombre) VALUES (8, 'desistalado');
ALTER SEQUENCE estado_seq RESTART WITH 9;

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

INSERT INTO tipomotor(id, nombre,capacidad) VALUES (1, 'motormanejadora','1/2');
INSERT INTO tipomotor(id, nombre, capacidad) VALUES (2, 'motorcondensador','3/4');
ALTER SEQUENCE tipomotor_seq RESTART WITH 3;

INSERT INTO tiponotificacion(id, nombre) VALUES (1, 'asignado');
INSERT INTO tiponotificacion(id, nombre) VALUES (2, 'completado');
INSERT INTO tiponotificacion(id, nombre) VALUES (3, 'actidad nueva');
ALTER SEQUENCE tiponotificacion_seq RESTART WITH 4;



INSERT INTO tipomantenimiento(id, nombre) VALUES (1, 'preventico');
INSERT INTO tipomantenimiento(id, nombre) VALUES (2, 'programado');
INSERT INTO tipomantenimiento(id, nombre) VALUES (3, 'correctivo');
INSERT INTO tipomantenimiento(id, nombre) VALUES (4, 'Instalacion');
INSERT INTO tipomantenimiento(id, nombre) VALUES (5, 'Desistalar');
ALTER SEQUENCE tipomantenimiento_seq RESTART WITH 6;

INSERT INTO rangopresion(id, minimo,maximo) VALUES (1, 0,10);
INSERT INTO rangopresion(id, minimo,maximo) VALUES (2, 11,100);
ALTER SEQUENCE rangopresion_seq RESTART WITH 3;

INSERT INTO material(id, nombre,codigosap) VALUES (1, 'tornillo','1ASDOFKN19802');
INSERT INTO material(id, nombre,codigosap) VALUES (2, 'broca','75452popo');
ALTER SEQUENCE material_seq RESTART WITH 3;

INSERT INTO  equipo(id ,area_id,estado_id ,tipogas_id ,capacidadbtu_id ,tipofiltrodeshidratador_id ,rangopresionalta_id ,rangopresionbaja_id ,marca_id ,ph_id ,tipoequipo_id ,modelo ,voltaje ,amperaje ,flipon ,cableAlimentacion ,tranformador ,contactor ,termostato ,tarjetaElectronica ,selector ,retardor ,presostatoAlta_id ,presostatoBaja_id) VALUES (1,2,6,1,1,1,2,1,1,1,1,'ckl60-cm3','220','21.7','3 polos*40amp','tsj 3*10','220','3 polos* 24v','digital','N/A','N/A','0.3-10*24V',1,1);
ALTER SEQUENCE equipo_seq RESTART WITH 2;

INSERT INTO equipo_tipo_motor(equipo_id, tipomotor_id)
VALUES (1, 1),(1, 2);


INSERT INTO equipo_tipo_compresor(equipo_id, tipocompresor_id)
VALUES (1, 1),(1, 2);

INSERT INTO equipo_bateria(equipo_id, bateria_id)
VALUES (1, 1),(1, 2);


INSERT INTO tag(id, nombre) VALUES (1, 'depaquete');
INSERT INTO tag(id, nombre) VALUES (2, 'xxx');
ALTER SEQUENCE tag_seq RESTART WITH 3;

INSERT INTO equipo_tag(equipo_id, tag_id)
VALUES (1, 1),(1, 2);


-- INSERT INTO duracion(id, horas,minutos) VALUES (1, 43,10);

INSERT INTO actividad(id, descripcion, ordentrabajo,reserva,tipomantenimiento_id,fechainicioprogramado,fechaFinProgramado,equipo_id,
fechaInicioActividad,fechaFinActividad,estado_id) VALUES (1,'tiempo sin mantenimiento', 'OT1385','0124957',2,'2023-09-07','2023-09-10',1,'2023-09-07','2023-09-12',1);
ALTER SEQUENCE actividad_seq RESTART WITH 2;

INSERT INTO actividad_tipo_desperfecto(actividad_id, desperfecto_id)
VALUES (1, 1),(1, 2);

INSERT INTO tipolimpieza(id, nombre) VALUES (1, 'condensador');
INSERT INTO tipolimpieza(id, nombre) VALUES (2, 'evaporador');
ALTER SEQUENCE tipolimpieza_seq RESTART WITH 3;

INSERT INTO limpieza(id, realizada,tipolimpieza_id,actividad_id) VALUES (1, True,1,1),(2, False,1,1);
ALTER SEQUENCE limpieza_seq RESTART WITH 3;

INSERT INTO actividadmaterial(id,actividad_id,material_id,cantidad)VALUES(1,1,1,55);
ALTER SEQUENCE actividadmaterial_seq RESTART WITH 2;

INSERT INTO notificacion(id, estado_id,actividad_id, tiponotificacion_id ) VALUES (1, 1, 1, 1);
ALTER SEQUENCE notificacion_seq RESTART WITH 2;


