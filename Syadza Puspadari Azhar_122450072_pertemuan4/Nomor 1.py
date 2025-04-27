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
  bmi = (berat) / (tinggi * tinggi) # Membuat rumus BMI Calculator
  print(f"Your BMI is {bmi}")

# Membuat if statement untuk menunjukkan kategori BMI
  if (bmi < 18.5):
    category = "Berat badan kurang"
  elif (18.5 <= bmi < 25):
    category = "Berat badan normal"
  elif (25 <= bmi < 30):=
    category = "Berat badan berlebih"
  else (bmi >= 30):
    category = "Obesitas"
  print(f"BMI Category: {category}")

# Membuat variabel tinggi untuk memasukkan tinggi badan
print("Tinggi kamu dalam m:", end=' ')
tinggi = int(input())

# Membuat variabel berat untuk memasukkan berat badan
print("Berat kamu dalam Kg:", end=' ')
berat = int(input())

bmi_calculator(tinggi, berat)
