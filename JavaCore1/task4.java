interface AccountService {

    Account findAccountByOwnerId(long id);

    long countAccountsWithBalanceGreaterThan(long value);
}

class Account {

  private long id;
  private long balance;
  private User owner;

  public Account(long id, long balance, User owner) {
      this.id = id;
      this.balance = balance;
      this.owner = owner;
  }

  public void setId(long id) {
      this.id = id;
  }

  public void setBalance(long balance) {
      this.balance = balance;
  }
  
  public void setOwner(User owner) {
      this.owner = owner;
  }

  public long getId() {
      return id;
  }

  public long getBalance() {
      return balance;
  }

  public User getOwner() {
      return owner;
  }

}

class User {

    private long id;
    private String firstName;
    private String lastName;

    public User(long id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}

public class task4 implements AccountService {
    private Account[] accounts;

    public task4(Account[] accounts) {
        this.accounts = accounts;
    }

    @Override
    public Account findAccountByOwnerId(long id) {
        for (Account account : accounts) {
            if (account != null && account.getOwner().getId() == id) {
                System.out.println("Es un usuario duplicado");
                return account;
            }
        }
        return null;
    }

    public Account[] getAccounts() {
        return accounts;
    }

    @Override
    public long countAccountsWithBalanceGreaterThan(long value) {
        int count = 0;
        for (Account account : accounts) {
            if (account != null && account.getBalance() > value) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        User user1 = new User(1, "John", "Doe");
        User user2 = new User(2, "Jane", "Smith");
        User user3 = new User(3, "Bob", "Johnson");
        Account account1 = new Account(1, 999, user1);
        Account account2 = new Account(2, 2001, user2);
        Account account3 = new Account(3, 1500, user3);
        Account[] accounts = { account1, account2, account3 };
        task4 accountService = new task4(accounts);

        System.out.println("Account with owner ID 1: " + accountService.findAccountByOwnerId(1));
        System.err.println("Account with owner ID 3: " + accountService.findAccountByOwnerId(3));
        System.out.println("Number of accounts with balance greater than 1000: "
                + accountService.countAccountsWithBalanceGreaterThan(1000));
        System.out.println("Number of accounts with balance greater than 2000: "
                + accountService.countAccountsWithBalanceGreaterThan(2000));
    }
}












