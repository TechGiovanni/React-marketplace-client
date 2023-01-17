import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	min-height: 100px;
	border-bottom: 1px solid darkgray;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
	/* border: 2px solid red; */
`

export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`

export const Name = styled.span`
	width: 23%;
`
export const Price = styled.span`
	width: 23%;
`

export const Quantity = styled.span`
	display: flex;
	width: 23%;
	/* border: 2px solid blue; */
`
export const Arrow = styled.div`
	cursor: pointer;
`
export const Value = styled.span`
	margin: 0 10px;
`

export const RemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`
