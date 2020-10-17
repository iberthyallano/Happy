const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    await saveOrphanage(db, {
        latitude:-7.81,
        longitude:-34.9,
        name: "Lar de paz",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate vitae, tenetur mollitia deserunt iste obcaecati sapiente ipsa doloribus ab expedita nobis ratione assumenda impedit eveniet necessitatibus voluptatum consectetur libero recusandae!",
        whatsapp: 979797979,
        images: [
            "https://source.unsplash.com/random?id=1",
            "https://source.unsplash.com/random?id=2",
            "https://source.unsplash.com/random?id=3",
            "https://source.unsplash.com/random?id=4",
            "https://source.unsplash.com/random?id=5",
            "https://source.unsplash.com/random?id=6"
        ].toString(),
        instructions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        opening_hours: "Lorem ipsum dolor sit.",
        open_on_weekends: "1",
    });

    const selectedOrphanages =  await db.all("SELECT * FROM  orphanages");
    console.log(selectedOrphanages);

    const orphanage = await db.all('SELECT * FROM  orphanages WHERE id = "3"');
    console.log(orphanage);

    // console.log(await db.run("DELETE FROM tabela WHERE id = 4"));
})

