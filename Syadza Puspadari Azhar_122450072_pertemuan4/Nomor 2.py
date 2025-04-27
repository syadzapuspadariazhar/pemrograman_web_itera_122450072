#Buatlah program pengelolaan data nilai mahasiswa:
#Buat list berisi minimal 5 dictionary data mahasiswa (nama, nim, nilai_uts, nilai_uas, nilai_tugas)
#Hitung nilai akhir setiap mahasiswa dengan rumus: (30% UTS + 40% UAS + 30% Tugas)
#Tentukan grade setiap mahasiswa berdasarkan nilai akhir:
#A: nilai akhir 80 atau lebih
#B: nilai akhir 70 sampai 79
#C: nilai akhir 60 sampai 69
#D: nilai akhir 50 sampai 59
#E: nilai akhir kurang dari 50
#Tampilkan data mahasiswa lengkap dengan nilai akhir dan grade dalam format tabel
#Tampilkan mahasiswa dengan nilai tertinggi dan terendah

# Data mahasiswa
mahasiswa = [
    {
        "nama": "Syadza Puspadari Azhar",
        "nim": "122450072",
        "nilai_uts": 85,
        "nilai_uas": 95,
        "nilai_tugas": 100
    },
    {
        "nama": "Febiya Jomi Pratiwi",
        "nim": "122450074",
        "nilai_uts": 78,
        "nilai_uas": 80,
        "nilai_tugas": 80
    },
    {
        "nama": "Jeremia Susanto",
        "nim": "122450022",
        "nilai_uts": 87,
        "nilai_uas": 90,
        "nilai_tugas": 95
    },
    {
        "nama": "Elia Meylani",
        "nim": "122450028",
        "nilai_uts": 75,
        "nilai_uas": 83,
        "nilai_tugas": 80
    },
    {
        "nama": "Rendra Eka Prayoga",
        "nim": "122450112",
        "nilai_uts": 65,
        "nilai_uas": 50,
        "nilai_tugas": 80
    }
]

# Menghitung nilai akhir
def nilai_akhir (nilai_uts, nilai_uas, nilai_tugas):
    NA = (0.30 * nilai_uts) + (0.40 * nilai_uas) + (0.30 * nilai_tugas)
    return NA

# Menentukan grade berdasarkan nilai akhir
def grade (NA):
    if NA >= 80:
        return 'A'
    elif 70 <= NA < 80:
        return 'B'
    elif 60 <= NA < 70:
        return 'C'
    elif 50 <= NA < 60:
        return 'D'
    else:
        return 'E'

for mhs in mahasiswa:
    uts = mhs["nilai_uts"]
    uas = mhs["nilai_uas"]
    tugas = mhs["nilai_tugas"]
    nilai_akhir_mahasiswa = nilai_akhir(uts, uas, tugas)
    grade_mahasiswa = grade(nilai_akhir_mahasiswa)
    mhs["nilai_akhir"] = nilai_akhir_mahasiswa
    mhs["grade"] = grade_mahasiswa

# Cetak data dalam bentuk tabel
print("{:<25} {:<12} {:<8} {:<8} {:<8} {:<13} {:<6}".format(
    "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"
))

print("-" * 90)
for mhs in mahasiswa:
    print("{:<25} {:<12} {:<8} {:<8} {:<8} {:<13} {:<6}".format(
        mhs['nama'], mhs['nim'], mhs['nilai_uts'], mhs['nilai_uas'],
        mhs['nilai_tugas'], mhs['nilai_akhir'], mhs['grade']
    ))

# Mahasiswa dengan nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x['nilai_akhir'])
terendah = min(mahasiswa, key=lambda x: x['nilai_akhir'])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"{tertinggi['nama']} (NIM: {tertinggi['nim']}) - Nilai Akhir: {tertinggi['nilai_akhir']} - Grade: {tertinggi['grade']}")

print("\nMahasiswa dengan nilai terendah:")
print(f"{terendah['nama']} (NIM: {terendah['nim']}) - Nilai Akhir: {terendah['nilai_akhir']} - Grade: {terendah['grade']}")