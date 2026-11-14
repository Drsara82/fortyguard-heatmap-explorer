
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/heatmap_result.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load data')
        return response.json()
      })
      .then((json) => {
        const result = json.data?.result

        if (!result?.map_data?.features) {
          throw new Error('Unexpected API response format')
        }

        setData(result)
      })
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <p>Error: {error}</p>
  if (!data) return <p>Loading temperature data...</p>

  const stats = data.stats_data?.temperature_stats
  const features = data.map_data

  const temperatureRanges = [
    { label: 'Below 32°C', color: '#4575b4' },
    { label: '32–32.3°C', color: '#91bfdb' },
    { label: '32.3–32.7°C', color: '#fee08b' },
    { label: '32.7–33°C', color: '#fc8d59' },
    { label: '33°C and above', color: '#d73027' },
  ]

  const getColor = (temperature) => {
    if (temperature >= 33) return '#d73027'
    if (temperature >= 32.7) return '#fc8d59'
    if (temperature >= 32.3) return '#fee08b'
    if (temperature >= 32) return '#91bfdb'
    return '#4575b4'
  }

  return (
    <div className="dashboard">
      <h1>FortyGuard Heatmap Explorer</h1>

      <p>
        Interactive temperature visualization using FortyGuard API data
      </p>

      <div className="stats">
        <div>
          Minimum: {stats?.minimum?.toFixed(2)} °C
        </div>

        <div>
          Average: {stats?.mean?.toFixed(2)} °C
        </div>

        <div>
          Maximum: {stats?.maximum?.toFixed(2)} °C
        </div>
      </div>

      <div className="temperature-legend">
        <h3>Temperature Legend</h3>

        <div className="legend-items">
          {temperatureRanges.map((range) => (
            <div className="legend-item" key={range.label}>
              <span
                className="legend-color"
                style={{ backgroundColor: range.color }}
              />
              <span>{range.label}</span>
            </div>
          ))}
        </div>
      </div>

      <MapContainer
        center={[40.7128, -74.006]}
        zoom={15}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GeoJSON
          data={features}
          style={(feature) => ({
            color: '#ffffff',
            weight: 0.5,
            fillColor: getColor(
              feature.properties.average_temperature
            ),
            fillOpacity: 0.7,
          })}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(
              `Temperature: ${feature.properties.average_temperature.toFixed(2)} °C`
            )
          }}
        />
      </MapContainer>
    </div>
  )
}

export default App
