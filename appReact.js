const App = () => {
    return (
        <div>
            <h1>Hola Mundo</h1>
            <Nombres 
                nombres={["Mariano", "Fernando", "Leonel", "Martin"]} 
                edades={[23,33,40,10]} 
                titulo="Lista de personas"
                reemplazar={{ Mariano: "Julian", Leonel: "Ignacio" }}
            />
        </div>
    );
};

const Nombres = (props) => {
    const [isReemplazar, setReemplazar] = React.useState(false);

    return (
        <div>
            <ul>
                <li>{props.titulo}</li>
                {
                    props.nombres.map((nombre, i) => {
                        if (isReemplazar && props.reemplazar[nombre]) {
                            nombre = props.reemplazar[nombre];
                        }

                        return <li key={nombre}>{nombre} - {props.edades[i]}</li>
                    })
                }
            </ul>
            <button onClick={() => setReemplazar(true)}>Reemplazar</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
