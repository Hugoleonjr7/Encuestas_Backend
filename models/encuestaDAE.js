const mongoose = require('mongoose');

const encuestaDAEEschema = new mongoose.Schema({
    cuenta: {
        type: String, 
        unique: true,
        required: [true, "La encuestaDAE debe de tener una cuenta"],
        trim: true, 
        minlength: [6,"La cuenta debe de tener como minimo 7 carácteres"],
        maxlength: [6,"La cuenta debe de tener como maximo 7 carácteres"],        
    },

    fechaInscripcion: {
        type: Date,
        required: [true, "La encuestaDAE debe de tener una fecha de inscripcion"],        
    },

    nombre:{
        type: String,
        required: [true, "La encuestaDAE debe de tener un nombre"],
        trim: true,
        minlength: [1,"El nombre debe de tener como minimo un caracter"],
        maxlength: [50,"El nombre debe de tener como minimo un caracter"]
    },
    preguntas: [
        {
            preguntas: {
                type: mongoose.SchemaType.Objectid,
                ref: 'diccionarioEncuestaDAE'
            },
            respuesta: {
                type: String,
                trim: true,
                minlength: [1, "La respuesta de la pregunta debe tener como minimo 1 caracter"],
                maslength: [100, "La respuesta de la pregunta debe tener como maximo 100 caracteres"]
            },
            opciones:[{
                preguntas: {
                    type: mongoose.SchemaType.Objectid,
                    ref: 'diccionarioEncuestaDAE'
                },
                respuesta: {
                    type: String,
                    trim: true,
                    minlength: [1, "La respuesta de la pregunta debe tener como minimo 1 caracter"],
                    maslength: [100, "La respuesta de la pregunta debe tener como maximo 100 caracteres"]
                },
            }],
            otro:{
                type: String,
                trim: true,
                minlength: [1, "La respuestaCom de la pregunta debe tener como minimo 1 caracter"],
                maxlength: [100,"La respuestaCom de la pregunta debe tener como maximo 100 caracteres"]
            }
        }
    ]

});

const EncuestaDAE = mongoose.model("encuestaDAE" , encuestaDAEEschema);
module.exports = EncuestaDAE;
