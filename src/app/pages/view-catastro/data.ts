import { CatastroInterface, Tipo, TipoClass } from './interfaces/catastro.interface';

export const catastroData: CatastroInterface = {
    id: 1,
    actividad: {
        id: 1,
        codigo: 'ACT001',
        descripcion: null,
        esVisible: true,
        orden: 1,
        nombre: 'Agendamiento y Alojamiento Turuístico',
        zonaGeografica: {
            id: 1,
            codigo: 'ZG01',
            esVisible: null,
            nombre: 'Sierra',
            descripcion: null,
            hijos: [],
            tipo: Tipo.ZonasGeograficas
        },
        totalPersonalAcreditado: null
    },
    asignacionActual: {
        id: 1,
        usuarioInterno: {
            id: 1,
            user: {
                id: 1,
                roles: [{ id: 1, name: 'Inspector', permissions: [] }],
                username: 'jdoe',
                name: 'John',
                lastname: null,
                email: 'jdoe@email.com',
                identification: '1234567890',
                phone: null
            },
            dpa: [],
            zonales: [],
            esDisponible: true
        },
        zonal: {
            id: 1,
            dpa: [],
            nombre: 'Zonal Quito',
            director: 'Jane Doe'
        },
        dpa: {
            id: 1,
            tipo: {
                id: 1,
                codigo: 'DPA01',
                esVisible: null,
                nombre: 'Provincia',
                descripcion: null,
                hijos: [],
                tipo: Tipo.DpaTipos
            },
            codigo: 'ECU-Q',
            nombre: 'Quito',
            esVisible: true,
            latitud: '-0.1807',
            longitud: '-78.4678',
            padreId: null,
            tipoZona: null
        },
        esActual: true,
        fecha: new Date(),
        observaciones: ['Asignado recientemente']
    },
    canton: {
        id: 1,
        tipo: {
            id: 1,
            codigo: 'DPA01',
            esVisible: null,
            nombre: 'Provincia',
            descripcion: null,
            hijos: [],
            tipo: Tipo.DpaTipos
        },
        codigo: 'ECU-Q',
        nombre: 'Quito',
        esVisible: true,
        latitud: '-0.1807',
        longitud: '-78.4678',
        padreId: null,
        tipoZona: null
    },
    catastro: {
        id: 1,
        estado: {
            id: 1,
            codigo: 'ACTIVO',
            nombre: 'RATIFICADO',
            descripcion: null,
            esVisible: true
        },
        numeroRegistro: 'CAT-2024-001',
        fechaRegistro: new Date(),
        sistemOrigen: 'Sistema Central',
        observaciones: null,
        modificacionSistema: null
    },
    categoria: {
        id: 1,
        descripcion: null,
        esVisible: true,
        orden: null,
        nombre: 'Categoria Unica',
        tieneNormativa: true
    },
    clasificacion: {
        id: 1,
        capacidadesComentarios: null,
        codigo: 'CL01',
        descripcion: null,
        esVisible: true,
        orden: 1,
        maxHabitaciones: null,
        minHabitaciones: null,
        maxPlazas: null,
        minPlazas: null,
        nombre: 'Agencia de viajes dual',
        tieneNormativa: true,
        esServicioComplementario: false,
        tieneRecategorizacion: false
    },
    companiasTransporteTuristico: [],
    estado: {
        id: 1,
        codigo: 'ACTIVO',
        esVisible: null,
        nombre: 'Activo',
        descripcion: null,
        hijos: [],
        tipo: Tipo.EstablecimientoEstados
    },
    establecimiento: {
        id: 1,
        ruc: {
            id: 1,
            user: {
                id: 1,
                username: 'empresa1',
                name: 'Empresa Uno',
                email: 'empresa1@email.com',
                identification: '0999999999',
                phone: null,
                birthdate: null,
                emailVerifiedAt: null,
                passwordChanged: true
            },
            estadoContribuyente: {
                id: 1,
                codigo: 'RATIFICADO',
                esVisible: null,
                nombre: 'Activo',
                descripcion: null,
                hijos: [],
                tipo: Tipo.RucEstadosContribuyentes
            },
            tipoContribuyente: {
                id: 1,
                codigo: 'NATURAL',
                esVisible: null,
                nombre: 'Natural',
                descripcion: null,
                hijos: [],
                tipo: Tipo.RucTiposContribuyentes
            },
            fechaActualizacion: new Date(),
            numero: '1790012345001',
            numeroExpedienteSupercias: 'EXP-001',
            pago: {
                id: 1,
                ruc: '1790012345001',
                tieneDeuda : false 
            },
            razonSocial: 'Empresa Uno S.A.',
            representanteLegalIdentificacion: '1234567890',
            representanteLegalNombres: 'Juan Pérez'
        },
        estado: {
            id: 1,
            codigo: 'ACTIVO',
            esVisible: null,
            nombre: 'RATIFICADO',
            descripcion: null,
            hijos: [],
            tipo: Tipo.EstablecimientoEstados
        },
        provincia: {
            id: 1,
            tipo: {
                id: 1,
                codigo: 'DPA01',
                esVisible: null,
                nombre: 'Provincia',
                descripcion: null,
                hijos: [],
                tipo: Tipo.DpaTipos
            },
            codigo: 'ECU-P',
            nombre: 'Pichincha',
            esVisible: true,
            latitud: '-0.1807',
            longitud: '-78.4678',
            padreId: null,
            tipoZona: null
        },
        canton: {
            id: 1,
            tipo: {
                id: 1,
                codigo: 'DPA01',
                esVisible: null,
                nombre: 'Provincia',
                descripcion: null,
                hijos: [],
                tipo: Tipo.DpaTipos
            },
            codigo: 'ECU-Q',
            nombre: 'Quito',
            esVisible: true,
            latitud: '-0.1807',
            longitud: '-78.4678',
            padreId: null,
            tipoZona: null
        },
        parroquia: {
            id: 1,
            tipo: {
                id: 1,
                codigo: 'DPA01',
                esVisible: null,
                nombre: 'Provincia',
                descripcion: null,
                hijos: [],
                tipo: Tipo.DpaTipos
            },
            codigo: 'ECU-QP',
            nombre: 'Centro',
            esVisible: true,
            latitud: '-0.1807',
            longitud: '-78.4678',
            padreId: null,
            tipoZona: null
        },
        esMatriz: null,
        nombreComercial: 'Hotel Central',
        numero: 101,
        personaContacto: {
            identificacion: '1234567890',
            nombres: 'Juan Pérez',
            telefonoPrincipal: '0999999999',
            secundarioTelefono: undefined,
            correoPropietario: 'jajyehfvperez@email.com',
            correo: 'jperez@email.com'

        },
        ubicacion: {
            callePrincipal: 'Av. Amazonas',
            calleNumeracion: 'N34-56',
            calleInterseccion: 'Av. Naciones Unidas',
            calleReferencia: 'Frente al parque',
            latitud: -0.1807,
            longitud: -78.4678
        },
        paginaWeb: null
    },
    fecha: new Date(),
    fechaLimiteInspeccion: new Date(),
    guiasTurismo: [],
    habitaciones: [],
    inspeccionActual: {
        id: 1,
        estadoFecha: {
            id: 1,
            codigo: 'PENDIENTE',
            esVisible: null,
            nombre: 'Pendiente',
            descripcion: null,
            hijos: [],
            tipo: Tipo.InspeccionEstados
        },
        usuarioInterno: {
            id: 1,
            user: {
                id: 1,
                roles: [{ id: 1, name: 'Inspector', permissions: [] }],
                username: 'jdoe',
                name: 'John',
                lastname: null,
                email: 'jdoe@email.com',
                identification: '1234567890',
                phone: null
            },
            dpa: [],
            zonales: [],
            esDisponible: true
        },
        esActual: true,
        esAtendido: false,
        fechaCreacion: new Date(),
        fechaInspeccion: new Date(),
        fechaSolicitud: null,
        fechaLimite: new Date(),
        observaciones: ['Inspección programada']
    },
    modalidadesTurismoAventura: [],
    normativaRespuestas: [
        {
            id: 1,
            padre: null,
            esObligatorio: true,
            esPregunta: true,
            esRequisitoAventura: false,
            esVisible: true,
            maximoPreguntas: null,
            minimoPreguntas: 1,
            orden: 1,
            nombre: '¿Cumple con la normativa?',
            puntaje: null,
            cumple: true
        }
    ],
    parroquia: {
        id: 1,
        tipo: {
            id: 1,
            codigo: 'DPA01',
            esVisible: null,
            nombre: 'Provincia',
            descripcion: null,
            hijos: [],
            tipo: Tipo.DpaTipos
        },
        codigo: 'ECU-QP',
        nombre: 'Centro',
        esVisible: true,
        latitud: '-0.1807',
        longitud: '-78.4678',
        padreId: null,
        tipoZona: null
    },
    personeriaJuridica: {
        id: 1,
        codigo: 'PJ01',
        denominacion: 'Sociedad Anónima',
        esVisible: true,
        nombre: 'Empresa Uno S.A.',
        solicitaEquivalenteRepresentateLegal: false,
        solicitaSuperintendeciaCompanias: false
    },
    provincia: {
        id: 1,
        tipo: {
            id: 1,
            codigo: 'DPA01',
            esVisible: null,
            nombre: 'Provincia',
            descripcion: null,
            hijos: [],
            tipo: Tipo.DpaTipos
        },
        codigo: 'ECU-P',
        nombre: 'Pichincha',
        esVisible: true,
        latitud: '-0.1807',
        longitud: '-78.4678',
        padreId: null,
        tipoZona: null
    },
    representantesVentas: [],
    serviciosComplementarios: [],
    tieneDocumentoActividadTuristica: true,
    tieneNombramientoVigente: true,
    tipo: {
        id: 1,
        codigo: 'HOTEL',
        esVisible: null,
        nombre: 'Hotel',
        descripcion: null,
        hijos: [],
        tipo: Tipo.TramiteTipos
    },
    tipoLocal: null,
    totalHombres: 5,
    totalHombresDiscapacidad: 0,
    totalMujeres: 7,
    totalMujeresDiscapacidad: 1,
    tramiteAlimentoBebida: null,
    tramiteAlojamiento: null,
    tramiteOperacionIntermediacion: {
        id: 2,
        codigo: 'ACT002',
        descripcion: null,
        esVisible: true,
        orden: 2,
        nombre: 'Operación Intermediación',
        zonaGeografica: null,
        totalPersonalAcreditado: null
    },
    usoSuelos: null
};