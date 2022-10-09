import { useParams } from "react-router-dom"

export default function SeatsSession(){
    const {idSessao} = useParams()
    return <p>{idSessao}</p>
}