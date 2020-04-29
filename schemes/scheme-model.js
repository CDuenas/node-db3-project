const db = require("../data/config")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes as s")
        .where("s.id", id)
        .select("s.id", "s.scheme_name")
}

function findSteps(id) {
    return db("steps as st")
        .join("schemes as sc", "sc.id", "st.scheme_id")
        .where("sc.id", id)
        .select("sc.scheme_name", "st.step_number", "st.instructions")
        .orderBy("st.step_number")
}

function add(scheme) {
    return db("schemes as sc")
        .insert(scheme)
}

function update(changes, id) {
    return db("schemes as sc")
        .where("sc.id", id)
        .update(changes)
}

function remove(id) {
    return db("schemes as sc")
        .where("sc.id", id)
        .delete()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}