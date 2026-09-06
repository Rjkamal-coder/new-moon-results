/**
 * ============================================
 * NEW MOON Community High School
 * Student Database
 * ============================================
 * 
 * Structure:
 * - name: Student full name
 * - roll: Roll number (string for safe comparison)
 * - registration: Registration number (string)
 * - grade: Grade level (e.g., "Grade-12")
 * - academicYear: Academic year (e.g., "2025-2026")
 * - photo: Path to student photo (leave empty "" for placeholder)
 * - marks: Object containing subject-wise marks
 * 
 * To add more students, simply append a new object to the array.
 */

const students = [
    {
        name: "Abdullah",
        roll: "1",
        registration: "100",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: "Images/Abdullah.jpg",
        marks: {
            Burmese: 55,
            English: 62,
            Mathematics: 82,
            Chemistry: 87,
            Physics: 85,
            Biology: 90
        }
    },
    {
        name: "Mohammed Ayaz",
        roll: "2",
        registration: "101",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: "Images/Ayaz.jpg",
        marks: {
            Burmese: 60,
            English: 95,
            Mathematics: 55,
            Chemistry: 70,
            Physics: 65,
            Biology: 59
        }
    },
  {
        name: "Mohammed Rafique",
        roll: "4",
        registration: "174",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: "Images/rjrafique.jpg",
        marks: {
            Burmese: 63,
            English: 73,
            Mathematics: 92,
            Chemistry: 78,
            Physics: 82,
            Biology: 80
        }
  },
  {
        name: "Yaser Arfat",
        roll: "5",
        registration: "102",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: "Images/Yaserarfat.jpg",
        marks: {
            Burmese: 61,
            English: 78,
            Mathematics: 68,
            Chemistry: 86,
            Physics: 89,
            Biology: 93
        }
  },
  {
        name: "Atis Sabak",
        roll: "6",
        registration: "103",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: "Images/Sabak.jpg",
        marks: {
            Burmese: 61,
            English: 79,
            Mathematics: 84,
            Chemistry: 90,
            Physics: 71,
            Biology: 80
        }
  },
  {
        name: "Mohammed Sadek",
        roll: "9",
        registration: "104",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: "Images/Sadek.jpg",
        marks: {
            Burmese: 58,
            English: 78,
            Mathematics: 62,
            Chemistry: 70,
            Physics: 72,
            Biology: 83
        }
  },
  {
        name: "Itiss",
        roll: "10",
        registration: "105",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: "Images/Itiss.jpg",
        marks: {
            Burmese: 77,
            English: 83,
            Mathematics: 58,
            Chemistry: 68,
            Physics: 72,
            Biology: 86
        }
  },
  {
        name: "Mohammed Jashim",
        roll: "13",
        registration: "106",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 63,
            English: 84,
            Mathematics: 62,
            Chemistry: 78,
            Physics: 82,
            Biology: 60
        }
  },
  {
        name: "Mohammed Ismail",
        roll: "14",
        registration: "107",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 58,
            English: 88,
            Mathematics: 69,
            Chemistry: 84,
            Physics: 72,
            Biology: 80
        }
  },
  {
        name: "Mohammed Rezuan",
        roll: "15",
        registration: "108",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 63,
            English: 53,
            Mathematics: 42,
            Chemistry: 68,
            Physics: 62,
            Biology: 59
        }
  },
  {
        name: " Noor Islam",
        roll: "18",
        registration: "109",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 63,
            English: 75,
            Mathematics: 79,
            Chemistry: 80,
            Physics: 83,
            Biology: 85
        }
  },
  {
        name: "Mohammed Junaid",
        roll: "19",
        registration: "110",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 61,
            English: 75,
            Mathematics: 72,
            Chemistry: 78,
            Physics: 82,
            Biology: 85
        }
  },
  {
        name: "Hafizur Rahman",
        roll: "22",
        registration: "111",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 66,
            English: 74,
            Mathematics: 72,
            Chemistry: 81,
            Physics: 89,
            Biology: 79
        }
  },
  {
        name: "Zawbi Ullah",
        roll: "24",
        registration: "112",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 63,
            English: 76,
            Mathematics: 68,
            Chemistry: 84,
            Physics: 72,
            Biology: 80
        }
  },
  {
        name: "Yasin Arfat",
        roll: "25",
        registration: "113",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 53,
            English: 64,
            Mathematics: 49,
            Chemistry: 58,
            Physics: 62,
            Biology: 70
        }
  },
  {
        name: "Mohammed Shafiq",
        roll: "26",
        registration: "114",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 66,
            English: 79,
            Mathematics: 90,
            Chemistry: 82,
            Physics: 79,
            Biology: 80
        }
  },
  {
        name: "Azim Ullah",
        roll: "28",
        registration: "115",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 59,
            English: 67,
            Mathematics: 52,
            Chemistry: 78,
            Physics: 76,
            Biology: 82
        }
  },
  {
        name: "Soyod Husson",
        roll: "29",
        registration: "116",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 53,
            English: 63,
            Mathematics: 48,
            Chemistry: 68,
            Physics: 62,
            Biology: 76
        }
  },
  {
        name: "Ziya Uddhin",
        roll: "30",
        registration: "117",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 69,
            English: 74,
            Mathematics: 62,
            Chemistry: 68,
            Physics: 59,
            Biology: 70
        }
  },
  {
        name: "Sayedul Islam",
        roll: "34",
        registration: "118",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 53,
            English: 81,
            Mathematics: 62,
            Chemistry: 78,
            Physics: 80,
            Biology: 78
        }
  },
  {
        name: "Tahsinur Rahman",
        roll: "35",
        registration: "119",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 74,
            English: 63,
            Mathematics: 58,
            Chemistry: 78,
            Physics: 72,
            Biology: 60
        }
  },
  {
        name: "Hadayet Ullah",
        roll: "36",
        registration: "120",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 53,
            English: 63,
            Mathematics: 41,
            Chemistry: 68,
            Physics: 52,
            Biology: 60
        }
  },
  {
        name: "Sayedul Islam",
        roll: "39",
        registration: "121",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 58,
            English: 74,
            Mathematics: 52,
            Chemistry: 70,
            Physics: 62,
            Biology: 73
        }
  },
  {
        name: "Mohammed Rahim",
        roll: "40",
        registration: "122",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 49,
            English: 63,
            Mathematics: 42,
            Chemistry: 58,
            Physics: 70,
            Biology: 69
        }
  },
  {
        name: "Mohammed Karim",
        roll: "42",
        registration: "123",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 55,
            English: 60,
            Mathematics: 44,
            Chemistry: 68,
            Physics: 56,
            Biology: 64
        }
  },
  {
        name: "Ata Ullah",
        roll: "43",
        registration: "124",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 43,
            English: 51,
            Mathematics: 40,
            Chemistry: 57,
            Physics: 62,
            Biology: 50
        }
  },
  {
        name: "Omor Soyod",
        roll: "45",
        registration: "125",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 49,
            English: 66,
            Mathematics: 46,
            Chemistry: 58,
            Physics: 62,
            Biology: 53
        }
  },
  {
        name: "Sanam Ullah",
        roll: "48",
        registration: "126",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 67,
            English: 74,
            Mathematics: 83,
            Chemistry: 88,
            Physics: 71,
            Biology: 86
        }
  },
  {
        name: "Arif Ullah",
        roll: "51",
        registration: "127",
        grade: "Grade-12",
        academicYear: "2025-2026",
        photo: " ",
        marks: {
            Burmese: 59,
            English: 64,
            Mathematics: 52,
            Chemistry: 61,
            Physics: 67,
            Biology: 70
        }
  }
];

/**
 * Distinction Rules Configuration
 * Define the minimum marks required for each subject to earn a distinction.
 * These rules are used to automatically calculate distinction badges.
 */
const distinctionRules = {
    Burmese: 75,
    English: 75,
    Biology: 75,
    Mathematics: 80,
    Chemistry: 80,
    Physics: 80
};

/**
 * Subject list for consistent ordering in tables and displays.
 */
const subjectsList = [
    "Burmese",
    "English",
    "Mathematics",
    "Chemistry",
    "Physics",
    "Biology"
];
