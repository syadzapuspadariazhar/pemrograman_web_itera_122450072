#Buat file math_operations.py yang berisi:
#Fungsi untuk menghitung luas dan keliling bentuk geometri (minimal 3 bentuk: persegi, persegi panjang, lingkaran)
#Fungsi untuk konversi suhu (minimal 2 konversi: Celsius-Fahrenheit, Celsius-Kelvin)
#Minimal 1 variabel konstanta (misal: PI = 3.14159)

pi = 3.14159

# Fungsi menghitung luas dan keliling geometri
def luas_lingkaran(r):
  return pi * int(r) ** 2
def keliling_lingkaran(r):
  return 2 * pi * int(r)

def luas_segitiga(alas, tinggi):
  return 0.5 * int(alas) * int(tinggi)
def keliling_segitiga(a, b, c):
  return int(a) + int(b) + int(c)

def luas_persegi(sisi):
  return int(sisi) ** 2
def keliling_persegi(sisi):
  return int(sisi) * 4

def luas_persegi_panjang(panjang, lebar):
  return int(panjang) * int(lebar)
def keliling_persegi_panjang(panjang, lebar):
  return (2 * int(panjang)) + (2 * int(lebar))

# Fungsi mengkonversi suhu
def fahrenheit_ke_celcius(fahrenheit):
  return (fahrenheit - 32) * 5/9
def celcius_ke_fahrenheit(celcius):
  return (celcius * 9/5) + 32
def celsius_ke_kelvin(celsius):
  return celsius + 273.15
def kelvin_ke_celsius(kelvin):
  return kelvin - 273.15