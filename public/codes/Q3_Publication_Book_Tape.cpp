/*
PRACTICAL Q3: PUBLICATION, BOOK AND TAPE USING HIERARCHICAL INHERITANCE AND EXCEPTION HANDLING

ALGORITHM:
1. Start the program.
2. Define base class Publication with data members title (string) and price (float).
3. In Publication, provide a default constructor to initialize title to "" and price to 0.0.
4. Derive class Book from Publication, adding page_count (int).
   - In Book::getData(), prompt for title, price, and page count.
   - If price <= 0 or page_count <= 0, throw an exception.
   - If an exception occurs, catch it and reset title to "", price to 0.0, and page_count to 0.
   - In Book::displayData(), display title, price, and page count.
5. Derive class Tape from Publication, adding playing_time (float).
   - In Tape::getData(), prompt for title, price, and playing time (in minutes).
   - If price <= 0 or playing_time <= 0, throw an exception.
   - If an exception occurs, catch it and reset title to "", price to 0.0, and playing_time to 0.0.
   - In Tape::displayData(), display title, price, and playing time.
6. In main():
   - Create an instance of Book and an instance of Tape.
   - Read data and display data for Book.
   - Read data and display data for Tape.
7. Stop.
*/

#include <iostream>
#include <string>
using namespace std;

class Publication
{
protected:
    string title;
    float price;

public:
    Publication()
    {
        title = "";
        price = 0.0f;
    }

    void getData()
    {
        cout << "Enter title: ";
        cin >> title;
        cout << "Enter price: ";
        cin >> price;
    }

    void displayData() const
    {
        cout << "Title: " << title << "\nPrice: Rs. " << price << endl;
    }
};

class Book : public Publication
{
    int page_count;

public:
    Book()
    {
        page_count = 0;
    }

    void getData()
    {
        try
        {
            Publication::getData();
            cout << "Enter page count: ";
            cin >> page_count;

            if (price <= 0 || page_count <= 0)
            {
                throw "Invalid book data! Price and page count must be positive.";
            }
        }
        catch (const char* msg)
        {
            cout << "\nException caught: " << msg << "\nResetting all book values to zero.\n";
            title = "";
            price = 0.0f;
            page_count = 0;
        }
    }

    void displayData() const
    {
        cout << "\n--- Book Details ---\n";
        Publication::displayData();
        cout << "Page Count: " << page_count << endl;
    }
};

class Tape : public Publication
{
    float playing_time;

public:
    Tape()
    {
        playing_time = 0.0f;
    }

    void getData()
    {
        try
        {
            Publication::getData();
            cout << "Enter playing time (minutes): ";
            cin >> playing_time;

            if (price <= 0 || playing_time <= 0.0f)
            {
                throw "Invalid tape data! Price and playing time must be positive.";
            }
        }
        catch (const char* msg)
        {
            cout << "\nException caught: " << msg << "\nResetting all tape values to zero.\n";
            title = "";
            price = 0.0f;
            playing_time = 0.0f;
        }
    }

    void displayData() const
    {
        cout << "\n--- Tape Details ---\n";
        Publication::displayData();
        cout << "Playing Time: " << playing_time << " mins" << endl;
    }
};

int main()
{
    Book b;
    Tape t;

    cout << "=== Enter Book Details ===\n";
    b.getData();
    b.displayData();

    cout << "\n=== Enter Tape Details ===\n";
    t.getData();
    t.displayData();

    return 0;
}
