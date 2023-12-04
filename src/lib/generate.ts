import axios from "axios";

const ADJECTIVE_API_URL: string = "https://random-word-form.repl.co/random/adjective";

const generate = async (): Promise<string> => {
    const bry: string = "Bry";
    const auxVerb: string = getAuxVerb();
    const adj: string = await getAdjective();

    return bry + auxVerb + adj;
}

const getAuxVerb = (): string => {
    const auxileryVerbs: Array<string> = [
        "can",
        "cant",
        "could",
        "couldnt",
        "may",
        "naynot",
        "might",
        "mightnot",
        "must",
        "mustnt",
        "should",
        "shouldnt",
        "will",
        "willnot",
        "would",
        "wouldnt"
    ]
    const random: int = Math.floor(Math.random() * auxileryVerbs.length)
    return auxileryVerbs[random]
}

const getAdjective = (): Promise<string> => {
    return axios.get(ADJECTIVE_API_URL, {method: 'GET'})
        .then(response => response.data[0])
        .catch(error => error)
}

export default generate