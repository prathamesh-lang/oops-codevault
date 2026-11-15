/*
PRACTICAL Q8: GENERIC LIBRARY MANAGEMENT SYSTEM USING CLASS TEMPLATES

ALGORITHM:
1. Start the program.
2. Define template class Library: template <class T> class Library.
3. In Library, declare:
      - Generic array items[10] of type T to hold collection elements.
      - Integer count to track current item count, initialized to 0 in constructor.
4. Define member function addItem(T item):
      - Store item at items[count].
      - Increment count.
5. Define member function displayItems():
      - Loop from i = 0 to count - 1.
      - Output each items[i] to the console.
6. In main():
      - Instantiate Library<string> for books.
      - Add book titles using books.addItem(...).
      - Display books via books.displayItems().
      - Instantiate Library<string> for magazines.
      - Add magazine titles using magazines.addItem(...).
      - Display magazines via magazines.displayItems().
7. Stop.
*/

#include <iostream>
#include <string>
using namespace std;

template <class T>
class Library {
    T items[10];
    int count;

public:
    Library() {
        count = 0;
    }

    void addItem(T item) {
        items[count] = item;
        count++;
    }

    void displayItems() {
        for (int i = 0; i < count; i++) {
            cout << items[i] << endl;
        }
    }
};

int main() {
    Library<string> books;

    books.addItem("C++ Programming");
    books.addItem("Data Structures");
    books.addItem("Object Oriented Programming");

    cout << "Books in Library:" << endl;
    books.displayItems();

    Library<string> magazines;

    magazines.addItem("Science Today");
    magazines.addItem("Technology World");

    cout << "\nMagazines in Library:" << endl;
    magazines.displayItems();

    return 0;
}
