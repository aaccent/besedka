import { LngLatBounds, Map, Marker } from 'mapbox-gl'

void function() {
  const markerItems = document.querySelectorAll('.map-block__data-item')
  const coords = []

  markerItems.forEach(contact => {
    const lng = Number(contact.dataset.lng)
    const lat = Number(contact.dataset.lat)
    coords.push({ lng, lat })
    console.log(coords)
  })

  function initMarkers(map) {
    for (const coord of coords) {
      const elContainer = document.createElement('div')
      elContainer.className = 'marker-container'

      const el = document.createElement('div')
      el.className = 'marker'

      elContainer.appendChild(el)

      const marker = new Marker(elContainer).setLngLat(coord)

      marker.getElement().addEventListener('click', () => {
        map.setCenter(marker.getLngLat())
        map.setZoom(15)
      })

      marker.addTo(map)
    }
  }

  const mapContainer = document.querySelector('.map-block__map')

  if (!mapContainer) return

  const map = new Map({
    container: mapContainer,
    center: [ 49.093589, 55.826865 ],
    zoom: 15,
    accessToken: 'pk.eyJ1Ijoic2V2YS1hYWNjZW50IiwiYSI6ImNsb2ZlNzR0NDByajUya3FwcmQ4bHdoZG8ifQ.2oZ5rpkSs2dKoP5a10lkcg',
    dragRotate: false,
    cooperativeGestures: true,
    locale: {
      "ScrollZoomBlocker.CtrlMessage": "ctrl + scroll для увеличения масштаба карты",
      "ScrollZoomBlocker.CmdMessage" : "⌘ + scroll для увеличения масштаба карты",
      'TouchPanBlocker.Message': 'Используйте два пальца чтобы подвинуть карту',
      'NavigationControl.ZoomIn': 'Увеличить',
      'NavigationControl.ZoomOut': 'Уменьшить',
    },
  })

  const bounds = new LngLatBounds()
  coords.forEach(coord => bounds.extend(coord))
  map.fitBounds(bounds, { padding: 100 })

  map.on('render', () => initMarkers(map))
}()