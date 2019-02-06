## Health Route information and APIs

* Redux actions are under HealthActions.js


### Under Youth Mental Health Services:

#### Childrens Mental Health API


* URL:
- 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/31/query?where=1%3D1&outFields=*&outSR=4326&f=json'


* Data Structure:
    (all X and x are integers and keys must be accessed in all caps 'NAME' not 'name')
    - { 

        OBJECTID(pin): 1

        ADDRESS_ID(pin): XXXXXX

        CITY(pin): "WASHINGTON"

        STATE(pin): "DC"

        NAME(pin): "Name of Institution"

        ADDRESS(pin): "XXXX Pennsylvania Ave., SE"

        XCOORD(pin): "XXXXXX.xxxxxxxxx"

        YCOORD(pin): "XXXXXX.xxxxxxxxx"

        ZIP(pin): "20020"
        
        }