#Buatlah program penghitung BMI (Body Mass Index) sederhana:
#Buatlah variabel untuk menyimpan berat badan (kg) dan tinggi badan (m)
#Hitung BMI dengan rumus: BMI = berat / (tinggi * tinggi)
#Gunakan percabangan if-elif-else untuk menampilkan kategori BMI:
#BMI < 18.5: Berat badan kurang
#18.5 <= BMI < 25: Berat badan normal
#25 <= BMI < 30: Berat badan berlebih
#BMI >= 30: Obesitas
#Print hasil perhitungan dan kategori BMI

# Mendefinisikan fungsi bmi_calculator dengan parameter tinggi dan berat
def bmi_calculator(tinggi, berat):
  tinggi = (tinggi) / 100 # Convert ke meter
  bmi = (berat) / (tinggi * tinggi) # Membuat rumus BMI Calculator
  print(f"Your BMI is {bmi}")

# Membuat if statement untuk menunjukkan kategori BMI
  if (bmi < 18.5): # Ketika bmi kurang dari 18,5 maka outputnya adalah "underweight"
    category = "underweight"
  if (18.5 <= bmi < 25): # Ketika bmi dari 18,5 sampai 24.9 maka outputnya adalah "normal weight"
    category = "normal weight"
  if (25 <= bmi < 30): # Ketika bmi dari 25 sampai 29.9 maka outputnya adalah "over weight"
    category = "over weight"
  if (bmi >= 30): # Ketika bmi lebih dari 30 maka outputnya adalah "obese"
    category = "obese"
  print(f"BMI Category: {category}")

# Membuat variabel tinggi untuk memasukkan tinggi badan
print("Tinggi kamu dalam cm:", end=' ')
tinggi = int(input())

# Membuat variabel berat untuk memasukkan berat badan
print("Berat kamu dalam Kg:", end=' ')
berat = int(input())

bmi_calculator(tinggi, berat)