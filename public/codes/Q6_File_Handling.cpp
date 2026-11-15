/*
PRACTICAL Q6: FILE HANDLING USING STREAM CLASSES

ALGORITHM:
1. Start the program.
2. Declare an ofstream object named 'fout'.
3. Open output file "student.txt" using fout.open("student.txt").
4. Verify if file opened successfully with fout.is_open(). If not, print error and terminate.
5. Write student records (Name, Roll No, Division) to the file using stream insertion operator (<<).
6. Close the output file using fout.close().
7. Declare an ifstream object named 'fin' and a string variable 'line'.
8. Open the same file for input using fin.open("student.txt").
9. Verify if file opened successfully with fin.is_open(). If not, print error and terminate.
10. Read the file line by line using while(getline(fin, line)) and print each line to the console.
11. Close the input file using fin.close().
12. Stop.
*/

#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    ofstream fout;
    
    fout.open("student.txt");

    if (!fout.is_open())
    {
        cout << "File cannot be opened" << endl;
        return 0;
    }

    fout << "Name: Rohit Sharma" << endl;
    fout << "Roll No: 45" << endl;
    fout << "Division: A" << endl;

    fout.close();

    ifstream fin;
    string line;

    fin.open("student.txt");

    if (!fin.is_open())
    {
        cout << "File cannot be opened" << endl;
        return 0;
    }

    while (getline(fin, line))
    {
        cout << line << endl;
    }

    fin.close();

    return 0;
}
