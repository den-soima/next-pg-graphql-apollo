exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('table5').del()
        .then(function () {
            // Inserts seed entries
            return knex('table5').insert([
                {id: 1, data: 'table5 - data001'},
                {id: 2, data: 'table5 - data002'},
                {id: 3, data: 'table5 - data003'},
                {id: 4, data: 'table5 - data004'},
                {id: 5, data: 'table5 - data005'},
            ]);
        });
};