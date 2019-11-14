import * as Gb from './gbapi.js'
/** */
var globalMessage = [];

function createProfesor(profesor) {
    if (profesor.type === "teacher") {
        const html = [
            '<option>', profesor.first_name, '</option>'
        ];

        return $(html.join(''));
    }
}

function createAlumnos(alumno) {
    const html = [
        '<option>', alumno.first_name, '</option>'
    ];
    return $(html.join(''));
}

function createGuardian(res) {
    if (res.type === "guardian") {
        const html = [
            '<option>', res.first_name, '</option>'
        ];
        return $(html.join(''));
    }
}

function createClases(clase) {
    const html = [
        '<option>', clase.cid, '</option>'
    ];
    return $(html.join(''));
}

/** */
function createTableUsers(user) {
    let html = [];
    //Columna Datos
    html = [
            '<tr>',
            '<td class="datosTabla">',
        ]
        //Icono profesor
    if (user.type === "teacher") {
        html.push('<img class="userIcon alt="profesor" src="../img/profesor.png">',
            '<p style="display:none;">profesor teacher</p>', );
    }
    if (user.type === "admin") {
        html.push('<img class="userIcon alt="profesor" src="../img/admin.png">',
            '<p style="display:none;">administrador</p>', );
    }
    //Icono responsable
    if (user.type === "guardian")
        html.push('<img class="userIcon alt="profesor" src="../img/guardian.png">',
            '<p style="display:none;">guardian responsable padre tutor</p>', );

    html.push(
        '<div class="texto-datos-tabla">',
        'Nombre: ', user.first_name, ' ', user.last_name, '<br>',
        'DNI: ', user.uid, '<br>',
    );
    if (user.tels.length) {
        html.push('Teléfonos: ', );
        user.tels.forEach(telefono => {
            html.push(
                telefono, ' ',
            );
        });
    }
    html.push('</td>', );
    //Columna Clases
    html.push('<td>', );
    user.classes.forEach(clase => {
        html.push(
            clase, ' ',
        );
    });
    html.push('</div></td>', );
    //Columna Opciones
    html.push('<td class="opcionesTabla"><button type="submit" id="', user.uid, '" class="btn btn-primary botonOpciones">Modificar</button></td></tr>');

    return $(html.join(''));
}

function createTableStudents(user) {
    let html = [];
    //Columna Datos
    html = [
        '<tr>',
        '<td class="datosTabla">',
        '<img class="userIcon alt="profesor" src="../img/alumno.png">',
        '<p style="display:none;">alumno student</p>',
        '<div class="texto-datos-tabla">',
        'Nombre: ', user.first_name, ' ', user.last_name, '<br>',
        'DNI: ', user.sid, '<br>',
    ]
    html.push('Responsables: ', );
    user.guardians.forEach(guardian => {
        html.push(guardian, ', ', );
    });
    html.push('</div></td>', );
    //Columna Clases
    html.push('<td>', user.cid, '</td>');
    //Columna Opciones
    html.push('<td class="opcionesTabla"><button type="submit" id="', user.uid, '" class="btn btn-primary botonOpciones">Modificar</button></td></tr>');

    return $(html.join(''));
}

function createItems(mensaje) {
    let html = [];

    html = ['<a href="#" class="list-group-item list-group-item-action flex-column align-items-start" id=', mensaje.msgid, '>', ];
    if (!mensaje.labels.includes("read")) {
        html.push('<div class="unread"></div>', );
    }
    html.push(
        '<div class="d-flex w-100 justify-content-between">',
        '<h5 class="mb-1">', mensaje.from, '</h5>',
        '<small>', new Intl.DateTimeFormat('es-ES').format(mensaje.date), '</small>',
        '</div>',
        '<p class="mb-1">', mensaje.title, '</p>',
        '<small style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">', mensaje.body, '</small>',
        '</a>')

    return $(html.join(''));
}

