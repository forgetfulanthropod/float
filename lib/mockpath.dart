import 'dart:math' as math;
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MockPath {
  // Convert miles to latitude/longitude degrees
  static double milesToDegrees(double miles) {
    // Approximate conversion (1 degree of latitude is ~69 miles)
    return miles / 69.0;
  }

  // Generate spiral coordinates from a center point
  static List<LatLng> generateSpiralCoordinates({
    required LatLng center, 
    double maxRadius = 4.0, 
    int totalPoints = 200, 
    double spiralTurns = 3.0
  }) {
    List<LatLng> spiralPoints = [];

    for (int i = 0; i < totalPoints; i++) {
      // Calculate spiral parameters
      double progress = i / (totalPoints - 1);
      double radius = progress * maxRadius;
      double angle = progress * spiralTurns * 2 * math.pi;

      // Convert polar to Cartesian coordinates
      double latOffset = milesToDegrees(radius * math.cos(angle));
      double lonOffset = milesToDegrees(radius * math.sin(angle) / 
        math.cos(center.latitude * math.pi / 180));

      // Create new point by offsetting from center location
      LatLng point = LatLng(
        center.latitude + latOffset,
        center.longitude + lonOffset
      );

      spiralPoints.add(point);
    }

    return spiralPoints;
  }
}