INSERT INTO author(id, firstname, lastname) VALUES (1, 'John', 'Irving');
INSERT INTO author(id, firstname, lastname) VALUES (2, 'Paul', 'Auster');
ALTER SEQUENCE author_seq RESTART WITH 3;

INSERT INTO tipoequipo(id, nombre) VALUES (1, 'split');
INSERT INTO tipoequipo(id, nombre) VALUES (2, 'mini-split');
INSERT INTO tipoequipo(id, nombre) VALUES (3, 'paquete');
ALTER SEQUENCE tipoequipo_seq RESTART WITH 4;

INSERT INTO area(id, nombre) VALUES (1, '3marias');
ALTER SEQUENCE area_seq RESTART WITH 2;

INSERT INTO desperfecto(id, nombre) VALUES (1, 'roto');
INSERT INTO desperfecto(id, nombre) VALUES (2, 'no enfria');
INSERT INTO desperfecto(id, nombre) VALUES (3, 'esta sexi');
ALTER SEQUENCE desperfecto_seq RESTART WITH 4;

INSERT INTO tipomantenimiento(id, nombre) VALUES (1, 'preventico');
INSERT INTO tipomantenimiento(id, nombre) VALUES (2, 'programado');
INSERT INTO tipomantenimiento(id, nombre) VALUES (3, 'correctivo');
ALTER SEQUENCE tipomantenimiento_seq RESTART WITH 4;

INSERT INTO tiporefrigerante(id, nombre) VALUES (1, '00002514203952');
ALTER SEQUENCE tiporefrigerante_seq RESTART WITH 2;

INSERT INTO tipousuario(id, nombre) VALUES (1, 'admin');
INSERT INTO tipousuario(id, nombre) VALUES (2, 'tecnico');
INSERT INTO tipousuario(id, nombre) VALUES (3, 'supervisor');
ALTER SEQUENCE tipousuario_seq RESTART WITH 4;

INSERT INTO material(id, nombre,cantidad,tipoRefrigerante_id) VALUES (1, 'VRX','3',1);
ALTER SEQUENCE material_seq RESTART WITH 2;

INSERT INTO tipomotor(id, nombre) VALUES (1, 'V8');
ALTER SEQUENCE tipomotor_seq RESTART WITH 2;

INSERT INTO equipo(id,capacidad,capacitor,marca,modelo,nombre,numeroEquipo,tipoMotor_id,voltaje,hp,amperaje,area_id,tipoEquipo_id) VALUES (1,'Barcelona','capacitor','XaviNeta ©','2023 lite','nombre','numeroEquipo',1,'voltaje','hp','12',1,1);
ALTER SEQUENCE equipo_seq RESTART WITH 2;

INSERT INTO revisado(id, duracion,ordenTrabajo,desperfecto_id,equipo_id) VALUES (1, '12','OT1234',1,1   );
ALTER SEQUENCE revisado_seq RESTART WITH 2;


INSERT INTO book(id, title, author_id) VALUES (1, 'The World According to Garp', 1);
INSERT INTO book(id, title, author_id) VALUES (2, 'The Hotel New Hampshire', 1);
INSERT INTO book(id, title, author_id) VALUES (3, 'The Cider House Rules', 1);
INSERT INTO book(id, title, author_id) VALUES (4, 'A Prayer for Owen Meany', 1);
INSERT INTO book(id, title, author_id) VALUES (5, 'Last Night in Twisted River', 1);
INSERT INTO book(id, title, author_id) VALUES (6, 'In One Person', 1);
INSERT INTO book(id, title, author_id) VALUES (7, 'Avenue of Mysteries', 1);
INSERT INTO book(id, title, author_id) VALUES (8, 'The New York Trilogy', 2);
INSERT INTO book(id, title, author_id) VALUES (9, 'Mr. Vertigo', 2);
INSERT INTO book(id, title, author_id) VALUES (10, 'The Brooklyn Follies', 2);
INSERT INTO book(id, title, author_id) VALUES (11, 'Invisible', 2);
INSERT INTO book(id, title, author_id) VALUES (12, 'Sunset Park', 2);
INSERT INTO book(id, title, author_id) VALUES (13, '4 3 2 1', 2);
ALTER SEQUENCE book_seq RESTART WITH 14;
