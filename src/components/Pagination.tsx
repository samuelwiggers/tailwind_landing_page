// import leftSvg from "../assets/left.svg"
// import rightSvg from "../assets/right.svg"

import { Button } from "./Button"

type Props = {
    current: number,
    total: number
}

export function Pagination({ current, total }: Props) {
    return (
        <div>
            <Button variant="iconSmall">
                <img src={leftSvg} alt="ícone de Voltar" />
            </Button>
            <span>
                {current}/{total}
            </span>
        </div>
    )
}