// Kelas untuk Mata Kuliah
class Course {
    constructor(id, name, code = '', lecturer = '') {
        this.id = id;
        this.name = name;
        this.code = code;
        this.lecturer = lecturer;
        this.notes = [];
    }

    addNote(note) {
        this.notes.push(note);
    }

    deleteNote(noteId) {
        this.notes = this.notes.filter(note => note.id !== noteId);
    }

    updateNote(updatedNote) {
        const index = this.notes.findIndex(note => note.id === updatedNote.id);
        if (index !== -1) {
            this.notes[index] = updatedNote;
        }
    }
}

// Kelas untuk Catatan
class Note {
    constructor(id, courseId, title, content, date = new Date()) {
        this.id = id;
        this.courseId = courseId;
        this.title = title;
        this.content = content;
        this.date = new Date(date);
    }
}

// Aplikasi Utama
class CollegeNotesApp {
    constructor() {
        this.courses = [];
        this.selectedCourseId = null;
        this.initElements();
        this.initEventListeners();
        this.loadData();
        this.updateDate();
        this.renderCourses();
    }

    generateId = () => 'id-' + Date.now();

    initElements() {
        this.el = {
            courseList: document.getElementById('courseList'),
            notesContainer: document.getElementById('notesContainer'),
            selectedCourseTitle: document.getElementById('selectedCourseTitle'),
            addCourseBtn: document.getElementById('addCourseBtn'),
            addNoteBtn: document.getElementById('addNoteBtn'),
            courseModal: document.getElementById('courseModal'),
            noteModal: document.getElementById('noteModal'),
            courseForm: document.getElementById('courseForm'),
            noteForm: document.getElementById('noteForm'),
            dateDisplay: document.getElementById('dateDisplay'),
            courseId: document.getElementById('courseId'),
            courseName: document.getElementById('courseName'),
            courseCode: document.getElementById('courseCode'),
            courseLecturer: document.getElementById('courseLecturer'),
            noteId: document.getElementById('noteId'),
            noteCourseId: document.getElementById('noteCourseId'),
            noteTitle: document.getElementById('noteTitle'),
            noteContent: document.getElementById('noteContent'),
            noteDate: document.getElementById('noteDate'),
            modalCourseTitle: document.getElementById('modalCourseTitle'),
            modalNoteTitle: document.getElementById('modalNoteTitle')
        };
        this.closeButtons = document.querySelectorAll('.close');
    }

