import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import ErrorModal from '../../components/molecules/ErrorModal'

describe('Error modal', () => {
  let visible = true
  const setVisible = (value: boolean) => visible = value
  let rendered: any

  beforeEach(() => {
    rendered = render(<ErrorModal
      testID="test"
      message="Message"
      title="Title"
      visible={visible}
      setVisible={setVisible} />)
  })

  it('Title and description rendered', () => {
    expect(rendered.getByText('Title')).toBeDefined()
    expect(rendered.getByText('Message')).toBeDefined()
  })

  it('Closing modal', () => {
    const btn = rendered.getByTestId('modal-button')

    fireEvent.press(btn)

    expect(visible).toBeFalsy()
  })
})