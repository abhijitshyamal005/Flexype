import { useState } from 'react'
import axios from 'axios'

const AlertForm = () => {
  const [token, setToken] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(
        '/api/submit',
        {},
        {
          headers: { Authorization: token }
        }
      )
      setResponse(res.data.message)
    } catch (err) {
      setResponse(err.response?.data?.message || 'An error occurred')
    }
  }

  return (
    <div className='max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white'>
      <h2 className='text-xl font-bold mb-4'>Submit Request</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='token' className='block text-gray-700 mb-2'>
          Authorization Token:
        </label>
        <input
          type='text'
          id='token'
          className='w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
          value={token}
          onChange={e => setToken(e.target.value)}
        />
        <button
          type='submit'
          className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Submit
        </button>
      </form>
      {response && (
        <p className='mt-4 text-gray-800 border-t pt-4'>{response}</p>
      )}
    </div>
  )
}

export default AlertForm
