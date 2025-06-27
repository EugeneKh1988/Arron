'use client';

import { PlaceMapProps } from '@/components/PlaceMap';
import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import("@/components/PlaceMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function MapCaller(props: PlaceMapProps) {
  return <LazyMap {...props} />;
}

export default MapCaller;