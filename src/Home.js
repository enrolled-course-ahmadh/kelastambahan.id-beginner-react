import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const data = [
    {
        gambar: 'http://placeimg.com/300/300/tech?t=1667267808261',
        judul: 'CRUD JS',
        tanggal: '20 November 2022',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ab perspiciatis. Perspiciatis neque eveniet, exercitationem quisquam earum natus reprehenderit soluta eos explicabo sapiente animi dicta, voluptates deserunt quas! Consectetur, facilis?',
        url: '/crud-js'
    },
    {
        gambar: 'https://placeimg.com/300/300/animals?t=1667268571130',
        judul: 'Kalkulator JS',
        tanggal: '21 November 2022',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quas aperiam explicabo, harum aliquam maxime ratione a, officia nulla doloremque quae eos autem voluptates officiis, culpa non cupiditate eveniet. Itaque!',
        url: '/kalkulator-js'
    }
];

function Home() {
    return (
        <>
            <div className="daftar-content">
                {
                    data.map((value, i) => (
                        <div className="content" key={i}>
                            <img src={value.gambar} alt="gambar" />
                            <div className="info">
                                <h1>{value.judul}</h1>
                                <strong>{value.tanggal}</strong>
                                <p>{value.deskripsi}</p>
                                <Link to={value.url}>Lihat selengkapnya</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="sidebar">
                <h2>Daftar Produk</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quidem molestiae optio reiciendis tempore, mollitia sed, odit corrupti suscipit ex ad? Quaerat in soluta corporis?</p>
                <h2>Produk Unggulan Kami</h2>
                <ul>
                    {
                        data.map((value, i) => (
                            <li key={i}>
                                <Link to={value.url}>{value.judul}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default Home;