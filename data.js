var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.19103139227340904,
        "pitch": 0.06778478643848374,
        "fov": 1.42490816401212
      },
      "linkHotspots": [
        {
          "yaw": -0.937109092786228,
          "pitch": 0.029665459106322345,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6787849061399811,
          "pitch": 0.024591299196753624,
          "title": "Engineering Sign",
          "text": "For those who get lost easily: here's a big sign to remind you where you are!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.4131614644747952,
        "pitch": -0.2170740052641129,
        "fov": 1.42490816401212
      },
      "linkHotspots": [
        {
          "yaw": 0.1580723561357864,
          "pitch": 0.01206214156135843,
          "rotation": 0,
          "target": "2-engineering-atrium"
        },
        {
          "yaw": 1.392651865331361,
          "pitch": 0.1214604597403941,
          "rotation": 5.497787143782138,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3207728808805541,
          "pitch": 0.020728685215200215,
          "title": "Cool Statue",
          "text": "Nice looking statue! I wonder if it was <i>engineered</i> in a specific way..."
        }
      ]
    },
    {
      "id": "2-engineering-atrium",
      "name": "Engineering Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.14017068738916727,
        "pitch": -0.03545538886138999,
        "fov": 1.42490816401212
      },
      "linkHotspots": [
        {
          "yaw": -2.6140592073946216,
          "pitch": 0.19499402629077522,
          "rotation": 5.497787143782138,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7049047934366932,
          "pitch": 0.049408848611705025,
          "title": "Engineers in their natural habitat",
          "text": "Shh... these engineers are not yet fully grown. Don't spook them away, and we'll get to admire this wonderful species!"
        }
      ]
    }
  ],
  "name": "EngineeringTour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
