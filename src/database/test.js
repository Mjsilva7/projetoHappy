const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db,  {
        lat: "-16.4438678",
        lng: "-39.068204",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 à 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "5665687956",
        images: [
            "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"

    });

    //consultar dados na tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

//    const orphanages = await db.all("SELECT * FROM orphanages")
//    console.log(orphanages)

    //deletar dados
   // await db.run("DELETE FROM orphanages")

})