import { Navigate, useLocation } from "react-router"
import okSvg from "../assets/ok.svg"

export function Confirm() {
    // useLocation é um hook do react-router que retorna o objeto de localização atual,]
    // que contém informações sobre a URL atual, estado e outras propriedades relacionadas à navegação. 
    // Ele é útil para acessar dados passados durante a navegação, como o estado do formulário enviado na página anterior.
    const location = useLocation()

    if(!location.state?.fromSubmit) {
        return <Navigate to="/" />
    }

    return (
        <div className="bg-gray-500 lg:w-lg rounded-xl flex flex-col items-center p-10 gap-6">
            <h1 className="text-2xl font-bold text-center text-green-100">Solicitação Enviada</h1>

            <img src={okSvg} alt="OK image" className="w-28" />

            <p className="text-sm text-gray-100 text-center font-medium">
                Agora é apenas aguardar! Sua solicitação será analisada e, em breve, 
                o setor financeiro irá entrar em contato com você
            </p>

            <a 
                href="/" 
                className="w-full p-3 text-center bg-green-100 rounded-2xl text-white
                         hover:bg-green-200 transition ease-linear font-semibold"
            >
                Nova solicitação
            </a>
        </div>
    )
}