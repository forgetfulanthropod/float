import 'package:flutter/material.dart';
import 'map.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Tracers',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Ride \'n Chat'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  double _currentSliderValue = 0.0; // Slider value from 0 to 180 minutes

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Stack(
        children: <Widget>[
          Map(),
          // Slider at the bottom
          Positioned(
            bottom: 20, // Position 20 pixels from the bottom
            left: 20, // 20 pixels from the left
            right: 20, // 20 pixels from the right
            child: Row(
              children: <Widget>[
                Expanded(
                  child: Slider(
                    value: _currentSliderValue,
                    min: 0,
                    max: 180, // Maximum 3 hours in minutes
                    divisions: 36, // For each 5 minutes
                    label: '${_currentSliderValue.toInt()} min',
                    onChanged: (double value) {
                      setState(() {
                        _currentSliderValue = value;
                      });
                    },
                  ),
                ),
                Container(
                  width: 50,
                  child: Text('${_currentSliderValue.toInt()~/60} hrs', // Convert minutes to hours
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Example functionality, like updating map or other interaction
        },
        tooltip: 'Update Map',
        child: const Icon(Icons.update),
      ),
    );
  }
}