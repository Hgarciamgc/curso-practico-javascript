const notes = [
    {
        Materia: "Matematica",
        Nota: 20,
        Ponderacion: 5,
    },
    {
        Materia: "Lenguaje",
        Nota: 16,
        Ponderacion: 5
    },
    {
        Materia: "Horas Comunitarias",
        Nota: 10,
        Ponderacion: 10
    }

]

const NotesWithCredit = notes.map(function(notesobject) {
     return  notesobject.Nota * notesobject.Ponderacion;
})

const Suma = NotesWithCredit.reduce(function(ValorA = 0, Valor) {

      ValorA += Valor;
    return ValorA
})

const CreditPlus = notes.map(function (notesCredit) {
     return notesCredit.Ponderacion + notesCredit.Ponderacion;

})

const Suma2 = CreditPlus.reduce(function(ValorA = 0, Valor){
    ValorA += Valor;
    return ValorA
})

const ponderado = Suma / Suma2