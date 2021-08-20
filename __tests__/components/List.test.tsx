import React from 'react'
import { render } from '@testing-library/react-native'
import List from '../../components/organisms/List'
import { hasContentContainerStyle } from '../common'

test('Rendering list items', () => {
  const data = [
    { title: 'Title', description: 'Descr', key: 'a' },
    { title: 'Title1', description: 'Descr1', key: 'b' }
  ]

  const rendered = render(<List data={data} />)

  expect(rendered.getAllByTestId('list-item')).toHaveLength(2)

  const items = rendered.getAllByTestId('list-item')
  expect(data.map(item => ({
    name: item.title,
    description: item.description
  })).sort()).toEqual(items.map((item: any) => ({
    name: item.props.title,
    description: item.props.description
  })).sort()
  )
})

test('Multiple styles', () => {
  const list = render(<List data={[{ title: 'Title', description: 'Descr', key: 'a' }]}
    style={{ backgroundColor: 'red' }}
    testID="list" />).getByTestId('list')
  expect(hasContentContainerStyle(list, 'backgroundColor', 'red')).toBeTruthy()
})
