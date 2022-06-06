from typing import Iterator

from ex02 import Baralho


class BaralhoInversoIterador(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = -1

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos -= 1
            return carta


class BaralhoInverso(Baralho):
    def __iter__(self):
        return BaralhoInversoIterador(self._cartas)
