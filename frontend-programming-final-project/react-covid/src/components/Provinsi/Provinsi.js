import { useState } from "react";
import data from "../../utils/constants/provinces";
import styles from "./Provinsi.module.css";
import React from 'react';

function Provinsi() {
    const [tableData, setTableData] = useState(data);
    return (
        <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kota</th>
                        <th>Kasus</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(data => (
                        <tr>
                            <td key={tableData.no}>{data.no}</td>
                            <td>{data.kota}</td>
                            <td>{data.kasus}</td>
                            <td>{data.sembuh}</td>
                            <td>{data.meninggal}</td>
                            <td>{data.dirawat}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Provinsi;