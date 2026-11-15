/*
PRACTICAL Q10: REAL-TIME ATM APPLICATION SIMULATION WITH EXCEPTION HANDLING

ALGORITHM:
1. Start the program.
2. Define class ATM with private float attribute 'balance'.
3. In ATM constructor, initialize balance = 5000.
4. Implement checkBalance(): display current balance.
5. Implement deposit():
      - Read amount from user.
      - In try block: if amount <= 0, throw "Invalid deposit amount".
      - Otherwise, balance = balance + amount; display success and new balance.
      - In catch block (const char* error): display "Exception: " << error.
6. Implement withdraw():
      - Read amount from user.
      - In try block:
            a. If amount <= 0, throw "Invalid withdrawal amount".
            b. If amount > balance, throw "Insufficient balance".
            c. Otherwise, balance = balance - amount; display success and new balance.
      - In catch block (const char* error): display "Exception: " << error.
7. In main():
      - Instantiate ATM atm.
      - Execute interactive do-while menu loop:
            1: Check Balance
            2: Deposit Money
            3: Withdraw Money
            4: Exit
      - Continue loop after handling any exceptions until choice 4 is selected.
8. Stop.
*/

#include <iostream>
using namespace std;

class ATM
{
    float balance;

public:
    ATM()
    {
        balance = 5000;
    }

    void checkBalance()
    {
        cout << "Balance = Rs. " << balance << endl;
    }

    void deposit()
    {
        float amount;
        cout << "Enter deposit amount: ";
        cin >> amount;

        try
        {
            if (amount <= 0)
                throw "Invalid deposit amount";

            balance = balance + amount;
            cout << "Amount deposited successfully." << endl;
            cout << "Balance = Rs. " << balance << endl;
        }
        catch (const char* error)
        {
            cout << "Exception: " << error << endl;
        }
    }

    void withdraw()
    {
        float amount;
        cout << "Enter withdrawal amount: ";
        cin >> amount;

        try
        {
            if (amount <= 0)
                throw "Invalid withdrawal amount";

            if (amount > balance)
                throw "Insufficient balance";

            balance = balance - amount;
            cout << "Amount withdrawn successfully." << endl;
            cout << "Balance = Rs. " << balance << endl;
        }
        catch (const char* error)
        {
            cout << "Exception: " << error << endl;
        }
    }
};

int main()
{
    ATM atm;
    int choice;

    do
    {
        cout << "\n----- ATM MENU -----" << endl;
        cout << "1. Check Balance" << endl;
        cout << "2. Deposit Money" << endl;
        cout << "3. Withdraw Money" << endl;
        cout << "4. Exit" << endl;

        cout << "Enter your choice: ";
        cin >> choice;

        if (choice == 1)
            atm.checkBalance();
        else if (choice == 2)
            atm.deposit();
        else if (choice == 3)
            atm.withdraw();
        else if (choice == 4)
            cout << "Thank you for using ATM." << endl;
        else
            cout << "Invalid choice." << endl;

    } while (choice != 4);

    return 0;
}
