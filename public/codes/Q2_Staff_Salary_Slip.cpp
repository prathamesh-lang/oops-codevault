/*
PRACTICAL Q2: STAFF MANAGEMENT AND SALARY SLIP CALCULATION

ALGORITHM:
1. Start the program.
2. Define class Staff with data members: Name, Id, Bs (Basic Salary), Da, Hra, It, Ns (Net Salary).
3. In Accept(), prompt user for Name, Id, and Basic Salary (Bs).
4. In Salary(), calculate:
      DA  = 25% of Bs (Bs * 0.25)
      HRA = 800
      IT  = 15% of Bs (Bs * 0.15)
      Net Salary = Bs + DA + HRA - IT
5. In Display(), print the staff record in a formatted table row using setw().
6. In main(), read number of records n and create an array of Staff objects.
7. Accept details for all n staff members and display the payslips before sorting.
8. Sort the array of records alphabetically by Name using Bubble Sort.
9. Display the payslips after sorting.
10. Stop.
*/

#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

class Staff
{
private:
    string Id;
    float Bs, Da, Hra, It, Ns;

public:
    string Name;

    void Accept()
    {
        cout << "===== Enter Details =====\n\n";
        cout << "Enter Name: ";
        cin >> Name;
        cout << "Enter Id: ";
        cin >> Id;
        cout << "Enter Bs: ";
        cin >> Bs;
        cout << endl;

        Salary();
    }

    void Salary()
    {
        Da = Bs * 0.25f;
        Hra = 800;
        It = Bs * 0.15f;
        Ns = Bs + Da + Hra - It;
    }

    void Display()
    {
        cout << "| ";
        cout << left 
             << setw(12) << Name << " | "
             << setw(8)  << Id << " | "
             << setw(10) << Bs << " | "
             << setw(10) << Da << " | "
             << setw(10) << Hra << " | "
             << setw(10) << It << " | "
             << setw(10) << Ns << " | " << endl;
    }
};

int main()
{
    int n, i, j;
    cout << "Enter No. of Data: ";
    cin >> n;
    cout << endl;

    Staff Ob[n], temp;

    for (i = 0; i < n; i++)
    {
        Ob[i].Accept();
    }

    cout << "===== Before Sorting Staff Slip =====\n\n";
    cout << "| ";
    cout << left 
         << setw(12) << "Name" << " | "
         << setw(8)  << "ID" << " | "
         << setw(10) << "Basic" << " | "
         << setw(10) << "DA" << " | "
         << setw(10) << "HRA" << " | "
         << setw(10) << "IT" << " | "
         << setw(10) << "Net Sal" << " | " << endl;

    for (i = 0; i < n; i++)
    {
        Ob[i].Display();
    }

    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - i - 1; j++)
        {
            if (Ob[j].Name > Ob[j + 1].Name)
            {
                temp = Ob[j + 1];
                Ob[j + 1] = Ob[j];
                Ob[j] = temp;
            }
        }
    }

    cout << "\n===== After Sorting Staff Slip =====\n\n";
    cout << "| ";
    cout << left 
         << setw(12) << "Name" << " | "
         << setw(8)  << "ID" << " | "
         << setw(10) << "Basic" << " | "
         << setw(10) << "DA" << " | "
         << setw(10) << "HRA" << " | "
         << setw(10) << "IT" << " | "
         << setw(10) << "Net Sal" << " | " << endl;

    for (i = 0; i < n; i++)
    {
        Ob[i].Display();
    }

    return 0;
}
