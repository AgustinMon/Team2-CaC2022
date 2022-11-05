export const Buscador = () => {
    return (
        <form action="/buscar" method="GET">
        <fieldset>
        <input type="text" name="nombre"/>
        <input type="submit" className="btn btn-primary" value="buscar" />
        </fieldset>
        </form>
    )
}

