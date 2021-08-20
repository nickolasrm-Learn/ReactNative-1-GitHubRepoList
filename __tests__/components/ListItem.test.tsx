import React from 'react'
import { render } from '@testing-library/react-native'
import ListItem from '../../components/molecules/ListItem'
import { hasStyle } from '../common'

test('Title and description rendered', () => {
  const rendered = render(<ListItem
    title="Title"
    description="Desc"
    key="a" />)
  expect(rendered.getByText('Title')).toBeDefined()
  expect(rendered.getByText('Desc')).toBeDefined()
})

test('Multiple text styles', () => {
  const item = render(<ListItem
    style={{ backgroundColor: 'red' }}
    title=""
    description=""
    key="a" />).getByTestId('list-item-view')
  expect(hasStyle(item, 'backgroundColor', 'red')).toBeTruthy()
})
