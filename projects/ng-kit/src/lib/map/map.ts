import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { loadModules } from 'esri-loader';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

import { GEO_PIN } from './map-svg-paths/svg-paths';

export class Region {
  id: string | number;
  name: string;
  lat: number;
  lon: number;
  owner: string;
  symbol: ArcgisSvgSymbolSettings;

  constructor() { }
}

export class ArcgisSvgSymbolSettings {
  setPath: string; // must be an SVG path
  setStyle: 'circle' | 'square' | 'cross' | 'x' | 'kite';
  setColor: { r: number, g: number, b: number, a: number, }; // must be a css rgb/rgba value
  setSize?: number; // must be a number (will be calculated in 'px' by ArcGIS). 16px is default.
}

export class GeoCenterSettings {
  latitude: number;
  longitude: number;
  zoom?: number;
  addPin?: boolean;
}

@Component({
  selector: 'ngk-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgkMapComponent implements OnInit, OnDestroy {
  private options = {
    url: 'https://js.arcgis.com/3.27/'
  };

  toggleId: string;

  private map: any;
  private mapContainer: HTMLElement;
  private addPin: Function;
  private addLine: Function;
  private centerAndZoom: Function;
  private updateMap: Function;
  private addSatellite: Function;
  private addGrayMapToggle: Function;
  private mp: any;
  private toggle: any;

  private mapEnabled$ = new BehaviorSubject<boolean>(false);
  private locations$ = new BehaviorSubject<Region[]>([]);
  private showLayers$ = new BehaviorSubject<boolean>(true);
  private center$ = new BehaviorSubject<GeoCenterSettings>(null);
  private subs: Subscription[] = [];

  constructor() { }

  @Input('center')
  set center(center) {
    this.center$.next(center);
  }

  @Input('locations')
  set locations(locations: Region[]) {
    this.locations$.next(locations);
  }

  @Input('mapEnabled')
  set mapEnabled(mapEnabled: boolean) {
    this.mapEnabled$.next(mapEnabled);
  }

  @Input('showLayers')
  set showLayers(showLayers: boolean) {
    this.showLayers$.next(showLayers);
  }

  @Input() automatic = false;

  @Input() connectDots = false;

  @Input() satelliteEnabled = false;

  @Input() grayMapEnabled = false;

  private cAndZ(value) {
    new Observable(ob => ob.next())
      .pipe(delay(500))
      .subscribe(() => {
        if (this.centerAndZoom) {
          this.centerAndZoom(value[0].lat, value[0].lon, 14);
        }
      });
  }

  private createSymbol(symbol, symbolSettings: ArcgisSvgSymbolSettings) {
    const keys = Object.keys(symbolSettings);

    keys.forEach(key => {
      symbol[key](symbolSettings[key]);
    });
  }

  ngOnInit() {
    this.toggleId = this.generateId();
    this.createMap();
  }

  generateId = (): string => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  createMap() {
    loadModules(
      [
        'esri/map',
        'esri/geometry/Extent',
        'esri/layers/FeatureLayer',
        'esri/layers/GraphicsLayer',
        'esri/layers/ArcGISDynamicMapServiceLayer',
        'esri/graphic',
        'esri/Color',
        'esri/geometry/Point',
        'esri/geometry/Circle',
        'esri/geometry/Polyline',
        'esri/symbols/SimpleMarkerSymbol',
        'esri/symbols/SimpleLineSymbol',
        'esri/symbols/SimpleFillSymbol',
        'esri/symbols/PictureMarkerSymbol',
        'esri/symbols/CartographicLineSymbol',
        'esri/symbols/Font',
        'esri/symbols/TextSymbol',
        'esri/geometry/Multipoint',
        'esri/SpatialReference',
        'esri/layers/ImageParameters',
        'esri/dijit/BasemapToggle',
      ],
      this.options
    )
      .then(
        ([
          Map,
          Extent,
          FeatureLayer,
          GraphicsLayer,
          ArcGISDynamicMapServiceLayer,
          Graphic,
          Color,
          Point,
          Circle,
          Polyline,
          SimpleMarkerSymbol,
          SimpleLineSymbol,
          SimpleFillSymbol,
          PictureMarkerSymbol,
          CartographicLineSymbol,
          Font,
          TextSymbol,
          Multipoint,
          SpatialReference,
          ImageParameters,
          BasemapToggle,
        ]) => {
          const initExtent = new Extent({
            xmin: -17144000,
            ymin: 842000,
            xmax: -4621000,
            ymax: 8405000,
            spatialReference: {
              wkid: 102100
            }
          });

          // center: [-118, 34.5],
          this.map = new Map('mapDiv', {
            basemap: 'topo', // dark-gray
            extent: initExtent,
            fitExtent: this.automatic,
            logo: false,
            fadeOnZoom: true,
            force3DTransforms: true,
            navigationMode: 'css-transforms',
            optimizePanAnimation: true
          });

          this.mapContainer = this.map.container.firstElementChild.firstElementChild;

          const imageParameters = new ImageParameters();
          imageParameters.format = 'png32';

          const tombstoneLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_HFC_DATABLOCK/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 10000
            }
          );

          const cableLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_RF_CABLE/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 20000
            }
          );

          const activeLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_RF_ACTIVE/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 20000
            }
          );

          const tapLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_RF_TAP/MapServer',
            {
              useMapImage: false,
              imageFormat: 'png32',
              maxScale: 0,
              minScale: 20000
            }
          );

          const passiveLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_RF_PASSIVE/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 20000
            }
          );

          const strandLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_STRAND/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 50000
            }
          );

          const supportLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_SUPPORT_STRUCTURE/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 50000
            }
          );

          const powersupplyLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_RF_POWERSUPPLY/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 50000
            }
          );

          const nodeSiteLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_NODE_SITE/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 20000
            }
          );

          const nodeBLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_Boundary/CC_SNET_NODE_BNDY/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 2500000
            }
          );

          const fiberLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_FIBER_CABLE/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 2500000
            }
          );

          const fiberSpliceLayer = new ArcGISDynamicMapServiceLayer(
            'https://gis-b2-3.cable.comcast.com/arcgis/rest/services/CC_SNET_HFCNetwork/CC_SNET_FIBER_SPLICE/MapServer',
            {
              useMapImage: false,
              imageParameters,
              maxScale: 0,
              minScale: 2500000
            }
          );

          const graphicsLayer = new GraphicsLayer();

          const listOfLayer = [
            cableLayer,
            activeLayer,
            passiveLayer,
            tapLayer,
            powersupplyLayer,
            nodeSiteLayer,
            strandLayer,
            supportLayer,
            fiberLayer,
            fiberSpliceLayer,
            nodeBLayer,
            tombstoneLayer
          ];

          this.updateMap = () => {
            if (this.map && this.mp) {
              const extent = this.mp.getExtent();
              if (extent) {
                this.map.setExtent(extent, true);
              }
            }
          };

          this.addSatellite = () => {
            if (!this.grayMapEnabled) {
              this.toggle = new BasemapToggle({
                map: this.map,
                basemap: 'satellite',
              }, this.toggleId);
              this.toggle.startup();
            }
          }

          this.addGrayMapToggle = () => {
            if (!this.satelliteEnabled) {
              this.toggle = new BasemapToggle({
                map: this.map,
                basemap: 'gray-vector',
                layers: [],
              }, this.toggleId);
              this.toggle.startup();
            }
          }

          this.map.addLayer(graphicsLayer);

          this.subs.push(
            this.showLayers$.subscribe(showLayers => {
              if (showLayers) {
                this.map.addLayers(listOfLayer);
              } else {
                listOfLayer.forEach(layer => {
                  // test to ensure only listOfLayer added layers are removed.
                  if (layer.url) {
                    this.map.removeLayer(layer);
                  }
                });
              }
            })
          );

          if (this.grayMapEnabled) {
            this.map.on('basemap-change', (data) => {
              if (data.current.basemapName === 'gray-vector') {
                listOfLayer.forEach(layer => {
                  if (layer.url) {
                    this.map.removeLayer(layer);
                  }
                });
              } else {
                this.map.addLayers(listOfLayer);
              }
            });
          }

          this.addPin = (region: Region) => {
            const line = new SimpleLineSymbol().setWidth(0.75).setStyle(SimpleLineSymbol.STYLE_NULL);
            const pinSymbol = new SimpleMarkerSymbol().setOutline(line);

            if (region.symbol) {
              region.symbol.setColor = new Color(region.symbol.setColor);
              this.createSymbol(pinSymbol, region.symbol);
            } else {
              pinSymbol.setColor(new Color([255, 30, 30, 1])).setPath(GEO_PIN).setSize(40);
            }
            pinSymbol.setStyle(SimpleMarkerSymbol.STYLE_PATH);

            if (!region.lon && !region.lat) {
              return;
            }
            const pt = new Point(region.lon, region.lat);
            graphicsLayer.add(new Graphic(pt, pinSymbol));
          };

          this.addLine = (region1: Region, region2: Region) => {
            const line = {
              geometry: {
                paths: [
                  [
                    [region1.lon, region1.lat],
                    [region2.lon, region2.lat]
                  ]
                ],
              },
              symbol: {
                color: [0, 0, 0, 128],
                width: 1,
                type: 'esriSLS',
                style: 'esriSLSDash'
              }
            };
            const graphic = new Graphic(line);
            graphicsLayer.add(graphic);
          };

          this.subs.push(
            this.locations$.subscribe(locations => {
              this.mp = new Multipoint({ points: locations.filter(dGML => dGML.lon && dGML.lat).map(dGML => [dGML.lon, dGML.lat]) });
              graphicsLayer.clear();
              locations.forEach((region: Region, idx: number, arr: Region[]) => {
                if (this.addPin) {
                  this.addPin(region);
                }
                if (this.connectDots && this.addLine && idx !== 0) {
                  this.addLine(arr[idx - 1], arr[idx]);
                }
              });
              if (this.updateMap) {
                this.updateMap();
              }
              if (this.satelliteEnabled) {
                this.addSatellite();
              }
              if (this.grayMapEnabled) {
                this.addGrayMapToggle();
              }
            })
          );

          this.subs.push(
            this.center$.pipe(
              filter(user => user !== null),
            ).subscribe((center: GeoCenterSettings) => {
              if (!center) {
                return;
              }
              if (!center.zoom) {
                center.zoom = 18;
              }
              const pt = new Point(center.longitude, center.latitude);
              if (center.addPin) {
                this.addPin({ lat: center.latitude, lon: center.longitude });
              }
              this.map.centerAndZoom(pt, center.zoom);
            })
          );

          this.subs.push(
            this.mapEnabled$.subscribe(mapEnabled => {
              if (mapEnabled) {
                this.map.enableMapNavigation();
                this.mapContainer.style.pointerEvents = 'all';
              } else {
                this.map.disableMapNavigation();
                this.mapContainer.style.pointerEvents = 'none';
              }
            })
          );
        }
      )
      .catch(err => {
        // handle any script or module loading errors
      });
  }

  loadDesignLayers() { }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }
}