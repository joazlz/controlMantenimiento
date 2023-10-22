INSERT INTO area(id, nombre) VALUES (1, 'ccm tachos bacht');
INSERT INTO area(id, nombre) VALUES (2, 'ccm tachos 1ra cristal ');
INSERT INTO area(id, nombre) VALUES (3, 'ccm continua 1ra crudo ');
INSERT INTO area(id, nombre) VALUES (4, 'ccm continua 2da crudo');
INSERT INTO area(id, nombre) VALUES (5, 'ccm clarificacion');
INSERT INTO area(id, nombre) VALUES (6, 'ccm crudo lado A');
INSERT INTO area(id, nombre) VALUES (7, 'ccm crudo lado B');
INSERT INTO area(id, nombre) VALUES (8, 'ccm envasado del A');
INSERT INTO area(id, nombre) VALUES (9, 'ccm continuas 2da crudo');
INSERT INTO area(id, nombre) VALUES (10, 'ccm bba Cristal');
INSERT INTO area(id, nombre) VALUES (11, 'ccm sala variadores cald#09');
INSERT INTO area(id, nombre) VALUES (12, 'ccm sala variadores cald#10');
INSERT INTO area(id, nombre) VALUES (13, 'ccm sala variadores cald#11');
ALTER SEQUENCE area_seq RESTART WITH 14;

INSERT INTO bateria(id, nombre) VALUES (1, 'aaa');
INSERT INTO bateria(id, nombre) VALUES (2, 'aa');
INSERT INTO bateria(id, nombre) VALUES (3, 'a');
ALTER SEQUENCE bateria_seq RESTART WITH 4;

INSERT INTO capacidadbtu(id, nombre) VALUES (1, '60000');
INSERT INTO capacidadbtu(id, nombre) VALUES (2, '24000');
INSERT INTO capacidadbtu(id, nombre) VALUES (3, '36000');
INSERT INTO capacidadbtu(id, nombre) VALUES (4, '18000');
ALTER SEQUENCE capacidadbtu_seq RESTART WITH 5;

INSERT INTO estado(id, nombre) VALUES (1, 'trabajando');
INSERT INTO estado(id, nombre) VALUES (2, 'finalizado');
INSERT INTO estado(id, nombre) VALUES (3, 'leido');
INSERT INTO estado(id, nombre) VALUES (4, 'no leido');
INSERT INTO estado(id, nombre) VALUES (5, 'asignado');
INSERT INTO estado(id, nombre) VALUES (6, 'nuevo');
INSERT INTO estado(id, nombre) VALUES (7, 'modificado');
INSERT INTO estado(id, nombre) VALUES (8, 'desistalado');
INSERT INTO estado(id, nombre) VALUES (9, 'activo');
ALTER SEQUENCE estado_seq RESTART WITH 10;

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
INSERT INTO tipoequipo(id, nombre) VALUES (4, 'ventana');
ALTER SEQUENCE tipoequipo_seq RESTART WITH 5;

INSERT INTO tipofiltrodeshidratador(id, nombre) VALUES (1, 'c-164');
INSERT INTO tipofiltrodeshidratador(id, nombre) VALUES (2, 'c-163');
ALTER SEQUENCE tipofiltrodeshidratador_seq RESTART WITH 3;

INSERT INTO tipogas(id, nombre) VALUES (1, 'r-410');
INSERT INTO tipogas(id, nombre) VALUES (2, 'r-417');
ALTER SEQUENCE tipogas_seq RESTART WITH 3;

INSERT INTO tipomotor(id, nombre,capacidad) VALUES (1, 'motormanejadora','1/2ph');
INSERT INTO tipomotor(id, nombre, capacidad) VALUES (2, 'motorcondensador','3/4 ph');
INSERT INTO tipomotor(id, nombre, capacidad) VALUES (3, 'motorcondensador','1 ph');
ALTER SEQUENCE tipomotor_seq RESTART WITH 4;

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

