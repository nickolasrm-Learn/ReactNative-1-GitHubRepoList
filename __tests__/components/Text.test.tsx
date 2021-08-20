import React from 'react'
import { render } from '@testing-library/react-native'
import Text from '../../components/atoms/Text'
import { hasStyle } from '../common'

test('Text rendered', () => {
  const txt = render(<Text>Test</Text>).getByText('Test')
  expect(txt).toBeDefined()
})

test('Multiple text styles', () => {
  const txt = render(<Text style={{ color: 'red' }}>Test</Text>).getByText('Test')
  expect(hasStyle(txt, 'color', 'red')).toBeTruthy()
})
