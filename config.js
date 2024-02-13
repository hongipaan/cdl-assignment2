var config = {
    style: 'mapbox://styles/jobeepan/clsk1yfxr006d01qwa68vf2fm',
    accessToken: 'pk.eyJ1Ijoiam9iZWVwYW4iLCJhIjoiY2tuem9qMGltMDZtYzJvbnNyNTc3cjRvbCJ9.s9iMy72LmnzYVB1ci4QWGg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'SG SPORTS CENTERS',
    subtitle: 'PLANNING A TOUR AND TRIP TO SINGAPORE SPORTS CENTERS FOR AN EVENT?',
    byline: 'By XIONGJIE PAN, February 12, 2024.',
    footer: 'Source: <a href="https://beta.data.gov.sg/" target="_blank">https://beta.data.gov.sg/</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'ActiveSG Centers in Sinapore ',
            image: 'images/legend1.jpg',
            description: 'There are 29 sports centres in Singapore, with MRT stations within a 500-meter radius or at the edges of the centres, providing good pedestrian accessibility and convenience.',
            location: {
                center: [103.75109, 1.33237],
                zoom: 10.73,
                pitch: 4.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'choropleth-fill',
                     opacity: 0.9,
                },
                {
                    layer: '3D-extrusions',
                    opacity: 0,
                },
                {
                    layer: 'data-driven-lines',
                    opacity: 0.5,
                    duration: 2000
                },
                {
                    layer: 'mrt-station-2-a28ok7',
                    opacity: 0.6,
                    duration: 2000
                },
                {
                    layer: 'sg-sports-center-buffer-cpborn',
                    opacity: 0.5,
                    duration: 2000
                },
                
            ],
            onChapterExit: [
                {
                    layer: '3D-extrusions',
                    opacity: 0.8,
                },
                {
                    layer: 'sg-sports-center-buffer-cpborn',
                    opacity: 0,
                },
                {
                    layer: 'choropleth-fill',
                    opacity: 0.1,
                },  
                {
                    layer: 'data-driven-lines',
                    opacity: 0,
                },
                {
                    layer: 'mrt-station-2-a28ok7',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Population Density Distribution in Singapore',
            image: 'images/legend2.jpg',
            description: 'The population distribution map for this subzone shows that sports centers are concentrated in subzone with high population densities and that the density and size of sports centers are related to population density.',
            location: {
                center: [103.74900, 1.31189],
                zoom: 10.58,
                pitch: 56.48,
                bearing: -35.99,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: '3D-extrusions',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: '3D-extrusions',
                    opacity: 1,
                },
                {
                    layer: 'data-driven-lines',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
                {
                    layer: '3D-extrusions',
                    opacity: 0,
                },
                {
                    layer: 'choropleth-fill',
                    opacity: 0.6,
                },
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Our Tempines Hub',
            image: 'https://www.floornature.com/media/photos/38/13408/01_oth_01_full.jpg',
            description: 'Our Tampines Hub (OTH) is the largest integrated community and lifestyle hub in Singapore, bringing together multiple agencies and offering a comprehensive range of services and facilities.(1 Tampines Walk, Singapore 528523)',
            location: {
                center: [103.94032, 1.35238],
                zoom: 17.41,
                pitch: 44.50,
                bearing: -39.19
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'building-extrusion',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: '3D-extrusions',
                    opacity: 0,
                },
                {
                    layer: 'sg-sports-center-buffer-cpborn',
                    opacity: 0,
                },
                {
                    layer: 'choropleth-fill',
                    opacity: 0,
                },   
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Queenstown Sports Complex',
            image: 'https://www.roots.gov.sg/-/media/Roots/Images/landmarks/my-queenstown-heritage-trail/queenstown-sports-complex.ashx',
            description: 'The Queenstown Sports Complex is Singapore’s first neighbourhood sports complex. It was officially opened on 15 August 1970 by Lim Kim San, then Minister for Education, to provide more recreational facilities for residents in Queenstown.(473/473A Stirling Road, Singapore 148948)',
            location: {
                center: [103.80190, 1.29581],
                zoom: 17.23,
                pitch: 32.61,
                bearing: -8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1,
                    duration: 500
                },
            ],
            onChapterExit: []
        }
    ]
};
