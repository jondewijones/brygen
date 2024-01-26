import axios, { AxiosResponse } from "axios";

const ADJECTIVE_API_URL: string = "https://random-word-api.vercel.app/api?adjective";

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
        "maynot",
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
    const random: number = Math.floor(Math.random() * auxileryVerbs.length)
    return auxileryVerbs[random]
}

const getAdjective = (): Promise<string> => {
    return axios.get(ADJECTIVE_API_URL, {method: 'GET'})
        .then((response: AxiosResponse) => response.data[0])
        .catch((error: any) => error)
}

export default generate