// Esta es la forma como no se deberian de hacer los componentes
// asi inicio react pero ya no seusan los cc clase components

class TercerComponente extends Component {
    state = {}
    render() {
        return (
            <p>Si nos ponemos a mirar es lo mismo que las ffc pero esta ya no es optimo aunque todavia se
                <br />
                soporta pero no es recomendado.
            </p>
        );
    }
}

export default TercerComponente;