function createMail(mensaje) {
    const html = [
        '<div class="form-group col-md-10">',
        '<h2>', mensaje.from, '</h2>',
        '<h3>', mensaje.title, ' </h3>',
        '</div>',
        '<div class="form-group col-md-10">',
        '<p>', mensaje.body, '</p>',
        '</div>',
        '     <form method="post">',

        '<div class="form-group col">',
        '<label for="inputTextoAnuncio">Escribir mensaje</label>',
        '<textarea id="inputTextoAnuncio" class="form-control" style="width:100%;">',
        '       Escribir mensaje.',
        '</textarea>',
        '</div>',

        '<!-- botón para enviar el formulario; justify-content-end lo justifica a la derecha -->',
        '<div class="form-row justify-content-end" style="margin-right:15px;">',
        ' <button type="submit" id="boton-descartar" class="btn btn-primary">Descartar mensaje</button>',
        '<button id="botonResponderMailDOS" class="btn btn-primary" style="margin-left: 10px">Enviar mensaje</button>',
        '</div>',
        '</form>',
        '<script src="js/jquery-3.3.1.js"></script>',
        '<script src="js/bootstrap.bundle-4.3.1.js"></script>',
        '<script src="js/tinymce.min.js"></script>',
        '<script src="js/gb.js" type="module"></script>',
        '<script type="text/javascript">',
        'tinymce.init({',
        'selector: "#inputTextoAnuncio",',
        'plugins: ["link image lists table"],',
        'toolbar: "undo redo | bold italic backcolor | alignleft aligncenter alignjustify | bullist numlist outdent indent | image link table | removeformat",',
        'menubar: false,',
        '});',
        '</script>'
    ];
    return $(html.join(''));
}

function contarTodosMs() {
    let contador = 0;
    Gb.globalState.messages.forEach(m => {
        if (!m.labels.includes("read")) {
            contador = contador + 1;
        }
    });

    return contador;
}



function createGroupItem(mensaje) {
    const rid = 'x_' + Math.floor(Math.random() * 1000000);
    const hid = 'h_' + rid;
    const cid = 'c_' + rid;

    const html = [
        '<div class="card">',
        '<div class="card-header" id="', hid, '">',
        '  <h2 class="mb-0">',
        '    <button class="btn btn-link" type="button"',
        ' data-toggle="collapse" data-target="#', cid, '"',
        '      aria-expanded="true" aria-controls="', rid, '">',
        '<b class="msg mtitle">', mensaje.title, '</b>',
        '<div class="msg mdate"> Enviado el ',
        new Intl.DateTimeFormat('es-ES').format(mensaje.date),
        ' por ', mensaje.from,
        '</div>',
        '    </button>',
        '  </h2>',
        '</div>',
        '',
        '<div id="', cid, '" class="collapse show" aria-labelledby="', hid, '" ',
        'data-parent="#accordionExample">',
        '  <div class="card-body msg">',
        mensaje.body,
        '  </div>',
        '</div>',
        '</div>'
    ];
    return $(html.join(''));
}

function createVmItem(params) {
    const stateToBadge = {
        start: 'success',
        stop: 'danger',
        suspend: 'secondary',
        reset: 'warning'
    }
    const html = [
        '<li id="vm_',
        params.name,
        '" ',
        'class="list-group-item d-flex justify-content-between align-items-center">',
        params.name,
        '<span class="badge badge-',
        stateToBadge[params.state],
        ' badge-pill estado">&nbsp;</span>',
        '</li>'
    ];
    return $(html.join(''));
}

