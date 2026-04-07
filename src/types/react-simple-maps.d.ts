declare module 'react-simple-maps' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';

  interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    children?: ReactNode;
  }

  interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    children?: ReactNode;
    onMoveEnd?: (position: { coordinates: [number, number]; zoom: number }) => void;
  }

  interface GeographiesChildrenArgs {
    geographies: any[];
  }

  interface GeographiesProps {
    geography: string | object;
    children: (args: GeographiesChildrenArgs) => ReactNode;
  }

  interface GeographyStyleProps {
    default?: CSSProperties & { outline?: string };
    hover?: CSSProperties & { outline?: string };
    pressed?: CSSProperties & { outline?: string };
  }

  interface GeographyProps {
    geography: any;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: GeographyStyleProps;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }

  interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    style?: GeographyStyleProps;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
}
