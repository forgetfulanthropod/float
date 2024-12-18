import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';
import 'mockpath.dart';

class Map extends StatefulWidget {
  const Map({Key? key}) : super(key: key);

  @override
  _MapState createState() => _MapState();
}

class _MapState extends State<Map> {
  late GoogleMapController _mapController;
  LatLng? _userLocation;
  Set<Polyline> _polylines = {};

  @override
  void initState() {
    super.initState();
    _getCurrentLocation();
  }

  Future<void> _getCurrentLocation() async {
    try {
      // Request location permissions
      LocationPermission permission = await Geolocator.requestPermission();
      
      if (permission == LocationPermission.denied) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Location permissions are denied'))
        );
        return;
      }

      // Get current position
      Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high
      );

      setState(() {
        _userLocation = LatLng(position.latitude, position.longitude);
        _createSpiralPolyline();
      });
    } catch (e) {
      print('Error getting location: $e');
    }
  }

  void _createSpiralPolyline() {
    if (_userLocation == null) return;

    setState(() {
      _polylines.clear();
      _polylines.add(
        Polyline(
          polylineId: PolylineId('spiral_polyline'),
          points: MockPath.generateSpiralCoordinates(center: _userLocation!),
          color: Colors.deepPurple.withOpacity(0.7),
          width: 5,
          startCap: Cap.roundCap,
          endCap: Cap.roundCap,
        )
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Spiral Polyline Map'),
      ),
      body: _userLocation == null
          ? Center(child: CircularProgressIndicator())
          : GoogleMap(
              onMapCreated: (controller) => _mapController = controller,
              initialCameraPosition: CameraPosition(
                target: _userLocation!,
                zoom: 13.0,
              ),
              polylines: _polylines,
              markers: {
                Marker(
                  markerId: MarkerId('user_location'),
                  position: _userLocation!,
                  icon: BitmapDescriptor.defaultMarkerWithHue(
                    BitmapDescriptor.hueRed
                  ),
                )
              },
            ),
      floatingActionButton: FloatingActionButton(
        onPressed: _getCurrentLocation,
        child: Icon(Icons.refresh),
      ),
    );
  }
}