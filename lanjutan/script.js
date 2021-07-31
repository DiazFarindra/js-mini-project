
// object literal
// !problem tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'diaz farinda',
//     energy: 10,
//     makan(porsi) {
//         this.energy = this.energy + porsi
//         console.log(`halo ${this.nama} selamat makan!`)
//     }
// }

// let mahasiswa1 = {
//     nama: 'diaz',
//     energy: 10,
//     makan(porsi) {
//         this.energy = this.energy + porsi
//         console.log(`halo ${this.nama} selamat makan!`)
//     }
// }


// function declaration
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energy += porsi
//         console.log(`halo ${this.nama} selamat makan`)
//     },
//     main: function (jam) {
//         this.energy -= jam
//         console.log(`selamat bermain ${this.nama}`)
//     },
//     tidur: function (jam) {
//         this.energy += jam * 2
//         console.log(`selamat tidur ${this.nama}`)
//     }
// }

// function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama
//     mahasiswa.energy = energy

//     return mahasiswa
// }

// let data = Mahasiswa('diaz farindra', 10)
// let data1 = Mahasiswa('farindra', 10)


// constractor function
// function Mahasiswa(nama, energy) {
//     this.nama = nama
//     this.energy = energy

//     this.makan = function(porsi) {
//         this.energy += porsi
//         console.log(`halo ${this.nama} selamat makan`)
//     }

//     this.main = function(jam) {
//         this.energy -= jam
//         console.log(`selamat bermain ${this.nama}`)
//     }
// }

// let diaz = new Mahasiswa('diaz', 15)



// object prototype inheritence
// function Mahasiswa(nama, energy) {
//     this.nama = nama
//     this.energy = energy
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi
//     return `halo ${this.nama}, selamat makan`
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energy -= jam
//     return `halo ${this.nama}, selamat bermain`
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += jam * 2
//     return `halo ${this.nama}, selamat tidur`
// }

// let diaz = new Mahasiswa('diaz', 10)



// class object
// class Mahasiswa {
//     constructor (nama, energy) {
//         this.nama = nama
//         this.energy = energy
//     }

//     makan(porsi) {
//         this.energy += porsi
//         return `halo ${this.nama}, selamat makan`
//     }

//     main(jam) {
//         this.energy -= jam
//         return `halo ${this.nama}, selamat bermain`
//     }

//     tidur(jam) {
//         this.energy += jam * 2
//         return `halo ${this.nama}, selamat tidur`
//     }
// }

// let farindra = new Mahasiswa('farindra', 10)