//
//
// Código de pegamento, ejecutado sólo una vez que la interfaz esté cargada.
// Generalmente de la forma $("selector").comportamiento(...)
//
//
$(function() {

    // funcion de actualización de ejemplo. Llámala para refrescar interfaz
    window.demo = function update(result) {
        try {
            // vaciamos un contenedor
            $("#myTable").empty();
            $("#accordionExample").empty();
            $("#list-groupPhp5").empty();
            $("#selectClassEM").empty();
            $("#li_left_all_num").empty();
            $("#lista-categorias-clases").empty();
            $("#selectAsunto").empty();
            // y lo volvemos a rellenar con su nuevo contenido
            Gb.globalState.messages.sort(compare);
            Gb.globalState.users.forEach(u => $("#myTable").append(createTableUsers(u)));
            Gb.globalState.students.forEach(u => $("#myTable").append(createTableStudents(u)));
            Gb.globalState.messages.forEach(m => $("#accordionExample").append(createGroupItem(m)));
            Gb.globalState.messages.forEach(m => $("#list-groupPhp5").append(createItems(m)));

            $("#selectClassEM").append('<option value="none" selected disabled hidden>-clase-</option>');
            Gb.globalState.classes.forEach(c => $("#selectClassEM").append(createClases(c)));
            $("#li_left_all_num").append(contarTodosMs());
            /** */

            /** */
            // y asi para cada cosa que pueda haber cambiado
        } catch (e) {
            console.log('Error actualizando', e);
        }

        function compare(a, b) {
            if (a.date > b.date) {
                return -1;
            }
            if (a.date < b.date) {
                return 1;
            }
            return 0;
        }

        // Funcionalidad para ver el mensaje que se quiera en responder mail.
        $("#list-groupPhp5 a").click((id) => {
            var currentId = id.currentTarget.id;
            $("#ContestarMs").empty();
            Gb.globalState.messages.forEach(function(m) {
                if (currentId == m.msgid) {
                    m.labels.push("read");
                    $("#ContestarMs").append(createMail(m))
                    globalMessage = m;
                    window.demo();
                    $("#list-groupPhp5").children("#" + currentId).toggleClass('active');
                }
            });
        });
        //Funcionalidad al boton añadir alumno
        $("#boton-publicar").click((target) => {

            var nombreAlumno = $("#inputName").val();
            var apellidoAlumno = $("#inputName2").val();
            var dni = $("#inputDNI").val();
            var claseSeleccionada = $("#selectClass").val();
            var res = $("#selectRes").val();
            var guardians = [];
            guardians.push(res);
            target.preventDefault();
            Gb.addStudent(new Gb.Student(dni, nombreAlumno, apellidoAlumno, claseSeleccionada, guardians));
            guardians = guardians.toString();
            let guards = guardians.split(',');
            guards.forEach(g => {
                let pos = Gb.globalState.users.findIndex(u => { return u.first_name == g });
                if (pos > -1) {
                    Gb.globalState.users[pos].classes.push(claseSeleccionada);
                    Gb.globalState.users[pos].students.push(nombreAlumno);
                }
            });
            window.demo();
            alert("Se ha añadido el alumno: " + nombreAlumno + " " + apellidoAlumno + "\nCon dni: " + dni + " a la clase " + claseSeleccionada + "\nCon responsables:\n" + guardians);
            console.clear();
            console.log("online!", JSON.stringify(Gb.globalState, null, 2));
        });

        $("#anUser").unbind('click').click((target) => {
            let uid = U.randomWord();
            let type = $("#selectType").val();
            let tipo;
            if (type === "Profesor") {
                tipo = Gb.UserRoles.TEACHER;
            } else if (type === "Responsable") {
                tipo = Gb.UserRoles.GUARDIAN;
            }
            let nombre = $("#nUser").val();
            let apellido = $("#apUser").val();
            let clase = $("#selectClass2").val();
            let clases = [];
            clases.push(clase);
            let tel = $("#telUser").val();
            let telefonos = [];
            telefonos.push(tel);
            let alum = $("#selectAlumU").val();
            let alumnos = [];
            alumnos.push(alum);
            target.preventDefault();
            if (type === "Responsable") {
                alumnos = alumnos.toString();
                let alumns = alumnos.split(',');
                alumns.forEach(a => {
                    let pos = Gb.globalState.students.findIndex(u => { return u.first_name == a });
                    if (pos > -1) {
                        Gb.globalState.students[pos].guardians.push(nombre);
                        let clas = Gb.globalState.students[pos].cid;
                        if (!clases.includes(clas))
                            clases.push(clas);
                    }
                });
            }
            Gb.addUser(new Gb.User(uid, tipo, nombre, apellido, telefonos, clases, alumnos));
            window.demo();
            alert("Se ha añadido el usuario: " + nombre + " " + apellido +
                " \nCon rol: " + tipo +
                " \nCon telefono/s:\n " + telefonos + " \na la clase: " + clases + "\nCon alumno/s:\n" + alumnos);

            console.clear();
            console.log("online!", JSON.stringify(Gb.globalState, null, 2));
        });

        //Funcionalidad al boton enviar mail
        $("#boton-publicar-mail").click((target) => {
            let msgid = U.randomWord();
            let claseEnviar = $("#selectClassEM").val();
            let asunto = $("#selectAsunto").val();
            let ms = tinymce.activeEditor.getContent().slice(3, -4);
            target.preventDefault();
            Gb.send(new Gb.Message(msgid, null, null, claseEnviar, [Gb.MessageLabels.SENT], asunto, ms));
            alert(" Se ha enviado el mail: " + ms + " a " + claseEnviar + "\nCon asunto: " + asunto);
            window.demo();
            console.clear();
            console.log("online!", JSON.stringify(Gb.globalState, null, 2));
        });

        //Funcionalidad al boton responder mail
        $("#botonResponderMailDOS").unbind('click').click((target) => {
            let msgid = U.randomWord();
            let responseId = globalMessage.from;
            let asunto = globalMessage.title;
            let ms = tinymce.activeEditor.getContent().slice(3, -4);
            target.preventDefault();
            Gb.send(new Gb.Message(msgid, Date.now(), globalMessage.to[0], responseId, [Gb.MessageLabels.SENT], asunto, ms));
            alert(" Se ha enviado el mail: " + ms + " a " + responseId + "\nCon asunto: " + asunto);
            console.clear();
            console.log("online!", JSON.stringify(Gb.globalState, null, 2));
        });
        //Funcionalidad del boton añadir clase
        $("#button-save-clas").click((e) => {
            var nombrClase = $("#nombreClaseLabel").val();
            var alumno = $("#selectAlum").val();
            var profesor = $("#selecProfesor").val();
            var alumnos = [];
            var profesores = [];
            profesores.push(profesor);
            alumnos.push(alumno);
            e.preventDefault();
            Gb.addClass(new Gb.EClass(nombrClase, alumnos, profesores));
            profesores = profesores.toString();
            let profes = profesores.split(',');
            profes.forEach(p => {
                let pos = Gb.globalState.users.findIndex(u => { return u.first_name == p });
                if (pos > -1)
                    Gb.globalState.users[pos].classes.push(nombrClase);
            });
            alert(" Se ha añadido la clase: " + nombrClase + "\nCon los alumnos: " + alumnos + "\n y profesor: " + profesores);
            window.demo();
            console.clear();
            console.log("online!", JSON.stringify(Gb.globalState, null, 2));
        });

        /**    CATEGORIAS MENSAJES    **/
        // Ver todos.
        $("#filtroTodos").click((id) => {
            $("#list-groupPhp5").empty();
            $("#labelListaMensajes").text("Todos");
            Gb.globalState.messages.forEach(m => $("#list-groupPhp5").append(createItems(m)));
        });
        // Ver recibidos.
        $("#filtroRecibidos").click((id) => {
            $("#list-groupPhp5").empty();
            $("#labelListaMensajes").text("Recibidos");
            Gb.globalState.messages.forEach(m => {
                if (m.labels.includes("received")) {
                    $("#list-groupPhp5").append(createItems(m));
                }
            });
        });
        // Ver favoritos.
        $("#filtroFavoritos").click((id) => {
            $("#list-groupPhp5").empty();
            $("#labelListaMensajes").text("Favoritos");
            Gb.globalState.messages.forEach(m => {
                if (m.labels.includes("fav")) {
                    $("#list-groupPhp5").append(createItems(m));
                }
            });
        });
        // Ver enviados.
        $("#filtroEnviados").click((id) => {
            $("#list-groupPhp5").empty();
            $("#labelListaMensajes").text("Enviados");
            Gb.globalState.messages.forEach(m => {
                if (m.labels.includes("sent")) {
                    $("#list-groupPhp5").append(createItems(m));
                }
            });
        });
        // Ver archivados.
        $("#filtroArchivados").click((id) => {
            $("#list-groupPhp5").empty();
            $("#labelListaMensajes").text("Archivados");
            Gb.globalState.messages.forEach(m => {
                if (m.labels.includes("arch")) {
                    $("#list-groupPhp5").append(createItems(m));
                }
            });
        });
        /*BOTONES HEADER*/
        //Añadir alumno
        $("#anAlumnoH").click((id) => {
            $("#selectClass").empty();
            $("#selectRes").empty();
            $("#selectClass").append('<option value="none" selected disabled hidden>-clase-</option>');
            Gb.globalState.classes.forEach(c => $("#selectClass").append(createClases(c)));
            $("#selectRes").append('<option value="none" selected disabled hidden>-responsable-</option>');
            Gb.globalState.users.forEach(g => $("#selectRes").append(createGuardian(g)));
        });
        //Añadir usuario
        $("#anUserH").click((id) => {
            $("#selectType").empty();
            $("#selectClass2").empty();
            $("#selectAlumU").empty();
            $("#selectType").append('<option selected disabled hidden>-tipo-</option>');
            $("#selectType").append('<option>Profesor</option>');
            $("#selectType").append('<option>Responsable</option>');
            $("#selectType").append('<option>Admin</option>');
            $("#selectClass2").append('<option value="none" selected disabled hidden>-clase-</option>');
            Gb.globalState.classes.forEach(c => $("#selectClass2").append(createClases(c)));
            Gb.globalState.students.forEach(s => $("#selectAlumU").append(createAlumnos(s)));

        });
        $("#anClaseH").click((id) => {
            $("#selectAlum").empty();
            $("#selecProfesor").empty();
            Gb.globalState.students.forEach(s => $("#selectAlum").append(createAlumnos(s)));
            Gb.globalState.users.forEach(u => $("#selecProfesor").append(createProfesor(u)));
        });
    }

    // expone Gb para que esté accesible desde la consola
    window.Gb = Gb;
    const U = Gb.Util;

    // genera datos de ejemplo
    let classIds = ["1A", "1B", "2A", "2B", "3A", "3B"];
    let userIds = [];
    classIds.forEach(cid => {
        let teacher = U.randomUser(Gb.UserRoles.TEACHER, [cid]);
        Gb.addUser(teacher);
        userIds.push(teacher.uid);

        let students = U.fill(U.randomInRange(15, 20), () => U.randomStudent(cid));

        students.forEach(s => {
            Gb.addStudent(s);

            let parents = U.fill(U.randomInRange(1, 2),
                () => U.randomUser(Gb.UserRoles.GUARDIAN, [cid], [s.sid]));
            parents.forEach(p => {
                s.guardians.push(p.uid);
                userIds.push(p.uid);
                Gb.addUser(p);
            });
        });

        Gb.addClass(new Gb.EClass(cid, students.map(s => s.sid), [teacher.uid]));
    });
    Gb.addUser(U.randomUser(Gb.UserRoles.ADMIN));
    console.log(userIds);
    U.fill(30, () => U.randomMessage(userIds)).forEach(
        m => Gb.send(m)
    );

    // muestra un mensaje de bienvenida
    console.log("online!", JSON.stringify(Gb.globalState, null, 2));

    window.demo();
});