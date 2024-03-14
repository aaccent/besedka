import { Map, Marker, LngLatBounds } from 'mapbox-gl'

const contacts = document.querySelectorAll('.contact') as NodeListOf<HTMLElement>;
const mapAddressBody = document.querySelector('.contact-block')?.querySelector('.contact-body') as HTMLElement;
const coords = [] as { address: string, lng: number, lat: number }[]

contacts.forEach(contact => {
    const lng = Number(contact.dataset.lng);
    const lat = Number(contact.dataset.lat);
    const address = contact.dataset.address as string;
    coords.push({ address, lng, lat });
})

function initMarkers(map: Map) {
    for (const coord of coords) {
        const elContainer = document.createElement('div');
        elContainer.className = 'marker-container';

        const el = document.createElement('div');
        el.className = 'marker';

        elContainer.appendChild(el);

        const marker = new Marker(elContainer).setLngLat(coord);
        marker.addTo(map);

        marker.getElement().addEventListener('click', () => {
            const currentAddress = coords
                .find(el => el.lng === marker.getLngLat().lng && el.lat === marker.getLngLat().lat)?.address;
                
            const currentAddressBlockBody = Array.from(contacts)
                .find(el => el.dataset.address === currentAddress)?.querySelector('.contact-body');

            if (!mapAddressBody || !currentAddressBlockBody) return
            mapAddressBody.innerHTML = currentAddressBlockBody.innerHTML;
            map.setCenter(marker.getLngLat())
            map.setZoom(15);
        })
    }
}

function initMap() {
    const mapContainer = document.querySelector<HTMLElement>('.map__view')

    if (!mapContainer) return
    const map = new Map({
        container: mapContainer,
        center: [49.093589, 55.826865],
        zoom: 15,
        accessToken: 'pk.eyJ1Ijoic2V2YS1hYWNjZW50IiwiYSI6ImNsb2ZlNzR0NDByajUya3FwcmQ4bHdoZG8ifQ.2oZ5rpkSs2dKoP5a10lkcg',
        style: 'mapbox://styles/mapbox/light-v11',
        dragRotate: false,
        cooperativeGestures: true,
        locale: {
            "ScrollZoomBlocker.CtrlMessage": "ctrl + scroll для увеличения масштаба карты",
            "ScrollZoomBlocker.CmdMessage" : "⌘ + scroll для увеличения масштаба карты",
            'TouchPanBlocker.Message': 'Используйте два пальца чтобы подвинуть карту',
            'NavigationControl.ZoomIn': 'Увеличить',
            'NavigationControl.ZoomOut': 'Уменьшить',
        },
    });

    const bounds = new LngLatBounds();
    coords.forEach(coord => bounds.extend(coord));
    map.fitBounds(bounds, { padding: 100 });

    initMarkers(map);

    const showOnMapBtn = document.querySelectorAll('.show-map') as NodeListOf<HTMLElement>;
    if (!showOnMapBtn) return
    showOnMapBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const contact = btn.closest('.contact') as HTMLElement;

            const lng = Number(contact.dataset.lng);
            const lat = Number(contact.dataset.lat);

            map.setCenter([lng, lat]);
            map.setZoom(15);

            const contactBody = contact.querySelector('.contact-body')

            if (!mapAddressBody || !contactBody) return
            mapAddressBody.innerHTML = contactBody.innerHTML
        })
    })
}

initMap();






