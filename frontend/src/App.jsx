import { useState, useEffect } from 'react'

function App() {
  const [features, setFeatures] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetchFeatures()
  }, [])

  const fetchFeatures = async () => {
    const res = await fetch('http://localhost:5000/api/features')
    const data = await res.json()
    setFeatures(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:5000/api/features', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
    setTitle('')
    setDescription('')
    fetchFeatures() 
  }

  const handleUpvote = async (id) => {
    await fetch(`http://localhost:5000/api/features/${id}/upvote`, {
      method: 'POST'
    })
    fetchFeatures() 
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Product Feature Requests</h1>
        
        {/* Submit Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <input 
            type="text" 
            placeholder="Feature Title" 
            className="w-full mb-4 p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea 
            placeholder="Description..." 
            className="w-full mb-4 p-2 border rounded h-24"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit Request
          </button>
        </form>

        {/* Feature List */}
        <div className="space-y-4">
          {features.map(feature => (
            <div key={feature.id} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-4 border border-gray-100">
              <button 
                onClick={() => handleUpvote(feature.id)}
                className="flex flex-col items-center p-2 bg-gray-50 rounded hover:bg-gray-100"
              >
                <span className="text-xl">▲</span>
                <span className="font-bold">{feature.upvotes}</span>
              </button>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App