export type RoomTemplate = {
	theme: RoomTheme
	sections: RoomSection[]
}
export type RoomTheme = {
	//title
	//colors
	//etc
}
export type RoomSection = {
	type: SectionType
	name: string
	colStart: GridLine
	colEnd?: GridLine
	colSpan?: GridSpan
	rowStart: GridLine
	rowEnd?: GridLine
	rowSpan?: GridSpan
	yTilt?: number
	xTilt?: number
	zIndex?: ZIndex
	transformOrigin?: TransformOrigin
	aspectRatio?: AspectType
	hidden?: boolean
}
type GridLine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
type GridSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type SectionType = 'video' | 'deck' | 'poll' | 'bio'
type TransformOrigin =
	| 'center'
	| 'top'
	| 'top-right'
	| 'right'
	| 'bottom-right'
	| 'bottom'
	| 'bottom-left'
	| 'left'
	| 'top-left'
type AspectType = 'square' | 'video'
type ZIndex = 0 | 10 | 20 | 30 | 40 | 50 | 'auto'



