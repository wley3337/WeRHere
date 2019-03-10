## Food Route information and APIs

* Redux actions are under FoodActions.js



#### Joyful Food Program API

* URL:
- 'https://opendata.arcgis.com/datasets/693e023ace4f46818edbf0aa7d6a60d3_56.geojson'

* Data Structure:
 ```
[{
    geometry:
        coordinates: 
            0: -76.99227109512185
            1: 38.8343356602558
        type: "Point"
   
    properties:
        ADDRESS: "908 Wahler Pl SE"
        LATITUDE: 38.83432822
        LONGITUDE: -76.99226882
        MAR_ID: 294502
        MATCHTYPE: "Exact"
        OBJECTID: 1
        SCHOOL: "Achievement Prep"
        XCOORD: 400671.25
        YCOORD: 129615.24
}]
```
#### Healthy Corner Stores API

* URL:
- 'https://opendata.arcgis.com/datasets/9a2df4a51ce646819d0dedfecb7f466a_57.geojson'

* Data Structure:
 ```
[{
geometry:
    coordinates: (2) 
        [-7.6268777320426535, 0.6783575312025689]
    type: "Point"
properties:
    ADDRESS: "1223 Good Hope Rd SE"
    LATITUDE: 38.86702387
    LONGITUDE: -76.98790491
    MAR_ID: 71043
    MATCHTYPE: "Exact"
    OBJECTID: 1
    STORE: "24 Express"
    XCOORD: 401049.66000000003
    YCOORD: 133244.73
    type: "Feature"
}]
```

#### WIC Program Stores API

* URL:
- 'https://opendata.arcgis.com/datasets/cd60551c99f0421da412f79d2c7fe52b_55.geojson'

* Data Structure:
 ```
[{
    geometry:
        coordinates: 
            [ -76.98655151955585,
            38.8835490628568]
        type: "Point"

    properties:
        ADDRESS: "415 14th St SE"
        LATITUDE: 38.88354161
        LONGITUDE: -76.98654924
        MAR_ID: 26239
        MATCHTYPE: "Exact"
        OBJECTID: 1
        ORGANIZATION: "Safeway"
        TYPE: "Authorized Store"
        XCOORD: 401167.04000000004
        YCOORD: 135078.34
}]
```