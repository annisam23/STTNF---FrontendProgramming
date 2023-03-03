/**
 * Object
 * nilai disimpan dalam bentuk key dan value
 * lebih kompleks
 * non Primitive
 */

const nisa = {
    nama : "Annisa maulida",
    umur :20,
    jenisKelamin : "perempuan",
}
//console.log(nisa);
for (label in nisa) {
    console.log(label);
    console.log(nisa[label])
}
