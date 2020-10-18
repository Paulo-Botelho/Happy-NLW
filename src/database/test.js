const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db) => {
    // inserir dados na tabela 
    /*await saveOrphanage(db,{

        lat:"-19.7441773",

        lng: "-47.9485518",

        name: "Lar dos meninos",

        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",

        whatsapp: "6523279563",

        images:[
            

            "https://images.unsplash.com/photo-1597639460500-fa229f5275b0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600818272779-cfa6145222f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1570473546580-f647e3e3efd2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

        opening_hours: "Horário de visitas Das 18h até 8h",

        open_on_weekends: "0"
    });*/

    //consulta dados da tabela

    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    // consultar somente 1 orphanato pelo id

    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    console.log(orphanage);*/

    // deletar dado da tabela 

    /*console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));*/
 
})