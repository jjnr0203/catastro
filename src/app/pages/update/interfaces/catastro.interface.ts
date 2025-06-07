
export interface CatastroInterface {
    id:                               number;
    actividad:                        Actividad;
    asignacionActual:                 AsignacionActual;
    canton:                           Canton;
    catastro:                         Catastro;
    categoria:                        Categoria;
    clasificacion:                    Clasificacion;
    companiasTransporteTuristico:     any[];
    estado:                           TipoClass;
    establecimiento:                  Establecimiento;
    fecha:                            Date;
    fechaLimiteInspeccion:            Date;
    guiasTurismo:                     any[];
    habitaciones:                     any[];
    inspeccionActual:                 InspeccionActual;
    modalidadesTurismoAventura:       any[];
    normativaRespuestas:              NormativaRespuesta[];
    parroquia:                        Canton;
    personeriaJuridica:               PersoneriaJuridica;
    provincia:                        Canton;
    representantesVentas:             any[];
    serviciosComplementarios:         any[];
    tieneDocumentoActividadTuristica: boolean;
    tieneNombramientoVigente:         boolean;
    tipo:                             TipoClass;
    tipoLocal:                        null;
    totalHombres:                     number;
    totalHombresDiscapacidad:         number;
    totalMujeres:                     number;
    totalMujeresDiscapacidad:         number;
    tramiteAlimentoBebida:            null;
    tramiteAlojamiento:               null;
    tramiteOperacionIntermediacion:   Actividad;
    usoSuelos:                        null;
}

export interface Actividad {
    id:                       number;
    codigo:                   null | string;
    descripcion:              null;
    esVisible:                boolean | null;
    orden:                    number | null;
    nombre:                   null | string;
    zonaGeografica:           TipoClass | null;
    totalPersonalAcreditado?: null;
}

export interface TipoClass {
    id:          number;
    codigo:      string;
    esVisible:   null;
    nombre:      string;
    descripcion: null;
    hijos:       any[];
    tipo:        Tipo;
}

export enum Tipo {
    DpaTipos = "dpa_tipos",
    EstablecimientoEstados = "establecimiento_estados",
    InspeccionEstados = "inspeccion_estados",
    RucEstadosContribuyentes = "ruc_estados_contribuyentes",
    RucTiposContribuyentes = "ruc_tipos_contribuyentes",
    TramiteEstados = "tramite_estados",
    TramiteTipos = "tramite_tipos",
    ZonasGeograficas = "zonas_geograficas",
}

export interface AsignacionActual {
    id:             number;
    usuarioInterno: UsuarioInterno;
    zonal:          Zonal;
    dpa:            Canton;
    esActual:       boolean;
    fecha:          Date;
    observaciones:  string[];
}

export interface Zonal {
    id:       number;
    dpa:      Canton[];
    nombre:   string;
    director: string;
}

export interface Canton {
    id:        number;
    tipo:      TipoClass;
    codigo:    string;
    nombre:    string;
    esVisible: boolean;
    latitud:   string;
    longitud:  string;
    padreId:   number | null;
    tipoZona:  null | string;
    padre?:    null;
    zonal?:    Zonal | null;
}

export interface UsuarioInterno {
    id:           number;
    user:         UsuarioInternoUser;
    dpa:          Canton[];
    zonales:      Zonal[];
    esDisponible: boolean;
}

export interface UsuarioInternoUser {
    id:             number;
    roles:          Role[];
    username:       string;
    name:           string;
    lastname:       null;
    email:          string;
    identification: string;
    phone:          null;
}

export interface Role {
    id:          number;
    name:        string;
    permissions: any[];
}

export interface Catastro {
    id:                  number;
    estado:              CatastroEstado;
    numeroRegistro:      string;
    fechaRegistro:       Date | number;
    sistemOrigen:        string;
    observaciones:       null;
    modificacionSistema: null;
}

export interface CatastroEstado {
    id:          number;
    codigo:      string;
    nombre:      string;
    descripcion: null;
    esVisible:   boolean;
}

export interface Categoria {
    id:             number;
    descripcion:    null;
    esVisible:      boolean;
    orden:          null;
    nombre:         string;
    tieneNormativa: boolean;
}

export interface Clasificacion {
    id:                       number;
    capacidadesComentarios:   null;
    codigo:                   string;
    descripcion:              null;
    esVisible:                boolean;
    orden:                    number;
    maxHabitaciones:          null;
    minHabitaciones:          null;
    maxPlazas:                null;
    minPlazas:                null;
    nombre:                   string;
    tieneNormativa:           boolean;
    esServicioComplementario: boolean;
    tieneRecategorizacion:    boolean;
}

export interface Establecimiento {
    id:              number;
    ruc:             Ruc;
    estado:          TipoClass;
    provincia:       Canton;
    canton:          Canton;
    parroquia:       Canton;
    esMatriz:        null;
    nombreComercial: string;
    numero:          number;
    personaContacto: PersonaContacto;
    ubicacion:       Ubicacion;
    paginaWeb:       null;
}

export interface PersonaContacto {
    identificacion:    string;
    nombres:           string;
    telefonoPrincipal: string;
    secundarioTelefono: undefined | string;
    correo:            string;
    correoPropietario: string;
}

export interface Ruc {
    id:                               number;
    user:                             RucUser;
    estadoContribuyente:              TipoClass;
    tipoContribuyente:                TipoClass;
    fechaActualizacion:               Date;
    numero:                           string;
    numeroExpedienteSupercias:        string;
    pago:                             Pago;
    razonSocial:                      string;
    representanteLegalIdentificacion: string;
    representanteLegalNombres:        string;
}

export interface Pago {
    id:         number;
    ruc:        string;
    tieneDeuda: boolean;
}

export interface RucUser {
    id:              number;
    username:        string;
    name:            string;
    email:           string;
    identification:  string;
    phone:           null;
    birthdate:       null;
    emailVerifiedAt: null;
    passwordChanged: boolean;
}

export interface Ubicacion {
    callePrincipal:    string;
    calleNumeracion:   string;
    calleInterseccion: string;
    calleReferencia:   string;
    latitud:           number;
    longitud:          number;
}

export interface InspeccionActual {
    id:              number;
    estadoFecha:     TipoClass;
    usuarioInterno:  UsuarioInterno;
    esActual:        boolean;
    esAtendido:      boolean;
    fechaCreacion:   Date;
    fechaInspeccion: Date;
    fechaSolicitud:  null;
    fechaLimite:     Date;
    observaciones:   string[];
}

export interface NormativaRespuesta {
    id:                  number;
    padre:               NormativaRespuesta | null;
    esObligatorio:       boolean;
    esPregunta:          boolean;
    esRequisitoAventura: boolean;
    esVisible:           boolean;
    maximoPreguntas:     null;
    minimoPreguntas:     number;
    orden:               number;
    nombre:              string;
    puntaje:             null;
    cumple?:             boolean;
    esAreaProtegida?:    boolean;
}

export interface PersoneriaJuridica {
    id:                                   number;
    codigo:                               string;
    denominacion:                         string;
    esVisible:                            boolean;
    nombre:                               string;
    solicitaEquivalenteRepresentateLegal: boolean;
    solicitaSuperintendeciaCompanias:     boolean;
}

