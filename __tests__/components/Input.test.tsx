import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Input from '../../components/atoms/Input'

test('Submit editing', () => {
  const fn = jest.fn()
  const input = render(<Input testID="input" onSubmitEditing={fn} />).getByTestId('input')

  fireEvent(input, 'submitEditing')

  expect(fn).toBeCalled()
})

test('Focus and style change', () => {
  const fn = jest.fn()
  const input = render(<Input testID="input" onFocus={fn} />).getByTestId('input')

  const beforeStyle = input.props.style
  fireEvent(input, 'focus')

  expect(input.props.style).not.toEqual(beforeStyle)
  expect(fn).toBeCalled()
})

test('Blur and style restore', () => {
  const fn = jest.fn()
  const input = render(<Input testID="input" onBlur={fn} />).getByTestId('input')

  const beforeStyle = input.props.style
  fireEvent(input, 'focus')

  expect(input.props.style).not.toEqual(beforeStyle)

  fireEvent(input, 'blur')

  expect(input.props.style).toEqual(beforeStyle)
  expect(fn).toBeCalled()
})