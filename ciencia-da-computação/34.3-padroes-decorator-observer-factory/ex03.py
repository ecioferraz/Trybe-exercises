from abc import ABC, abstractmethod


class System(ABC):
    @abstractmethod
    def __init__(self, has_access=False):
        pass

    def give_access(self, has_access):
        pass


class SupportSystem(System):
    def __init__(self, has_access=False):
        self.name = "Support"
        self.give_access(has_access)

    def give_access(self, has_access):
        self.has_access = has_access


class SalesSystem(System):
    def __init__(self, has_access=False):
        self.name = "Sales"
        self.give_access(has_access)

    def give_access(self, has_access):
        self.has_access = has_access


class FinancesSystem(System):
    def __init__(self, has_access=False):
        self.name = "Finances"
        self.give_access(has_access)

    def give_access(self, has_access):
        self.has_access = has_access


class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.accesses = []
        self.create_account()

    @abstractmethod
    def create_account():
        pass

    def show_accesses(self):
        return [access.name for access in self.accesses]

    def add_accesses(self, access):
        self.accesses.append(access)


class SupportAccount(Account):
    def create_account(self):
        self.add_accesses(SupportSystem(True))


class SalesSupportAccount(Account):
    def create_account(self):
        self.add_accesses(SupportSystem(True))
        self.add_accesses(SalesSystem(True))


class ManagerAccount(Account):
    def create_account(self):
        self.add_accesses(SupportSystem(True))
        self.add_accesses(SalesSystem(True))
        self.add_accesses(FinancesSystem(True))


if __name__ == "__main__":
    name = input("Qual o nome da pessoa que deseja criar? ")
    account_type = input(
      "Escolha qual código do perfil que deseja criar:"
      + "\n1. Suporte\n2. Vendas & Suporte\n3. Gerência\n"
      )
    if account_type == "1":
        account = SupportAccount(name)
    elif account_type == "2":
        account = SalesSupportAccount(name)
    elif account_type == "3":
        account = ManagerAccount(name)

    print(f"\nCriando a conta para {account.username}.")
    print(f"\nAcesso liberado para os sistemas: {account.show_accesses()}.")