INSERT INTO material(id, nombre,codigosap) VALUES (1, 'LIMPIADOR D/ALUMINIOP/SERPENTI','18001352');
INSERT INTO material(id, nombre,codigosap) VALUES (2, 'ACEITE SINTETICO RL170H REFRIGERANTE R410A','24000012');
INSERT INTO material(id, nombre,codigosap) VALUES (3, 'ACEITE CAPELLA WF ISO 68-273271','24000460');
INSERT INTO material(id, nombre,codigosap) VALUES (4, 'GAS REFRIGERANTE R417 CILINDRO 25LBS AMUCOOL','11000050');
INSERT INTO material(id, nombre,codigosap) VALUES (5, 'GAS FREON R410A CILINDRO 25LBS','11000186');
INSERT INTO material(id, nombre,codigosap) VALUES (6, 'LATA AEROSOL QL1190 1LB QWIKECOFLUSH','14005617');
INSERT INTO material(id, nombre,codigosap) VALUES (7, 'REFRIG. ECO-FLUSH HFO-1233zd  CIL 10KG','24000410');
INSERT INTO material(id, nombre,codigosap) VALUES (8, 'CILINDRO NITROGENO INDUSTRIAL (RECARGA)','11000027');
INSERT INTO material(id, nombre,codigosap) VALUES (9, 'ACETILENO','11000436');
INSERT INTO material(id, nombre,codigosap) VALUES (10, 'CILINDRO OXIGENO','11000332');
INSERT INTO material(id, nombre,codigosap) VALUES (11, 'VALVULA BOLA SOLDABLE 3/8"OSD COD 01 690','14001225');
INSERT INTO material(id, nombre,codigosap) VALUES (12, 'VALVULA BOLA SOLDABLE 7/8"OSD COD 01 695','14001226');
INSERT INTO material(id, nombre,codigosap) VALUES (13, 'VALVULA PINCH SOLDABLE P/AIRE ACONDICIONADO','14006952');
INSERT INTO material(id, nombre,codigosap) VALUES (14, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (15, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (16, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (17, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (18, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (19, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (20, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (21, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (22, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (23, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (24, '','');
INSERT INTO material(id, nombre,codigosap) VALUES (25, '','');
ALTER SEQUENCE material_seq RESTART WITH 26;

INSERT INTO  equipo(id ,area_id,estado_id ,tipogas_id ,capacidadbtu_id ,tipofiltrodeshidratador_id ,rangopresionalta_id ,rangopresionbaja_id ,marca_id ,ph_id ,tipoequipo_id ,modelo ,voltaje ,amperaje ,flipon ,cableAlimentacion ,tranformador ,contactor ,termostato ,tarjetaElectronica ,selector ,retardor ,presostatoAlta_id ,presostatoBaja_id) VALUES (1,2,6,1,1,1,2,1,1,1,1,'ckl60-cm3','220','21.7','3 polos*40amp','tsj 3*10','220','3 polos* 24v','digital','N/A','N/A','0.3-10*24V',1,1);
INSERT INTO  equipo(id ,area_id,estado_id ,tipogas_id ,capacidadbtu_id ,tipofiltrodeshidratador_id ,rangopresionalta_id ,rangopresionbaja_id ,marca_id ,ph_id ,tipoequipo_id ,modelo ,voltaje ,amperaje ,flipon ,cableAlimentacion ,tranformador ,contactor ,termostato ,tarjetaElectronica ,selector ,retardor ,presostatoAlta_id ,presostatoBaja_id) VALUES (2,3,9,2,3,2,2,2,2,2,2,'GS3BA-60CH','230','20.1','3 polos*40amp','3 cable lineal calibre #10 ','220','3 polos* 24v','digital','realy','N/A','0.3-10*24V',2,2);
INSERT INTO  equipo(id ,area_id,estado_id ,tipogas_id ,capacidadbtu_id ,tipofiltrodeshidratador_id ,rangopresionalta_id ,rangopresionbaja_id ,marca_id ,ph_id ,tipoequipo_id ,modelo ,voltaje ,amperaje ,flipon ,cableAlimentacion ,tranformador ,contactor ,termostato ,tarjetaElectronica ,selector ,retardor ,presostatoAlta_id ,presostatoBaja_id) VALUES (3,2,9,1,1,1,2,1,1,1,1,'YAU-60CR','230','29.9','3 polos*40amp','cable apantallado 4*10','220','3 polos* 24v','digital','relay','N/A','0.3-10*24V',2,2);
INSERT INTO  equipo(id ,area_id,estado_id ,tipogas_id ,capacidadbtu_id ,tipofiltrodeshidratador_id ,rangopresionalta_id ,rangopresionbaja_id ,marca_id ,ph_id ,tipoequipo_id ,modelo ,voltaje ,amperaje ,flipon ,cableAlimentacion ,tranformador ,contactor ,termostato ,tarjetaElectronica ,selector ,retardor ,presostatoAlta_id ,presostatoBaja_id) VALUES (4,3,9,2,3,2,2,2,2,2,2,'GS3BA-60CH','230','20.1','3 polos*40amp','3 cable lineal calibre #10 ','220','3 polos* 24v','digital','realy','N/A','0.3-10*24V',2,2);
ALTER SEQUENCE equipo_seq RESTART WITH 5;

INSERT INTO equipo_tipo_motor(equipo_id, tipomotor_id)
VALUES (1, 1),(1, 2);
INSERT INTO equipo_tipo_motor(equipo_id, tipomotor_id)
VALUES (2, 1),(2, 2);
INSERT INTO equipo_tipo_motor(equipo_id, tipomotor_id)
VALUES (3, 1),(3, 2);
INSERT INTO equipo_tipo_motor(equipo_id, tipomotor_id)
VALUES (4, 1),(4, 2);

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


