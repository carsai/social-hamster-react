const TextoMuro = ({datos, mostrarFecha}) => {
    const {mensaje, nombre, fecha} = datos;

    const calcularFecha = fechaSeguir => {
        const fechaCalculo =(Date.now() - fechaSeguir) / 1000;

        if (fechaCalculo < 60) return `${Math.round(fechaCalculo)} segundo/s`;
        if (fechaCalculo > 60 && fechaCalculo < 3600) return `${Math.round(fechaCalculo / 60)} minuto/s`;

        return `${Math.round((fechaCalculo / 60) / 60)} hora/s`;
    }

    return (
        <li> {(mostrarFecha) ? <b>{nombre}:</b> : null } {mensaje} {(mostrarFecha) ? <b>({calcularFecha(fecha)})</b> : null} </li>
    );
}

export default TextoMuro;