import React from 'react'
import App from '../App.tsx'
import { api } from '../src/adapters/Github'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

/*
This is an example of React Native testing.
It is very similar to regular React testing, but with some differences.
Tests are super important to make sure you app works as expected and 
to make sure the code is still working through the application updates.
*/

/*
Since you know how this application works, we will first overwrite
the api methods in order to provide fake data, which will make the test
more consistent than using an example user of the real world.
*/
jest.spyOn(api, 'get')

describe('App testing', () => {
  let app: any

  /** Before each test I want it to rerender the app to make sure
   * Previous modifications won't affect behaviour of my test
   */
  beforeEach(() => {
    app = render(<App />)
  })

  /** I am checking if it was rendered successfully by seeking for an
   * element with the prop testID with value app-container (App.tsx) */
  it('Rendered successfully', () => {
    expect(app.getByTestId('app-container')).toBeDefined()
  })

  /** This test I am providing fake data overwriting axios instance (api object)
   * get method with a resolved Promise and verifying if it rendered the two list
   * items correctly
   */
  it('Fetching repos', async () => {
    const input = app.getByTestId('user-input')
    const data = [
      { name: 'Test', description: 'TestD' },
      { name: 'Test1', description: 'TestD1' }
    ]

    api.get.mockResolvedValue({ data }) // Overwriting
    fireEvent(input, 'submitEditing', { nativeEvent: { text: 'test' } }) // Simulating user input

    await waitFor(() => expect(app.getAllByTestId('list-item')).toHaveLength(2)) // Waiting for items to be displayed

    const items = app.getAllByTestId('list-item')

    expect(data.sort()).toEqual(items.map((item: any) => ({
      name: item.props.title,
      description: item.props.description
    })).sort()
    )
  })

  /** This test I am overwriting the axios instance get method
   * with a rejected Promise, which will be translated in an error modal
   * for the user
   */
  it('User not found fetch', async () => {
    const input = app.getByTestId('user-input')

    expect(app.getByTestId('error-modal').props.visible).toBeFalsy()

    api.get.mockRejectedValue({ message: 'Not found' })
    fireEvent(input, 'submitEditing', { nativeEvent: { text: '' } })

    await waitFor(() => expect(app.getByTestId('error-modal').props.visible).toBeTruthy())
  })

})