#Mengimpor modul math_operations yang telah dibuat
#Menggunakan semua fungsi dari modul tersebut dengan berbagai nilai input
#Menampilkan hasil perhitungan dengan format yang rapi
#Menggunakan minimal 2 cara berbeda untuk mengimpor modul/fungsi

import math_operations as math

print("=== PERHITUNGAN GEOMETRI ===")
# Menghitung keliling dan luas lingkaran
print("Menghitung keliling dan luas lingkaran")
r = input("Masukkan jari-jari lingkaran: ")
keliling_lingkaran = math.keliling_lingkaran(r)
luas_lingkaran = math.luas_lingkaran(r)
print(f"Keliling lingkaran adalah {keliling_lingkaran}")
print(f"Luas lingkaran adalah {luas_lingkaran}\n")

# Menghitung keliling dan luas segitiga
print("Menghitung keliling dan luas segitiga")
keliling_segitiga = math.keliling_segitiga(3, 4, 5)
luas_segitiga = math.luas_segitiga(3, 4)
print(f"Keliling segitiga adalah {keliling_segitiga}")
print(f"Luas Segitiga adalah {luas_segitiga}\n")

# Menghitung keliling dan luas persegi
print("Menghitung keliling dan luas persegi")
sisi = input("Masukkan panjang sisi persegi: ")
print(f"Keliling persegi adalah {math.keliling_persegi(sisi)}")
print(f"Luas persegi adalah {math.luas_persegi(sisi)}\n")

# Menghitung keliling dan luas persegi panjang
print("Menghitung keliling dan luas persegi panjang")
panjang = 4
lebar = 3
print(f"Keliling persegi panjang adalah {math.keliling_persegi_panjang(panjang, lebar)}")
print(f"Luas persegi panjang adalah {math.luas_persegi_panjang(panjang, lebar)}\n")

# Menghitung suhu
print("=== KONVERSI SUHU ===")
celsius = 180
fahrenheit = math.celcius_ke_fahrenheit(celsius)
kelvin = math.celsius_ke_kelvin(celsius)
print(f"{celsius}°C ke Fahrenheit: {fahrenheit}°F")
print(f"{celsius}°C ke Kelvin: {kelvin}K")
print(f"{fahrenheit}°F ke Celsius: {math.fahrenheit_ke_celcius(fahrenheit)}°C")
print(f"{kelvin}K ke Celcius: {math.kelvin_ke_celsius(kelvin)}°C")
