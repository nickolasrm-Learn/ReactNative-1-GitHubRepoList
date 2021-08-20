import { waitFor } from '@testing-library/react-native'
import { api, getRepos } from '../../adapters/Github'

jest.spyOn(api, 'get')
api.get.mockImplementation((address: string) => {
  if (address.includes('test'))
    return Promise.resolve({ data: 'Got it' })
  else
    return Promise.reject({ message: 'Not found' })
})

test('Right get repos fetch', async () => {
  const fn = jest.fn()

  getRepos('test', fn, () => { })

  await waitFor(() => expect(fn).toBeCalled())
})

test('Bad get repos fetch', async () => {
  const fn = jest.fn()

  getRepos('wrong', () => { }, fn)

  await waitFor(() => expect(fn).toBeCalled())
})