    initEventListeners() {
        this.el.addCourseBtn.addEventListener('click', () => this.openCourseModal());
        this.el.courseForm.addEventListener('submit', (e) => this.handleCourseFormSubmit(e));

        this.el.addNoteBtn.addEventListener('click', () => this.openNoteModal());
        this.el.noteForm.addEventListener('submit', (e) => this.handleNoteFormSubmit(e));

        this.closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.el.courseModal.style.display = 'none';
                this.el.noteModal.style.display = 'none';
            });
        });

        window.addEventListener('click', (e) => {
            if (e.target === this.el.courseModal) this.el.courseModal.style.display = 'none';
            if (e.target === this.el.noteModal) this.el.noteModal.style.display = 'none';
        });
    }

    updateDate = () => {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.el.dateDisplay.textContent = now.toLocaleDateString('id-ID', options);
    }

    saveData = () => {
        localStorage.setItem('collegeNotesApp', JSON.stringify({
            courses: this.courses,
            selectedCourseId: this.selectedCourseId
        }));
    }

    loadData = () => {
        const data = localStorage.getItem('collegeNotesApp');
        if (data) {
            const parsed = JSON.parse(data);
            this.courses = parsed.courses.map(c => {
                const course = new Course(c.id, c.name, c.code, c.lecturer);
                course.notes = c.notes.map(n => new Note(n.id, n.courseId, n.title, n.content, n.date));
                return course;
            });
            this.selectedCourseId = parsed.selectedCourseId;
        }
    }

    renderCourses = () => {
        this.el.courseList.innerHTML = '';

        if (this.courses.length === 0) {
            this.el.courseList.innerHTML = '<li class="empty">Belum ada mata kuliah</li>';
            return;
        }

        this.courses.forEach(course => {
            const li = document.createElement('li');
            li.className = this.selectedCourseId === course.id ? 'active' : '';
            li.innerHTML = `
                <span>${course.name}</span>
                <div class="course-actions">
                    <button class="btn btn-sm btn-warning edit-course" data-id="${course.id}"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger delete-course" data-id="${course.id}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            li.addEventListener('click', () => this.selectCourse(course.id));

            li.querySelector('.edit-course').addEventListener('click', (e) => {
                e.stopPropagation();
                this.openCourseModal(course.id);
            });
            li.querySelector('.delete-course').addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteCourse(course.id);
            });

            this.el.courseList.appendChild(li);
        });
    }

    renderNotes = () => {
        this.el.notesContainer.innerHTML = '';

        if (!this.selectedCourseId) {
            this.el.notesContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-clipboard-list"></i>
                    <p>Pilih mata kuliah untuk melihat catatan atau tambahkan catatan baru</p>
                </div>`;
            return;
        }

        const course = this.courses.find(c => c.id === this.selectedCourseId);
        if (!course) return;

        this.el.selectedCourseTitle.textContent = course.name;
        this.el.addNoteBtn.disabled = false;

        if (course.notes.length === 0) {
            this.el.notesContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-sticky-note"></i>
                    <p>Tidak ada catatan untuk mata kuliah ini</p>
                </div>`;
            return;
        }

        course.notes.sort((a, b) => new Date(b.date) - new Date(a.date));

        course.notes.forEach(note => {
            const noteDate = new Date(note.date);
            const formattedDate = noteDate.toLocaleDateString('id-ID', {
                day: 'numeric', month: 'long', year: 'numeric'
            });

            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            noteCard.innerHTML = `
                <h3>${note.title}</h3>
                <div class="note-date">${formattedDate}</div>
                <div class="note-content">${note.content}</div>
                <div class="note-actions">
                    <button class="btn btn-sm btn-warning edit-note" data-id="${note.id}"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-sm btn-danger delete-note" data-id="${note.id}"><i class="fas fa-trash"></i> Hapus</button>
                </div>
            `;

            noteCard.querySelector('.edit-note').addEventListener('click', () => {
                this.openNoteModal(note.id);
            });
            noteCard.querySelector('.delete-note').addEventListener('click', () => {
                this.deleteNote(note.id);
            });

            this.el.notesContainer.appendChild(noteCard);
        });
    }

    selectCourse = (courseId) => {
        this.selectedCourseId = courseId;
        this.saveData();
        this.renderCourses();
        this.renderNotes();
    }

    openCourseModal = (courseId = null) => {
        this.el.courseForm.reset();
        if (courseId) {
            const course = this.courses.find(c => c.id === courseId);
            if (course) {
                this.el.modalCourseTitle.textContent = 'Edit Mata Kuliah';
                this.el.courseId.value = course.id;
                this.el.courseName.value = course.name;
                this.el.courseCode.value = course.code;
                this.el.courseLecturer.value = course.lecturer;
            }
        } else {
            this.el.modalCourseTitle.textContent = 'Tambah Mata Kuliah';
            this.el.courseId.value = '';
        }
        this.el.courseModal.style.display = 'block';
    }

    openNoteModal = (noteId = null) => {
        this.el.noteForm.reset();
        this.el.noteDate.valueAsDate = new Date();

        if (noteId) {
            const note = this.getNoteById(noteId);
            if (note) {
                this.el.modalNoteTitle.textContent = 'Edit Catatan';
                this.el.noteId.value = note.id;
                this.el.noteCourseId.value = note.courseId;
                this.el.noteTitle.value = note.title;
                this.el.noteContent.value = note.content;
                this.el.noteDate.valueAsDate = new Date(note.date);
            }
        } else {
            this.el.modalNoteTitle.textContent = 'Tambah Catatan';
            this.el.noteId.value = '';
            this.el.noteCourseId.value = this.selectedCourseId;
        }
        this.el.noteModal.style.display = 'block';
    }

    handleCourseFormSubmit = (e) => {
        e.preventDefault();
        const id = this.el.courseId.value || this.generateId();
        const name = this.el.courseName.value.trim();
        const code = this.el.courseCode.value.trim();
        const lecturer = this.el.courseLecturer.value.trim();

        if (!name) {
            alert('Nama mata kuliah harus diisi');
            return;
        }

        if (this.el.courseId.value) {
            const course = this.courses.find(c => c.id === id);
            if (course) {
                course.name = name;
                course.code = code;
                course.lecturer = lecturer;
            }
        } else {
            this.courses.push(new Course(id, name, code, lecturer));
        }

        this.saveData();
        this.renderCourses();
        this.el.courseModal.style.display = 'none';

        if (!this.el.courseId.value) this.selectCourse(id);
    }

    handleNoteFormSubmit = (e) => {
        e.preventDefault();
        const id = this.el.noteId.value || this.generateId();
        const courseId = this.el.noteCourseId.value;
        const title = this.el.noteTitle.value.trim();
        const content = this.el.noteContent.value.trim();
        const date = this.el.noteDate.value;

        if (!title || !content) {
            alert('Judul dan isi catatan harus diisi');
            return;
        }

        const course = this.courses.find(c => c.id === courseId);
        if (!course) return;

        if (this.el.noteId.value) {
            const note = course.notes.find(n => n.id === id);
            if (note) {
                note.title = title;
                note.content = content;
                note.date = new Date(date);
            }
        } else {
            course.notes.push(new Note(id, courseId, title, content, date));
        }

        this.saveData();
        this.renderNotes();
        this.el.noteModal.style.display = 'none';
    }

    deleteCourse = (courseId) => {
        if (confirm('Yakin ingin menghapus mata kuliah ini?')) {
            this.courses = this.courses.filter(c => c.id !== courseId);
            if (this.selectedCourseId === courseId) this.selectedCourseId = null;
            this.saveData();
            this.renderCourses();
            this.renderNotes();
        }
    }

    deleteNote = (noteId) => {
        const course = this.courses.find(c => c.id === this.selectedCourseId);
        if (course) {
            course.deleteNote(noteId);
            this.saveData();
            this.renderNotes();
        }
    }

    getNoteById = (noteId) => {
        for (const course of this.courses) {
            const note = course.notes.find(n => n.id === noteId);
            if (note) return note;
        }
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CollegeNotesApp();
});