import { Map, Marker } from 'mapbox-gl'

const geojson = {
    features: [
        {
            geometry: {
                coordinates: [49.137864, 55.787923]
            },
            properties: {
                title: 'mushtari',
            }
        },
        {
            geometry: {
                coordinates: [49.109145, 55.819778]
            },
            properties: {
                title: 'absaliyamova',
            }
        }
    ]
};

function initMap() {
    const mapContainer = document.querySelector<HTMLElement>('.map__view')

    if (!mapContainer) return

    const map = new Map({
        container: mapContainer,
        center: [49.144067, 55.790033],
        zoom: 15,
        accessToken: 'pk.eyJ1Ijoic2V2YS1hYWNjZW50IiwiYSI6ImNsb2ZlNzR0NDByajUya3FwcmQ4bHdoZG8ifQ.2oZ5rpkSs2dKoP5a10lkcg',
        style: 'mapbox://styles/mapbox/light-v11',
    });

    for (const feature of geojson.features) {
        const elContainer = document.createElement('div');
        elContainer.className = 'marker-container';
        const el = document.createElement('div');
        el.className = 'marker';
        elContainer.appendChild(el);

        new Marker(elContainer).setLngLat(feature.geometry.coordinates as [number, number]).addTo(map);
    }
    
    const showOnMapBtn = document.querySelectorAll('.show-map') as NodeListOf<HTMLElement>;

    if (!showOnMapBtn) return
    showOnMapBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const contact = btn.closest('.contact') as HTMLElement;
            const coords = geojson.features
                .find(feature => contact.classList.contains(feature.properties?.title))?.geometry.coordinates;
            const mapContact = document.querySelector('.contact-block') as HTMLElement;

            map.setCenter(coords as [number, number])
            map.setZoom(15);

            const mapContactBody = mapContact.querySelector('.contact-body')
            const contactBody = contact.querySelector('.contact-body')

            if (!mapContactBody || !contactBody) return
            mapContactBody.innerHTML = contactBody.innerHTML
        })
    })
}

initMap();






