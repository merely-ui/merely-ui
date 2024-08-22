import { CSSProperties } from 'react'

type CSSKey = keyof CSSProperties

type Property<K extends CSSKey> = CSSProperties[K]

export class ThemeProps {
	WebkitAppearance?: Property<'WebkitAppearance'>
	WebkitBorderBefore?: Property<'WebkitBorderBefore'>
	WebkitBorderBeforeColor?: Property<'WebkitBorderBeforeColor'>
	WebkitBorderBeforeStyle?: Property<'WebkitBorderBeforeStyle'>
	WebkitBorderBeforeWidth?: Property<'WebkitBorderBeforeWidth'>
	WebkitBoxReflect?: Property<'WebkitBoxReflect'>
	WebkitLineClamp?: Property<'WebkitLineClamp'>
	WebkitMask?: Property<'WebkitMask'>
	WebkitMaskAttachment?: Property<'WebkitMaskAttachment'>
	WebkitMaskClip?: Property<'WebkitMaskClip'>
	WebkitMaskComposite?: Property<'WebkitMaskComposite'>
	WebkitMaskImage?: Property<'WebkitMaskImage'>
	WebkitMaskOrigin?: Property<'WebkitMaskOrigin'>
	WebkitMaskPosition?: Property<'WebkitMaskPosition'>
	WebkitMaskPositionX?: Property<'WebkitMaskPositionX'>
	WebkitMaskPositionY?: Property<'WebkitMaskPositionY'>
	WebkitMaskRepeat?: Property<'WebkitMaskRepeat'>
	WebkitMaskRepeatX?: Property<'WebkitMaskRepeatX'>
	WebkitMaskRepeatY?: Property<'WebkitMaskRepeatY'>
	WebkitMaskSize?: Property<'WebkitMaskSize'>
	WebkitOverflowScrolling?: Property<'WebkitOverflowScrolling'>
	WebkitTapHighlightColor?: Property<'WebkitTapHighlightColor'>
	WebkitTextFillColor?: Property<'WebkitTextFillColor'>
	WebkitTextStroke?: Property<'WebkitTextStroke'>
	WebkitTextStrokeColor?: Property<'WebkitTextStrokeColor'>
	WebkitTextStrokeWidth?: Property<'WebkitTextStrokeWidth'>
	WebkitTouchCallout?: Property<'WebkitTouchCallout'>
	WebkitUserModify?: Property<'WebkitUserModify'>
	accentColor?: Property<'accentColor'>
	alignContent?: Property<'alignContent'>
	alignItems?: Property<'alignItems'>
	alignSelf?: Property<'alignSelf'>
	alignTracks?: Property<'alignTracks'>
	all?: Property<'all'>
	animation?: Property<'animation'>
	animationComposition?: Property<'animationComposition'>
	animationDelay?: Property<'animationDelay'>
	animationDirection?: Property<'animationDirection'>
	animationDuration?: Property<'animationDuration'>
	animationFillMode?: Property<'animationFillMode'>
	animationIterationCount?: Property<'animationIterationCount'>
	animationName?: Property<'animationName'>
	animationPlayState?: Property<'animationPlayState'>
	animationRange?: Property<'animationRange'>
	animationRangeEnd?: Property<'animationRangeEnd'>
	animationRangeStart?: Property<'animationRangeStart'>
	animationTimingFunction?: Property<'animationTimingFunction'>
	animationTimeline?: Property<'animationTimeline'>
	appearance?: Property<'appearance'>
	aspectRatio?: Property<'aspectRatio'>
	azimuth?: Property<'azimuth'>
	backdropFilter?: Property<'backdropFilter'>
	backfaceVisibility?: Property<'backfaceVisibility'>
	background?: Property<'background'>
	backgroundAttachment?: Property<'backgroundAttachment'>
	backgroundBlendMode?: Property<'backgroundBlendMode'>
	backgroundClip?: Property<'backgroundClip'>
	backgroundColor?: Property<'backgroundColor'>
	backgroundImage?: Property<'backgroundImage'>
	backgroundOrigin?: Property<'backgroundOrigin'>
	backgroundPosition?: Property<'backgroundPosition'>
	backgroundPositionX?: Property<'backgroundPositionX'>
	backgroundPositionY?: Property<'backgroundPositionY'>
	backgroundRepeat?: Property<'backgroundRepeat'>
	backgroundSize?: Property<'backgroundSize'>
	blockSize?: Property<'blockSize'>
	border?: Property<'border'>
	borderBlock?: Property<'borderBlock'>
	borderBlockColor?: Property<'borderBlockColor'>
	borderBlockStyle?: Property<'borderBlockStyle'>
	borderBlockWidth?: Property<'borderBlockWidth'>
	borderBlockEnd?: Property<'borderBlockEnd'>
	borderBlockEndColor?: Property<'borderBlockEndColor'>
	borderBlockEndStyle?: Property<'borderBlockEndStyle'>
	borderBlockEndWidth?: Property<'borderBlockEndWidth'>
	borderBlockStart?: Property<'borderBlockStart'>
	borderBlockStartColor?: Property<'borderBlockStartColor'>
	borderBlockStartStyle?: Property<'borderBlockStartStyle'>
	borderBlockStartWidth?: Property<'borderBlockStartWidth'>
	borderBottom?: Property<'borderBottom'>
	borderBottomColor?: Property<'borderBottomColor'>
	borderBottomLeftRadius?: Property<'borderBottomLeftRadius'>
	borderBottomRightRadius?: Property<'borderBottomRightRadius'>
	borderBottomStyle?: Property<'borderBottomStyle'>
	borderBottomWidth?: Property<'borderBottomWidth'>
	borderCollapse?: Property<'borderCollapse'>
	borderColor?: Property<'borderColor'>
	borderEndEndRadius?: Property<'borderEndEndRadius'>
	borderEndStartRadius?: Property<'borderEndStartRadius'>
	borderImage?: Property<'borderImage'>
	borderImageOutset?: Property<'borderImageOutset'>
	borderImageRepeat?: Property<'borderImageRepeat'>
	borderImageSlice?: Property<'borderImageSlice'>
	borderImageSource?: Property<'borderImageSource'>
	borderImageWidth?: Property<'borderImageWidth'>
	borderInline?: Property<'borderInline'>
	borderInlineEnd?: Property<'borderInlineEnd'>
	borderInlineColor?: Property<'borderInlineColor'>
	borderInlineStyle?: Property<'borderInlineStyle'>
	borderInlineWidth?: Property<'borderInlineWidth'>
	borderInlineEndColor?: Property<'borderInlineEndColor'>
	borderInlineEndStyle?: Property<'borderInlineEndStyle'>
	borderInlineEndWidth?: Property<'borderInlineEndWidth'>
	borderInlineStart?: Property<'borderInlineStart'>
	borderInlineStartColor?: Property<'borderInlineStartColor'>
	borderInlineStartStyle?: Property<'borderInlineStartStyle'>
	borderInlineStartWidth?: Property<'borderInlineStartWidth'>
	borderLeft?: Property<'borderLeft'>
	borderLeftColor?: Property<'borderLeftColor'>
	borderLeftStyle?: Property<'borderLeftStyle'>
	borderLeftWidth?: Property<'borderLeftWidth'>
	borderRadius?: Property<'borderRadius'>
	borderRight?: Property<'borderRight'>
	borderRightColor?: Property<'borderRightColor'>
	borderRightStyle?: Property<'borderRightStyle'>
	borderRightWidth?: Property<'borderRightWidth'>
	borderSpacing?: Property<'borderSpacing'>
	borderStartEndRadius?: Property<'borderStartEndRadius'>
	borderStartStartRadius?: Property<'borderStartStartRadius'>
	borderStyle?: Property<'borderStyle'>
	borderTop?: Property<'borderTop'>
	borderTopColor?: Property<'borderTopColor'>
	borderTopLeftRadius?: Property<'borderTopLeftRadius'>
	borderTopRightRadius?: Property<'borderTopRightRadius'>
	borderTopStyle?: Property<'borderTopStyle'>
	borderTopWidth?: Property<'borderTopWidth'>
	borderWidth?: Property<'borderWidth'>
	bottom?: Property<'bottom'>
	boxAlign?: Property<'boxAlign'>
	boxDecorationBreak?: Property<'boxDecorationBreak'>
	boxDirection?: Property<'boxDirection'>
	boxFlex?: Property<'boxFlex'>
	boxFlexGroup?: Property<'boxFlexGroup'>
	boxLines?: Property<'boxLines'>
	boxOrdinalGroup?: Property<'boxOrdinalGroup'>
	boxOrient?: Property<'boxOrient'>
	boxPack?: Property<'boxPack'>
	boxShadow?: Property<'boxShadow'>
	boxSizing?: Property<'boxSizing'>
	breakAfter?: Property<'breakAfter'>
	breakBefore?: Property<'breakBefore'>
	breakInside?: Property<'breakInside'>
	captionSide?: Property<'captionSide'>
	caret?: Property<'caret'>
	caretColor?: Property<'caretColor'>
	caretShape?: Property<'caretShape'>
	clear?: Property<'clear'>
	clip?: Property<'clip'>
	clipPath?: Property<'clipPath'>
	color?: Property<'color'>
	colorScheme?: Property<'colorScheme'>
	columnCount?: Property<'columnCount'>
	columnFill?: Property<'columnFill'>
	columnGap?: Property<'columnGap'>
	columnRule?: Property<'columnRule'>
	columnRuleColor?: Property<'columnRuleColor'>
	columnRuleStyle?: Property<'columnRuleStyle'>
	columnRuleWidth?: Property<'columnRuleWidth'>
	columnSpan?: Property<'columnSpan'>
	columnWidth?: Property<'columnWidth'>
	columns?: Property<'columns'>
	contain?: Property<'contain'>
	containIntrinsicSize?: Property<'containIntrinsicSize'>
	containIntrinsicBlockSize?: Property<'containIntrinsicBlockSize'>
	containIntrinsicHeight?: Property<'containIntrinsicHeight'>
	containIntrinsicInlineSize?: Property<'containIntrinsicInlineSize'>
	containIntrinsicWidth?: Property<'containIntrinsicWidth'>
	container?: Property<'container'>
	containerName?: Property<'containerName'>
	containerType?: Property<'containerType'>
	content?: Property<'content'>
	contentVisibility?: Property<'contentVisibility'>
	counterIncrement?: Property<'counterIncrement'>
	counterReset?: Property<'counterReset'>
	counterSet?: Property<'counterSet'>
	cursor?: Property<'cursor'>
	direction?: Property<'direction'>
	display?: Property<'display'>
	emptyCells?: Property<'emptyCells'>
	filter?: Property<'filter'>
	flex?: Property<'flex'>
	flexBasis?: Property<'flexBasis'>
	flexDirection?: Property<'flexDirection'>
	flexFlow?: Property<'flexFlow'>
	flexGrow?: Property<'flexGrow'>
	flexShrink?: Property<'flexShrink'>
	flexWrap?: Property<'flexWrap'>
	float?: Property<'float'>
	font?: Property<'font'>
	fontFamily?: Property<'fontFamily'>
	fontFeatureSettings?: Property<'fontFeatureSettings'>
	fontKerning?: Property<'fontKerning'>
	fontLanguageOverride?: Property<'fontLanguageOverride'>
	fontOpticalSizing?: Property<'fontOpticalSizing'>
	fontPalette?: Property<'fontPalette'>
	fontVariationSettings?: Property<'fontVariationSettings'>
	fontSize?: Property<'fontSize'>
	fontSizeAdjust?: Property<'fontSizeAdjust'>
	fontSmooth?: Property<'fontSmooth'>
	fontStretch?: Property<'fontStretch'>
	fontStyle?: Property<'fontStyle'>
	fontSynthesis?: Property<'fontSynthesis'>
	fontSynthesisPosition?: Property<'fontSynthesisPosition'>
	fontSynthesisSmallCaps?: Property<'fontSynthesisSmallCaps'>
	fontSynthesisStyle?: Property<'fontSynthesisStyle'>
	fontSynthesisWeight?: Property<'fontSynthesisWeight'>
	fontVariant?: Property<'fontVariant'>
	fontVariantAlternates?: Property<'fontVariantAlternates'>
	fontVariantCaps?: Property<'fontVariantCaps'>
	fontVariantEastAsian?: Property<'fontVariantEastAsian'>
	fontVariantEmoji?: Property<'fontVariantEmoji'>
	fontVariantLigatures?: Property<'fontVariantLigatures'>
	fontVariantNumeric?: Property<'fontVariantNumeric'>
	fontVariantPosition?: Property<'fontVariantPosition'>
	fontWeight?: Property<'fontWeight'>
	forcedColorAdjust?: Property<'forcedColorAdjust'>
	gap?: Property<'gap'>
	grid?: Property<'grid'>
	gridArea?: Property<'gridArea'>
	gridAutoColumns?: Property<'gridAutoColumns'>
	gridAutoFlow?: Property<'gridAutoFlow'>
	gridAutoRows?: Property<'gridAutoRows'>
	gridColumn?: Property<'gridColumn'>
	gridColumnEnd?: Property<'gridColumnEnd'>
	gridColumnGap?: Property<'gridColumnGap'>
	gridColumnStart?: Property<'gridColumnStart'>
	gridGap?: Property<'gridGap'>
	gridRow?: Property<'gridRow'>
	gridRowEnd?: Property<'gridRowEnd'>
	gridRowGap?: Property<'gridRowGap'>
	gridRowStart?: Property<'gridRowStart'>
	gridTemplate?: Property<'gridTemplate'>
	gridTemplateAreas?: Property<'gridTemplateAreas'>
	gridTemplateColumns?: Property<'gridTemplateColumns'>
	gridTemplateRows?: Property<'gridTemplateRows'>
	hangingPunctuation?: Property<'hangingPunctuation'>
	height?: Property<'height'>
	hyphenateCharacter?: Property<'hyphenateCharacter'>
	hyphenateLimitChars?: Property<'hyphenateLimitChars'>
	hyphens?: Property<'hyphens'>
	imageOrientation?: Property<'imageOrientation'>
	imageRendering?: Property<'imageRendering'>
	imageResolution?: Property<'imageResolution'>
	imeMode?: Property<'imeMode'>
	initialLetter?: Property<'initialLetter'>
	inlineSize?: Property<'inlineSize'>
	inputSecurity?: Property<'inputSecurity'>
	inset?: Property<'inset'>
	insetBlock?: Property<'insetBlock'>
	insetBlockEnd?: Property<'insetBlockEnd'>
	insetBlockStart?: Property<'insetBlockStart'>
	insetInline?: Property<'insetInline'>
	insetInlineEnd?: Property<'insetInlineEnd'>
	insetInlineStart?: Property<'insetInlineStart'>
	isolation?: Property<'isolation'>
	justifyContent?: Property<'justifyContent'>
	justifyItems?: Property<'justifyItems'>
	justifySelf?: Property<'justifySelf'>
	justifyTracks?: Property<'justifyTracks'>
	left?: Property<'left'>
	letterSpacing?: Property<'letterSpacing'>
	lineBreak?: Property<'lineBreak'>
	lineClamp?: Property<'lineClamp'>
	lineHeight?: Property<'lineHeight'>
	lineHeightStep?: Property<'lineHeightStep'>
	listStyle?: Property<'listStyle'>
	listStyleImage?: Property<'listStyleImage'>
	listStylePosition?: Property<'listStylePosition'>
	listStyleType?: Property<'listStyleType'>
	margin?: Property<'margin'>
	marginBlock?: Property<'marginBlock'>
	marginBlockEnd?: Property<'marginBlockEnd'>
	marginBlockStart?: Property<'marginBlockStart'>
	marginBottom?: Property<'marginBottom'>
	marginInline?: Property<'marginInline'>
	marginInlineEnd?: Property<'marginInlineEnd'>
	marginInlineStart?: Property<'marginInlineStart'>
	marginLeft?: Property<'marginLeft'>
	marginRight?: Property<'marginRight'>
	marginTop?: Property<'marginTop'>
	marginTrim?: Property<'marginTrim'>
	mask?: Property<'mask'>
	maskBorder?: Property<'maskBorder'>
	maskBorderMode?: Property<'maskBorderMode'>
	maskBorderOutset?: Property<'maskBorderOutset'>
	maskBorderRepeat?: Property<'maskBorderRepeat'>
	maskBorderSlice?: Property<'maskBorderSlice'>
	maskBorderSource?: Property<'maskBorderSource'>
	maskBorderWidth?: Property<'maskBorderWidth'>
	maskClip?: Property<'maskClip'>
	maskComposite?: Property<'maskComposite'>
	maskImage?: Property<'maskImage'>
	maskMode?: Property<'maskMode'>
	maskOrigin?: Property<'maskOrigin'>
	maskPosition?: Property<'maskPosition'>
	maskRepeat?: Property<'maskRepeat'>
	maskSize?: Property<'maskSize'>
	maskType?: Property<'maskType'>
	masonryAutoFlow?: Property<'masonryAutoFlow'>
	mathDepth?: Property<'mathDepth'>
	mathShift?: Property<'mathShift'>
	mathStyle?: Property<'mathStyle'>
	maxBlockSize?: Property<'maxBlockSize'>
	maxHeight?: Property<'maxHeight'>
	maxInlineSize?: Property<'maxInlineSize'>
	maxLines?: Property<'maxLines'>
	maxWidth?: Property<'maxWidth'>
	minBlockSize?: Property<'minBlockSize'>
	minHeight?: Property<'minHeight'>
	minInlineSize?: Property<'minInlineSize'>
	minWidth?: Property<'minWidth'>
	mixBlendMode?: Property<'mixBlendMode'>
	objectFit?: Property<'objectFit'>
	objectPosition?: Property<'objectPosition'>
	offset?: Property<'offset'>
	offsetAnchor?: Property<'offsetAnchor'>
	offsetDistance?: Property<'offsetDistance'>
	offsetPath?: Property<'offsetPath'>
	offsetPosition?: Property<'offsetPosition'>
	offsetRotate?: Property<'offsetRotate'>
	opacity?: Property<'opacity'>
	order?: Property<'order'>
	orphans?: Property<'orphans'>
	outline?: Property<'outline'>
	outlineColor?: Property<'outlineColor'>
	outlineOffset?: Property<'outlineOffset'>
	outlineStyle?: Property<'outlineStyle'>
	outlineWidth?: Property<'outlineWidth'>
	overflow?: Property<'overflow'>
	overflowAnchor?: Property<'overflowAnchor'>
	overflowBlock?: Property<'overflowBlock'>
	overflowClipBox?: Property<'overflowClipBox'>
	overflowClipMargin?: Property<'overflowClipMargin'>
	overflowInline?: Property<'overflowInline'>
	overflowWrap?: Property<'overflowWrap'>
	overflowX?: Property<'overflowX'>
	overflowY?: Property<'overflowY'>
	overlay?: Property<'overlay'>
	overscrollBehavior?: Property<'overscrollBehavior'>
	overscrollBehaviorBlock?: Property<'overscrollBehaviorBlock'>
	overscrollBehaviorInline?: Property<'overscrollBehaviorInline'>
	overscrollBehaviorX?: Property<'overscrollBehaviorX'>
	overscrollBehaviorY?: Property<'overscrollBehaviorY'>
	padding?: Property<'padding'>
	paddingBlock?: Property<'paddingBlock'>
	paddingBlockEnd?: Property<'paddingBlockEnd'>
	paddingBlockStart?: Property<'paddingBlockStart'>
	paddingBottom?: Property<'paddingBottom'>
	paddingInline?: Property<'paddingInline'>
	paddingInlineEnd?: Property<'paddingInlineEnd'>
	paddingInlineStart?: Property<'paddingInlineStart'>
	paddingLeft?: Property<'paddingLeft'>
	paddingRight?: Property<'paddingRight'>
	paddingTop?: Property<'paddingTop'>
	page?: Property<'page'>
	pageBreakAfter?: Property<'pageBreakAfter'>
	pageBreakBefore?: Property<'pageBreakBefore'>
	pageBreakInside?: Property<'pageBreakInside'>
	paintOrder?: Property<'paintOrder'>
	perspective?: Property<'perspective'>
	perspectiveOrigin?: Property<'perspectiveOrigin'>
	placeContent?: Property<'placeContent'>
	placeItems?: Property<'placeItems'>
	placeSelf?: Property<'placeSelf'>
	pointerEvents?: Property<'pointerEvents'>
	position?: Property<'position'>
	printColorAdjust?: Property<'printColorAdjust'>
	quotes?: Property<'quotes'>
	resize?: Property<'resize'>
	right?: Property<'right'>
	rotate?: Property<'rotate'>
	rowGap?: Property<'rowGap'>
	rubyAlign?: Property<'rubyAlign'>
	rubyMerge?: Property<'rubyMerge'>
	rubyPosition?: Property<'rubyPosition'>
	scale?: Property<'scale'>
	scrollbarColor?: Property<'scrollbarColor'>
	scrollbarGutter?: Property<'scrollbarGutter'>
	scrollbarWidth?: Property<'scrollbarWidth'>
	scrollBehavior?: Property<'scrollBehavior'>
	scrollMargin?: Property<'scrollMargin'>
	scrollMarginBlock?: Property<'scrollMarginBlock'>
	scrollMarginBlockStart?: Property<'scrollMarginBlockStart'>
	scrollMarginBlockEnd?: Property<'scrollMarginBlockEnd'>
	scrollMarginBottom?: Property<'scrollMarginBottom'>
	scrollMarginInline?: Property<'scrollMarginInline'>
	scrollMarginInlineStart?: Property<'scrollMarginInlineStart'>
	scrollMarginInlineEnd?: Property<'scrollMarginInlineEnd'>
	scrollMarginLeft?: Property<'scrollMarginLeft'>
	scrollMarginRight?: Property<'scrollMarginRight'>
	scrollMarginTop?: Property<'scrollMarginTop'>
	scrollPadding?: Property<'scrollPadding'>
	scrollPaddingBlock?: Property<'scrollPaddingBlock'>
	scrollPaddingBlockStart?: Property<'scrollPaddingBlockStart'>
	scrollPaddingBlockEnd?: Property<'scrollPaddingBlockEnd'>
	scrollPaddingBottom?: Property<'scrollPaddingBottom'>
	scrollPaddingInline?: Property<'scrollPaddingInline'>
	scrollPaddingInlineStart?: Property<'scrollPaddingInlineStart'>
	scrollPaddingInlineEnd?: Property<'scrollPaddingInlineEnd'>
	scrollPaddingLeft?: Property<'scrollPaddingLeft'>
	scrollPaddingRight?: Property<'scrollPaddingRight'>
	scrollPaddingTop?: Property<'scrollPaddingTop'>
	scrollSnapAlign?: Property<'scrollSnapAlign'>
	scrollSnapCoordinate?: Property<'scrollSnapCoordinate'>
	scrollSnapDestination?: Property<'scrollSnapDestination'>
	scrollSnapPointsX?: Property<'scrollSnapPointsX'>
	scrollSnapPointsY?: Property<'scrollSnapPointsY'>
	scrollSnapStop?: Property<'scrollSnapStop'>
	scrollSnapType?: Property<'scrollSnapType'>
	scrollSnapTypeX?: Property<'scrollSnapTypeX'>
	scrollSnapTypeY?: Property<'scrollSnapTypeY'>
	scrollTimeline?: Property<'scrollTimeline'>
	scrollTimelineAxis?: Property<'scrollTimelineAxis'>
	scrollTimelineName?: Property<'scrollTimelineName'>
	shapeImageThreshold?: Property<'shapeImageThreshold'>
	shapeMargin?: Property<'shapeMargin'>
	shapeOutside?: Property<'shapeOutside'>
	tabSize?: Property<'tabSize'>
	tableLayout?: Property<'tableLayout'>
	textAlign?: Property<'textAlign'>
	textAlignLast?: Property<'textAlignLast'>
	textCombineUpright?: Property<'textCombineUpright'>
	textDecoration?: Property<'textDecoration'>
	textDecorationColor?: Property<'textDecorationColor'>
	textDecorationLine?: Property<'textDecorationLine'>
	textDecorationSkip?: Property<'textDecorationSkip'>
	textDecorationSkipInk?: Property<'textDecorationSkipInk'>
	textDecorationStyle?: Property<'textDecorationStyle'>
	textDecorationThickness?: Property<'textDecorationThickness'>
	textEmphasis?: Property<'textEmphasis'>
	textEmphasisColor?: Property<'textEmphasisColor'>
	textEmphasisPosition?: Property<'textEmphasisPosition'>
	textEmphasisStyle?: Property<'textEmphasisStyle'>
	textIndent?: Property<'textIndent'>
	textJustify?: Property<'textJustify'>
	textOrientation?: Property<'textOrientation'>
	textOverflow?: Property<'textOverflow'>
	textRendering?: Property<'textRendering'>
	textShadow?: Property<'textShadow'>
	textSizeAdjust?: Property<'textSizeAdjust'>
	textTransform?: Property<'textTransform'>
	textUnderlineOffset?: Property<'textUnderlineOffset'>
	textUnderlinePosition?: Property<'textUnderlinePosition'>
	textWrap?: Property<'textWrap'>
	timelineScope?: Property<'timelineScope'>
	top?: Property<'top'>
	touchAction?: Property<'touchAction'>
	transform?: Property<'transform'>
	transformBox?: Property<'transformBox'>
	transformOrigin?: Property<'transformOrigin'>
	transformStyle?: Property<'transformStyle'>
	transition?: Property<'transition'>
	transitionBehavior?: Property<'transitionBehavior'>
	transitionDelay?: Property<'transitionDelay'>
	transitionDuration?: Property<'transitionDuration'>
	transitionProperty?: Property<'transitionProperty'>
	transitionTimingFunction?: Property<'transitionTimingFunction'>
	translate?: Property<'translate'>
	unicodeBidi?: Property<'unicodeBidi'>
	userSelect?: Property<'userSelect'>
	verticalAlign?: Property<'verticalAlign'>
	viewTimeline?: Property<'viewTimeline'>
	viewTimelineAxis?: Property<'viewTimelineAxis'>
	viewTimelineInset?: Property<'viewTimelineInset'>
	viewTimelineName?: Property<'viewTimelineName'>
	viewTransitionName?: Property<'viewTransitionName'>
	visibility?: Property<'visibility'>
	whiteSpace?: Property<'whiteSpace'>
	whiteSpaceCollapse?: Property<'whiteSpaceCollapse'>
	widows?: Property<'widows'>
	width?: Property<'width'>
	willChange?: Property<'willChange'>
	wordBreak?: Property<'wordBreak'>
	wordSpacing?: Property<'wordSpacing'>
	wordWrap?: Property<'wordWrap'>
	writingMode?: Property<'writingMode'>
	zIndex?: Property<'zIndex'>
	zoom?: Property<'zoom'>
	alignmentBaseline?: Property<'alignmentBaseline'>
	baselineShift?: Property<'baselineShift'>
	clipRule?: Property<'clipRule'>
	colorInterpolation?: Property<'colorInterpolation'>
	colorRendering?: Property<'colorRendering'>
	dominantBaseline?: Property<'dominantBaseline'>
	fill?: Property<'fill'>
	fillOpacity?: Property<'fillOpacity'>
	fillRule?: Property<'fillRule'>
	floodColor?: Property<'floodColor'>
	floodOpacity?: Property<'floodOpacity'>
	glyphOrientationVertical?: Property<'glyphOrientationVertical'>
	lightingColor?: Property<'lightingColor'>
	marker?: Property<'marker'>
	markerEnd?: Property<'markerEnd'>
	markerMid?: Property<'markerMid'>
	markerStart?: Property<'markerStart'>
	shapeRendering?: Property<'shapeRendering'>
	stopColor?: Property<'stopColor'>
	stopOpacity?: Property<'stopOpacity'>
	stroke?: Property<'stroke'>
	strokeDasharray?: Property<'strokeDasharray'>
	strokeDashoffset?: Property<'strokeDashoffset'>
	strokeLinecap?: Property<'strokeLinecap'>
	strokeLinejoin?: Property<'strokeLinejoin'>
	strokeMiterlimit?: Property<'strokeMiterlimit'>
	strokeOpacity?: Property<'strokeOpacity'>
	strokeWidth?: Property<'strokeWidth'>
	textAnchor?: Property<'textAnchor'>
	vectorEffect?: Property<'vectorEffect'>
	bg?: Property<'background'>
	bgColor?: Property<'backgroundColor'>
	bgSize?: Property<'backgroundSize'>
	bgPos?: Property<'backgroundPosition'>
	bgRepeat?: Property<'backgroundRepeat'>
	bgAttachment?: Property<'backgroundAttachment'>
	bgClip?: Property<'backgroundClip'>
	bgGradient?: Property<'backgroundColor'>
	bgImg?: Property<'backgroundImage'>
	bgImage?: Property<'backgroundImage'>
	borderStart?: Property<'borderInlineStart'>
	borderX?: Property<'borderInline'>
	borderY?: Property<'borderBlock'>
	borderStartColor?: Property<'borderInlineStartColor'>
	borderEndColor?: Property<'borderInlineEndColor'>
	borderStartStyle?: Property<'borderInlineStartStyle'>
	borderEndStyle?: Property<'borderInlineEndStyle'>
	rounded?: Property<'borderRadius'>
	roundedTopLeft?: Property<'borderTopLeftRadius'>
	roundedStartStart?: Property<'borderStartStartRadius'>
	borderTopStartRadius?: Property<'borderStartStartRadius'>
	roundedEndStart?: Property<'borderEndStartRadius'>
	borderBottomStartRadius?: Property<'borderEndStartRadius'>
	roundedTopRight?: Property<'borderTopRightRadius'>
	roundedStartEnd?: Property<'borderStartEndRadius'>
	borderTopEndRadius?: Property<'borderStartEndRadius'>
	roundedEndEnd?: Property<'borderEndEndRadius'>
	borderBottomEndRadius?: Property<'borderEndEndRadius'>
	roundedBottomLeft?: Property<'borderBottomLeftRadius'>
	roundedBottomRight?: Property<'borderBottomRightRadius'>
	// roundedStart?: Property<'borderInlineStartRadius'>
	// borderStartRadius?: Property<'borderInlineStartRadius'>
	// roundedEnd?: Property<'borderInlineEndRadius'>
	// borderEndRadius?: Property<'borderInlineEndRadius'>
	// roundedTop?: Property<'borderTopRadius'>
	// roundedBottom?: Property<'borderBottomRadius'>
	// roundedLeft?: Property<'borderLeftRadius'>
	// roundedRight?: Property<'borderRightRadius'>
	borderStartWidth?: Property<'borderInlineStartWidth'>
	borderEndWidth?: Property<'borderInlineEndWidth'>
	shadow?: Property<'boxShadow'>
	blendMode?: Property<'mixBlendMode'>
	bgBlendMode?: Property<'backgroundBlendMode'>
	flexDir?: Property<'flexDirection'>
	w?: Property<'width'>
	h?: Property<'height'>
	minW?: Property<'minWidth'>
	minH?: Property<'minHeight'>
	maxW?: Property<'maxWidth'>
	maxH?: Property<'maxHeight'>
	overscroll?: Property<'overscrollBehavior'>
	overscrollX?: Property<'overscrollBehaviorX'>
	overscrollY?: Property<'overscrollBehaviorY'>
	listStylePos?: Property<'listStylePosition'>
	listStyleImg?: Property<'listStyleImage'>
	pos?: Property<'position'>
	insetX?: Property<'insetInline'>
	insetY?: Property<'insetBlock'>
	insetStart?: Property<'insetInlineStart'>
	insetEnd?: Property<'insetInlineEnd'>
	m?: Property<'margin'>
	mt?: Property<'marginBlockStart'>
	mr?: Property<'marginRight'>
	mb?: Property<'marginBottom'>
	ml?: Property<'marginLeft'>
	ms?: Property<'marginInlineStart'>
	marginStart?: Property<'marginInlineStart'>
	me?: Property<'marginInlineEnd'>
	marginEnd?: Property<'marginInlineEnd'>
	mx?: Property<'marginInline'>
	marginX?: Property<'marginInline'>
	my?: Property<'marginBlock'>
	marginY?: Property<'marginBlock'>
	p?: Property<'padding'>
	pt?: Property<'paddingTop'>
	pr?: Property<'paddingRight'>
	pb?: Property<'paddingBottom'>
	pl?: Property<'paddingLeft'>
	ps?: Property<'paddingInlineStart'>
	paddingStart?: Property<'paddingInlineStart'>
	pe?: Property<'paddingInlineEnd'>
	paddingEnd?: Property<'paddingInlineEnd'>
	px?: Property<'paddingInline'>
	paddingX?: Property<'paddingInline'>
	py?: Property<'paddingBlock'>
	paddingY?: Property<'paddingBlock'>
	textDecor?: Property<'textDecoration'>
	transitionTiming?: Property<'transitionTimingFunction'>
	backgroundGradient?: Property<'background'>
	// borderInlineStartRadius?: Property<'borderInlineStartRadius'>
	// borderInlineEndRadius?: Property<'borderInlineEndRadius'>
	// borderTopRadius?: Property<'borderTopRadius'>
	// borderBottomRadius?: Property<'borderBottomRadius'>
	// borderLeftRadius?: Property<'borderLeftRadius'>
	// borderRightRadius?: Property<'borderRightRadius'>
	// scrollMarginX?: Property<'scrollMarginX'>
	// scrollMarginY?: Property<'scrollMarginY'>
	// scrollPaddingX?: Property<'scrollPaddingX'>
	// scrollPaddingY?: Property<'scrollPaddingY'>
	// skewX?: ConditionalValue<string | number | AnyString>
	// skewY?: ConditionalValue<string | number | AnyString>
	// scaleX?: ConditionalValue<string | number | AnyString>
	// scaleY?: ConditionalValue<string | number | AnyString>
	// translateX?: Property<'translateX'>
	// translateY?: Property<'translateY'>
}

export type StyleProps = Partial<ThemeProps>
