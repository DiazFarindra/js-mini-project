
const penumpang = [];

const tambahPenumpang = (namaPenumpang, penumpang) => {

    // angkot kosong
    if (penumpang.length === 0) {

        // tambah penumpang
        penumpang.push(namaPenumpang);

    } else {

        // cek seluruh kursi
        for (let i = 0; i < penumpang.length; i++) {

            // jika ada kursi kosong
            if (penumpang[i] === undefined) {

                // tambah penumpang di kursi yang kosong
                penumpang[i] = namaPenumpang;

            } else if (penumpang[i] === namaPenumpang) {

                // tampilkan error
                console.log(namaPenumpang + ' sudah ada');

            // jika semua kursi sudah terisi
            } else if (i === penumpang.length - 1) {

                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);

            }

        }

    }

    return penumpang;

}

const hapusPenumpang = (namaPenumpang, penumpang) => {

    if(penumpang.length === 0) {

        console.log('masih kosong');

    } else {

        for (let i = 0; i < penumpang.length; i++) {

            if (penumpang[i] === namaPenumpang) {
                penumpang[i] = undefined;
            } else if (i === penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada');
            }

        }
    }

    return penumpang;

}
