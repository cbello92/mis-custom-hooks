import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {
    // permite mantener la referencia al componente montado
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });


    useEffect(() => {

        // se ejecuta cuando se desmonta el componente y la referencia se establece en false
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // solo ejecuto el setState cuando el componente esta montado
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log("setState no se llamo")
                }

            })
    }, [url]);

    return state;
}
