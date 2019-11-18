"use strict"

import * as Gb from './gbapi.js'
var userSession = [];
/**
 * Librería de cliente para interaccionar con el servidor de Garabatos.
 * Prácticas de IU 2019-20
 *
 * Para las prácticas de IU, pon aquí (o en otros js externos incluidos desde tus .htmls) el código
 * necesario para añadir comportamientos a tus páginas. Recomiendo separar el fichero en 2 partes:
 * - funciones que pueden generar cachos de contenido a partir del modelo, pero que no
 *   tienen referencias directas a la página
 * - un bloque rodeado de $(() => { y } donde está el código de pegamento que asocia comportamientos
 *   de la parte anterior con elementos de la página.
 *
 * Fuera de las prácticas, lee la licencia: dice lo que puedes hacer con él, que es esencialmente
 * lo que quieras siempre y cuando no digas que lo escribiste tú o me persigas por haberlo escrito mal.
 */

//
// PARTE 1:
// Código de comportamiento, que sólo se llama desde consola (para probarlo) o desde la parte 2,
// en respuesta a algún evento.
//
function validarContraseña(contraseña){
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){5,100}$/;
    if(regex.test(contraseña) == true){
        return true;
    }
    else return false;
}

function validarTelefonoUsuario(telefono){
    var regex = /^\d{3}-\d{3}-\d{3}$/;
    if(telefono == "")return "El campo telefono no puede ser vacio";
    if(!regex.test(telefono))return "Formato del telefono erroneo(ddd-ddd-ddd)";
    return "";
}
function validarApellidoAlumno(apellidoAlumno){
    if(apellidoAlumno == "")return "El campo apellido del alumno no puede ser vacio";
    if(apellidoAlumno.length < 3)return "Apellido del alumno demasiado corto";
    return "";
}
function validarNombreAlumno(nombreAlumno){
    if(nombreAlumno == "")return "El campo nombre del alumno no puede ser vacio";
    if(nombreAlumno.length < 3)return "Nombre del alumno de masiado corto";
    return "";
}
function validateDNI(dni) {
    var numero, letD, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();
    if(dni == "")return "El dni no puede ser vacio";
    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        letD = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != letD) {
            //alert('Dni erroneo, la letra del NIF no se corresponde');
            return "";
        }else{
            //alert('Dni correcto');
            return "";
        }
    }else{
        //alert();
        return 'Dni erroneo, formato no válido';
    }
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
    html.push('<td class="opcionesTabla"><button type="submit" id="modificarUsuario" userId="', user.uid, '" class="btn btn-primary botonOpciones">Modificar</button>');
    html.push('<button type="submit" id="eliminarUsuario" userId="', user.uid, '" class="btn btn-primary botonOpciones">Modificar</button></td></tr>');

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
        'Nombre: ', user.firstName, ' ', user.lastName, '<br>',
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
    html.push('<td class="opcionesTabla"><button type="submit" id="', user.sid, '" class="btn btn-primary botonOpciones">Modificar</button></td></tr>');

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

function createAlumnos(alumno) {
    const html = [
        '<option>', alumno.firstName, '</option>'
    ];
    return $(html.join(''));
}

function createClases(clase) {
    const html = [
        '<option>', clase.cid, '</option>'
    ];
    return $(html.join(''));
}

function createProfesor(profesor) {
    if (profesor.type === "teacher") {
        const html = [
            '<option>', profesor.first_name, '</option>'
        ];

        return $(html.join(''));
    }
}

function cargarContestar() {
    var url = "index.html";
    $.ajax({
        type: "GET",
        url: url,
        data: {},
        success: function(datos) {
            $("#administrationPage").hide();
            $("#sendMessagePage").hide();
            $("#mainIndexPage").show();
        }
    });
}

function cargarEnviarms() {
    var url = "index.html";
    $.ajax({
        type: "GET",
        url: url,
        data: {},
        success: function(datos) {
            $("#administrationPage").hide();
            $("#mainIndexPage").hide();
            $("#sendMessagePage").show();
        }
    });
}

