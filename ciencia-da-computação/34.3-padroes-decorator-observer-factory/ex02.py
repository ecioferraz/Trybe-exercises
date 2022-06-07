from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotinas(self, rotina):
        self.__rotinas.append(rotina)

    def acionar_rotinas(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("ALARME!!!")
        self.acionar_rotinas()


class Rotina(ABC):
    @abstractmethod
    def acionar(self):
        pass


class AcenderLuzes(Rotina):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Acendendo as luzes")


class PrepararCafé(Rotina):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Preparando o café")


class LigarComputador(Rotina):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Ligando o computador")


if __name__ == "__main__":
    alarme = Alarme()
    AcenderLuzes(alarme)
    PrepararCafé(alarme)
    LigarComputador(alarme)

    alarme.despertar()
