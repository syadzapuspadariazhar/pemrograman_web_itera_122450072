from abc import ABC, abstractmethod

# Abstract class sebagai dasar untuk semua item perpustakaan
class LibraryItem(ABC):
    def __init__(self, id, title):
        self._id = id                 # Protected: hanya bisa diakses oleh class dan subclass
        self._title = title
        self.__is_available = True   # Private: hanya dapat diakses melalui method getter/setter

    @property
    def is_available(self):
        return self.__is_available

    @is_available.setter
    def is_available(self, value):
        self.__is_available = value

    def get_id(self):
        return self._id

    def get_title(self):
        return self._title

    def check_out(self):
        if self.__is_available:
            self.__is_available = False
            print(f"{self._title} telah dipinjam.")
        else:
            print(f"{self._title} tidak tersedia.")

    def return_item(self):
        self.__is_available = True
        print(f"{self._title} telah dikembalikan.")

    @abstractmethod
    def display_info(self):
        pass  # Harus diimplementasi di subclass


# Subclass: Book
class Book(LibraryItem):
    def __init__(self, id, title, author):
        super().__init__(id, title)
        self._author = author

    def display_info(self):
        status = "Tersedia" if self.is_available else "Dipinjam"
        print(f"[Book] ID: {self._id}, Judul: {self._title}, Penulis: {self._author}, Status: {status}")


# Subclass: Magazine
class Magazine(LibraryItem):
    def __init__(self, id, title, issue_number):
        super().__init__(id, title)
        self._issue_number = issue_number

    def display_info(self):
        status = "Tersedia" if self.is_available else "Dipinjam"
        print(f"[Magazine] ID: {self._id}, Judul: {self._title}, Edisi: {self._issue_number}, Status: {status}")


# Kelas untuk mengelola koleksi item perpustakaan
class Library:
    def __init__(self):
        self._collection = []

    def add_item(self, item: LibraryItem):
        self._collection.append(item)
        print(f"Item '{item.get_title()}' berhasil ditambahkan ke perpustakaan.")

    def display_all_items(self):
        print("\n=== Daftar Item di Perpustakaan ===")
        for item in self._collection:
            item.display_info()

    def search_by_title(self, title):
        print(f"\n🔍 Hasil pencarian untuk judul: '{title}'")
        found = False
        for item in self._collection:
            if title.lower() in item.get_title().lower():
                item.display_info()
                found = True
        if not found:
            print("Tidak ditemukan item dengan judul tersebut.")

    def search_by_id(self, id):
        print(f"\n🔍 Mencari item dengan ID: '{id}'")
        for item in self._collection:
            if item.get_id() == id:
                item.display_info()
                return
        print("Item dengan ID tersebut tidak ditemukan.")


# Contoh penggunaan
if __name__ == "__main__":
    # Buat instance Library
    library = Library()

    # Tambahkan buku dan majalah
    book1 = Book("B001", "Python OOP", "Andi Programmer")
    book2 = Book("B002", "Algoritma Dasar", "Dewi Coder")
    mag1 = Magazine("M001", "Tech Today", "Edisi 12")

    library.add_item(book1)
    library.add_item(book2)
    library.add_item(mag1)

    # Tampilkan semua item
    library.display_all_items()

    # Cari berdasarkan judul
    library.search_by_title("python")

    # Cari berdasarkan ID
    library.search_by_id("M001")

    # Simulasi pinjam dan kembalikan item
    book1.check_out()
    book1.check_out()
    book1.return_item()
    library.display_all_items()