function cargarAdministracion() {
    var url = "index.html";
    $.ajax({
        type: "GET",
        url: url,
        data: {},
        success: function(datos) {
            $("#sendMessagePage").hide();
            $("#mainIndexPage").hide();
            $("#administrationPage").show();
        }
    });
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

// funcion para generar datos de ejemplo: clases, mensajes entre usuarios, ...
// se puede no-usar, o modificar libremente
async function populate(classes, minStudents, maxStudents, minParents, maxParents, msgCount) {
    const U = Gb.Util;

    // genera datos de ejemplo
    let classIds = classes || ["1A", "1B", "2A", "2B", "3A", "3B"];
    let minStudentsInClass = minStudents || 10;
    let maxStudentsInClass = maxStudents || 20;
    let minParentsPerStudent = minParents || 1;
    let maxParentsPerStudent = maxParents || 3;
    let userIds = [];
    let tasks = [];

    classIds.forEach(cid => {
        tasks.push(() => Gb.addClass(new Gb.EClass(cid)));
        let teacher = U.randomUser(Gb.UserRoles.TEACHER, [cid]);
        userIds.push(teacher.uid);
        tasks.push(() => Gb.addUser(teacher));

        let students = U.fill(U.randomInRange(minStudentsInClass, maxStudentsInClass), () => U.randomStudent(cid));
        students.forEach(s => {
            tasks.push(() => Gb.addStudent(s));
            let parents = U.fill(U.randomInRange(minParentsPerStudent, maxParentsPerStudent),
                () => U.randomUser(Gb.UserRoles.GUARDIAN, [], [s.sid]));
            parents.forEach(p => {
                userIds.push(p.uid);
                tasks.push(() => Gb.addUser(p));
            });
        });
    });
    tasks.push(() => Gb.addUser(U.randomUser(Gb.UserRoles.ADMIN)));
    U.fill(msgCount, () => U.randomMessage(userIds)).forEach(m => tasks.push(() => Gb.send(m)));

    // los procesa en secuencia contra un servidor
    for (let t of tasks) {
        try {
            console.log("Starting a task ...");
            await t().then(console.log("task finished!"));
        } catch (e) {
            console.log("ABORTED DUE TO ", e);
        }
    }
}


//
// PARTE 2:
// Código de pegamento, ejecutado sólo una vez que la interfaz esté cargada.
// Generalmente de la forma $("selector").cosaQueSucede(...)
//
$(function() {
    // funcion de actualización de ejemplo. Llámala para refrescar interfaz
    window.demo = function update(result) {
        try {
            // vaciamos un contenedor
            $("#accordionExample").empty();
            // y lo volvemos a rellenar con su nuevo contenido
            Gb.globalState.messages.forEach(m => $("#accordionExample").append(createGroupItem(m)));
            // y asi para cada cosa que pueda haber cambiado
        } catch (e) {
            console.log('Error actualizando', e);
        }
    }

    $("#cargarContestar").click((id) => {
        cargarContestar();
    });
    // Funcionalidad para ver el mensaje que se quiera en responder mail.
    $("#list-groupPhp5 a").click((id) => {
        var currentId = id.currentTarget.id;
        $("#ContestarMs").empty();
        Gb.globalState.messages.forEach(function(m) {
            if (currentId == m.msgid) {
                m.labels.push("read");
                $("#ContestarMs").append(createMail(m))
                globalMessage = m;
                //window.demo();
                $("#list-groupPhp5").children("#" + currentId).toggleClass('active');
            }
        });
    });
    //Boton añadir clase
    $("#button-save-clas").click((e) => {
      $("#validaNombreClase").empty();
        var nombrClase = $("#nombreClaseLabel").val();
        var alumno = $("#selectAlum").val();
        var profesor = $("#selecProfesor").val();
        var alumnos = [];
        var profesores = [];
        var auxProfes = [];
        var auxAlumnos = [];
        profesores.push(profesor);
        alumnos.push(alumno);
        e.preventDefault();
        if( nombrClase == null || nombrClase.length != 2 || nombrClase.length == 0) {
          $("#validaNombreClase").append('<p style="color:red;">Nombre incorrecto de la clase.</p>');

          return false;
        }
        // Si el script ha llegado a este punto, todas las condiciones
        // se han cumplido, por lo que se devuelve el valor true
        profesores = profesores.toString();
        let profes = profesores.split(',');
        alumnos = alumnos.toString();
        let alumns = alumnos.split(',');
        profes.forEach(p => {
            let pos = Gb.globalState.users.findIndex(u => { return u.first_name == p });
            if (pos > -1) {
                Gb.globalState.users[pos].classes.push(nombrClase);
                auxProfes.push(Gb.globalState.users[pos].uid);
            }
        });
        alumns.forEach(p => {
            let pos = Gb.globalState.students.findIndex(u => { return u.firstName == p });
            if (pos > -1) auxAlumnos.push(Gb.globalState.students[pos].sid);
            //Gb.globalState.users[pos].classes.push(nombrClase);

        });
        Gb.addClass(new Gb.EClass(nombrClase, auxAlumnos, auxProfes));
        //window.demo();
        //console.clear();
        //console.log("online!", JSON.stringify(Gb.globalState, null, 2));
    });
    
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
        $("#selectClass2").empty();
        $("#selectAlumU").empty();
        $("#selectClass2").append('<option value="none" selected disabled hidden>-clase-</option>');
        Gb.globalState.classes.forEach(c => $("#selectClass2").append(createClases(c)));
        Gb.globalState.students.forEach(s => $("#selectAlumU").append(createAlumnos(s)));
    });
    //Añadir Clase
    $("#anClaseH").click((id) => {
        $("#selectAlum").empty();
        $("#selecProfesor").empty();
        Gb.globalState.students.forEach(s => $("#selectAlum").append(createAlumnos(s)));
        Gb.globalState.users.forEach(u => $("#selecProfesor").append(createProfesor(u)));
    });
    //añadir Usuario
    $("#anUser").unbind('click').click((target) => {
        let uid = Gb.Util.randomWord();
        let type = $("#selectType").val();
        let tipo;
        let nombre = $("#nUser").val();
        let apellido = $("#apUser").val();
        let clase = $("#selectClass2").val();
        let tel = $("#telUser").val();
        let telefonos = [];
        telefonos.push(tel);
        let alum = $("#selectAlumU").val();
        let alumnos = [];
        alumnos.push(alum);
        let aux = [];
        target.preventDefault();
        let contraseña = $("#añadirUsuarioPassword").val();
        var error = false;
        var errorNombre = validarNombreAlumno(nombre);
        var errorApellido = validarApellidoAlumno(apellido);
        var errorTelefono = validarTelefonoUsuario(tel);
        if(!validarContraseña(contraseña)){
            $("#errorMessageAñadirUsuarioContraseña").empty();
            $("#errorMessageAñadirUsuarioContraseña").append("<p style='color:red;'>Formato de la contraseña incorrecto</p>");
            $("#errorMessageAñadirUsuarioContraseña").show();
            error = true;
        }
        else{
            $("#errorMessageAñadirUsuarioContraseña").hide();
        }if(errorNombre != ""){
            $("#errorMessageAñadirUsuarioNombre").empty();
            $("#errorMessageAñadirUsuarioNombre").append("<p style='color:red;'>"+errorNombre+"</p>");
            $("#errorMessageAñadirUsuarioNombre").show();
            error = true;
        }else{
            $("#errorMessageAñadirUsuarioNombre").hide();
        }
        if(errorApellido!=""){
            $("#errorMessageAñadirUsuarioApellido").empty();
            $("#errorMessageAñadirUsuarioApellido").append("<p style='color:red;'>"+errorApellido+"</p>");
            $("#errorMessageAñadirUsuarioApellido").show();
            error = true;
        }else{
            $("#errorMessageAñadirUsuarioApellido").hide();
        }
        if(errorTelefono!=""){
            $("#errorMessageAñadirUsuarioTelefono").empty();
            $("#errorMessageAñadirUsuarioTelefono").append("<p style='color:red;'>"+errorTelefono+"</p>");
            $("#errorMessageAñadirUsuarioTelefono").show();
            error = true;
        }else{
            $("#errorMessageAñadirUsuarioTelefono").hide();
        }
        if(!error){
            $("#modalAddUser").modal('hide');
            if (type === "Responsable") {
                tipo = Gb.UserRoles.GUARDIAN;
                alumnos = alumnos.toString();
                let alumns = alumnos.split(',');
                alumns.forEach(a => {
                    let pos = Gb.globalState.students.findIndex(u => { return u.firstName == a });
                    if (pos > -1) {
                        Gb.globalState.students[pos].guardians.push(nombre);
                        aux.push(Gb.globalState.students[pos].sid);
                    }
                });
                Gb.addUser(new Gb.User(uid, tipo, nombre, apellido, telefonos, "", aux, contraseña));
                alert("Se ha añadido el usuario: " + nombre + " " + apellido +
                    " \nCon rol: " + tipo +
                    " \nCon telefono/s:\n " + telefonos + "\nCon alumno/s:\n" + alum);
            } else if (type === "Profesor") {
                tipo = Gb.UserRoles.TEACHER;
                Gb.addUser(new Gb.User(uid, tipo, nombre, apellido, telefonos, clase, "", contraseña));
                alert("Se ha añadido el usuario: " + nombre + " " + apellido +
                    " \nCon rol: " + tipo +
                    " \nCon telefono/s:\n " + telefonos + " \na la clase: " + clase);
            } else if (type === "Admin") {
                tipo = Gb.UserRoles.ADMIN;
                Gb.addUser(new Gb.User(uid, tipo, nombre, apellido, telefonos, "", "", contraseña));
                alert("Se ha añadido el usuario: " + nombre + " " + apellido +
                    " \nCon rol: " + tipo +
                    " \nCon telefono/s:\n " + telefonos);
            }
        }
    });
    //Funcionalidad al boton añadir alumno
    $("#boton-publicar").click((target) => {
        var nombreAlumno = $("#inputName").val();
        var apellidoAlumno = $("#inputName2").val();
        var dni = $("#inputDNI").val();
        var claseSeleccionada = $("#selectClass").val();
        var res = $("#selectRes").val();
        var guardians = [];
        var aux = [];
        var errorNombre = validarNombreAlumno(nombreAlumno);
        var errorApellido = validarApellidoAlumno(apellidoAlumno);
        var errorDNI = validateDNI(dni);
        var error = false;
        if(errorNombre != ""){
            $("#loginErrorMessageAñadirAlumNombre").empty();
            $("#loginErrorMessageAñadirAlumNombre").append("<p style='color:red;'>"+errorNombre+"</p>");
            $("#loginErrorMessageAñadirAlumNombre").show();
            error = true;
        }else{
            $("#loginErrorMessageAñadirAlumNombre").hide();
        }
        if(errorApellido!=""){
            $("#loginErrorMessageAñadirAlumApellido").empty();
            $("#loginErrorMessageAñadirAlumApellido").append("<p style='color:red;'>"+errorApellido+"</p>");
            $("#loginErrorMessageAñadirAlumApellido").show();
            error = true;
        }else{
            $("#loginErrorMessageAñadirAlumApellido").hide();
        }
        if(validateDNI(dni)!=""){
            $("#loginErrorMessageAñadirAlumID").empty();
            $("#loginErrorMessageAñadirAlumID").append("<p style='color:red;'>"+errorDNI+"</p>");
            $("#loginErrorMessageAñadirAlumID").show();
            error = true;
        }else{
             $("#loginErrorMessageAñadirAlumID").hide();
        }
        if(!error){       
            $("#modalAddAlum").modal('hide')
            guardians.push(res);
            target.preventDefault();
            guardians = guardians.toString();
            let guards = guardians.split(',');
            guards.forEach(g => {
                let pos = Gb.globalState.users.findIndex(u => { return u.first_name == g });
                if (pos > -1) {
                    Gb.globalState.users[pos].classes.push(claseSeleccionada);
                    Gb.globalState.users[pos].students.push(nombreAlumno);
                    aux.push(Gb.globalState.users[pos].uid);
                }
            });
            Gb.addStudent(new Gb.Student(dni, nombreAlumno, apellidoAlumno, claseSeleccionada, aux));
            //window.demo();
            alert("Se ha añadido el alumno: " + nombreAlumno + " " + apellidoAlumno + "\nCon dni: " + dni + " a la clase " + claseSeleccionada + "\nCon responsables:\n" + guardians);
            //console.clear();
            //console.log("online!", JSON.stringify(Gb.globalState, null, 2));
        }
    });

    //Funcionalidad al boton enviar mail
    $("#boton-publicar-mail").click((target) => {
        let msgid = Gb.Util.randomWord();
        let claseEnviar = $("#selectClassEM").val();
        let asunto = $("#selectAsunto").val();
        let ms = $("#inputTextoAnuncio").val();
        target.preventDefault();
        Gb.send(new Gb.Message(msgid, null, "u8Z9FQ", claseEnviar, [Gb.MessageLabels.SENT], asunto, ms, userSesion.uid));
        alert(" Se ha enviado el mail: " + ms + " a " + claseEnviar + "\nCon asunto: " + asunto);
        // window.demo();
        //console.clear();
        //console.log("online!", JSON.stringify(Gb.globalState, null, 2));
    });
    //Logeo
    $("#loginButton").click((id) => {
        let user = $("#loginUser").val();
        let pass = $("#loginPass").val();

        Gb.login(user, pass).then(d => {
            let u = Gb.resolve(user);
            if (u !== undefined) {
                $.ajax({
                    type: "GET",
                    url: "index.html",
                    data: {},
                    success: function(datos) {
                        Gb.list();
                        $("#loginPage").fadeOut();
                        $("#indexPage").fadeIn();
                        userSession = u;
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "index.html",
                    data: {},
                    success: function(datos) {
                        $("#loginErrorMessage").show();
                    }
                });

            }
        });
    });
    $("#cargarEnviarms").click((id) => {
        cargarEnviarms();
        $("#selectClassEM").empty();
        $("#selectClassEM").append('<option value="none" selected disabled hidden>Destinatario</option>');
        //Se hace esto para saber de que tipo soy, así me mostratrá una cosa u otra en el destinatario.
        let pos = Gb.globalState.users.findIndex(us => { return us.uid == userSession.uid });
        if (pos >= 0){
            userSession = Gb.globalState.users[pos];
            if(userSession.type == Gb.UserRoles.GUARDIAN){
                Gb.globalState.users.forEach(c => $("#selectClassEM").append(createProfesor(c)));
            }
            if(userSession.type == Gb.UserRoles.TEACHER){
                Gb.globalState.users.forEach(c => $("#selectClassEM").append(createGuardian(c)));
                Gb.globalState.users.forEach(c => $("#selectClassEM").append(createClases(c)));
            }
            if(userSession.type == Gb.UserRoles.ADMIN){
                Gb.globalState.classes.forEach(c => $("#selectClassEM").append(createClases(c)));
                Gb.globalState.users.forEach(c => $("#selectClassEM").append(createGuardian(c)));
                Gb.globalState.users.forEach(c => $("#selectClassEM").append(createProfesor(c)));
            }
        }
    });
    $("#cargarAdministracion").click((id) => {
        cargarAdministracion();
        $("#myTable").empty();
        Gb.globalState.users.forEach(u => $("#myTable").append(createTableUsers(u)));
        Gb.globalState.students.forEach(u => $("#myTable").append(createTableStudents(u)));
    });

    $("#selectType").on("change", function() {
        $("#camposAddUser").show();
        if ($("#selectType").val() === "Responsable") {
            $("#selectorClasesAddUser").hide();
            $("#selectorAlumnosAddUser").show();
        }
        if ($("#selectType").val() === "Profesor") {
            $("#selectorAlumnosAddUser").hide();
            $("#selectorClasesAddUser").show();
        }
        if ($("#selectType").val() === "Admin") {
            $("#selectorClasesAddUser").hide();
            $("#selectorAlumnosAddUser").hide();
        }
    });

    $("#cerrarSesion").click((id) => {
        userSession = [];
        Gb.logout();
    });



    $("#modificarUsuario").click((id) => {
        let userId = $(this).attr('userId');

    });
   
   
    // Servidor a utilizar. También puedes lanzar tú el tuyo en local (instrucciones en Github)
    Gb.connect("http://gin.fdi.ucm.es:8080/api/");

    // ejemplo de login
    //Gb.login("u8Z9FQ", "tOSY_A").then(d => console.log("login ok!",d));

    // // ejemplo de crear una clase, una vez logeados
    // Gb.addClass({ cid: "1A" })

    // // ejemplo de crear un usuario, una vez logueados como admin (los no-admin no pueden hacer eso)
    // Gb.addUser({
    //     "uid": "18950946G",
    //     "first_name": "Elena",
    //     "last_name": "Enseña Enséñez",
    //     "type": "teacher",
    //     "tels": ["141-456-781"],
    //     "password": "axarW!3",
    //     "classes": [
    //         "1A"
    //     ]
    // });
    window.demo();
});

// cosas que exponemos para usarlas desde la consola
window.populate = populate
window.Gb = Gb;