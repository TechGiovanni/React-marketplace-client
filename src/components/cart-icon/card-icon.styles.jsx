import styled from 'styled-components'

import { ReactComponent as ShoppingIconSvg } from '../../assets/shopping-bag.svg'

export const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

export const ItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
`
// svg styling
export const ShoppingIcon = styled(ShoppingIconSvg)`
	width: 24px;
	height: 24px;
`
