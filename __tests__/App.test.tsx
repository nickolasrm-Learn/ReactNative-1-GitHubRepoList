import React from 'react'
import App from '../App.tsx'
import { api } from '../src/adapters/Github'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

jest.spyOn(api, 'get')

describe('App testing', () => {
  let app: any

  beforeEach(() => {
    app = render(<App />)
  })

  it('Rendered successfully', () => {
    expect(app.getByTestId('app-container')).toBeDefined()
  })

  it('Fetching repos', async () => {
    const input = app.getByTestId('user-input')
    const data = [
      { name: 'Test', description: 'TestD' },
      { name: 'Test1', description: 'TestD1' }
    ]

    api.get.mockResolvedValue({ data })
    fireEvent(input, 'submitEditing', { nativeEvent: { text: 'test' } })

    await waitFor(() => expect(app.getAllByTestId('list-item')).toHaveLength(2))

    const items = app.getAllByTestId('list-item')

    expect(data.sort()).toEqual(items.map((item: any) => ({
      name: item.props.title,
      description: item.props.description
    })).sort()
    )
  })

  it('User not found fetch', async () => {
    const input = app.getByTestId('user-input')

    expect(app.getByTestId('error-modal').props.visible).toBeFalsy()

    api.get.mockRejectedValue({ message: 'Not found' })
    fireEvent(input, 'submitEditing', { nativeEvent: { text: '' } })

    await waitFor(() => expect(app.getByTestId('error-modal').props.visible).toBeTruthy())
  })

})