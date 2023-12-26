export type SolutionNDesign = {
    imageSrc: string
    title: string
    list: JSX.Element
    order: 'normal' | 'reversed'
}

export type Screen = Pick<SolutionNDesign, 'imageSrc' | 'title'>
