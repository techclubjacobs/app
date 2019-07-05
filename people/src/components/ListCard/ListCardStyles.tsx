import React from 'react'
import styled from 'styled-components'
import { Card, CardContent, CardMedia } from '@material-ui/core'

export const ListCardContainer = styled(Card)`
	&&& {
		border-radius: 8px;
		border: 1px solid gray;
		padding: 10px;
		display: flex;
	}
`

export const ListCardMedia = styled(CardMedia)`
	&&& {
		border-radius: 8px;

    width: 30%;
    padding-bottom : 30%; /* = width for a 1:1 aspect ratio */
    margin:1.66%;

		align-self: center
	}
`

export const ListCardContentContainer = styled(CardContent)`
	&&& {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`

export const ListCardContent = styled.div`
`

export const PersonInfoContent = styled.div`
	display: flex;
	text-align: center;
`

export const InfoColumn = styled.div`
	margin-right: 20px;
`



