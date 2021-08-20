import React from 'react'
import { render } from '@testing-library/react-native'
import ModalButton from '../../components/atoms/ModalButton'
import { hasStyle } from '../common'

test('Multiple styles', () => {
  const modalBtn = render(<ModalButton style={{ backgroundColor: 'green' }}
    text="Test" testID="test" />).getByTestId('test')
  expect(hasStyle(modalBtn, 'backgroundColor', 'green')).toBeTruthy()
})

test('Text presence', () => {
  const btn = render(<ModalButton text="Test" />).getByText('Test')
  expect(btn).toBeDefined()
})

test('Text color', () => {
  const btn = render(<ModalButton text="Test" color="#ffffff" />).getByTestId('text-styles-component')
  expect(hasStyle(btn, 'color', '#ffffff')).toBeTruthy()
})