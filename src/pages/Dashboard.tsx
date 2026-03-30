import { useState } from "react"

import searchSvg from "../assets/search.svg"
import { CATEGORIES } from "../utils/categories"
import { formatCurrency } from "../utils/functions/formatCurrency"

import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { RefundItem } from "../components/RefundItem"
import { Pagination } from "../components/Pagination"

const REFUND_EXAMPLE = {
    id: "123",
    username: "Samuel",
    category: "Transporte",
    amount: formatCurrency(34.5).replace("R$", ""),
    categoryImg: CATEGORIES["transport"].icon
}

export function Dashboard() {
    const [name, setName] = useState("")
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(10)
    const [refunds, setRefunds] = useState([REFUND_EXAMPLE])

    function searchRefunds(e: React.SyntheticEvent) {
        e.preventDefault()
        
        console.log(name)
    }

    function handlePagination(action: "next" | "previous") {
        setPage((prevPage) => {
            if(action === "next" && prevPage < totalPage) {
                return prevPage + 1
            }

            if(action === "previous" && prevPage > 1) {
                return prevPage - 1
            }

            return prevPage
        })
    }

    return (
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

            <form onSubmit={searchRefunds} className="flex flex-1 items-center justify-between pb-6 border-b
                            border-b-gray-400 md:flex-row gap-2 mt-6">
                <Input 
                    placeholder="Pesquisar pelo nome" 
                    onChange={(e) => setName(e.target.value)} 
                />

                <Button type="submit" variant="icon">
                    <img src={searchSvg} alt="Pesquisar" className="w-5" />
                </Button>
            </form>

            <div className="my-6 flex flex-col gap-4 max-h-85.5 overflow-y-scroll">
                {
                    refunds.map((item) => (
                        <RefundItem key={item.id} data={REFUND_EXAMPLE} href={`/refund/${item.id}`} />
                    ))
                }
            </div>

            <Pagination current={page} total={totalPage} onNext={() => handlePagination("next")} onPrevious={() => handlePagination("previous")}/>
        </div>
    )
}