import statistics


class Estatistica:
    @classmethod
    def media(cls, numbers):
        return statistics.mean(numbers)

    @classmethod
    def mediana(cls, numbers):
        return statistics.median(numbers)

    @classmethod
    def moda(cls, numbers):
        return statistics.mode(numbers)

