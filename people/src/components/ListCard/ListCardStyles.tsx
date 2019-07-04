import React from 'react'
import styled from 'styled-components'
import { Grid, Card, CardContent, CardMedia } from '@material-ui/core'

export const ListCardGrid = styled(Grid)`
	background-color: red;
`

export const ListCardContainer = styled(Card)`
	&&& {
		border-radius: 0.6rem;
		padding: 1rem;
	}
`

export const ListCardSubContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`

export const ListCardMedia = styled(CardMedia)`
	&&& {
		width: 128px;
		height: 128px;
		border-radius: 0.6rem;
	}
`

export const ListCardContentContainer = styled(CardContent)`
	&&& {
		margin-left: 5%;
	}
`

export const ListCardContent = styled.div`
	display: flex;
	align-items: flex-start;
`



