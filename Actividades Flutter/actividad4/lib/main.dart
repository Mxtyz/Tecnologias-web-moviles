import 'package:actividad4/screens/main_screens.dart';
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      debugShowCheckedModeBanner:false,
      theme: ThemeData(
        useMaterial3: true,
      ),
      home:  const MainScreen(),
    );
  }
}