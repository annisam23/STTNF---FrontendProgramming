const Hello = (props) => {
    return (
    <div>
        <h4>Hai {props.nama}</h4>
        <p>Jurusan {props.jurusan}</p>
        <p>Nim {props.nim}</p>
    </div>);
}

export default Hello;