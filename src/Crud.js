import React, { useState } from 'react';

function Crud() {
  const [karyawan, setKaryawan] = useState([]);
  const [nama, setNama] = useState('');

  const tambahKaryawan = (val='') => {
    setKaryawan([val, ...karyawan]);
    setNama('');
  }
  const updateKaryawan = (index, val='') => {
    let _karyawan = [...karyawan];
    if (_karyawan[index] !== undefined) {
      _karyawan[index] = val;
    }
    setKaryawan(_karyawan);
  }
  const hapusKaryawan = (index) => {
    let _karyawan = [...karyawan];
    if (_karyawan[index] !== undefined) {
      _karyawan.splice(parseInt(index), 1);
    }
    setKaryawan(_karyawan);
  }
  const clickTambah = () => {
    if (nama) {
      tambahKaryawan(nama);
    }
  }
  const clickEdit = (index) => {
    let _nama = nama[index];
    let namaBaru = prompt('Inputkan nama baru', _nama);
    if (namaBaru) {
      updateKaryawan(index, namaBaru);
    }
  }
  const clickHapus = (index) => {
    hapusKaryawan(index);
  }
  return (
		<div className="row">
			<div className="col-md-6">
				<h1>Tambah karyawan</h1>
				<div className="input-group">
				  <input className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan nama karyawan" />
				  <button className="btn btn-outline-secondary" onClick={clickTambah}>Tambahkan</button>
        </div>
			</div>
			<div className="col-md-6">
				<h1>Daftar karyawan</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {karyawan.map((value, i) => (
              <tr key={i}>
                <td>{value}</td>
                <td>
                  <div className="btn-group" role="group">
                    <button className="btn btn-primary btn-sm" onClick={() => clickEdit(i)}>edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => clickHapus(i)}>hapus</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
			</div>
		</div>
	);
}

export default Crud;